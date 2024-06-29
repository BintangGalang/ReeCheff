<template>
  <div>
    <h1>Daftar Resep</h1>
    <div class="recipes">
      <RecipeCard
        v-for="recipe in recipes"
        :key="recipe.id"
        :recipe="recipe"
      />
    </div>
  </div>
</template>

<script>
import RecipeCard from '~/components/RecipeCard.vue'

export default {
  components: {
    RecipeCard
  },
  data() {
    return {
      recipes: [
        { id: 1, title: 'Nasi Goreng', description: 'Resep Nasi Goreng enak dan lezat.' },
        { id: 2, title: 'Mie Ayam', description: 'Resep Mie Ayam yang gurih.' },
        { id: 3, title: 'Sate Ayam', description: 'Resep Sate Ayam dengan bumbu kacang.' }
      ]
    }
  }
}
</script>

<style>
.recipes {
  display: flex;
  flex-wrap: wrap;
}
</style>
