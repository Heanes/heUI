<!--
@doc 分页组件
@author Heanes
@time 2019-02-18 18:37:28 周一
@description: 页数翻动时，能保持鼠标不动也能持续翻页(保持固定的页码个数显示,但当页码数值较大宽度变宽时改变分页区域宽度)
-->
<template>
  <div class="he-pagination" :class="{
  'is-tight': tight,
  'is-background': background,
  'is-border': border
  }"
       v-show="!hideWhenOnePage || pages.length > 1"
  >
    <he-select v-if="pageSizeList.length > 0">
      <he-option v-for="(item, index) in pageSizeList" :value="item" :key="index">{{item}}</he-option>
    </he-select>
    <button type="button" class="pagination-btn pagination-btn--prev"
            :class="{'disabled': innerPageNumber === 1}"
            :disabled="innerPageNumber === 1"
            @click="prevPage"
    >
      <a v-if="innerPageNumber > 1"
         class="page-link prev-page"
         :class="{disabled: innerPageNumber === 1}"
         :href="pageLink(innerPageNumber)"
         :target="pageLinkTarget"
         v-html="prevPageStr"></a>
      <a v-else
         class="page-link prev-page"
         :class="{disabled: innerPageNumber === 1}"
         href="javascript:;"
         v-html="prevPageStr"></a>
    </button>
    <ul class="pagination-list" @click="changePage">
      <li v-for="(page, index) in pages" :key="index"
          :class="['page-item',
           page.extraClass,
           {'current': innerPageNumber === page.pageNumber}]"
      >
        <a :class="['page-link',
            {'current': innerPageNumber === page.pageNumber}
          ]"
           :href="pageLink(page.pageNumber)"
           :target="pageLinkTarget"
        >{{page.pageStr}}</a>
      </li>
    </ul>
    <button type="button" class="pagination-btn pagination-btn--next"
            :class="{'disabled': innerPageNumber === totalPage}"
            :disabled="innerPageNumber === totalPage"
    >
      <a class="page-link next-page"
         :class="{'disabled': innerPageNumber === totalPage}"
         :href="pageLink(innerPageNumber)"
         @click="nextPage"
         v-html="nextPageStr"></a>
    </button>
    <div class="pagination-quick-jump" v-if="showQuickJump">
      <span>前往</span>
      <he-input input-size="small" class="he-pagination-input"></he-input>
      <span>页</span>
    </div>
  </div>
</template>

<script>
import HeInput from '../../input/index.js';

