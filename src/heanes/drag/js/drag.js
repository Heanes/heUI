/**
 * @doc drag可拖拽区域实现
 * @author Heanes
 * @time 2017-03-03 19:07:45 周五
 */

$(function () {

    // 拖拽总区域
    let $dragWrap = $('.drag-wrap');
    let $dragContent = $('.drag-content');
    let $content = $dragContent.find('.content');

    // 添加窗体头部，拖拽操作区
    //let $dragBar = $('<div class="drag-move-bar"></div>');
    let $dragMoveBar = $('.drag-move-bar');

    // 添加侧边框，可以改变窗体宽/高
    //let $dragBorder = $('<div class="drag-border"></div>');
    let $dragBorder = $('.drag-border');

    let inlineData = {
        dragFlag: false,
        resizeFlag: false,
        left: 0,
        top: 0,
        currentX: 0,
        currentY: 0,
        dragWrapWindow: {
            outerWidth: 0,
            outerHeight: 0
        },
        dragContentWindow: {
            outerWidth: 0,
            outerHeight: 0
        },
        contentWindow: {
            outerWidth: 0,
            outerHeight: 0
        },

    };

    /****************************** 拖拽窗体 ******************************/
    $dragMoveBar.on('mousedown', function (event) {
        inlineData.dragFlag = true;
        if(!event){
            event = window.event;
            //防止IE文字选中
            bar.onselectstart = function(){
                return false;
            }
        }
        let e = event;
        inlineData.currentX = e.clientX;
        inlineData.currentY = e.clientY;
        let targetPosition = getTargetPosition($dragWrap);
        inlineData.left = targetPosition.left;
        inlineData.top = targetPosition.top;
    });
    $(document).on('mouseup', function (event) {
        inlineData.dragFlag = false;
        inlineData.resizeFlag = false;
        //$dragWrap.css({position: 'relative'});
    });

    $(document).on('mousemove', function (event) {
        let e = event ? event: window.event;
        if (inlineData.dragFlag) {
            let moveOffset = {
                offsetX: e.clientX - inlineData.currentX,
                offsetY: e.clientY - inlineData.currentY
            };
            let nowPosition = {
                top: inlineData.top + moveOffset.offsetY,
                left: inlineData.left + moveOffset.offsetX
            };
            moveTargetPosition($dragWrap, nowPosition);
        }
    });

    /****************************** 改变窗体大小 ******************************/
    $dragBorder.on('mousedown', function (event) {
        inlineData.resizeFlag = true;
        if(!event){
            event = window.event;
            //防止IE文字选中
            bar.onselectstart = function(){
                return false;
            }
        }
        let e = event;
        inlineData.currentX = e.clientX;
        inlineData.currentY = e.clientY;
        let dragWrapWindowOuterSize = getTargetWindowOuterSize($dragWrap);
        let dragContentWindowOuterSize = getTargetWindowOuterSize($dragContent);
        let contentWindowOuterSize = getTargetWindowOuterSize($content);
        inlineData.dragWrapWindow.outerWidth = dragWrapWindowOuterSize.outerWidth;
        inlineData.dragWrapWindow.outerHeight = dragWrapWindowOuterSize.outerHeight;
        inlineData.dragContentWindow.outerWidth = dragContentWindowOuterSize.outerWidth;
        inlineData.dragContentWindow.outerHeight = dragContentWindowOuterSize.outerHeight;
        inlineData.contentWindow.outerWidth = contentWindowOuterSize.outerWidth;
        inlineData.contentWindow.outerHeight = contentWindowOuterSize.outerHeight;
    });
    $dragBorder.on('mousemove', function (event) {
        let e = event ? event: window.event;
        if (inlineData.resizeFlag) {
            $dragWrap.bind('selectstart', false);
            let moveOffset = {
                offsetX: e.clientX - inlineData.currentX,
                offsetY: e.clientY - inlineData.currentY
            };
            let dragWrapNowSize = {}, dragContentNowSize = {}, contentNowSize = {};
            if($dragBorder.hasClass('drag-border-top') || $dragBorder.hasClass('drag-border-bottom')){
                dragWrapNowSize = {
                    width: inlineData.dragWrapWindow.outerWidth + moveOffset.offsetX
                };
                dragContentNowSize = {
                    width: inlineData.dragContentWindow.outerWidth + moveOffset.offsetX
                };
                contentNowSize = {
                    width: inlineData.contentWindow.outerWidth + moveOffset.offsetX
                };
            }
            if($dragBorder.hasClass('drag-border-left') || $dragBorder.hasClass('drag-border-right')){
                dragWrapNowSize = {
                    height: inlineData.dragWrapWindow.outerHeight + moveOffset.offsetY
                };
                dragContentNowSize = {
                    height: inlineData.dragContentWindow.outerHeight + moveOffset.offsetY
                };
                contentNowSize = {
                    height: inlineData.contentWindow.outerHeight + moveOffset.offsetY
                };
            }
            if($dragBorder.hasClass('drag-border-top-left') || $dragBorder.hasClass('drag-border-top-right')
             || $dragBorder.hasClass('drag-border-bottom-left') || $dragBorder.hasClass('drag-border-bottom-right')){
                dragWrapNowSize = {
                    width: inlineData.dragWrapWindow.outerWidth + moveOffset.offsetX,
                    height: inlineData.dragWrapWindow.outerHeight + moveOffset.offsetY,
                };
                dragContentNowSize = {
                    width: inlineData.dragContentWindow.outerWidth + moveOffset.offsetX,
                    height: inlineData.dragContentWindow.outerHeight + moveOffset.offsetY,
                };
                contentNowSize = {
                    width: inlineData.contentWindow.outerWidth + moveOffset.offsetX,
                    height: inlineData.contentWindow.outerHeight + moveOffset.offsetY,
                };
            }
            changeTargetWindowSize($dragWrap, dragWrapNowSize);
            changeTargetWindowSize($dragContent, dragContentNowSize);
            changeTargetWindowSize($content, contentNowSize);
        }
    });

    /**
     * @doc 将目标窗体宽高该表至指定大小
     * @param $target
     * @param size
     */
    function changeTargetWindowSize($target, size) {
        if(size){
            if(size.width && size.height){
                $target.css({
                    width: size.width,
                    height: size.height
                });
            }
            if(size.width){
                $target.css({width: size.width});
            }
            if(size.height){
                $target.css({height: size.height});
            }
        }
    }

    /**
     * @doc 移动目标dom到指定位置
     * @param $target
     * @param position
     */
    function moveTargetPosition($target, position){
        $target.css({
            position: 'absolute',
            top: position.top + 'px',
            left: position.left + 'px'
        });
    }

    /**
     * @doc 获取目标dom的定位值
     * @param $target
     * @returns {{top: number, left: number}}
     */
    function getTargetPosition($target) {
        let positionTop = 0;
        let positionLeft = 0;
        if($target){
            positionTop = $target.position().top;
            positionLeft = $target.position().left;
        }
        return {top: positionTop, left: positionLeft};
    }

    /**
     * @doc 获取指定目标dom的可视窗体的宽高
     * @param $target
     * @returns {{width: number, height: number}}
     */
    function getTargetWindowOuterSize($target) {
        if($target){
            let outerWidth = $target.outerWidth();
            let outerHeight = $target.outerHeight();
            return {outerWidth: outerWidth, outerHeight: outerHeight};
        }

    }
});
