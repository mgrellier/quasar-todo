<template>
  <q-item
    tag="label"
    @click.prevent
  >
    <q-item-side>
      <q-checkbox
        :value="item.done"
        checked-icon="done"
        unchecked-icon="radio_button_unchecked"
        color="green"
        @change="toggleTask({ task: item })"
      />
    </q-item-side>
    <q-item-main>
      <q-item-tile
        label
        v-show="!editing"
        style="cursor: text"
        :class="{ 'task-done': item.done }"
        v-touch-swipe.horizontal="swipeTask"
        @click="inEditMode"
      >
        {{ item.text }}
      </q-item-tile>
      <q-input
        ref="taskInput"
        :value="item.text"
        v-show="editing"
        @blur="doneEditing"
        @keyup.enter="doneEditing"
        @keyup.esc="cancelEditing"
      />
    </q-item-main>
    <q-item-side right icon="more_vert">
      <q-popover ref="popover">
        <q-list link>
          <q-item
            @click="inEditMode(); $refs.popover.close()"
          >
            <q-item-main label="Edit" />
          </q-item>
          <q-item
            @click="deleteTask({ task: item }); $refs.popover.close()"
          >
            <q-item-main label="Delete" />
          </q-item>
        </q-list>
      </q-popover>
    </q-item-side>
  </q-item>
  <!--<li>
    <input type="checkbox" @change="toggleTask({ task: item })">
		<label v-show="!editing" @dblclick="inEditMode">
      {{ item.text }}
    </label>
    <input type="text" v-item-focus="editing" :value="item.text" v-show="editing" @blur="doneEditing" @keyup.enter="doneEditing" @keyup.esc="cancelEditing">

  </li>-->
</template>

<script>
  import {
    QCheckbox,
    QBtn,
    QInput,
    QField,
    QItem,
    QItemTile,
    QItemMain,
    QItemSide,
    TouchSwipe,
    QPopover,
    QList
  } from 'quasar'
  import { mapActions } from 'vuex'

  export default {
    components: {
      QCheckbox,
      QBtn,
      QInput,
      QField,
      QItem,
      QItemTile,
      QItemMain,
      QItemSide,
      QPopover,
      QList
    },
    props: ['item'],
    data () {
      return {
        editing: false
      }
    },
    template: '',
    methods: {
      ...mapActions('todoList', [
        'editTask',
        'toggleTask',
        'deleteTask'
      ]),
      inEditMode: function () {
        if (this.item.done) { return }

        this.editing = true
        this.$nextTick(() => {
          this.$refs.taskInput.focus()
          this.$refs.taskInput.select()
        })
      },
      doneEditing (e) {
        const value = e.target.value.trim()
        const task = this.item

        if (!value) {
          this.deleteTask({ task })
        }
        else if (this.editing) {
          this.editTask({ task: task, newText: value })
          this.editing = false
        }
      },
      cancelEditing: function () {
        this.editing = false
      },
      swipeTask: function ({evt, direction, duration, distance}) {
        if (this.item.done) { return }

        const item = this.item
        if (direction === 'right' && distance.x >= 70) {
          this.toggleTask({task: item})
        }
      }
    },
    directives: {
      TouchSwipe
    }
  }
</script>
<style lang="stylus">
  .task-done
    text-decoration line-through
</style>
