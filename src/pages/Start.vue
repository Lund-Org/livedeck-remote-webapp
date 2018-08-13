<template>
  <div id="start">
    <Loader v-if="isAppNotLoaded" />
    <p v-if="!isAppNotLoaded">Error bip bip bip</p>
  </div>
</template>

<script>
import Loader from '../components/Loader.vue'
// import State from '../common/state'

export default {
  name: 'start',
  components: {
    Loader
  },
  data: () => {
    return {
      isAppNotLoaded: true
    }
  },
  created: function () {
    // @todo get from cookie
    setTimeout(() => {
      // State.token = 12
      this.$emit('is-loaded')
    }, 500)
  }
}
</script>

<style lang="scss">
</style>
