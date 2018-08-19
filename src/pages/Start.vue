<template>
  <div id="start">
    <Loader v-if="isAppNotLoaded" />
    <p v-if="!isAppNotLoaded">Error bip bip bip</p>
  </div>
</template>

<script>
import Loader from '../components/Loader.vue'
import { initialize } from '../common/state'

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
    initialize().then(() => {
      this.$emit('is-loaded')
    })
  }
}
</script>

<style lang="scss">
</style>
