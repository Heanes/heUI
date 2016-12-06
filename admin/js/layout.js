/**
 * @doc 框架脚本
 * @author Heanes
 * @time 2016-11-29 10:16:42 周二
 */
$(function () {
    /**
     * @doc 左侧菜单点击在tab中载入
     * @author Heanes
     * @time 2016-11-29 20:20:57 周二
     */
    var $tabsContainer = $('#tabsContainer');
    $tabsContainer.jqxTabs({
        theme: 'bootstrap',
        height: '100%',
        autoHeight: true,
        showCloseButtons: true,
        reorder: true,
        scrollPosition: 'both' // 标签太多时允许滚动
    }).jqxTabs('hideCloseButtonAt', 0); //隐藏首页删除按钮

    var $tabsTitleContainer = $('#tabsTitleContainer');
    var tabsLength = $tabsTitleContainer.length;
    var tabsAddCount = 0;
    // tab关闭后处理
    $tabsContainer.on('removed', function (event) {
        tabsAddCount--;
    });


    $('.menu-left-block').on('click', '.menu-left-group li a.menu-link', function () {
        var addResult = addJqxTabFromANode($(this), $tabsContainer, tabsLength + tabsAddCount);
        addResult ? tabsAddCount++ : null;
        return false;
    })
    .on('click', '.menu-left-group li a.menu-parent', function () {
        // 带子菜单的节点均不跳转链接
        return false;
    });


    /**
     * @doc a标签点击后添加新的tab
     * @param $aNode a标签jQuery对象
     * @param $tabsContainer tab放置的容器
     * @param index 序号
     * @returns {boolean}
     */
    function addJqxTabFromANode($aNode, $tabsContainer, index){
        var tabTitle = $aNode.html();
        var tabSrc = $aNode.attr('href');
        if(tabSrc == undefined || tabSrc == '' || tabSrc == 'javascript:;' || tabSrc == 'javascript:;' || tabSrc == 'javascript:void(0)'){
            return false;
        }
        var tabId = 'tabsIframe' + $aNode.attr('data-id');
        // 查找是否已经存在此tab
        var $existTabs = $tabsContainer.find('iframe[id="' + tabId + '"]');
        if($existTabs.length > 0){
            // 存在则定位
            var existIndex = $existTabs.parent().index();
            $tabsContainer.jqxTabs('select', existIndex);
            return false;
        }
        // 否则创建
        var tabContent = '<iframe src="' + tabSrc + '" id="' + tabId + '"></iframe>';
        $tabsContainer.jqxTabs('addAt', index, tabTitle, tabContent);
        return true;
    }


    /**
     * @doc 左侧菜单缩进
     * @author Heanes
     * @time 2016年08月19日11:59:48
     */
    var $leftBlock = $('.left-block');
    var $menuLeftBlock = $leftBlock.find('.menu-left-block');
    var lapHandleClick = false;
    $('.left-menu-lap-handle').on('click', function () {
        if(lapHandleClick){
            //$menuLeftFamily.removeClass('lapped');
            //$('.menu-left-family .menu-left-group > li > a .menu-lap,.menu-left-family .menu-left-group > li > a .menu-text').fadeIn();
            $menuLeftBlock.removeClass('lapped');
            $('.menu-left-family .menu-left-group > li > a .menu-lap').fadeIn();
            $('.center-block').animate({
                'padding-left': '220px'
            });
            $leftBlock.animate({
                'width': '220px'
            });
            lapHandleClick = false;
        }else{
            $menuLeftBlock.addClass('lapped');
            //$menuLeftFamily.addClass('lapped');
            // 菜单相关隐藏
            //$('.menu-left-family .menu-left-group > li > a .menu-lap,.menu-left-family .menu-left-group > li > a .menu-text').fadeOut();
            $('.menu-left-family .menu-left-group > li > a .menu-lap').fadeOut();
            $('.center-block').animate({
                'padding-left': '30px'
            });
            $leftBlock.animate({
                'width': '30px'
            });
            lapHandleClick = true;
        }
    });


    /**
     * @doc 获取节点是否是展开状态
     * @param menuData
     * @returns {boolean}
     * @author Heanes
     * @time 2016-11-29 20:32:28 周二
     */
    var getIsExpanded = function (menuData) {
        return menuData.state != undefined ?
            (menuData.state.expanded != undefined && menuData.state.expanded) : false;
    };
    
    var renderTop = function (menuData, level, $target) {
        var $menuTop = $('.menu-top').empty();
        var $topMenuUl = $('<ul class="menu-list" id="menuTopUl">');
        $.each(menuData, function (i, item) {
            var $topLi = $('<li><a href="javascript:;">' + item.text + '</a></li>');
            $topMenuUl.append($topLi);
        });
        $menuTop.append($topMenuUl);
    };
    
    /**
     * @doc 渲染左侧菜单
     * @param $target 目标
     * @param menuData 菜单数据
     * @param level 层级
     * @author Heanes
     * @time 2016-11-29 16:49:23 周二
     */
    var renderMenu = function ($target, menuData, level) {
        var template = '';
        var expandedStyle = '';
        level = level || 1;
        level++;
        if(level == 1){
            renderTop(menuData, level);
            renderMenu($target, menuData.subNodes, level);
        }

        if(level == 2){
            template += '<div class="menu-left-family">';
        }else{
            expandedStyle = getIsExpanded(menuData) ? '' : 'close';
        }

        template += '<ul class="menu-left-group ' + expandedStyle + '">';
        $.each(menuData, function (i, item) {
            var str = '<li>';
            var href = item.href == undefined || item.href == '' ? 'javascript:;' : item.href;
            var hasSubNode = false;
            var aClass = '';
            var triangleRight = '';
            if(item.subNodes != undefined && item.subNodes.length > 0){
                hasSubNode = true;
                aClass = 'menu-parent';
                triangleRight = '<i class="menu-lap triangle-right" aria-hidden="true"></i>';
            }else{
                aClass = 'menu-link';
            }
            var aId = item.id;
            str += '<a href="' + href + '" class="' + aClass + '" data-id="' + aId + '">' + triangleRight;
            str += '<i class="fa fa-list menu-icon" aria-hidden="true"></i><span class="menu-text">' + item.text + '</span>'
                + '</a>';
            if(hasSubNode){
                str += renderMenu($target, item.subNodes, level);
            }
            str += '</li>';
            template += str;
        });
        template += '</ul>';
        if(level == 2) {
            template += '</div>';
            $target.append(template);
            /**
             * @doc 左侧菜单无限极菜单展开折叠
             * @author Heanes
             * @time 2016年08月19日12:09:58
             */
            $target.find('.menu-left-group li').each(function (i, item) {
                if($(item).find('ul.menu-left-group').length > 0){
                    $(item).find('.menu-parent').first().on('click', function () {
                        $(this).parent().toggleClass('active');
                        $(this).toggleClass('active');
                        $(this).find('.menu-lap').first().toggleClass('triangle-down triangle-right');
                        $(item).find('ul.menu-left-group').first().toggleClass('close');
                    });
                }
            });
            // TODO 折叠展开状态写入cookie中，刷新后用js读取一次cookie将折叠展开状态恢复
        }else{
            return template;
        }
    };

    /**
     * @doc 点击顶部菜单切换侧边菜单
     * @author Heanes
     * @time 2016年08月19日12:09:15
     */
    var $menuTopUl = $('#menuTopUl');
    var $menuTopList = $menuTopUl.find('li');
    var $menuLeftFamily = $('.menu-left-family');
    $menuTopList.each(function (i, item) {
        $(item).on('click', function () {
            $menuTopList.removeClass('active');
            $menuLeftFamily.removeClass('active');
            $($menuLeftFamily[i]).addClass('active');
            $(this).addClass('active');
        });

        if($(item).hasClass('active')){
            $($menuLeftFamily).removeClass('active');
            $($menuLeftFamily[i]).addClass('active');
        }
    });

    $('.menu-top').on('click', '.menu-list li a', function (event) {
        var $currentTarget = $(event.target);
        var $li = $currentTarget.parent();
        var $ul = $li.parent();
        var $liList = $ul.find('li');
        $liList.each(function (i, item) {
            $(item).removeClass('active');
            if($(item).html() == $li.html()){
                var index = $(item).index();
                var $menuLeftFamilyList = $('.menu-left-block').find('.menu-left-family');
                $menuLeftFamilyList.hide();
                $menuLeftFamilyList.eq(index).show();
                $li.addClass('active');
            }
        });
    });

    /**
     * @doc 获取菜单数据
     * @author Heanes
     * @time 2016-11-29 16:40:18 周二
     */
    var getMenuData = function(){
        var menuDataJsonUrl="../js/menu.json";
        $.getJSON(menuDataJsonUrl, function(data){
            renderMenu($menuLeftBlock, data);
            return data;
        });
    };
    var menuDataJson = getMenuData();

});