/**
 * @doc 消息相关
 * @author Heanes
 * @time 2016-09-08 16:19:35 周四
 */

$(function () {
    $('.message').on('click', '.btn-close', function (event) {
        var $delegateTarget = $(event.delegateTarget);
        $delegateTarget.fadeOut();
    });
});