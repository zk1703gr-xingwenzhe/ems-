<!-- html部分 -->
<template>
	<div id="app">
		<span style="font-size: 25px; color: white;">能耗综合分析平台</span>
		<div style="display: inline-block; float: right;margin-right: 40px;">
			<el-dropdown :hide-on-click='false'>
				<span class="el-dropdown-link">
					管理员<i class="el-icon-arrow-down el-icon--right"></i>
				</span>
				<el-dropdown-menu slot='dropdown'>
					<el-dropdown-item>修改密码</el-dropdown-item>
					<el-dropdown-item>退出登录</el-dropdown-item>
				</el-dropdown-menu>
			</el-dropdown>
		</div>
		<div style="display: inline-block; float: right;margin-right: 40px;">
			<el-dropdown :hide-on-click='false'>
				<span class="el-dropdown-link">
					周口港<i class="el-icon-arrow-down el-icon--right"></i>
				</span>
				<el-dropdown-menu slot='dropdown'>
					<el-dropdown-item>周口港</el-dropdown-item>
					<el-dropdown-item>漯河港</el-dropdown-item>
					<el-dropdown-item>上海港</el-dropdown-item>
					<el-dropdown-item>日照港</el-dropdown-item>
				</el-dropdown-menu>
			</el-dropdown>
		</div>
	</div>
</template>
<!-- js部分 -->
<script>
	export default {
		name:'',
		data() {
			return {
				
			};
		},
		methods:{
			
		}
	}
</script>
<!-- css部分 -->
<style>
.el-dropdown-link {
    cursor: pointer;
    color: white;
  }
  .el-icon-arrow-down {
    font-size: 12px;
  }
</style>
