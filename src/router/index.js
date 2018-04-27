import Vue from 'vue'
import Router from 'vue-router'
//按需加载
const indexPage = () => import(/*webpackChunkName:'index'*/ '@/components/pages/index.vue');
const TypePage = () => import(/*webpackChunkName:'index'*/ '@/components/pages/type.vue');
const ShopsPage = () => import(/*webpackChunkName:'index'*/ '@/components/pages/shops.vue');
const MyCnterPage = () => import(/*webpackChunkName:'index'*/ '@/components/pages/mycenter.vue');
Vue.use(Router)
export default new Router({
	 mode:'history',
	routes: [
		{
		    path: '/',
		    name: 'index',
		    component: indexPage,
		    children:[]
		},
		{
			path:'index',
			name:'index',
			component:indexPage,
			children:[]

		},
		{
			path:'type',
			name:'type',
			component:TypePage,
			children:[]
		},
		{
			path:'shops',
			name:'shops',
			component:ShopsPage,
			children:[]
		},
		{
			path:'mycenter',
			name:'mycenter',
			component:MyCnterPage,
			children:[]
		}
	]
})
