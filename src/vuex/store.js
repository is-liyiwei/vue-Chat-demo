import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const now = new Date();

const store = new Vuex.Store({
	state:{
		sessions:[{
      	id:1,
      	user:{
      		name:'示例介绍',
      		img:'../src/assets/images/2.png'
      	},
      	messages:[{
      		content:'Hello，这是一个基于Vue + Vuex + Webpack构建的简单chat示例，聊天记录保存在localStorge, 有什么问题可以通过Github Issue问我。',
      		date:now
      	},{
      		content:'项目地址(原作者): https://github.com/coffcer/vue-chat',
      		date:now
      	},{
      		content:'本项目地址(重构): https://github.com/is-liyiwei',
      		date:now
      	}]
      },{
      	id:2,
      	user:{
      		name:'webpack',
      		img:'../src/assets/images/3.jpg'
      	},
      	messages:[{
      		content:'Hi，我是webpack哦',
      		date:now
      	}]
      }],
      currentSessionId:1,
      filterKey:''
	},
	getters:{

	},
	mutations:{
		changeCurrentSessionId (state,id) {
			state.currentSessionId = id;
		},
		addMessage (state,msg) {
			state.sessions[state.currentSessionId-1].messages.push({
				content:msg,
				date: new Date(),
				self:true
			})
		}
	},
	actions:{

	}
})

export default store;