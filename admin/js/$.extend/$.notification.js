/**
 * @doc 消息提示类
 * @author Heanes
 * @time 2016-12-12 11:47:21 周一
 */
$.extend({

    /* ------------------------------ 提示消息类 ------------------------------ */
    // 消息常量
    notificationConstants: {
        type: {
            success:    'success',
            info:       'info',
            warn:       'warn',
            error:      'error'
        },
        classPrefix:    'ui-heanes-',
        defaultParams: {
            content:        'this is a message', // string || object(jQuery) 消息内容
            type:           'info',             // string success||error||warn||info消息类型
            delay:          3000,               // int 展示时间，单位为毫秒
            fadeOutDelay:   1000,               // int 消失动画延迟时间，单位为毫秒
            canBeClose:     true,               // boolean 是否能被关闭
            onClose:        undefined,          // 当消息关闭时的回调函数 todo add at 2016-12-13 14:33:02 周二
            showIcon:       false,              // boolean 是否显示图标
            classPrefix:    'ui-heanes-'        // 样式前缀，方便自定义样式
        }
    }
    /* ------------------------------ 提示消息类 ------------------------------ */


});