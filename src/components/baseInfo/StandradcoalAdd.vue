<!-- html部分 -->
<template>
	<div>
		<div style="text-align: center;">
			<h1>添加折系煤系数</h1>
			<el-row>
				<el-col :span='12'> <el-input style='width: 300px; margin-top: 20px;' placeholder='请输入能源类别' v-model='sid'></el-input> </el-col>
				<el-col :span='12'> <el-input style='width: 300px; margin-top: 20px;' placeholder='请输入系数' v-model='energetype'></el-input> </el-col>
			</el-row>
			<el-row style='margin-top: 20px; text-align: center;'>
				<el-col :span='24'> <el-button type='primary' @click='saveAdd'>确定</el-button> <el-button @click='cancel'>取消</el-button> </el-col>
			</el-row>
		</div>
	</div>
</template>
<!-- js部分 -->
<script>
	export default {
		name:'',
		data() {
			return {
			sid:'',
			energetype:'',
			};
		},
		methods:{
			saveAdd(){
				//后端地址
					var url = this.baseUrl+"/energyStandradcoal/insert"
					// 传递给后端的数据
					var data = {sid:this.sid,energetype:this.energetype};
					this.$axios.post(url,this.$qs.stringify(data),{
						headers: {
							'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
						}
					}).then(res=>{
						// res是后端的响应
						this.$message("添加成功");
						this.$router.push({path:'StandradcoalList'});
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
