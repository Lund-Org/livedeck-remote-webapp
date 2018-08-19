<template>
  <div id="application">
    <Loader v-if="!categories" />
    <p v-if="categories && !categories.length">You need to parameter your application first</p>
    <div class="app-container" v-if="categories && categories.length">
      <h1 class="header-category" :style="categoryStyle">{{ categoryName }}</h1>
      <div class="category-wrapper">
        <div class="previous-category" @click="slideToTheLeft"></div>
        <div :class="{ category: true, 'binding-transition-active': transitionActive, 'binding-transition-destination': transitionDestination }">
          <CategoryContent class="previous-bindings" :toTheLeft="toTheLeft" :toTheRight="toTheRight" :bindings="previousBindings" />
          <CategoryContent class="current-bindings" :toTheLeft="toTheLeft" :toTheRight="toTheRight" :bindings="currentBindings" />
          <CategoryContent class="next-bindings" :toTheLeft="toTheLeft" :toTheRight="toTheRight" :bindings="nextBindings" />
        </div>
        <div class="next-category" @click="slideToTheRight"></div>
      </div>
    </div>
  </div>
</template>

<script>
import getCategories from '../common/api/getCategories'
import Loader from '../components/Loader.vue'
import CategoryContent from '../components/CategoryContent.vue'

export default {
  name: 'application',
  components: {
    Loader,
    CategoryContent
  },
  data: () => {
    return {
      categoryHeight: 'auto',
      categories: null,
      transitionActiveCategory: 0,
      activeCategory: 0,
      toTheLeft: false,
      toTheRight: false,
      transitionActive: false,
      transitionDestination: false
    }
  },
  created: function () {
    getCategories(this)
  },
  computed: {
    previousBindings () {
      if (this.categories && this.categories.length > 0) {
        let previousIndex = this.activeCategory === 0 ? this.categories.length - 1 : this.activeCategory - 1

        return this.categories[previousIndex].bindings.concat().sort((a, b) => {
          return b.weight < a.weight
        })
      } else {
        return []
      }
    },
    currentBindings () {
      if (this.categories && this.categories.length > 0) {
        return this.categories[this.activeCategory].bindings.concat().sort((a, b) => {
          return b.weight < a.weight
        })
      } else {
        return []
      }
    },
    nextBindings () {
      if (this.categories && this.categories.length > 0) {
        let nextIndex = this.activeCategory + 1 === this.categories.length ? 0 : this.activeCategory + 1
        return this.categories[nextIndex].bindings.concat().sort((a, b) => {
          return b.weight < a.weight
        })
      } else {
        return []
      }
    },
    categoryStyle () {
      if (this.categories && this.categories.length > 0) {
        return { background: this.categories[this.activeCategory].color }
      } else {
        return {}
      }
    },
    categoryName () {
      if (this.categories && this.categories.length > 0) {
        return this.categories[this.activeCategory].name
      } else {
        return ''
      }
    }
  },
  methods: {
    slideToTheLeft () {
      this.transitionActiveCategory = this.transitionActiveCategory - 1 < 0 ? this.categories.length - 1 : this.transitionActiveCategory - 1
      this.initTransition(() => {
        this.toTheLeft = true
      })
    },
    slideToTheRight () {
      this.transitionActiveCategory = this.transitionActiveCategory + 1 >= this.categories.length ? 0 : this.transitionActiveCategory + 1
      this.initTransition(() => {
        this.toTheRight = true
      })
    },
    initTransition (callback) {
      this.categoryHeight = `${document.querySelector('.category').clientHeight}px`
      this.transitionActive = true
      setTimeout(() => {
        callback()
        this.transitionDestination = true
        setTimeout(this.endTransition, 1200)
      }, 100)
    },
    endTransition () {
      this.transitionActive = false
      this.transitionDestination = false
      this.toTheLeft = false
      this.toTheRight = false
      this.categoryHeight = 'auto'
      this.activeCategory = this.transitionActiveCategory
    }
  }
}
</script>

<style lang="scss">
</style>
