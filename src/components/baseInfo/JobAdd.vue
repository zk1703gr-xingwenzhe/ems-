<!-- html部分 -->
<template>
	<div style="text-align: center;">
		<h1>添加作业信息</h1>
		<el-row>
			<el-col :span='12'> <el-input style='width: 300px; margin-top: 20px;' placeholder='请输入设备名称' v-model='jobid'></el-input> </el-col>
			<el-col :span='12'> <el-input style='width: 300px; margin-top: 20px;' placeholder='请输入开始作业时间' v-model='starttime'></el-input> </el-col>
		</el-row>
		<el-row>
			<el-col :span='12'> <el-input style='width: 300px; margin-top: 20px;' placeholder='请输入开始作业时间' v-model='completetime'></el-input> </el-col>
			<el-col :span='12'> <el-input style='width: 300px; margin-top: 20px;' placeholder='请输入运行时长'v-model='duration'></el-input> </el-col>
		</el-row>
		<el-row>
			<el-col :span='12'> <el-input style='width: 300px; margin-top: 20px;' placeholder='请输入作业量'v-model='amount'></el-input> </el-col>
			<el-col :span='12'> <el-input style='width: 300px; margin-top: 20px;' placeholder='请输入报岗id'v-model='reportid'></el-input> </el-col>
		</el-row>
		<el-row>
			<el-col :span='24'> <el-button type='primary' @click='saveAdd'>确定</el-button> <el-button @click='cancel'>取消</el-button> </el-col>
		</el-row>
	</div>
</template>
<!-- js部分 -->
<script>
	export default {
		name:'',
		data() {
			return {
				devid:'',
				starttime:'',
				completetime:'',
				duration:'',
				amount:'',
				reportid:'',
			};
		},
		methods:{
			saveAdd(){
					var url = this.baseUrl+"/produceJob/insert"
					// 传递给后端的数据
					var data = {devid:this.devid,starttime:this.starttime,completetime:this.completetime,
					duration:this.duration,amount:this.amount,reportid:this.reportid};
					this.$axios.post(url,this.$qs.stringify(data),{
						headers: {
							'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
						}
					}).then(res=>{
						// res是后端的响应
						this.$message("添加成功");
						this.$router.push({path:'JobList'});
					})
				},	
				cancel(){
					this.$router.go(-1);
				}
			},
			mounted:function(){
				
			}
		}
</script>
<!-- css部分 -->
<style>

</style>
