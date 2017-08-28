<template>
  <q-card inline style="width: 500px; max-width: 90vw">
    <q-card-media>
      <img src="/statics/img/todo.jpg">
    </q-card-media>
    <q-card-title>
      <q-list no-border>
        <q-item>
          <q-item-side>
            <q-btn
              round
              small
              icon="add"
              color="red"
              :disabled="!newTask.trim()"
              @click="addNewTask"
            />
          </q-item-side>
          <q-item-main>
            <q-input
              type="text"
              v-model='newTask'
              placeholder="Add a new task"
              @keyup.enter="addNewTask"
            />
          </q-item-main>
        </q-item>
      </q-list>
    </q-card-title>
    <q-card-main>
      <div>
        <q-list inset-separator no-border>
          <todo-item
            v-for="(task, index) in filteredList"
            :item="task"
            :key="index"
          >
          </todo-item>
        </q-list>
      </div>
    </q-card-main>
    <q-card-separator />
    <q-card-actions align="center">
      <q-select
        radio
        v-model="selectedFilter"
        :options="filters"
      />
    </q-card-actions>
  </q-card>
</template>

<script>
  import {
    QCard,
    QCardTitle,
    QCardMain,
    QCardSeparator,
    QCardActions,
    QCardMedia,
    QBtn,
    QInput,
    QList,
    QSelect,
    QItemSeparator,
    QItem,
    QItemTile,
    QItemMain,
    QItemSide
  } from 'quasar'

  import TodoItem from './TodoItem'

  import { mapState, mapGetters, mapActions } from 'vuex'

  export default {
    components: {
      QCard,
      QCardTitle,
      QCardMain,
      QCardSeparator,
      QCardActions,
      QCardMedia,
      QBtn,
      QInput,
      QList,
      QItemSeparator,
      QItem,
      QItemTile,
      QItemMain,
      QItemSide,
      QSelect,
      TodoItem
    },
    data () {
      return {
        newTask: '',
        selectedFilter: 'all',
        filters: [
          {
            label: 'All',
            value: 'all'
          },
          {
            label: 'TO-DO',
            value: 'todo'
          },
          {
            label: 'Completed',
            value: 'completed'
          }
        ]
      }
    },
    computed: {
      ...mapState({
        todoList: state => state.todoList.list
      }),
      ...mapGetters('todoList', [
        'incompleteTasks',
        'completedTasks'
      ]),
      filteredList () {
        if (this.selectedFilter === 'all') {
          return this.todoList
        }
        else if (this.selectedFilter === 'todo') {
          return this.incompleteTasks
        }
        else if (this.selectedFilter === 'completed') {
          return this.completedTasks
        }
      }
    },
    methods: {
      ...mapActions('todoList', [
        'addTask'
      ]),
      addNewTask (e) {
        let text = this.newTask.trim()
        if (text) {
          this.addTask(text)
        }
        this.newTask = ''
      }
    }
  }
</script>
<style lang="stylus">
</style>
