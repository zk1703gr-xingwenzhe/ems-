<!-- html部分 -->
<template>
	<div id="app">
		<div style="text-align: left; margin-bottom: 20px;">输入年:
			<el-date-picker v-model='years' type='year' format='yyyy' placeholder='请输入年'></el-date-picker>
			<el-button @click='search'>查询</el-button>
		</div>
		<h1>港口作业量对比图  曲线图/柱状图</h1>
		<ve-line :data="chartData1"></ve-line>
	</div>
</template>
<!-- js部分 -->
<script>
	export default {
		name:'',
		data() {
			return {
				years:'2018',
				chartData1:{}
			};
		},
		methods:{
			search(){
				// 后端网址
				var url = this.baseUrl+"/devInfo/amount"
				// 传递给后端的数据
				var data = {year:this.years};
				this.$axios.post(url,this.$qs.stringify(data),{
					headers: {
						'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
					}
				}).then(res=>{
					this.chartData1 = res.data;
				})
		},
		mounted:function () {
			this.search();
		}
	},
}
</script>
<!-- css部分 -->
<style>

</style>
