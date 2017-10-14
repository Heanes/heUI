/**
 * @doc 消息提示类
 * @author Heanes
 * @time 2016-12-12 11:47:21 周一
 */
var messageConstants = require('messageConstants');
console.log(messageConstants);
$.extend({

    /* ------------------------------ 提示消息类 ------------------------------ */
    // 消息常量
    messageConstants: {
        type: {
            success:    'success',  // 成功
            info:       'info',     // 提示
            warn:       'warn',     // 警告
            error:      'error',    // 错误
            loading:    'loading'   // 加载中
        },
        classPrefix:    '',
        // 为messagePlus使用
        defaultParams: {
            content:        'This is a message',    // string || object(jQuery) 消息内容
            type:           'info',                 // string success||error||warn||info消息类型
            show:           3000,                   // int 展示时间，单位为毫秒
            autoClose:      true,                   // boolean 是否自动关闭
            fadeOutDelay:   500,                    // int 消失动画延迟时间，单位为毫秒
            canBeClose:     true,                   // boolean 是否能被关闭
            onClose:        undefined,              // 当消息关闭时的回调函数 todo add at 2016-12-13 14:33:02 周二
            showIcon:       false,                  // boolean 是否显示图标
            classPrefix:    ''                      // 样式前缀，方便自定义样式
        }
    },

    /**
     * @doc 局部消息展示
     * @param $target object(jQuery) 放置消息的容器(jQuery对象)
     * @param $content string || object(jQuery) 消息内容
     * @param type string success||error||warn||info消息类型
     * @param show 展示时间
     * @param fadeOutDelay 消失动画延迟时间，单位为毫秒
     * @author Heanes
     * @time 2016-12-01 17:55:27 周四
     */
    messageLocal: function messageLocal($target, $content, type, show, fadeOutDelay){
        if($target == undefined || $target.length == 0) console.error('Error: the message target is null');
        var messageClass = $.messageConstants.classPrefix + 'message';
        var messageWrapDomStr =
            '<div class="message-wrap">'
            + '<div class="' + messageClass + '">'
            + '<div class="message-handle">'
            + '<span class="btn-close">x</span>'
            + '</div>'
            + '<div class="message-content">'
            + '</div>'
            + '</div>'
            + '</div>';
        var $messageWrap = $(messageWrapDomStr);
        var $message = $messageWrap.find('.' + messageClass);
        var $messageContent = $message.find('.message-content');
        $messageContent.append($content);
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
        $target.append($messageWrap);
        $target.show();
        fadeOutDelay = fadeOutDelay || 500;
        // 超时后自动关闭
        if(show != 0){
            show = show || 3000;
            $messageWrap.delay(show).fadeOut(fadeOutDelay, function(){$messageWrap.remove()});
        }
        // 点击关闭
        $messageWrap.on('click', '.btn-close', function (event) {
            var $delegateTarget = $(event.delegateTarget);
            $delegateTarget.fadeOut(fadeOutDelay, function(){$messageWrap.remove()});
        });
    }
    /* ------------------------------ 提示消息类 ------------------------------ */
});