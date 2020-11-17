import VueRouter from 'vue-router'
import Vue from 'vue'

var home =()=> import('../components/home.vue');
var brandpage =()=> import('../components/brandpage.vue');
var aboutpage =()=> import('../components/aboutpage.vue');

Vue.use(VueRouter);
console.log("VueRouter:"+VueRouter);
const routes=[
    {
        path:"",
        redirect:"/home"
    },
    {
        path:"/home",
         component:home
    },
    {
        path:"/brandpage",
         component:brandpage
    },
    {
        path:"/aboutpage",
         component:aboutpage
    },

];
export default new VueRouter({
    routes,
    mode:"history"
});