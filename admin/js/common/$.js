/**
 * @doc 扩展
 * @author Heanes
 * @time 2016-12-12 11:47:21 周一
 */
$(function () {

    /**
     * @doc 扩展jQuery对象，添加自定义函数
     * @author Heanes
     * @time 2016-12-12 17:06:29 周一
     */
    $.extend({

        /* ------------------------------ 提示消息类 ------------------------------ */
        // 消息常量
        messageConstants: {
            type: {
                success:    'success',
                info:       'info',
                warn:       'error'
            }
        },
        /**
         * @doc 全局消息展示
         * @param $content string || object(jQuery) 消息内容
         * @param type string success||error||warn||info消息类型
         * @param delaySec 展示时间，单位为毫秒
         * @param fadeOutDelay 消失动画延迟时间，单位为毫秒
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
                case $.messageConstants.type.success:
                    $message.addClass('message-success');
                    break;
                case $.messageConstants.type.info:
                    $message.addClass('message-info');
                    break;
                case $.messageConstants.type.warn:
                    $message.addClass('message-warning');
                    break;
                case $.messageConstants.type.error:
                    $message.addClass('message-error');
                    break;
            }
            $messageGlobal.empty().append($messageWrap);
            $messageGlobal.show();
            delaySec = delaySec || 3000;
            fadeOutDelay = fadeOutDelay || 1000;
            $messageGlobal.delay(delaySec).fadeOut(fadeOutDelay);
        },

        /**
         * @doc 局部消息展示
         * @param $target object(jQuery) 放置消息的容器(jQuery对象)
         * @param $content string || object(jQuery) 消息内容
         * @param type string success||error||warn||info消息类型
         * @param delaySec 展示时间
         * @param fadeOutDelay 消失动画延迟时间，单位为毫秒
         * @author Heanes
         * @time 2016-12-01 17:55:27 周四
         */
        messageLocal: function messageGlobal($target, $content, type, delaySec, fadeOutDelay){
            if($target == undefined || $target.length == 0) console.error('Error: the message target is null');
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
                case $.messageConstants.type.success:
                    $message.addClass('message-success');
                    break;
                case $.messageConstants.type.info:
                    $message.addClass('message-info');
                    break;
                case $.messageConstants.type.warn:
                    $message.addClass('message-warning');
                    break;
                case $.messageConstants.type.error:
                    $message.addClass('message-error');
                    break;
            }
            $target.empty().append($messageWrap);
            $target.show();
            delaySec = delaySec || 3000;
            fadeOutDelay = fadeOutDelay || 1000;
            $target.delay(delaySec).fadeOut(fadeOutDelay);
        }
        /* ------------------------------ 提示消息类 ------------------------------ */


    });
});
