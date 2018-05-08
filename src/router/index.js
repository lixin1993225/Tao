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
		    name: 'IndexOne',
		    component: indexPage,
		    children:[]
		},
		{
			path:'/index',
			name:'IndexOne',
			component:indexPage,
			children:[]

		},
		{
			path:'/type',
			name:'TypeOne',
			component:TypePage,
			children:[]
		},
		{
			path:'/shops',
			name:'ShopsOne',
			component:ShopsPage,
			children:[]
		},
		{
			path:'/mycenter',
			name:'MycenterOne',
			component:MyCnterPage,
			children:[]
		}
	]
})
