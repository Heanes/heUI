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
        autoHeight: true,
        showCloseButtons: true
    });
    var $tabsTitleContainer = $('#tabsTitleContainer');
    var tabsLength = $tabsTitleContainer.length;
    var tabsAddCount = 0;
    $('.menu-left-block').on('click', '.menu-left-group li a.menu-link', function () {
        var tabTitle = $(this).text();
        var tabSrc = $(this).attr('href');
        var tabId = 'tabsIframe' + $(this).attr('data-id');
        if($('#tabsContainer').find('iframe[id="' + tabId + '"]').length > 0){
            // TODO 存在则定位
            return false;
        }
        var tabContent = '<iframe src="' + tabSrc + '" id="' + tabId + '"></iframe>';
        $tabsContainer.jqxTabs('addAt', tabsLength + tabsAddCount, tabTitle, tabContent);
        tabsAddCount++;
        return false;
    });

    /**
     * @doc 点击顶部菜单切换侧边菜单
     * @author Heanes
     * @time 2016年08月19日12:09:15
     */
    var $menuTopUl = $('#menuTopUl');
    var $menuTopList = $menuTopUl.find('li');
    var $menuLeftFamily = $('.menu-left-family');
    var $menuLeftGroup = $('.menu-left-group');
    var $menuLeftGroupLiList = $menuLeftGroup.find('li');
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
        return menuData.state != undefined ? (menuData.state.expanded != undefined && menuData.state.expanded) : false;
    };
    /**
     * @doc 渲染左侧菜单
     * @param $target 目标
     * @param menuData 菜单数据
     * @param isRecursive 是否是内部递归调用的
     * @author Heanes
     * @time 2016-11-29 16:49:23 周二
     */
    var renderMenu = function ($target, menuData, isRecursive) {
        var template = '';
        var expandedStyle = '';
        if(!isRecursive){
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
                str += renderMenu($target, item.subNodes, true);
            }
            str += '</li>';
            template += str;
        });
        template += '</ul>';
        if(!isRecursive) {
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

    /**
     * @doc iframe加载后自适应宽高（不适用于跨域）
     * @author Heanes
     * @time 2016-11-29 20:29:16 周二
     */
    $('iframe').on('load', function () {
        var thisHeight = $(this).contents().height();
        $(this).css('height', thisHeight);
        var thisWidth = $(this).contents().width();
        $(this).css('width', thisWidth);
    });
});