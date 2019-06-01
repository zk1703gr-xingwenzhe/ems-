<!-- html部分 -->
<template>
	<div>
		<h1 style="text-align: center;">流程信息</h1>
		<div style="text-align: left; margin: 0 0 20px 50px;">
			<el-input style='width: 160px;' placeholder='公司名称' v-model='search_compname'></el-input>
			<el-input style='width: 160px;' placeholder='行业' v-model='search_industry'></el-input>
			<el-button @click='search'>查询</el-button>
			<el-button @click='add'>添加</el-button>
		</div>
		<center>
			<el-table :data='list'>
				<el-table-column prop='flowid' label='ID' width='80px'></el-table-column>
				<el-table-column prop='flowname' label='设备名称' width='120px'></el-table-column>
				<el-table-column prop='dljid' label='斗轮机' width='120px'></el-table-column>
				
				<el-table-column prop='zcjid' label='装船机' width='120px'></el-table-column>
				<el-table-column prop='pdjid' label='皮带机' width='120px'></el-table-column>
				<el-table-column prop='compid' label='所属企业' width='180px'></el-table-column>
				<el-table-column label='操作' width='230px'>
					<template slot-scope='scope'>
						<el-button size='mini' @click='update(scope.row)'>编辑</el-button>
						<el-button size='mini' type='parmary' @click='del(scope.row.compid)'>删除</el-button>
					</template>
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
				search_industry:'',
				list:[],
			};
		},
		methods:{
			update(row){
				//跳转
				this.$router.push({path:'BaseflowEdit',params:{row:row}})
			},
			del(compid){
				// 后端网址
				var url = this.baseUrl+"/baseFlow/delete"
				// 传递给后端的数据
				var data = {compid:compid};
				this.$axios.post(url,this.$qs.stringify(data),{
					headers: {
						'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
					}
				}).then(res=>{
					// res是后端的响应
					this.$message("删除成功");
				})
			},
			add(){
				// 路由跳转
				this.$router.push({path:'/BaseflowAdd'})
			},
			search(){
				// 后端网址
				var url = this.baseUrl+"/baseFlow/search"
				// 传递给后端的数据
				var data = {compname:this.search_compname,industry:this.search_industry};
				this.$axios.post(url,this.$qs.stringify(data),{
					headers: {
						'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
					}
				}).then(res=>{
					this.list = res.data;
				})
			}
		},
		mounted:function(){
			var url = this.baseUrl+"/baseFlow/list"
			// 传递给后端的数据
			this.$axios.post(url,{
				headers: {
					'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
				}
			}).then(res=>{
				this.list = res.data;
			})
			this.search();
		}
	}
</script>
<!-- css部分 -->
<style>

</style>
