<!-- html部分 -->
<template>
	<div>
		<h1 style="text-align: center;">折标煤系数</h1>
		<div style="text-align: left; margin: 0 0 20px 50px;">
			<el-input style='width: 160px; margin-top: 20px;' placeholder='折标煤系数信息' v-model='search_sid'></el-input>
			<el-button @click='search'>查询</el-button>
			<el-button @click='add'>添加</el-button>
		</div>
		<center>
			<el-table :data='list'>
				<el-table-column prop='sid' label='ID' width='120'></el-table-column>
				<el-table-column prop='energetype' label='能源类别' width='120'></el-table-column>
				<el-table-column prop='ratio' label='系数' width='120'></el-table-column>
				<el-table-column label='操作' width='230'>
					<templace slot-scope='scope'>
						<el-button size='mini' @click='update(scope.row)'>编辑</el-button>
						<el-button size='mini' type='danger' @click='del(scope.row.sid)'>删除</el-button>
					</templace>
				</el-table-column>
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
				search_sid:'',
				list:[]
			};
		},
		methods:{
			update(row){
						// 跳转
						this.$router.push({path:'ReportEdit',params:{row:row}})	
					},
					del(sid){
						// 后端网址
						var url = this.baseUrl+"/energyStandradcoal/delete"
						// 传递给后端的数据
						var data = {sid:sid};
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
					this.$router.push({path:'StandradcoalAdd'})
				},
				search(){
					// 后端网址
						var url = this.baseUrl+"/energyStandradcoal/search"
						// 传递给后端的数据
						var data = {sid:this.search_sid};
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
