<!-- html部分 -->
<template>
	<div id="app">
		<h1>子组件</h1>
		<el-button @click='fn'>打印</el-button>
	</div>
</template>
<!-- js部分 -->
<script>
	export default {
		name:'',
		data() {
			return {
				
			};
		},
		methods:{
			fn:function(){
				console.log(this.$store.state.v1);
			}
		}
	}
</script>
<!-- css部分 -->
<style>

</style>
