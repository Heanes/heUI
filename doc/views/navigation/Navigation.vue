<template>
  <div class="demo-wrap">
    <div class="page-title">
      <h1 class="title">标题</h1>
    </div>
    <div class="page-desc">
      <p>描述</p>
    </div>
    <div class="demo-group">
      <div class="demo-group__title">
        <h2 class="group-title">示例组标题</h2>
      </div>
      <div class="demo-group__desc">
        <p>示例组描述</p>
      </div>
      <div class="demo-group__content">
        <div class="demo-item">
          <div class="demo-item__title">
            <h3 class="item-title">示例项标题</h3>
          </div>
          <div class="demo-item__desc">
            <p>示例项描述</p>
          </div>
          <div class="demo-item__content">
            <he-navigation :nav-list="navList"></he-navigation>
          </div>
        </div>
        <div class="demo-item">
          <div class="demo-item__title">
            <h3>示例项标题</h3>
          </div>
          <div class="demo-item__desc">
            <p>示例项描述</p>
          </div>
          <div class="demo-item__content">
            <p>示例内容</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'navigation',
  data() {
    return {
      navList: [{"id": 1, "name": "首页", "link": "/", "icon": {"type": "class", "resource": "fas fa-home"}, "children": []}, {"id": 2, "name": "技术", "link": "/articleCategory/technology.html", "icon": {"type": "class", "resource": "fas fa-tools"}, "children": [{"id": 1, "name": "后端", "link": "/articleCategory/backend.html"}, {"id": 1, "name": "前端", "link": "/articleCategory/frontend.html"}, {"id": 1, "name": "运维", "link": "/articleCategory/operation.html", "icon": {"type": "class", "resource": "fas fa-terminal"}}, {"id": 1, "name": "客户端", "link": "/articleCategory/operation.html"}]}, {"id": 3, "name": "专栏", "link": "/special/index.html", "icon": {"type": "class", "resource": "fas fa-feather-alt"}, "children": [{"id": 1, "name": "写作", "link": "/special/writing.html"}, {"id": 1, "name": "日记", "link": "/special/diary.html"}]}, {
        "id": 3,
        "name": "阅读",
        "link": "/read/index.html",
        "icon": {"type": "class", "resource": "fas fa-book-reader"},
        "children": [{"id": 1, "name": "技术", "link": "/read/technology.html"}, {"id": 1, "name": "文学", "link": "/read/literature.html"}, {"id": 1, "name": "历史", "link": "/read/history.html"}]
      }, {"id": 1, "name": "文章归档", "link": "/articleArchive/index.html", "icon": {"type": "class", "resource": "fas fa-file-archive"}}, {"id": 1, "name": "关于", "link": "/about.html", "icon": {"type": "class", "resource": "fas fa-info-circle"}}]
    }
  }
}
</script>

<style scoped>

</style>
