<template>
  <div class="index">
    <div >
      <news-cell
      v-for="(item, key) in newsListShow"
      :newsDate="item"
      :key="key"
      ></news-cell>
    </div>
  </div>
</template>

<script>
import api from './../axios/api.js'
import NewsCell from './NewsCell.vue'

export default {
  name: 'index',
  data () {
    return {
      newsListShow: [],
    }
  },
  components: {
    NewsCell
  },
  created () {
    this.setNewsApi();
  },
  methods: {
    setNewsApi () {
      // newsListShow
      api.JH_news('/news/index', '')
        .then(res => {
          console.log(res);
          this.newsListShow = res.articles;
        });
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.topNav {
  width: 100%;
  background: #ed4040;
  position: fixed;
  top: 0rem;
  left: 0;
  z-index: 10;
}
.simpleNav {
  width: 100%;
  line-height: 1rem;
  overflow: hidden;
  overflow-x: auto;
  text-align: center;
  font-size: 0;
  font-family: '微软雅黑';
  white-space: nowrap;
}
.simpleNav::-webkit-scrollbar {
  height: 0px;
}
.simpleNavBar {
  display: inline-block;
  width: 1.2rem;
  color: #fff;
  font-size: 0.3rem;
}
.navActive {
  color: #000;
  border-bottom: 0.05rem solid #000;
}
.placeholder {
  width: 100%;
  height: 1rem;
}
</style>
