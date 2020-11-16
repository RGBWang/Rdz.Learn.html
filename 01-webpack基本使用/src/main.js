const a=require("./aaa.js");
const b=require("./bbb.js");

import Vue from 'vue';
require("./css/body.css");
console.log("hello webpack");
a.aaa+=1;
console.log(a.aaa);


const app=new Vue({
el:"#app",
data:{
    message:"hello from vue"
}

});