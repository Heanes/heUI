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
    });//.jqxTabs('hideCloseButtonAt', 0); //隐藏首页删除按钮

    var $tabsTitleContainer = $('#tabsTitleContainer');
    var tabsLength = $tabsTitleContainer.length;
    var tabsAddCount = 0;
    // tab关闭后处理
    $tabsContainer.on('removed', function (event) {
        tabsAddCount--;
    });
    var selectedTab = 0;
    $tabsContainer.on('selected', function (event){
        selectedTab = event.args.item;
    });
    // 刷新标签
    $('#refreshTab').on('click', function () {
        var tabContent = $tabsContainer.jqxTabs('getContentAt', selectedTab);
        var $tabIframe = $(tabContent).find('iframe').first();
        $tabIframe.attr('src', $tabIframe.attr('src'));
    });
    // 关闭全部标签
    $('#closeAllTabs').on('click', function () {
        if(confirm('你确定关闭全部标签吗？')){
            var tabsCount = tabsAddCount;
            for(tabsCount; tabsCount >= 0; tabsCount--){
                $tabsContainer.jqxTabs('removeAt', tabsCount);
            }
        }
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
        var tabId = 'tabsIframe' + $aNode.attr('data-nodeId');
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
     * @doc 获取菜单数据
     * @author Heanes
     * @time 2016-11-29 16:40:18 周二
     */
    var getMenuData = function(){
        var menuDataJsonUrl="../js/menu.json";
        $.getJSON(menuDataJsonUrl, function(data){
            //renderMenu($menuLeftBlock, data);
            $('.left-block').treeView({
                data: data,
                iconCollapse: 'triangle-right', // 合上时的图标
                iconExpand: 'triangle-down',    // 展开时的图标
                enableIndentLeft: true,         // 允许向左缩进
                enableLink: true,               // 开启链接
                enableTopSwitch: true,          // 开启顶部切换标识
                topSwitcherTarget: '.menu-top', // 开启了顶部切换后，根节点展示在此处(填写jQuery选择器支持的字符)
                style: {
                    topActive: {
                        bgColor: '#346190',     // 顶部切换的激活后背景色 topActive.bgColor
                        color: '#fff'           // 顶部切换的激活后字体色 topActive.color
                    },
                    topHover: {
                        bgColor: '#346190',     // 侧边树的鼠标浮上背景色 topHover.bgColor
                        color: '#fff'           // 侧边树的鼠标浮上字体色 topHover.color
                    },
                    leftSelected: {
                        bgColor: '#346190',     // 侧边树的选中后的背景色 leftSelected.bgColor
                        color: '#fff'           // 侧边树的选中后的字体色 leftSelected.color
                    },
                    leftHover: {
                        bgColor: '#346190',     // 侧边树的鼠标浮上背景色 leftHover.bgColor
                        color: '#fff'           // 侧边树的鼠标浮上字体色 leftHover.color
                    }
                },                              // 样式相关

                onNodeSelected: function (event, node) {
                    var $aNode = $('<a></a>').attr('href', node.href).attr('data-nodeId', node.nodeId)
                        .append('<i class="tab-icon ' + node.nodeIcon + '"></i>')
                        .append('<span class="tab-title">' + node.text + '</span>');
                    var addResult = addJqxTabFromANode($aNode, $tabsContainer, tabsLength + tabsAddCount);
                    addResult ? tabsAddCount++ : null;
                    return false;
                }
            });
            return data;
        });
    };
    var menuDataJson = getMenuData();


    /**
     * @doc 全屏的处理
     * @author Heanes
     * @time 2016-12-16 10:37:27 周五
     */
    $('#fullScreen').on('click', function () {
        var $icon = $(this).find('.fa');
        $icon.toggleClass(function() {
            if ($icon.hasClass('fa-arrows-alt')) {
                $icon.removeClass('fa-arrows-alt');
                return 'fa-compress';
            } else {
                $icon.removeClass('fa-compress');
                return 'fa-arrows-alt';
            }
        });
        $(this).closest('.layout-handle').toggleClass('effected');
        $('.main-top-block').toggleClass('full-screen');
        $('.left-block').toggleClass('full-screen');
        $('.center-block.iframe-container').toggleClass('full-screen');
    });

});