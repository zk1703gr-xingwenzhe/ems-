<!-- html部分 -->
<template>
	<div style='text-align: center;'>
		<h1>添加流程信息</h1>
		<el-row>
			<el-col :span='12'> <el-input style='width: 300px; margin-top: 20px;' placeholder='请输入设备名称' v-model='flowname'></el-input> </el-col>
			<el-col :span='12'> <el-input style='width: 300px; margin-top: 20px;' placeholder='斗轮机' v-model='dljid'></el-input> </el-col>
		</el-row>
		<el-row>
			<el-col :span='12'> <el-input style='width: 300px; margin-top: 20px;' placeholder='装船机' v-model='zcjid'></el-input> </el-col>
			<el-col :span='12'> <el-input style='width: 300px; margin-top: 20px;' placeholder='皮带机' v-model='pdjid'></el-input> </el-col>
		</el-row>
		<el-row>
			<el-col :span='12'> <el-input style='width: 300px; margin-top: 20px;' placeholder='所属企业' v-model='compid'></el-input> </el-col>
			<el-col :span='12'> <el-input style='width: 300px; margin-top: 20px;' placeholder='操作' v-model='operation'></el-input> </el-col>
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
				flowname:'',
				dljid:'',
				zcjid:'',
				pdjid:'',
				compid:'',
				operation:'',
			};
		},
		methods:{
				saveAdd(){
					var url = this.baseUrl+"/baseFlow/insert"
					// 传递给后端的数据
					var data = {flowname:this.flowname,dljid:this.dljid,zcjid:this.zcjid,pdjid:this.pdjid,compid:this.compid,operation:this.operation};
					this.$axios.post(url,this.$qs.stringify(data),{
						headers: {
							'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
						}
					}).then(res=>{
						// res是后端的响应
						this.$message("添加成功");
						this.$router.push({path:'BaseflowList'});
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
