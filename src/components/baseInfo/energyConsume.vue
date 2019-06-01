<!-- html部分 -->
<template>
	<div id="app">
		<div style="text-align: left; margin-bottom: 20px;">请输入年:
			<el-date-picker v-model='year' type='years' value-format='yyyy' placeholder='请输入年'></el-date-picker>
			<el-button @click='search'>查询</el-button>
		</div>
		<h1>流程能耗比对比图  曲线图/柱状图</h1>
		<ve-line :data="chartData1"></ve-line>
		<h1>设备类别能耗比对比图  曲线图/柱状图</h1>
		<ve-line :data="chartData2"></ve-line>
		<h1>设备能耗比对比图  曲线图/柱状图</h1>
		<ve-line :data="chartData3"></ve-line>
		<h1>设备单位作业量耗电量对比图</h1>
		<ve-line :data="chartData4"></ve-line>
		<h1>设备单位作业量耗水量对比图</h1>
		<ve-line :data="chartData5"></ve-line>
		<h1>设备单位作业量耗油量对比图</h1>
		<ve-line :data="chartData6"></ve-line>
	</div>
</template>
<!-- js部分 -->
<script>
	export default {
		name:'',
		data() {
			return {
				years:'2018',
				chartData1:{},
				chartData2:{},
				chartData3:{},
				chartData4:{},
				chartData5:{},
				chartData6:{}
			};
		},
		methods:{
			search(){
				// 后端网址
				var url = this.baseUrl+"/energyConsume/flowConsume"
				// 传递给后端的数据
				var data = {year:this.years};
				this.$axios.post(url,this.$qs.stringify(data),{
					headers: {
						'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
					}
				}).then(res=>{
					this.chartData1 = res.data;
				})
				var url = this.baseUrl+"/energyConsume/devTypeConsume"
				// 传递给后端的数据
				var data = {year:this.years};
				this.$axios.post(url,this.$qs.stringify(data),{
					headers: {
						'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
					}
				}).then(res=>{
					this.chartData2 = res.data;
				})
				// 后端网址
				var url = this.baseUrl+"/energyConsume/devConsume"
				// 传递给后端的数据
				var data = {year:this.years};
				this.$axios.post(url,this.$qs.stringify(data),{
					headers: {
						'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
					}
				}).then(res=>{
					this.chartData3 = res.data;
				})
				// 后端网址
				var url = this.baseUrl+"/energyConsume/electricConsume"
				// 传递给后端的数据
				var data = {year:this.years};
				this.$axios.post(url,this.$qs.stringify(data),{
					headers: {
						'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
					}
				}).then(res=>{
					this.chartData4 = res.data;
				})
				// 后端网址
				var url = this.baseUrl+"/energyConsume/waterConsume"
				// 传递给后端的数据
				var data = {year:this.years};
				this.$axios.post(url,this.$qs.stringify(data),{
					headers: {
						'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
					}
				}).then(res=>{
					this.chartData5 = res.data;
				})
				// 后端网址
				var url = this.baseUrl+"/energyConsume/oilConsume"
				// 传递给后端的数据
				var data = {year:this.years};
				this.$axios.post(url,this.$qs.stringify(data),{
					headers: {
						'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
					}
				}).then(res=>{
					this.chartData6 = res.data;
				})
			}
		},
		mounted:function(){
			this.search();
		}
	}
</script>
<!-- css部分 -->
<style>

</style>
