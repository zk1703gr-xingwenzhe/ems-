import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Index from '@/components/home/Index'
import Welcome from '@/components/home/Welcome'
// import MainTable from '@/components/home/MainTable'
import CompList from '@/components/baseInfo/CompList'
import CompAdd from '@/components/baseInfo/CompAdd'
import CompEdit from '@/components/baseInfo/CompEdit'

import BaseUserList from '@/components/baseInfo/BaseUserList'
import BaseUseAdd from '@/components/baseInfo/BaseUseAdd'
import BaseUser from '@/components/baseInfo/BaseUser'

import BaseflowList from '@/components/baseInfo/BaseflowList'
import BaseflowEdit from '@/components/baseInfo/BaseflowEdit'
import BaseflowAdd from '@/components/baseInfo/BaseflowAdd'

import Login from '@/components/home/Login'

import FaultList from '@/components/baseInfo/FaultList'
import FaultAdd from '@/components/baseInfo/FaultAdd'
import FaultEdit from '@/components/baseInfo/FaultEdit'

import RepairList from '@/components/baseInfo/RepairList'
import RepairAdd from '@/components/baseInfo/RepairAdd'

import ReportList from '@/components/baseInfo/ReportList'
import ReportAdd from '@/components/baseInfo/ReportAdd'
import ReportEdit from '@/components/baseInfo/ReportEdit'

import Control from '@/components/baseInfo/Control'

import DevtypeList from '@/components/baseInfo/DevtypeList'
import DevtypeAdd from '@/components/baseInfo/DevtypeAdd'
import DevtypeEdit from '@/components/baseInfo/DevtypeEdit'

import DeviceList from '@/components/baseInfo/DeviceList'
import DeviceAdd from '@/components/baseInfo/DeviceAdd'
import DeviceEdit from '@/components/baseInfo/DeviceEdit'

import JobList from '@/components/baseInfo/JobList'
import JobAdd from '@/components/baseInfo/JobAdd'

import StandradcoalList from '@/components/baseInfo/StandradcoalList'
import StandradcoalAdd from '@/components/baseInfo/StandradcoalAdd'
import StandradcoalEdit from '@/components/baseInfo/StandradcoalEdit'

import ConsumeList from '@/components/baseInfo/ConsumeList'
import ConsumeAdd from '@/components/baseInfo/ConsumeAdd'

import jobAmount from '@/components/baseInfo/jobAmount'	

import energyConsume from '@/components/baseInfo/energyConsume'	

import EnergyModel from '@/components/baseInfo/EnergyModel'	

import devInfo from '@/components/baseInfo/devInfo'
	
import devInfo1 from '@/components/baseInfo/devInfo1'	

import DevInfoamount from '@/components/baseInfo/DevInfoamount'	

import DevInfocost from '@/components/baseInfo/DevInfocost'	

import DevInfoconsume from '@/components/baseInfo/DevInfoconsume'	

Vue.use(Router)

export default new Router({
	mode:'history',
  routes: [
    {path: '/Login',name: 'Login',component: Login},
    {
      path: '/',name: 'Index',component: Index,
			children:[
					{path:'CompList',component:CompList,name:'CompList'},
					{path:'CompAdd',component:CompAdd},
					{path:'CompEdit',component:CompEdit,name:'CompEdit'},
					{path:'BaseUser',component:BaseUser,name:'BaseUser'},
					{path:'BaseUseAdd',component:BaseUseAdd},
					{path:'BaseUserList',component:BaseUserList},
					// {path:'baseUserupdate',component:baseUserupdate,name:'baseUserupdate'},
					// {path:'MainTable',component:MainTable},
					{path:'BaseflowList',component:BaseflowList},
					{path:'BaseflowAdd',component:BaseflowAdd},
					{path:'FaultList',component:FaultList},
					{path:'FaultAdd',component:FaultAdd},
					{path:'FaultEdit',component:FaultEdit},
					{path:'RepairList',component:RepairList},
					{path:'RepairAdd',component:RepairAdd},
					{path:'ReportList',component:ReportList},
					{path:'ReportAdd',component:ReportAdd},
					{path:'ReportEdit',component:ReportEdit},
					{path:'Control',component:Control},
					{path:'BaseflowEdit',component:BaseflowEdit},
					{path:'DevtypeList',component:DevtypeList,name:'DevtypeList'},
					{path:'DevtypeAdd',component:DevtypeAdd},
					{path:'DevtypeEdit',name:'DevtypeEdit',component:DevtypeEdit},
					{path:'DeviceList',component:DeviceList},
					{path:'DeviceAdd',component:DeviceAdd},
					{path:'DeviceEdit',component:DeviceEdit,name:'DeviceEdit'},
					{path:'JobList',component:JobList},
					{path:'JobAdd',component:JobAdd},
					{path:'StandradcoalList',component:StandradcoalList,component:StandradcoalList},
					{path:'StandradcoalAdd',component:StandradcoalAdd,component:StandradcoalAdd},
					{path:'StandradcoalEdit',component:StandradcoalEdit,component:StandradcoalEdit},
					{path:'ConsumeList',component:ConsumeList,component:ConsumeList},
					{path:'ConsumeAdd',component:ConsumeAdd,component:ConsumeAdd},
					{path:'jobAmount',component:jobAmount,name:'jobAmount'},
					{path:'energyConsume',component:energyConsume,name:'energyConsume'},
					{path:'EnergyModel',component:EnergyModel,name:'EnergyModel'},
					{path:'devInfo',component:devInfo,name:'devInfo'},
					{path:'devInfo1',component:devInfo1,name:'devInfo1'},
					{path:'DevInfoamount',component:DevInfoamount,name:'DevInfoamount'},
					{path:'DevInfocost',component:DevInfocost,name:'DevInfocost'},
					{path:'DevInfoconsume',component:DevInfoconsume,name:'DevInfoconsume'},
					{path:'/',component:Welcome}
			]
    }
  ]
})
