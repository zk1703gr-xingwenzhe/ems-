<!-- html部分 -->
<template>
	<div style="text-align: center;">
		<h1>添加能耗信息</h1>
		<el-row>
			<el-col :span='12'> <el-input style='width: 300px; margin-top: 20px;' placeholder='请输入设备名称' v-model='consumeid'></el-input> </el-col>
			<el-col :span='12'> <el-input style='width: 300px; margin-top: 20px;' placeholder='请输入电耗' v-model='electric'></el-input> </el-col>
		</el-row>
		<el-row>
			<el-col :span='12'> <el-input style='width: 300px; margin-top: 20px;' placeholder='请输入水耗' v-model='water'></el-input> </el-col>
			<el-col :span='12'> <el-input style='width: 300px; margin-top: 20px;' placeholder='请输入油耗' v-model='oil'></el-input> </el-col>
		</el-row>
		<el-row style='margin-top: 20px; text-align: center;'>
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
				consumeid:'',
				electric:'',
				water:'',
				oil:'',
			};
		},
		methods:{
			saveAdd(){
				//后端地址
					var url = this.baseUrl+"/energyConsume/insert"
					// 传递给后端的数据
					var data = {consumeid:this.consumeid,electric:this.electric,water:this.water,oil:this.oil};
					this.$axios.post(url,this.$qs.stringify(data),{
						headers: {
							'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
						}
					}).then(res=>{
						// res是后端的响应
						this.$message("添加成功");
						this.$router.push({path:'ConsumeList'});
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
