<template>
  <div class="content-height-high">
    <p>这里的内容高度很长时，超出父级高度时，出现滚动条</p>
  </div>
</template>

<script>
export default {
  name: 'ScrollbarInnerContent'
}
</script>

<style>
  .content-height-high{
    height: 200px;
    color: #888;
  }
</style>
