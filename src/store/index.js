import Vue from 'vue'
import Vuex from 'vuex'

import todoList from './modules/todo-list'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

const modules = {
  todoList
}

const state = {

}

const getters = {

}

const mutations = {

}

export default new Vuex.Store({
  modules,
  state,
  getters,
  mutations,
  strict: debug
})
