<!-- html部分 -->
<template>
	<div>
		<h1 style="text-align: center;">人员信息</h1>
		<div style="text-align: left; margin: 0 0 20px 50px;">
			<el-input style='width: 160px;' placeholder='公司名称' v-model='search_compname'></el-input>
			<el-input style='width: 160px;' placeholder='行业' v-model='search_industry'></el-input>
			<el-button @click='search'>查询</el-button>
			<el-button @click='add'>添加</el-button>
		</div>
		<center>
			<el-table :data='list'>
				<el-table-column prop="userid" label="ID" width="80"></el-table-column>
				<el-table-column prop="cname" label="姓名" width="120"></el-table-column>
				<el-table-column prop="username" label="用户名" width="120"></el-table-column>
				<el-table-column prop="password" label="密码" width="120"></el-table-column>
				<el-table-column prop="telno" label="联系电话" width="180"></el-table-column>
				<el-table-column prop="email" label="邮箱" width="180"></el-table-column>
				<el-table-column prop="sex" label="性别" width="180"></el-table-column>
				<el-table-column prop="baseCompany.compname" label="所属企业" width="180"></el-table-column>
				<el-table-column label="操作" width="230">
				<template slot-scope="scope">
					<el-button size='mini' @click='update(scope.row)'>编辑</el-button>
					<el-button size='mini' type='danger' @click='del(scope.row.compid)'>删除</el-button>
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
				list:[]
			};
		},
		methods:{
			update(row){
				//跳转
				this.$router.push({path:'BaseUser',params:{row:row}})
			},
			del(compid){
				// 后端网址
				var url = this.baseUrl+"/baseUser/delete"
				// 传递给后端的数据
				var data = {userid:compid};
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
				this.$router.push({path:'/BaseUseAdd'})
			},
			search(){
				// 后端网址
				var url = this.baseUrl+"/baseCompany/search"
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
			var url = this.baseUrl+"/baseUser/list"
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
