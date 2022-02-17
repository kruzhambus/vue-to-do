<template>
  <div>
    <h1>Your favorite task</h1>
    <TaskCard  @onRemove="onRemove(item.id)" @onDone="onDone(item.id)" @addFavorite="addFavorite(index)"  v-for="(item, index) in taskList" :key="item.id" :model="item"></TaskCard>
    <div v-if="taskList.length === 0"><h1>Add favorite tasks</h1></div>
  </div>
</template>

<script>
import TaskCard from '@/components/TaskCard'
export default {
  name: 'favorites',
  components: {
    TaskCard
  },
  data () {
    return {
      taskList: []
    }
  },
  methods: {
    addFavorite (id) {
      if (localStorage.favorites) {
        localStorage.favorites = JSON.stringify([...JSON.parse(localStorage.getItem('favorites')), this.taskList[id]])
      } else {
        localStorage.favorites = JSON.stringify([this.taskList[id]])
      }
    },
    addTask (des) {
      this.taskList = [...this.taskList, { id: this.taskList.length + 1, description: des, status: false }]
      localStorage.taskList = JSON.stringify(this.taskList)
    },
    onDone (id) {
      this.taskList = this.taskList.map(item => {
        if (item.id === id) {
          item.status = true
        }
        return item
      })
    },
    onRemove (id) {
      this.taskList = this.taskList.filter(item => item.id !== id)
      localStorage.favorites = JSON.stringify(this.taskList)
    }
  },
  mounted () {
    if (localStorage.getItem('favorites')) {
      try {
        this.taskList = JSON.parse(localStorage.getItem('favorites'))
      } catch (e) {
        localStorage.removeItem('favorites')
      }
    }
  }
}
</script>

<style scoped>
h1 {
  text-align: center;
  color: aliceblue;
}
.d-flex {
  display: flex;
}
.fav {
  cursor: default;
}
</style>
