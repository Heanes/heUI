const mixin = {
  data () {
    return {
      pageTitle: 'HeUI-vue',
      pageTitleSuffix: 'HeUI-vue'
    }
  },
  methods: {
    getPageTitle () {
      return this.pageTitle;
    },
    setPageTitle (pageTitle) {
      pageTitle = pageTitle || this.getPageTitle();
      document.title = pageTitle + ' | ' + this.pageTitleSuffix;
    }
  }
};

export default mixin;
