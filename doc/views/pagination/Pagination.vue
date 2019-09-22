<template>
  <div class="demo-wrap demo-pagination">
    <div class="page-title">
      <h1 class="title">Pagination 分页</h1>
    </div>
    <div class="page-desc">
      <p>分页组件。</p>
      <h2>特点</h2>
      <ol>
        <li>展示页码</li>
        <li>页码大小自定义</li>
        <li>前一页、后一页内容自定义</li>
      </ol>
    </div>
    <div class="demo-group">
      <div class="demo-group__title">
        <h2>常规样式</h2>
      </div>
      <div class="demo-group__desc">
        <p>常规样式</p>
      </div>
      <div class="demo-group__content">
        <div class="demo-item">
          <div class="demo-item__title">
            <h3>页数较少时</h3>
          </div>
          <div class="demo-item__desc">
            <p>页数较少时，可完整显示所有页码</p>
          </div>
          <div class="demo-item__content">
            <he-pagination :total="60"></he-pagination>
          </div>
        </div>
        <div class="demo-item">
          <div class="demo-item__title">
            <h3>页数较多时</h3>
          </div>
          <div class="demo-item__desc">
            <p>页数较多时，部分显示，中间用省略号展示</p>
          </div>
          <div class="demo-item__content">
            <he-pagination :total="120"></he-pagination>
          </div>
        </div>
      </div>
    </div>

    <div class="demo-group">
      <div class="demo-group__title">
        <h2>紧致样式</h2>
      </div>
      <div class="demo-group__desc">
        <p>紧致样式，节省展示空间</p>
      </div>
      <div class="demo-group__content">
        <div class="demo-item">
          <div class="demo-item__content">
            <he-pagination :total="120" tight></he-pagination>
          </div>
        </div>
      </div>
    </div>

    <div class="demo-group">
      <div class="demo-group__title">
        <h2>带有边框的分页</h2>
      </div>
      <div class="demo-group__desc">
        <p>页码带有边框</p>
      </div>
      <div class="demo-group__content">
        <div class="demo-item">
          <div class="demo-item__content">
            <he-pagination :total="120" border></he-pagination>
          </div>
        </div>
      </div>
    </div>

    <div class="demo-group">
      <div class="demo-group__title">
        <h2>带有背景色的分页</h2>
      </div>
      <div class="demo-group__desc">
        <p>页码带有背景色</p>
      </div>
      <div class="demo-group__content">
        <div class="demo-item">
          <div class="demo-item__content">
            <he-row class="mg-b-20">
              <he-pagination :total="120" background></he-pagination>
            </he-row>
            <he-row>
              <he-pagination :total="120" tight background></he-pagination>
            </he-row>
          </div>
        </div>
      </div>
    </div>

    <div class="demo-group">
      <div class="demo-group__title">
        <h2>自定义页码链接</h2>
      </div>
      <div class="demo-group__desc">
        <p>自定义页面链接，适用于分页信息显示在url中时</p>
      </div>
      <div class="demo-group__content">
        <div class="demo-item">
          <div class="demo-item__content">
            <he-row class="mg-b-20">
              <he-pagination :total="120" :page-number="pageData.pageNumber" :page-link="customPageLink" background></he-pagination>
            </he-row>
            <he-row>
              <!--<he-pagination :total="120" :page-link="pageNumber" background page-link-target="_blank"></he-pagination>-->
            </he-row>
          </div>
        </div>
      </div>
    </div>

    # 设置最大页码按钮数 2019-07-31 00:10:49 周三
    # 省略符支持跨大量分页跳转 2019-07-31 00:10:42 周三

    <div class="demo-group">
      <div class="demo-group__title">
        <h2>更多操作</h2>
      </div>
      <div class="demo-group__desc">
        <p>可以附加更多快捷操作</p>
      </div>
      <div class="demo-group__content">
        <div class="demo-item">
          <div class="demo-item__desc">
            <p>调整每页显示条数</p>
          </div>
          <div class="demo-item__content">
            <he-pagination :total="120" background
               :page-sizes="[30, 40]"
            ></he-pagination>
          </div>
        </div>
      </div>
    </div>

    <div class="demo-group">
      <div class="demo-group__title">
        <h2>当只有一页时隐藏分页</h2>
      </div>
      <div class="demo-group__desc">
        <p>页码带有背景色</p>
      </div>
      <div class="demo-group__content">
        <div class="demo-item">
          <div class="demo-item__content">
            <he-row>
              <he-button @click="hiddenWhenSinglePage = !hiddenWhenSinglePage">切换</he-button>
            </he-row>
            <he-pagination :total="1" :hide-when-one-page="hiddenWhenSinglePage"></he-pagination>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>

import '@/assets/css/demo/demo.scss';

export default {
  name: 'Pagination',

  data(){
    return {
      pageData: {
        pageNumber: parseInt(this.$route.params.pageNumber || 1),
        pageSize: 10,
        total: 127
      },
      hiddenWhenSinglePage: false
    }
  },
  methods: {
    customPageLink(pageNumber){
      return `http://localhost:8081/#/component/pagination/p/${pageNumber}`;
    }
  },

  components: {
  },
  watch: {
    $route: {
      immediate: true,
      handler (val) {
        this.pageData.pageNumber = parseInt(val.params.pageNumber || 1);
      }
    }
  },
  created () {
  }
}
</script>

<style scoped>

</style>
