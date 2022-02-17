<template>
  <div>
    <input v-model="description" type="text" placeholder="Your task" @keypress.enter="addTask">
    <button @click="addTask">Add task</button>
  </div>
</template>

<script>
export default {
  name: 'TaskInput',
  emits: {
    addTask (description) {
      if (description === '') {
        alert('Task is empty')
        return false
      }
      return true
    }
  },
  data () {
    return {
      description: ''
    }
  },
  methods: {
    addTask () {
      this.$emit('addTask', this.description)
      this.description = ''
    }
  }
}

</script>

<style scoped>
input {
  padding: 5px 15px;
  max-width: 300px;
  margin: 0 auto;
  display: flex;
  background-color: transparent;
  color: aliceblue;
  align-items: center;
  justify-content: space-between;
  border-radius: 5px;
  height: 20px;
  border: 1px solid #afafaf;
}
button {
  max-width: 300px;
  height: 30px;
  margin: 15px auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 15px;
  background-color: transparent;
  color: aliceblue;
  border: 1px solid #afafaf;
  cursor: pointer;
}
</style>
