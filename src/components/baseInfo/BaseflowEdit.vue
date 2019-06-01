<!-- html部分 -->
<template>
	<div style="text-align: center;">
		<h1>修改流程信息</h1>
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
				flowname:'',
				dljid:'',
				zcjid:'',
				pdjid:'',
				compid:'',
				operation:''
			};
		},
		methods:{
			saveEdit(){
				// 后端网址
				var url = this.baseUrl+"/baseFlow/update"
				// 传递给后端的数据
				var data = {flowname:this.flowname,dljid:this.dljid,zcjid:this.zcjid,pdjid:this.pdjid,compid:this.compid,operation:this.operation};
				this.$axios.post(url,this.$qs.stringify(data),{
					headers: {
						'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
					}
				}).then(res=>{
					// res是后端的响应
					this.$message("更新成功");
					this.$router.push({path:'BaseflowList'});
				})
		},	
		cancel(){
			this.$router.go(-1);
		}
	},
		mounted:function(){
			//接收路由传递的数据
			var row = this.$router.params.row;
			//回显
			this.flowname = row.flowname;
			this.dljid = row.dljid;
			this.zcjid = row.zcjid;
			this.pdjid = row.pdjid;
			this.compid = row.compid;
			this.operation = row.operation;
		}
	}
</script>
<!-- css部分 -->
<style>

</style>
