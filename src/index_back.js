// todo 此文件应该用命令进行生成，通过读取components.json来生成

import Row from './components/row/index.js';
import Col from './components/col/index.js';
import ButtonGroup from './components/button-group/index.js';
import Button from './components/button/index.js';
import Icon from './components/icon/index.js';
import Input from './components/input/index.js';
import Select from './components/select/index.js';
import Option from './components/option/index.js';
import Table from './components/table/index.js';
import Pagination from './components/pagination/index.js';

const components = [
  Row,
  Col,
  ButtonGroup,
  Button,
  Icon,
  Input,
  Select,
  Option,
  Table,
  Pagination
];

const install = function(Vue, opts = {}) {
  components.forEach(component => {
    Vue.component(component.name, component);
  });
};

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default {
  version: '1.0.0',
  install,
  Row,
  Col,
  ButtonGroup,
  Button,
  Icon,
  Input,
  Select,
  Option,
  Table,
  Pagination
}
