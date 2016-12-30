/*
 * @doc 消息展示demo
 * @author Heanes
 * @time 2016-12-30 15:29:00 周五
 */
$(function () {
    // 显示消息
    $('.show-message-success').on('click', function () {
        $.messageGlobal('恭喜，操作成功~ :)~');
    });
    $('.show-message-info').on('click', function () {
        $.messageGlobal('提醒，你还需要做某项操作你还需要做某项操作你还需要做某项操作。', 'info');
    });
    $('.show-message-warn').on('click', function () {
        $.messageGlobal('警告，有某些情况出现。', 'warn');
    });
    $('.show-message-error').on('click', function () {
        $.messageGlobal('错误，出现了问题。', 'error');
    });

    // 显示消息
    $('.show-message-success-no-close').on('click', function () {
        $.messageGlobal('恭喜，操作成功~ :)~', 'success', 0);
    });
    $('.show-message-info-no-close').on('click', function () {
        $.messageGlobal('提醒，你还需要做某项操作你还需要做某项操作你还需要做某项操作。', 'info', 0);
    });
    $('.show-message-warn-no-close').on('click', function () {
        $.messageGlobal('警告，有某些情况出现。', 'warn', 0);
    });
    $('.show-message-error-no-close').on('click', function () {
        $.messageGlobal('错误，出现了问题。', 'error', 0);
    });
});