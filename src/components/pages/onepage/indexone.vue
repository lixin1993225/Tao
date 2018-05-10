<template>
	<div class="onepage">
		<header class="topsearch">
			<ul class="clearfloat">
				<li class="searchimg">
					<img src="../../../assets/images/search.png" alt="">
				</li>
				<li>
					<h4>紫陶汇</h4>
				</li>
			</ul>
		</header>
	</div>
</template>
<script>
	export default {
		name:'indexone',
		data(){
			return {

			}
		}
	}
</script>
<style lang="stylus" scoped>
	.onepage
		width:100%;
		height:100%;
		.topsearch
			width:100%;
			height:0.44rem;
			background:#5F3104;
			ul
				padding:0 0.12rem;
				width:100%;
				height:100%;
				display:flex;
				flex-flow:row nowrap;
				align-items:center
				li
					&:nth-child(1)
						display:flex;
						justify-cotent:flex-start;
						width:20%
						img
							width:0.16rem;
							height:0.16rem;
					&:nth-child(2)
						width:80%;
						margin-left:-10%
						color:#fff
						font-size:0.17rem;
						font-weight:bold;

			
</style>