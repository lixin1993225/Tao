import Vue from 'vue'
import Router from 'vue-router'
//按需加载
const indexPage = () => import(/*webpackChunkName:'index'*/ '@/components/pages/index.vue')
Vue.use(Router)
export default new Router({
	routes: [
		{
		    path: '/',
		    name: 'index',
		    component: indexPage,
		    children:[]
		}
	]
})
