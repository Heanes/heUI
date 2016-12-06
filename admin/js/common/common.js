/**
 * @doc 公共脚本
 * @author Heanes
 * @time 2016-11-29 10:16:42 周二
 */
$(function () {

    /**
     * @doc 全局消息展示
     * @param $content string || object(jQuery) 消息内容
     * @param type string success||error||warn||info消息类型
     * @param delaySec 展示时间
     * @param fadeOutDelay 动画延迟时间
     * @author Heanes
     * @time 2016-12-01 17:55:27 周四
     */
    var messageGlobal = function messageGlobal($content, type, delaySec, fadeOutDelay){
        var $documentTop = $(window.top.document);
        var $messageGlobal = $documentTop.find('#messageGlobal');
        var messageWrapDomStr =
            '<div class="message-wrap">'
                + '<div class="message">'
                    + '<div class="message-handle">'
                        + '<span class="btn-close">x</span>'
                    + '</div>'
                    + '<div class="message-content">'
                    + '</div>'
                + '</div>'
            + '</div>';
        var $messageWrap = $(messageWrapDomStr);
        var $message = $messageWrap.find('.message');
        var $messageContent = $message.find('.message-content');
        $messageContent.append('<p>' + $content + '</p>');
        type = type || 'success';
        switch (type){
            case 'success':
                $message.addClass('message-success');
                break;
            case 'info':
                $message.addClass('message-info');
                break;
            case 'warn':
                $message.addClass('message-warning');
                break;
            case 'error':
                $message.addClass('message-error');
                break;
        }
        $messageGlobal.empty().append($messageWrap);
        $messageGlobal.show();
        delaySec = (delaySec || 3) * 1000;
        fadeOutDelay = (fadeOutDelay || 1) * 1000;
        $messageGlobal.delay(delaySec).fadeOut(fadeOutDelay);
    };

    // 显示消息
    $('#showMessageSuccess').on('click', function () {
        messageGlobal('恭喜，操作成功~ :)~');
    });
    $('#showMessageInfo').on('click', function () {
        messageGlobal('提醒，你还需要做某项操作你还需要做某项操作你还需要做某项操作。', 'info');
    });
    $('#showMessageWarn').on('click', function () {
        messageGlobal('警告，有某些情况出现。', 'warn');
    });
    $('#showMessageError').on('click', function () {
        messageGlobal('错误，出现了问题。', 'error');
    });

    /**
     * @doc 全局消息展示
     * @param $target object(jQuery) 要展示的地方
     * @param $content string || $ 消息内容
     * @param type string success||error||warn||info消息类型
     * @param delay 展示时间
     * @author Heanes
     * @time 2016-12-01 17:55:27 周四
     */
    var message = function($target, $content, type, delay){
        ;
    };


















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


