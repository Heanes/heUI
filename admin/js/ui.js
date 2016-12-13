/**
 * @doc ui.js，自定义的js管理工具
 * @author Heanes
 * @time 2016-12-13 15:28:38 周二
 */
Import([
    '../js/common/common.js',
    // cookie相关
    '/public/static/libs/js/jquery.cookie/1.4.1/jquery.cookie.js',
    // 消息提示
    '../js/$.extend/$.message.js',
    // notification 通知
    '../js/$.extend/$.notification.js'
]);

/**
 * @doc 导入js文件
 * @author Heanes
 * @time 2016-12-13 15:30:18 周二
 */
function Import() {
    var jsTargetWrap = document.body.getElementsByTagName('cite')[0].children;
    var head = document.body.getElementsByTagName('head');
    var cssTargetWrap = head[head.length];
    for (var i = 0; i < arguments.length; i++) {
        var argument = arguments[i];
        if (argument.length > 0) {
            $.each(argument, function (i, item) {
                if (item.match(/\.js$/i)) {
                    var scriptDom = document.createElement('script');
                    scriptDom.type = 'text/javascript';
                    scriptDom.src = item;
                    $('cite').find('script').first().after('<script type="text/javascript" src="' + item + '"></script>');
                    //appendAfter(scriptDom, jsTargetWrap[i+1]);
                }
                else if (item.match(/\.css$/i)) {
                    var cssDom = document.createElement('script');
                    cssDom.type = 'text/css';
                    cssDom.href = item;
                    css.ref = 'stylesheet';
                    $('head').find('link[type="text/css"]').last().after('<link rel="stylesheet" type="text/css" href="' + item + '"></link>');
                    //appendAfter(cssDom, cssTargetWrap[i+1]);
                }
            });
        }

    }
}

/**
 * @doc 原生js 在指定元素后追加元素
 * @param newElement
 * @param targetElement
 */
function appendAfter(newElement, targetElement) { // newElement是要追加的元素 targetElement 是指定元素的位置
    var parent = targetElement.parentNode; // 找到指定元素的父节点
    if (parent.lastChild == targetElement) { // 判断指定元素的是否是节点中的最后一个位置 如果是的话就直接使用appendChild方法
        parent.appendChild(newElement, targetElement);
    } else {
        parent.insertBefore(newElement, targetElement.nextSibling);
    }
}


