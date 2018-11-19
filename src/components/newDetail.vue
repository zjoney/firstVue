<template>
<div class="detailsModel"><h1>{{id}}</h1>{{kmodel.detail}}</div>
</template>
<script>
import api from './../axios/api.js'
export default {
  data () {
    return {
      id: this.$route.params.id,
      kmodel: {}
    }
  },
  methods: {
    getDetails () {
      let _this = this;
      api.JH_news('/news/details/index', _this.id)
        .then(res => {
          _this.kmodel = res.newArticleObject;
        });
    }
  },
  mounted () {
    // this.getDetails();
  },
  created () {
    console.log('come in');
    this.getDetails()
  }
}
</script>
<style scoped>
.detailsModel {
  width: 80%;
  margin: 0 auto;
  font-size: 0.28rem;
}
</style>
