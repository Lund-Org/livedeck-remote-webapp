<template>
  <ul v-bind:class="{ 'to-the-left': toTheLeft, 'to-the-right': toTheRight }">
    <li v-for="(binding, key) in bindings" v-bind:key="key">
      <div class="icon-block">
        <img v-if="binding.icon" :src="binding.icon" />
        <p>{{ binding.name }}</p>
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'Loader',
  props: {
    toTheLeft: {
      type: Boolean
    },
    toTheRight: {
      type: Boolean
    },
    bindings: {
      type: Array
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
