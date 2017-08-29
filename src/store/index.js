import Vue from 'vue'
import Vuex from 'vuex'

import todoList from './modules/todo-list'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

const modules = {
  todoList
}

export default new Vuex.Store({
  modules,
  strict: debug
})
