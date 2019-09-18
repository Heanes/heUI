import Vue from 'vue';
import MessageComp from './Message.vue';

const MessageConstructor = Vue.extend(MessageComp);

let instances = [];
let instance;
let seed = 1;
let $messageGlobal;
const Message = function(options) {
  // 处理options
  options = options || {};
  if (typeof options === 'string') {
    options = {
      message: options
    };
  }

  const userOnClose = options.onClose;
  options.onClose = function() {
    Message.close(instance, userOnClose);
  };

  $messageGlobal = document.querySelectorAll('.he-message-global-container')[0];
  if(!$messageGlobal){
    $messageGlobal = document.createElement('div');
    $messageGlobal.className += 'he-message-global-container';
    document.body.appendChild($messageGlobal);
  }

  instance = new MessageConstructor({
    data: options
  });

  instance.$mount();
  $messageGlobal.appendChild(instance.$el);
  seed++;

  instance.visible = true;
  instances.push(instance);
  return instance;
};

/**
 * @doc 关闭方法
 */
Message.close = function (instance, userOnClose) {
  if (typeof userOnClose === 'function') {
    userOnClose(instance);
  }
  // 关闭时上移动画，与position top有关
};

export default Message;
