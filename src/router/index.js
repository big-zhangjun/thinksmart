import Vue from "vue";
import VueRouter from "vue-router";
import layout from "../layout";
let vue = new Vue()
Vue.use(VueRouter);

const routes = [
  {
    path: "*",
    redirect: "/home"
  },
  {
    path: "/",
    name: "",
    redirect: "/home",
    component: layout,
    children: [
      {
        path: "home",
        component: require("@/views/Home").default
      },
      {
        path: "mtr",
        component: require("@/views/Mtr").default
      },
      {
        path: "zoom",
        component: require("@/views/Zoom").default
      },
      {
        path: "faqs",
        component: require("@/views/Faqs.vue").default
      }
    ]
  }
];
const router = new VueRouter({
  routes
});
router.beforeEach((to, fr, next) => {
  let flag = localStorage.getItem("isHome")
  if(["/mtr", "/zoom"].includes(to.path) && fr.path != "/" && !flag) {
    vue.$EventBus.$emit("handleRouteChange", to.path)
    setTimeout(()=>{
      next();
    }, 750)
  } else {
    console.log('???');
    next();
  }
  localStorage.removeItem("isHome")
});
export default router;
