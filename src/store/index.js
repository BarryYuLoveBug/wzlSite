import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import getters from './getters'
import mutations from './mutations'

Vue.use(Vuex)//实际上生产环境不需要这句。好在console.error被"优化"掉了。

const state = {
    mmActive: 'home'
}
let store = new Vuex.Store({
    state
    , getters
    , actions
    , mutations
})

export default store