<template>
	<div class="tabs container">
		<ul class="clearfloat">
			<li class="" v-for="item in tavlists" :class="[filter===item.ClickNum?'active':'']" :key="item.ClickNum" @click="ClickTabs(item.ClickNum)">
				<router-link :to="item.link">
					<dl>
						<dt >
							<img :src="filter===item.ClickNum?item.CheImg:item.NoCheImg" alt="">
						</dt>
						<dd >{{item.tab}}</dd>
					</dl>					
				</router-link>	
			</li>
		</ul>
	</div>
</template>
<script>
	import indexCheImg from '../assets/images/home1.png' 
	import typeCheImg from '../assets/images/fenlei1.png' 
	import shopsCheImg from '../assets/images/daohang1.png' 
	import mycenterCheImg from '../assets/images/mycenter1.png' 
	import indexNoCheImg from '../assets/images/home2.png' 
	import typeNoCheImg from '../assets/images/fenlei2.png' 
	import shopsNoCheImg from '../assets/images/daohang2.png' 
	import mycenterNoCheImg from '../assets/images/mycenter2.png' 
	export default{
		name:'Tabs',
		created(){
			this.$router.afterEach((to,from)=>{
				console.log(this.$route)
				this.filter = this.$route.path.split('/')[1]||'index'
			})
		},
		data(){
			return {
				tavlists:[
					{tab:'首页',link:'/index',ClickNum:'index',CheImg:indexCheImg,NoCheImg:indexNoCheImg},
					{tab:'分类',link:'/type',ClickNum:'type',CheImg:typeCheImg,NoCheImg:typeNoCheImg},
					{tab:'店铺',link:'/shops',ClickNum:'shops',CheImg:shopsCheImg,NoCheImg:shopsNoCheImg},
					{tab:'我的',link:'/mycenter',ClickNum:'mycenter',CheImg:mycenterCheImg,NoCheImg:mycenterNoCheImg},
				],
				filter:''
			}
		},
		methods:{
			ClickTabs:function(e){
				this.filter = e
			}
		}
	}
</script>
<style lang="stylus" scoped>
	.active dd
		color:#5f3104!important
	.tabs
		position:fixed;
		z-index:10
		bottom:0;
		left:0;
		width:100%;
		height:0.49rem;
		padding:0.03rem 0
		background:#fff;
		li
			float:left
			width:25%;
			dl
				display:flex
				flex-flow:column wrap;
				align-items:center
				dt
					width:0.24rem;
					height:0.24rem;
					background:url(../assets/images/home1.png) no-repeat center
					img
						width:0.24rem;
						height:0.24rem;
					background-size:cover;
				dd
					font-size:0.14rem;
					color:rgba(18,18,18,0.4)
			&:nth-child(2) dt
				background:url(../assets/images/fenlei2.png) no-repeat center
				background-size:cover;
			&:nth-child(3) dt
				background:url(../assets/images/daohang2.png) no-repeat center
				background-size:cover;
			&:nth-child(4) dt
				background:url(../assets/images/mycenter2.png) no-repeat center
				background-size:cover;
</style>