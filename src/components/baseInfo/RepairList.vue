<!-- html部分 -->
<template>
	<div>
		<h1 style="text-align: center;">维修信息</h1>
		<div style="text-align: left; margin: 0 0 20px 50px;">
			<el-input style='width: 160px;' placeholder='设备名称' v-model='search_compname'></el-input>
			<el-button @click='search'>查询</el-button>
			<el-button @click='add'>添加</el-button>
		</div>
		<center>
			<el-table>
				<el-table-column prop='devid' label='ID' width='180'></el-table-column>
				<el-table-column prop='cause' label='维修原因' width='220'></el-table-column>
				<el-table-column prop='cost' label='费用' width='180'></el-table-column>
				<el-table-column prop='repairdate' label='维修日期'></el-table-column>
				<el-table-column label='操作' width='230'>
					<templace slot-scope='scope'>
						<el-button size='mini' @click='update(scope.row)'>编辑</el-button>
						<el-button size='mini' type='danger' @click='del(scope.row.compid)'>删除</el-button>
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
				search_compname:'',
				list:[],
			};
		},
		methods:{
			update(row){
						// 跳转
						this.$router.push({name:'RepairList',params:{row:row}})
					},
					del(compid){
						// 后端网址
						var url = this.baseUrl+"/produceRepair/delete"
						// 传递给后端的数据
						var data = {typeid:typeid};
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
					this.$router.push({path:'RepairList'})
				},
				search(){
					// 后端网址
						var url = this.baseUrl+"/produceRepair/search"
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
				},
				mounted:function() {
					this.search();
				}
		},
	}
</script>
<!-- css部分 -->
<style>

</style>