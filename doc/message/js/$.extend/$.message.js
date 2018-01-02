/**
 * @doc 消息提示类
 * @author Heanes
 * @time 2016-12-12 11:47:21 周一
 */
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
        // 为messagePlus使用
        defaultParams: {
            container:      undefined,      // 消息显示容器
            content:        '消息内容',      // string || object(jQuery) 消息内容
            title:          '提示',         // string || object(jQuery) 消息内容
            type:           'info',         // string success||error||warn||info消息类型
            showTime:       3000,           // int 展示时间，单位为毫秒
            autoClose:      true,           // boolean 是否自动关闭
            fadeOutDelay:   500,            // int 消失动画延迟时间，单位为毫秒
            canBeClose:     true,           // boolean 是否能被关闭
            onClose:        undefined,      // 当消息关闭时的回调函数 todo add at 2016-12-13 14:33:02 周二
            showIcon:       false,          // boolean 是否显示图标
            classPrefix:    ''              // 样式前缀，方便自定义样式
        }
    },
    /**
     * @doc 消息展示加强版，用对象方式定义参数 todo 增加时间戳；记录消息历史
     * @author Heanes
     * @time 2016-12-13 12:04:53 周二
     */
    messagePlus: function messageGlobal(paramObject){
        paramObject = paramObject || $.messageConstants.defaultParams;
        var $documentTop = $(window.top.document);
        var $messageGlobal = $documentTop.find('#messageGlobal');
        var messageClass = paramObject.classPrefix + 'message';
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
        $messageContent.append(paramObject.content);
        paramObject.type = paramObject.type || 'success';
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
        $messageGlobal.append($messageWrap);
        $messageGlobal.show();
        if(paramObject.show != 0){
            var delay = paramObject.show || 3000;
            var fadeOutDelay = paramObject.fadeOutDelay || 1000;
            $messageWrap.delay(delay).fadeOut(fadeOutDelay, function(){$(this).remove() });
        }
        // 点击关闭
        $message.on('click', '.btn-close', function (event) {
            var $delegateTarget = $(event.delegateTarget);
            $delegateTarget.stop();
            $delegateTarget.fadeOut(fadeOutDelay, function(){$(this).remove()});
        });
    },
    /**
     * @doc 全局消息展示
     * @param $messageContainer object(jQuery) 放置消息的容器(jQuery对象)
     * @param $content string || object(jQuery) 消息内容
     * @param type string success||error||warn||info消息类型
     * @param $title 提示消息标题
     * @param autoClose 是否自动关闭
     * @param show 展示时间，未定义和0为始终显示
     * @param fadeOutDelay 消失动画延迟时间，单位为毫秒，默认为500
     * @author Heanes
     * @time 2016-12-01 17:55:27 周四
     */
    messageGlobal: function messageGlobal($messageContainer, type, $content, $title, autoClose, show, fadeOutDelay){
        var $documentTop = $(window.top.document); // 始终最顶层框架显示
        var $messageGlobal = $documentTop.find('.message-global');
        if(!$messageGlobal || $messageGlobal.length === 0){
            $messageGlobal = $('<div class="message-global">');
            $documentTop.find('body').append($messageGlobal);
        }
        this.message($messageGlobal, type, $content, $title, autoClose, show, fadeOutDelay);
    },

    /**
     * @doc 局部消息展示
     * @param $messageContainer object(jQuery) 放置消息的容器(jQuery对象)
     * @param $content string || object(jQuery) 消息内容
     * @param type string success||error||warn||info消息类型
     * @param $title 提示消息标题
     * @param autoClose 是否自动关闭
     * @param show 展示时间，未定义和0为始终显示
     * @param fadeOutDelay 消失动画延迟时间，单位为毫秒，默认为500
     * @author Heanes
     * @time 2016-12-01 17:55:27 周四
     */
    message: function messageLocal($messageContainer, type, $content, $title, autoClose, show, fadeOutDelay){
        if($messageContainer === undefined || $messageContainer.length === 0) console.error('Error: the message target is null');
        var messageClass = $.messageConstants.defaultParams.classPrefix + 'message';
        var messageWrapDomStr = '<div class="message-wrap">\n' +
            '                    <div class="' + messageClass + '">\n' +
            '                        <div class="message-handle-section">\n' +
            '                            <span class="btn-close">x</span>\n' +
            '                        </div>\n' +
            '                        <div class="message-content-section">\n' +
            '                            <div class="message-icon-wrap">\n' +
            '                                <div class="icon-background">\n' +
            '                                </div>\n' +
            '                            </div>\n' +
            '                            <div class="message-content-wrap">\n' +
            '                                <div class="message-title">\n' +
            '                                </div>\n' +
            '                                <div class="message-content">\n' +
            '                                </div>\n' +
            '                            </div>\n' +
            '                        </div>\n' +
            '                    </div>\n' +
            '                </div>';
        var $messageWrap = $(messageWrapDomStr);
        var $message = $messageWrap.find('.' + messageClass);
        var $messageContentSection = $message.find('.message-content-section');
        var $messageIconWrap = $messageContentSection.find('.message-icon-wrap');
        var $messageIcon = $messageIconWrap.find('.icon-background');
        var $messageContentWrap = $messageContentSection.find('.message-content-wrap');
        var $messageTitle = $messageContentWrap.find('.message-title');
        $title = $title || $.messageConstants.defaultParams.title;
        $messageTitle.append($title);
        var $messageContent = $messageContentSection.find('.message-content');
        $content = $content || $.messageConstants.defaultParams.content;
        $messageContent.append($content);
        type = type || 'success';
        switch (type){
            case $.messageConstants.type.success:
                $message.addClass('message-success');
                $messageIcon.append('<i class="fa fa-check"></i>');
                break;
            case $.messageConstants.type.info:
                $message.addClass('message-info');
                $messageIcon.append('<i class="fa fa-info"></i>');
                break;
            case $.messageConstants.type.warn:
                $message.addClass('message-warning');
                $messageIcon.append('<i class="fa fa-warning"></i>');
                break;
            case $.messageConstants.type.error:
                $message.addClass('message-error');
                $messageIcon.append('<i class="fa fa-close"></i>');
                break;
            default:
                $message.addClass('message-info');
                $messageIcon.append('<i class="fa fa-info"></i>');
                break;
        }
        $messageContainer.append($messageWrap);
        $messageContainer.show();
        fadeOutDelay = fadeOutDelay || $.messageConstants.defaultParams.fadeOutDelay;
        autoClose = autoClose === undefined ? $.messageConstants.defaultParams.autoClose : autoClose;
        if(autoClose){
            show = show || $.messageConstants.defaultParams.showTime;
            // 超时后自动关闭
            if(show !== 0){
                $messageWrap.delay(show).fadeOut(fadeOutDelay, function(){$messageWrap.remove()});
            }
        }
        // 点击关闭
        $messageWrap.on('click', '.btn-close', function (event) {
            var $delegateTarget = $(event.delegateTarget);
            $delegateTarget.stop().fadeOut(fadeOutDelay, function(){$messageWrap.remove()});
            if(typeof this.onClose === 'function'){
                this.onClose();
            }
        });
    }
    /* ------------------------------ 提示消息类 ------------------------------ */
});