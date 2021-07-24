/*
 * @Author: 唐云 
 * @Date: 2021-07-24 14:43:12 
 * @Last Modified by:   唐云 
 * @Last Modified time: 2021-07-24 14:43:12 
 入口文件
 */
<template>
  <div 
    v-loading.fullscreen.lock="loading" 
    id="app" 
    element-loading-text="加载中..."
  >
    <router-view v-if="!loaded" />
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      loaded: true
    }
  },
  computed: {
    loading() {
      return this.$store.state.app.loading
    }
  },
  mounted() {
    this.init().then(() => {
      this.loaded = false
      console.log(this.$store.state)
    })
  },
  methods: {
    async init() {
      // await this.$store.dispatch('common/getAllMbdata')
      // await this.$store.dispatch('common/getExamOrgTree')
      // await this.$store.dispatch('common/getExamPlanList')
      // await this.$store.dispatch('common/getApplicationLisst')
      // await this.$store.dispatch('common/getRoleTypeList')
    }
  }
}
</script>
