import vue from "vue";
import app from "./vue/app.vue";
new vue({
    el:"#app",
    template:"<app/>",
    components:{
        app
    }
})