export default {
  name: 'HePagination',
  props: {
    // 分页大小
    pageSize: {
      type: Number,
      default: 10
    },
    // 页码数
    pageNumber: {
      type: Number,
      default: 1
    },
    // 总条数
    total: {
      type: Number,
      default: 0
    },
    // 限制显示的页码数(包括省略号)，超出则省略展示，最小值为7(因为首尾各一个位置，中间两个省略号，再加中间3个数值)
    pageLimitShow: {
      type: Number,
      default: 7
    },
    // 显示的可改变页数列表
    changePageSizes: {
      type: Array,
      default: function () {
        return [10, 20, 50, 100];
      }
    },
    /**
     * @doc 紧缩型，减少间距，节约空间
     */
    tight: {
      type: Boolean,
      default: false
    },
    // 上一页按钮显示字符
    prevPageStr: {
      type: String,
      default: '&lt;'
    },
    // 下一页按钮显示字符
    nextPageStr: {
      type: String,
      default: '&gt;'
    },
    // 颜色
    background: {
      type: Boolean,
      default: false
    },
    // 是否带边框
    border: {
      type: Boolean,
      default: false
    },
    // 分页链接，自定义链接点击
    pageLink: {
      type: Function,
      default (pageNumber) {
        return 'javascript:;';
      }
    },
    pageLinkTarget: {
      type: String,
      default: null
    },
    // 页数仅为1页是自动隐藏分页
    hideWhenOnePage: {
      type: Boolean,
      default: false
    },
    // 可供选择的分页大小
    pageSizes: {
      type: Array,
      default () {
        return [];
      }
    },
    // 显示快速跳转
    showQuickJump: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      innerPageSize: this.pageSize,
      innerPageNumber: this.pageNumber,
      innerPageNumberFrom: this.pageNumber,
      innerPageLimitShow: this.pageLimitShow,
      innerDefaultPageSizes: [10, 20, 30, 50]
    }
  },
  components: {
    HeInput
  },
  computed: {
    // 实际展示的页码，包含上一页下一页 ... 等等
    pages: {
      get () {
        const renderPage = [];
        // 如果[总页数]小于[限制显示页码数]
        if (this.totalPage <= this.innerPageLimitShow) {
          for (let i = 0; i < this.totalPage; i++) {
            renderPage.push({
              pageNumber: i + 1,
              pageStr: i + 1
            });
          }
        } else {
          // 如果[当前页码]小于[限制显示页码数]
          if (this.innerPageNumber * 2 < this.innerPageLimitShow + 2) {
            for (let i = 0; i < this.innerPageLimitShow - 2; i++) {
              renderPage.push({
                pageNumber: i + 1,
                pageStr: i + 1
              });
            }
            renderPage.push({
              pageNumber: 0,
              pageStr: '...',
              extraClass: 'ellipsis'
            });
            renderPage.push({
              pageNumber: this.totalPage,
              pageStr: this.totalPage
            });
          } else {
            renderPage.push({
              pageNumber: 1,
              pageStr: 1
            });
            renderPage.push({
              pageNumber: 0,
              pageStr: '...',
              extraClass: 'ellipsis'
            });
            // 页码翻到居中位置
            if ((this.totalPage - this.innerPageNumber) * 2 > this.innerPageLimitShow - 1) {
              for (let i = 0; i < this.innerPageLimitShow - 4; i++) {
                const pageNumber = this.innerPageNumber - Math.floor(this.innerPageLimitShow / 2) + 2 + i;
                renderPage.push({
                  pageNumber: pageNumber,
                  pageStr: pageNumber
                });
              }
              renderPage.push({
                pageNumber: 0,
                pageStr: '...',
                extraClass: 'ellipsis'
              });
              renderPage.push({
                pageNumber: this.totalPage,
                pageStr: this.totalPage
              });
            } else {
              // 页码翻到后面剩下几页
              for (let i = 0; i < this.innerPageLimitShow - 2; i++) {
                renderPage.push({
                  pageNumber: this.totalPage - this.innerPageLimitShow + i + 3,
                  pageStr: this.totalPage - this.innerPageLimitShow + i + 3
                });
              }
            }
          }
        }
        return renderPage;
      }
    },
    totalPage: {
      get () {
        return Math.ceil(this.total / this.pageSize);
      }
    },
    // 供改变分页大小的数组
    pageSizeList: {
      get () {
        if (this.pageSizes && this.pageSizes.length > 0) {
          return this.pageSizes;
        }
        return [];
      }
    }
  },
  methods: {
    // 跳转页码，使用事件代理(changePage)
    changePage (event) {
      const target = event.target;
      // 父级元素，返回
      if (target.tagName.toUpperCase() === 'UL' || this.disabled) {
        return;
      }
      if (target.className.indexOf('disabled') > 0) return;

      // console.log(target);

      let newPage = this.pageNumber;
      // 第一页和最后一页

      // 前一页和后一页
      if (target.className.indexOf('prev-page') > 0 || target.className.indexOf('next-page') > 0) {
        if (target.className.indexOf('prev-page') > 0) newPage = 1;
        if (target.className.indexOf('next-page') > 0) newPage = this.totalPage;
      } else {
        newPage = Number(event.target.textContent);
      }
      if (!isNaN(newPage)) {
        const currentPage = this.innerPageNumber;
        if (newPage !== currentPage) {
          this.goPage(newPage, currentPage);
        }
      }
    },
    // 改变每页大小 todo
    changePageSize () {
      ;
    },
    // 翻页
    goPage (pageNumberTo, pageNumberFrom) {
      pageNumberFrom = pageNumberFrom || this.innerPageNumber;

      this.innerPageNumber = pageNumberTo;

      // console.log('innerPageNumber', this.innerPageNumber);
      // console.log('from', pageNumberFrom, 'to', pageNumberTo);

      this.$emit('change-page-number', pageNumberTo, pageNumberFrom);
    },
    // 前一页
    prevPage () {
      if (this.innerPageNumber > 1) {
        this.innerPageNumberFrom = this.innerPageNumber;
        this.innerPageNumber--;
        this.goPage(this.innerPageNumber, this.innerPageNumberFrom);
      }
    },
    // 后一页
    nextPage () {
      // 如果是自定义链接，则不走方法中的功能
      if (this.innerPageNumber < this.totalPage) {
        this.innerPageNumberFrom = this.innerPageNumber;
        this.innerPageNumber++;
        this.goPage(this.innerPageNumber, this.innerPageNumberFrom);
      }
    },
    /**
     * @doc 触发变化
     * @author Heanes
     * @time 2019-02-20 10:52:22 周三
     */
    emitChange () {
      this.$nextTick(() => {
        ;
      });
    }
  },
  created () {
    this.innerPageLimitShow = this.innerPageLimitShow < 7 ? 7 : this.innerPageLimitShow;
  },
  watch: {
    /* innerPageNumber: {
      handler (newVal, oldVal) {
        this.goPage(newVal, oldVal);
      }
    }, */
    pageNumber: {
      immediate: true,
      handler (val) {
        this.innerPageNumber = val;
      }
    }
  }
}
</script>

<style scoped>

</style>
