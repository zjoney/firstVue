<template>
  <div class="index">
   <input class="input" type="text" v-model="name" placeholder="name"/>
   <input class="input" type="text" v-model="password" placeholder="PassWord">
   <div class="submit" @click="submit">提交</div>
  </div>
</template>

<script>
import api from './../axios/api.js'

export default {
  name: 'TestPost',
  data () {
    return {
      name:'',
      password:''
    }
  },
  created () {
    console.log('create')
  },
  methods: {
    submit(){
      console.log('submit')
      var data={}
      data.name=this.name
      data.password=this.password
      api.JH_news('/news/posttest', data)
        .then(res => {
          console.log('success')
          console.log(res);
          this.newsListShow = res.articles;
      });
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.input {
  display: block;
  width: 86%;
  height: 60px;
  background: #f1f1f1;
  border:1px solid #ccc;
  border-radius: 16px;
  margin: 40px auto;
  color: #000;
  line-height: 60px;text-align: center;
}
.submit{
  width: 50%;height: 40px;margin: 40px auto;font-size:18px;
  line-height: 40px;text-align: center;color: #fff;
  border-radius: 16px;background:blue;
}
</style>
