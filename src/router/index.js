import Vue from 'vue'
import Router from 'vue-router'
//按需加载
const indexPage = () => import(/*webpackChunkName:'index'*/ '@/components/pages/index.vue');
const indexOne = () => import(/*webpackChunkName:'indexone'*/ '@/components/pages/onepage/indexone.vue');
const indexTwo = () => import(/*webpackChunkName:'indexsec'*/ '@/components/pages/secondpages/indexsecond.vue');
const TypePage = () => import(/*webpackChunkName:'index'*/ '@/components/pages/type.vue');
const ShopsPage = () => import(/*webpackChunkName:'index'*/ '@/components/pages/shops.vue');
const MyCnterPage = () => import(/*webpackChunkName:'index'*/ '@/components/pages/mycenter.vue');
//非按需加载
// const indexPage = import('@/components/pages/index.vue');
// const TypePage = import('@/components/pages/type.vue');
// const ShopsPage = import('@/components/pages/shops.vue');
// const MyCnterPage = import('@/components/pages/mycenter.vue');
Vue.use(Router)
export default new Router({
	mode:'history',
	routes: [
		{
		    path: '/',
		    name: 'IndexOne',
		    component: resolve=>require(['../components/pages/index'],resolve),//indexPage,
		    children:[
		    	{
		    		path:'',
		    		name:'indexone',
		    		component:indexOne
		    	},
		    ]
		},
		{
			path:'/index',
			name:'IndexOne',
			component:resolve=>require(['../components/pages/index'],resolve),//indexPage,
			children:[
		    	{
		    		path:'',
		    		name:'indexone',
		    		component:indexOne
		    	},
		    	{
		    		path:'secondpage',
		    		name:'indextwo',
		    		component:indexTwo
		    	},
			]

		},
		{
			path:'/type',
			name:'TypeOne',
			component:resolve=>require(['../components/pages/type'],resolve),//TypePage,
			children:[]
		},
		{
			path:'/shops',
			name:'ShopsOne',
			component:resolve=>require(['../components/pages/shops'],resolve),//ShopsPage,
			children:[]
		},
		{
			path:'/mycenter',
			name:'MycenterOne',
			component:resolve=>require(['../components/pages/mycenter'],resolve),//MyCnterPage,
			children:[]
		}
	]
})
