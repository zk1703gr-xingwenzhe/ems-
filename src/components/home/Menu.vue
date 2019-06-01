<!-- html部分 -->
<template>
	<div style="height: 100%;">
		<!-- 菜单 -->
		<el-menu >
			<span v-for="obj in arr">
				<!-- 没有子菜单 :default-active='$store.default-Active'-->
				<el-menu-item v-show='!obj.children' :index='obj.index' @click='fn(obj)'>
					<span slot="title">{{obj.text}}</span>
				</el-menu-item>
				<!-- 有子菜单 -->
				<el-submenu v-show='obj.children' :index='obj.index'>
					<template slot="title">
					  <span>{{obj.text}}</span>
					</template>
					<el-menu-item-group>
					  <el-menu-item v-for='item in obj.children' :index='item.index' :key='item.text' @click='fn(item)'>{{item.text}}</el-menu-item>
					</el-menu-item-group>
				</el-submenu>
			</span>
		</el-menu>
	</div>
</template>
<!-- js部分 -->
<script>
	export default {
		name:'',
		data() {
			return {
				arr:[{text:'首页',index:'101',url:'/'},
					 {text:'基本信息',index:'102',children:[
						 {text:'企业信息',index:'1021',url:'/CompList'},
						 {text:'人员信息',index:'1022',url:'/BaseUserList'},
						 {text:'设备类别',index:'1023',url:'/DevtypeList'},
						 {text:'设备信息',index:'1024',url:'/DeviceList'},
						 {text:'流程信息',index:'1025',url:'/BaseflowList'}
					 ]},
					 {text:'生产作业',index:'103',children:[
					 	 {text:'报岗',index:'1031',url:'/ReportList'},
						 {text:'中控',index:'1032',url:'/Control'},
					 	 {text:'作业信息',index:'1033',url:'/JobList'},
						 {text:'维修登记',index:'1071',url:'/RepairList'},
						 {text:'故障信息',index:'1053',url:'/FaultList'},
					 ]},
					 {text:'能耗信息',index:'104',children:[
					 	 {text:'能耗信息',index:'1041',url:'/ConsumeList'},
					 	 {text:'折标煤系数',index:'1042',url:'/StandradcoalList'},
					 ]},
					 {text:'统计信息',index:'108',children:[
					 	 {text:'港口能耗对比',index:'1081',url:'/DevInfoconsume'},
					 	 {text:'作业量统计',index:'1081',url:'/jobAmount'},
					 	 {text:'设备利用率',index:'1082',url:'/devInfo'},
					 	 {text:'设备完好率',index:'1082',url:'/devInfo1'},
					 	 {text:'成本核算信息',index:'1083',url:'/DevInfocost'}
					 ]},
					 {text:'模型建立与展示',index:'109',children:[
					 	 {text:'企业用能模型',index:'1091',url:'/energyConsume'},
					 	 {text:'企业产销模型(平均值+~20%)',index:'1092',url:'/EnergyModel'},
					 ]},
					 {text:'企业数据采集',index:'1010',children:[
					 	 {text:'数据采集',index:'10101'},
					 ]},
				]
			};
		},
		methods:{
			fn(obj){
				this.$router.push({path:obj.url});
				// console.log(obj.text);
				// 往store中的tags数组中添加数据
				// 添加到tags
				this.$store.commit('addTag',{name:obj.text,type:'warning',url:obj.url});
				// var obj = {name:obj.text,type:'warning',url:obj.url,index:obj.index};
				// this.$store.commit('addTag',obj);
			}
		}
	}
</script>
<!-- css部分 -->
<style>
.el-menu{
	background: #F4F4F4;
}
</style>