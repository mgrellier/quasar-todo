import Vue from 'vue'
import Vuex from 'vuex'

import todoList, { STORAGE_KEY } from './modules/todo-list'
import createLocalStoragePlugin from './plugins'

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

const localStoragePlugin = createLocalStoragePlugin(
  {
    storageKey: STORAGE_KEY,
    namespace: 'todoList',
    data: 'list'
  }
)

export default new Vuex.Store({
  modules,
  state,
  getters,
  mutations,
  plugins: [localStoragePlugin],
  strict: debug
})
