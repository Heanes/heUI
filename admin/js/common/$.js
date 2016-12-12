/**
 * @doc 扩展
 * @author Heanes
 * @time 2016-12-12 11:47:21 周一
 */
$(function () {

    $.extend({
        /**
         * @doc 全局消息展示
         * @param $content string || object(jQuery) 消息内容
         * @param type string success||error||warn||info消息类型
         * @param delaySec 展示时间
         * @param fadeOutDelay 动画延迟时间
         * @author Heanes
         * @time 2016-12-01 17:55:27 周四
         */
        messageGlobal: function messageGlobal($content, type, delaySec, fadeOutDelay){
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
        }
    });
});
