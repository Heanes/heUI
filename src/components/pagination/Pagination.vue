<!--
@doc 分页组件
@author Heanes
@time 2019-02-18 18:37:28 周一
@description: 页数翻动时，能保持鼠标不动也能持续翻页(保持固定的页码个数显示,但当页码数值较大宽度变宽时改变分页区域宽度)
-->
<template>
  <div class="pagination">
    <ul class="pagination-link">
      <li class="page-item prev-page" :class="{disabled: pageNumber === 1}" @click="prevPage">
        <a class="page-link" href="javascript:;" v-html="prevPageStr"></a>
      </li>
      <li class="page-item" :class="[page.extraClass, {current: pageNumber === page.pageNumber}]" v-for="(page, index) in pages" :key="index">
        <a class="page-link" href="javascript:;" @click="page.pageNumber > 0 && goPage(page.pageNumber)">{{page.pageStr}}</a>
      </li>
      <li class="page-item next-page" :class="{disabled: pageNumber === totalPage}" @click="nextPage">
        <a class="page-link" href="javascript:;" v-html="nextPageStr"></a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Pagination',
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
    // 限制显示的页码数，超出则省略展示，最小值为7(因为首尾各一个位置，中间两个省略号，再加中间3个数值)
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
    // 上一页按钮显示字符
    prevPageStr: {
      type: String,
      default: '&lt;&lt;'
    },
    // 下一页按钮显示字符
    nextPageStr: {
      type: String,
      default: '&gt;&gt;'
    },
    // 颜色
    background: {
      type: String,
      default: ''
    },
    // 边框
    border: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      innerPageSize: this.pageSize,
      innerPageNumber: this.pageNumber,
      innerPageNumberFrom: this.pageNumber,
      innerPageNumberTo: this.pageNumber,
      innerPageLimitShow: this.pageLimitShow
    }
  },
  computed: {
    // 实际展示的页码，包含上一页下一页 ... 等等
    pages: {
      get(){
        let renderPage = [];
        // 如果[总页数]小于[限制显示页码数]
        if(this.totalPage <= this.innerPageLimitShow){
          for(let i = 0; i < this.totalPage; i++){
            renderPage.push({
              pageNumber: i + 1,
              pageStr: i + 1
            });
          }
        }else{
          // 如果[当前页码]小于[限制显示页码数]
          if(this.innerPageNumber * 2 < this.innerPageLimitShow + 2){
            for(let i = 0; i < this.innerPageLimitShow - 2; i++){
              renderPage.push({
                pageNumber: i + 1,
                pageStr: i + 1
              });
            }
            renderPage.push({
              pageNumber: -1,
              pageStr: '...',
              extraClass: 'ellipsis'
            });
            renderPage.push({
              pageNumber: this.totalPage,
              pageStr: this.totalPage
            });
          }else{
            renderPage.push({
              pageNumber: 1,
              pageStr: 1
            });
            renderPage.push({
              pageNumber: -1,
              pageStr: '...',
              extraClass: 'ellipsis'
            });
            // 页码翻到居中位置
            if((this.totalPage - this.innerPageNumber) * 2 > this.innerPageLimitShow - 1){
              for(let i = 0; i < this.innerPageLimitShow - 4; i++){
                let pageNumber = this.innerPageNumber - Math.floor(this.innerPageLimitShow / 2) + 2 + i;
                renderPage.push({
                  pageNumber: pageNumber,
                  pageStr: pageNumber
                });
              }
              renderPage.push({
                pageNumber: -1,
                pageStr: '...',
                extraClass: 'ellipsis'
              });
              renderPage.push({
                pageNumber: this.totalPage,
                pageStr: this.totalPage
              });
            }else{
              // 页码翻到后面剩下几页
              for(let i = 0; i < this.innerPageLimitShow - 2; i++){
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
      get(){
        return Math.ceil(this.total / this.pageSize);
      }
    }
  },
  methods: {
    // 改变页大小
    changePageSize(){
      ;
    },
    // 翻页
    goPage(pageNumberTo, pageNumberFrom){
      pageNumberFrom = pageNumberFrom || this.innerPageNumber;

      this.innerPageNumber = pageNumberTo;

      // console.log('innerPageNumber', this.innerPageNumber);
      // console.log('from', pageNumberFrom, 'to', pageNumberTo);

      this.$emit('change-page-number', pageNumberTo, pageNumberFrom);
    },
    // 前一页
    prevPage(){
      if (this.innerPageNumber > 1) {
        this.innerPageNumber--;
        // this.goPage(this.innerPageNumber - 1, this.innerPageNumber);
      }
    },
    // 后一页
    nextPage(){
      if (this.innerPageNumber < this.totalPage) {
        this.innerPageNumberFrom = this.innerPageNumber;
        this.innerPageNumber++;
        // this.goPage(this.innerPageNumber + 1, this.innerPageNumber);
      }
    },
    /**
     * @doc 触发变化
     * @author Heanes
     * @time 2019-02-20 10:52:22 周三
     */
    emitChange() {
      this.$nextTick(() => {
        ;
      });
    }
  },
  created () {
    this.innerPageLimitShow =  this.innerPageLimitShow < 7 ? 7 : this.innerPageLimitShow;
  },
  watch: {
    innerPageNumber: {
      handler(newVal, oldVal){
        this.goPage(newVal, oldVal);
      }
    }
  }
}
</script>

<style scoped>

</style>
