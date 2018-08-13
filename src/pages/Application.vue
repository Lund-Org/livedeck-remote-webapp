<template>
  <div id="application">
    <h1 class="header-category" :style="{ background: category.color }">{{ category.name }}</h1>
    <div class="category-wrapper">
      <div class="previous-category"></div>
      <div class="category">
        <ul>
          <li v-for="binding in bindings">
            <div class="icon-block">
              <img v-if="binding.icon" :src="binding.icon" />
              <p>{{ binding.name }}</p>
            </div>
          </li>
        </ul>
      </div>
      <div class="next-category"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'application',
  components: {},
  data: () => {
    return {
      categories: [
        { name: 'Category 1', color: '#CC3333', weight: 1, bindings: [
          { name: 'Bind 1', icon: '/favicon.ico', weight: 1 },
          { name: 'Bind 2', icon: null, weight: 2 },
          { name: 'Bind 3', icon: null, weight: 3 },
          { name: 'Bind 4', icon: null, weight: 4 },
          { name: 'Bind 5', icon: null, weight: 5 },
        ] },
        { name: 'Category 2', color: '#33CC33', weight: 2, bindings: [
          { name: 'Bind 1', icon: null, weight: 1 },
          { name: 'Bind 2', icon: null, weight: 2 },
          { name: 'Bind 3', icon: null, weight: 3 },
          { name: 'Bind 4', icon: null, weight: 4 },
          { name: 'Bind 5', icon: null, weight: 5 },
        ] },
        { name: 'Category 3', color: '#3333CC', weight: 3, bindings: [
          { name: 'Bind 1', icon: null, weight: 1 },
          { name: 'Bind 2', icon: null, weight: 2 },
          { name: 'Bind 3', icon: null, weight: 3 },
          { name: 'Bind 4', icon: null, weight: 4 },
          { name: 'Bind 5', icon: null, weight: 5 },
        ] }
      ],
      activeCategory: 0
    }
  },
  computed: {
    category () {
      return this.categories[this.activeCategory]
    },
    bindings () {
      return this.categories[this.activeCategory].bindings.sort((a, b) => {
        return b.weight < a.weight
      })
    }
  }
}
</script>

<style lang="scss">
</style>
