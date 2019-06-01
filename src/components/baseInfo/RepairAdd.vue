<!-- html部分 -->
<template>
	<div style="text-align: center;">
		<h1>添加维修信息</h1>
		<el-row>
			<el-col :span='12'> <el-input style='width: 300px; margin-top: 20px;' placeholder='请输入设备名称' v-model='dev'></el-input> </el-col>
			<el-col :span='12'> <el-input style='width: 300px; margin-top: 20px;' placeholder='请输入故障原因' v-model='cause'></el-input> </el-col>
		</el-row>
		<el-row>
			<el-col :span='12'> <el-input style='width: 300px; margin-top: 20px;' placeholder='请输入报告人' v-model='cost'></el-input> </el-col>
			<el-col :span='12'> <el-input style='width: 300px; margin-top: 20px;' placeholder='请输入故障时间' v-model='repairdate'></el-input> </el-col>
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
				dev:'',
				cause:'',
				cost:'',
				repairdate:''
			};
		},
		methods:{
			saveAdd(){
				var url = this.baseUrl+"/produceRepair/insert"
				// 传递给后端的数据
				var data = {typename:this.typename};
				this.$axios.post(url,this.$qs.stringify(data),{
					headers: {
						'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
					}
				}).then(res=>{
					// res是后端的响应
					this.$message("添加成功");
					this.$router.push({path:'RepairAdd'});
				})
			},	
			cancel(){
				this.$router.go(-1);
			}
		}
	}
</script>
<!-- css部分 -->
<style>

</style>
