<template>
  <div>
      <h2>{{title}}</h2>
      <div ref="di" class="abc" @load="abcLoad" @click="btnClick">
        abcContent
      </div>
  </div>
</template>

<script>
export default {
    data:function(){
      return { title:"hello vue app"};
    },
    methods:{
        abcLoad:function(e){
  console.log("e:"+e);
        },
        btnClick:function(e){
            //获取document
        this.$refs.di.style.backgroundColor="blue";
        }
       
    }
}
</script>



<style >
  .abc{
        background-color: rebeccapurple;
    }
</style>