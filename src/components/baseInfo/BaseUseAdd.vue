<!-- html部分 -->
<template>
	<div style="text-align: center;">
		<h1>企业信息</h1>
		<el-row>
			<el-col :span='12'> <el-input style='width: 300px; margin-top: 20px;' placeholder='姓名' v-model='cname'></el-input> </el-col>
			<el-col :span='12'> <el-input style='width: 300px; margin-top: 20px;' placeholder='用户名' v-model='username'></el-input> </el-col>
		</el-row>
		<el-row>
			<el-col :span='12'> <el-input style='width: 300px; margin-top: 20px;' placeholder='密码' v-model='password'></el-input> </el-col>
			<el-col :span='12'> <el-input style='width: 300px; margin-top: 20px;' placeholder='联系的话' v-model='telno'></el-input> </el-col>
		</el-row>
		<el-row>
			<el-col :span='12'> <el-input style='width: 300px; margin-top: 20px;' placeholder='邮箱' v-model='email'></el-input> </el-col>
			<el-col :span='12'> <el-input style='width: 300px; margin-top: 20px;' placeholder='性别' v-model='sex'></el-input> </el-col>
		</el-row>
		<el-row>
			<el-col :span='12'> <el-input style='width: 300px; margin-top: 20px;' placeholder='所属企业' v-model='compid'></el-input> </el-col>
		</el-row>
		<el-row style='margin-top: 20px; text-align: center;'>
			<el-col :span='24'> <el-button type='primary' @click='saveEdit'>确定</el-button> <el-button @click='cancel'>取消</el-button> </el-col>
		</el-row>
	</div>
</template>
<!-- js部分 -->
<script>
	export default {
		name:'',
		data() {
			return {
				cname:'',
				username:'',
				password:'',
				telno:'',
				email:'',
				sex:'',
				compid:''
			};
		},
		methods:{
			//后端网址
			saveEdit(){
				var url = this.baseUrl+"/baseUser/insert"
				// 传递给后端的数据
					var data = {cname:this.cname,username:this.username,password:this.password,telno:this.telno,email:this.email,sex:this.sex,compid:this.compid};
					this.$axios.post(url,this.$qs.stringify(data),{
						headers: {
							'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
						}
					}).then(res=>{
						// res是后端的响应
						this.$message("添加成功");
						this.$router.push({path:'/BaseUserList'});
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
