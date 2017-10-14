/**
 * @doc 消息提示类定义的常量
 * @author Heanes
 * @time 2017-10-13 17:26:55 周五
 */

var messageConstants = {
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
};

module.exports = {
    messageConstants: messageConstants
};