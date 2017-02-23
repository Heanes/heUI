/**
 * @doc ui.js，自定义的js管理工具
 * @author Heanes
 * @time 2016-12-13 15:28:38 周二
 */
Import([
    // ****************************** 已有插件 ******************************
    // cookie相关
    '/public/static/libs/js/jquery.cookie/1.4.1/jquery.cookie.js',
    // 剪贴板复制
    '/public/static/libs/js/clipboard.js/1.5.15/clipboard.js',
    // 代码高亮
    '/public/static/libs/js/codeHighLight/syntaxhighlighter/3.0.83/styles/shThemeDefault.css',
    '/public/static/libs/js/codeHighLight/syntaxhighlighter/3.0.83/scripts/shCore.js',
    // 代码高亮及实时编辑
    '/public/static/libs/js/codeHighLight/codeMirror/5.21.0/theme/eclipse.css',
    '/public/static/libs/js/codeHighLight/codeMirror/5.21.0/lib/codemirror.js',
    '/public/static/libs/js/codeHighLight/codeMirror/5.21.0//addon/selection/selection-pointer.js',
    // --代码高亮及实时编辑之自动完成
    '/public/static/libs/js/codeHighLight/codeMirror/5.21.0/addon/hint/show-hint.js',
    '/public/static/libs/js/codeHighLight/codeMirror/5.21.0/addon/hint/show-hint.css',
    '/public/static/libs/js/codeHighLight/codeMirror/5.21.0/addon/hint/html-hint.js',
    '/public/static/libs/js/codeHighLight/codeMirror/5.21.0/addon/hint/xml-hint.js',
    '/public/static/libs/js/codeHighLight/codeMirror/5.21.0/addon/hint/javascript-hint.js',
    '/public/static/libs/js/codeHighLight/codeMirror/5.21.0/addon/hint/css-hint.js',
    '/public/static/libs/js/codeHighLight/codeMirror/5.21.0/mode/vbscript/vbscript.js',
    '/public/static/libs/js/codeHighLight/codeMirror/5.21.0/mode/xml/xml.js',
    '/public/static/libs/js/codeHighLight/codeMirror/5.21.0/mode/javascript/javascript.js',
    '/public/static/libs/js/codeHighLight/codeMirror/5.21.0/mode/css/css.js',
    '/public/static/libs/js/codeHighLight/codeMirror/5.21.0/mode/htmlmixed/htmlmixed.js'
    // ****************************** 自己开发的 ******************************
    /*// 消息提示
    '../../message/heanes/js/$.extend/$.message.js',
    // notification 通知
    '../../notification/heanes/js/$.extend/$.notification.js',
    '../js/common/common.js'*/
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
    var $jsTarget = $('cite').find('script[id="importResource"]');
    var $cssTarget = $('head').find('link[type="text/css"]').last();

    var jsAdd = '';
    var cssAdd = '';
    for (var i = 0; i < arguments.length; i++) {
        var argument = arguments[i];
        if (argument.length > 0) {
            $.each(argument, function (i, item) {
                if (item.match(/\.js$/i)) {
                    var scriptDom = document.createElement('script');
                    scriptDom.type = 'text/javascript';
                    scriptDom.src = item;
                    //$jsTarget.after('<script type="text/javascript" src="' + item + '"></script>');
                    jsAdd += '<script type="text/javascript" src="' + item + '"></script>';
                    //appendAfter(scriptDom, jsTargetWrap[i+1]);
                }
                else if (item.match(/\.css$/i)) {
                    var cssDom = document.createElement('link');
                    cssDom.type = 'text/css';
                    cssDom.href = item;
                    cssDom.ref = 'stylesheet';
                    //$cssTarget.after('<link rel="stylesheet" type="text/css" href="' + item + '"></link>');
                    cssAdd += '<link rel="stylesheet" type="text/css" href="' + item + '"></link>';
                    //appendAfter(cssDom, cssTargetWrap[i+1]);
                }
            });
        }
    }
    jsAdd != '' ? $jsTarget.after(jsAdd) : null;
    cssAdd != '' ? $cssTarget.after(cssAdd) : null;
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


