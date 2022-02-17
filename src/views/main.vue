<template>
  <div id="app">
    <h1>To Do App</h1>
    <TaskInput @addTask="addTask"></TaskInput>
    <TaskCard @onRemove="onRemove(item.id)" @onDone="onDone(item.id)" @addFavorite="addFavorite(index)" @removeFavorites="removeFavorites(item.id)" v-for="(item, index) in taskList" :key="item.id" :model="item"></TaskCard>
  </div>
</template>

<script>
import TaskCard from '@/components/TaskCard'
import TaskInput from '@/components/TaskInput'
export default {
  name: 'main',
  components: {
    TaskCard,
    TaskInput
  },
  data () {
    return {
      taskList: [],
      isModalVisible: false
    }
  },
  methods: {
    addFavorite (id) {
      this.taskList[id].isFavorite = true
      let bool = true
      if (localStorage.favorites) {
        JSON.parse(localStorage.favorites).forEach(item => {
          if (item.id === this.taskList[id].id) {
            bool = false
          }
        })
        if (bool) {
          localStorage.favorites = JSON.stringify([...JSON.parse(localStorage.getItem('favorites')), this.taskList[id]])
        }
      } else {
        localStorage.favorites = JSON.stringify([this.taskList[id]])
      }
      this.taskList = this.taskList.filter((item, index) => index !== id)
      localStorage.taskList = JSON.stringify(this.taskList)
    },
    removeFavorites (id) {
      let favorit
      this.taskList[id - 1].isFavorite = false
      if (localStorage.getItem('favorites')) {
        favorit = [...JSON.parse(localStorage.getItem('favorites'))]
      }
      localStorage.favorites = JSON.stringify(favorit.filter(item => item.id !== id))
      localStorage.taskList = JSON.stringify(this.taskList)
    },
    addTask (des) {
      this.taskList = [...this.taskList, { id: this.taskList.length + 1, description: des, status: false, isFavorite: false }]
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
      localStorage.taskList = JSON.stringify(this.taskList)
    }
  },
  mounted () {
    if (localStorage.getItem('taskList')) {
      try {
        this.taskList = JSON.parse(localStorage.getItem('taskList'))
      } catch (e) {
        localStorage.removeItem('taskList')
      }
    }
  }
}
</script>

<style scoped>
body {
  background-color: #2e3042;
}
h1 {
  text-align: center;
  color: aliceblue;
}
.d-flex {
  display: flex;
}
.fav {
  cursor: pointer;
}
</style>
