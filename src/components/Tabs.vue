<template>
	<div class="tabs">
		<ul>
			<li>
				<dl>
					<dt></dt>
					<dd>首页</dd>
				</dl>
			</li>
		</ul>
	</div>
</template>
<script>
	export default{
		name:'Tabs'
	}
</script>
<style lang="stylus" scoped>
	.tabs{
		position:relative;
		bottom:0;
		left:0;
		width:100%;
		li{
			width:25%;
		}
	}
</style>