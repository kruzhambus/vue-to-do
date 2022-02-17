<template>
  <div class="d-flex" v-bind:style="[model.status ? {background: 'rgba(120, 236, 120, 0.72)', filter: 'brightness(0.4)'} : {} ]">
    <div>
      <p>{{ model.description }}</p>
    </div>
    <div style="display: flex; align-items: center">
      <img class="fav" :src="model.isFavorite  ? 'img/liked.svg' : 'img/unliked.svg' " alt="Unliked" @click="addFavorite" height="30"/>
      <button @click="onDone" type="button" class="endTask" v-if="!model.status">&#10004; </button>
      <button @click="onRemove" type="button" class="submitTask" v-else>&#10005; </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TaskCard',
  emits: ['onDone', 'onRemove', 'addFavorite', 'removeFavorites'],
  props: {
    model: {
      require: true,
      default: {
        id: 0,
        description: 'task',
        status: false,
        isFavorite: Boolean
      }
    }
  },
  methods: {
    addFavorite () {
      if (!this.model.isFavorite) {
        this.$emit('addFavorite')
      } else {
        this.$emit('removeFavorites')
      }
    },
    onDone () {
      this.$emit('onDone')
    },
    onRemove () {
      this.$emit('onRemove')
    }
  }
}
</script>

<style scoped>
p {
  font-size: 22px;
  color: white;
  margin: 10px 0;
}
button {
  font-size: 18px;
  color: white;
  background-color: transparent;
  border-color: transparent;
  cursor: pointer;
}
.d-flex {
  max-width: 300px;
  margin: 10px auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 15px;
  border-radius: 7px;
  border: 1px solid #afafaf;
}
</style>
