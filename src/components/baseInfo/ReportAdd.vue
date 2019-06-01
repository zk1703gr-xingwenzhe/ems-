<!-- html部分 -->
<template>
	<div>
		<div style="text-align: center;">
			<h1>添加报岗信息</h1>
			<el-row>
				<el-col :span='12'> <el-input style='width: 300px; margin-top: 20px;' placeholder='请输入船队名称' v-model='shipname'></el-input> </el-col>
				<el-col :span='12'> <el-input style='width: 300px; margin-top: 20px;' placeholder='请输入装载量(吨)' v-model='capacity'></el-input> </el-col>
			</el-row>
			<el-row>
				<el-col :span='12'> <el-input style='width: 300px; margin-top: 20px;' placeholder='请输入预计到港时间' v-model='planjobtime'></el-input> </el-col>
				<el-col :span='12'> <el-input style='width: 300px; margin-top: 20px;' placeholder='请输入实际到港时间' v-model='startjobtime'></el-input> </el-col>
			</el-row>
			<el-row>
				<el-col :span='12'> <el-input style='width: 300px; margin-top: 20px;' placeholder='请输入完成时间' v-model='completatime'></el-input> </el-col>
				<el-col :span='12'> <el-input style='width: 300px; margin-top: 20px;' placeholder='请输入流程' v-model='flowid'></el-input> </el-col>
			</el-row>
			<el-row>
				<el-col :span='12'> <el-input style='width: 300px; margin-top: 20px;' placeholder='请输入报岗人' v-model='reportuser'></el-input> </el-col>
				<el-col :span='12'> <el-input style='width: 300px; margin-top: 20px;' placeholder='请输入所属企业' v-model='compid'></el-input> </el-col>
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
				shipname:'',
				capacity:'',
				planjobtime:'',
				startjobtime:'',
				completatime:'',
				flowid:'',
				reportuser:'',
				compid:'',
			};
		},
		methods:{
			saveAdd(){
				var url = this.baseUrl+"/produceReport/insert"
				// 传递给后端的数据
				var data = {shipname:this.shipname,capacity:this.capacity,planjobtime:this.planjobtime,startjobtime:this.startjobtime,
							completatime:this.completatime,flowid:this.flowid,reportuser:this.reportuser,compid:this.compid};
				this.$axios.post(url,this.$qs.stringify(data),{
					headers: {
						'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
					}
				}).then(res=>{
					// res是后端的响应
					this.$message("添加成功");
					this.$router.push({path:'ReportList'});
				})
			},	
			cancel(){
				this.$router.go(-1);
			}
		},
		mounted:function(){
			// 后端网址
			var url = this.baseUrl+"/baseCompany/list"
			this.$axios.post(url,{
				headers: {
					'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
				}
			}).then(res=>{
					this.compArr=res.data;
			})
		}
	}
</script>
<!-- css部分 -->
<style>

</style>
