<!-- html部分 -->
<template>
	<div>
		<h1 style="text-align: center;">能耗信息</h1>
		<div style="text-align: left; margin: 0 0 20px 50px;">
			<el-input style='width: 160px; margin-top: 20px;' placeholder='能耗信息' v-model='search_consumeid'></el-input>
			<el-button @click='search'>查询</el-button>
			<el-button @click='add'>添加</el-button>
		</div>
		<center>
			<el-tabel :data='list'>
				<el-tabel-column prop='设备名称' label='consumeid' width='120'></el-tabel-column>
				<el-tabel-column prop='电耗(kw.h)' label='electric' width='120'></el-tabel-column>
				<el-tabel-column prop='水耗(吨)' label='water' width='120'></el-tabel-column>
				<el-tabel-column prop='油耗(L)' label='oil' width='120'></el-tabel-column>
				<el-tabel-column prop='报岗id' label='reportid' width='120'></el-tabel-column>
			</el-tabel>
		</center>
	</div>
</template>
<!-- js部分 -->
<script>
	export default {
		name:'',
		data() {
			return {
				search_consumeid:'',
				list:[]
			};
		},
		methods:{
				add(){
					// 路由跳转
					this.$router.push({path:'ConsumeAdd'})
				},
				search(){
					// 后端网址
						var url = this.baseUrl+"/energyConsume/search"
						// 传递给后端的数据
						var data = {consumeid:this.search_consumeid};
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
