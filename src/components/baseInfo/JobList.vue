<!-- html部分 -->
<template>
	<div>
		<h1 style="text-align: center;">作业信息</h1>
		<div style="text-align: left; margin: 0 0 20px 50px;">
			<el-input style='width: 160px;' placeholder='作业信息' v-model='search_jobid'></el-input>
			<el-button @click='search'>查询</el-button>
			<el-button @click='add'>添加</el-button>
		</div>
		<center>
			<el-table :data='list'>
				<el-table-column prop='devid' label='ID' width='120'></el-table-column>
				<el-table-column prop='starttime' label='开始时间' width='160'></el-table-column>
				<el-table-column prop='completetime' label='结束时间' width='160'></el-table-column>
				<el-table-column prop='duration' label='运行时长' width='160'></el-table-column>
				<el-table-column prop='amount' label='作业量' width='160'></el-table-column>
				<el-table-column prop='reportid' label='报岗id' width='160'></el-table-column>
			</el-table>
		</center>
	</div>
</template>
<!-- js部分 -->
<script>
	export default {
		name:'',
		data() {
			return {
				search_jobid:'',
				list:[]
			};
		},
		methods:{
			update(){
						// 跳转
						this.$router.push({name:'JobEdit',params:{row:row}})
					},
					del(typeid){
						// 后端网址
						var url = this.baseUrl+"/produceJob/delete"
						// 传递给后端的数据
						var data = {jobid:search_jobid};
						this.$axios.post(url,this.$qs.stringify(data),{
							headers: {
								'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
							}
						}).then(res=>{
							// res是后端的响应
							this.$message("删除成功")
							this.search();
					})
				},
				add(){
					// 路由跳转
					this.$router.push({path:'JobAdd'})
				},
				search(){
					// 后端网址
						var url = this.baseUrl+"/produceJob/search"
						// 传递给后端的数据
						var data = {typename:this.search_typename};
						this.$axios.post(url,this.$qs.stringify(data),{
							headers: {
								'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
							}
						}).then(res=>{
							//res是后端的响应
							this.list = res.data;
						})
				}
				
			},
			mounted:function() {
				
				this.search()
			}
		}
</script>
<!-- css部分 -->
<style>

</style>
