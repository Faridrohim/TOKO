<template>
  <div class="container-category">
    <h2 class="h2-category">KATEGORI</h2>
    <div class="categories">
      <div v-for="category in categories" :key="category.id" class="category">
          <img :src="category.image" alt="Category Image" class="category-image">
          <button class="category-button">{{ category.name }}</button>
      </div>
    </div>
  </div>
</template>


<script setup>

const categories = [
  { id: 1, name: "Jaket", image: require("@/assets/img/jaket.png") },
  { id: 2, name: "T-Shirt", image: require("@/assets/img/Tshirt.png") },
  { id: 3, name: "Kemeja", image: require("@/assets/img/kemeja.png") },
  { id: 4, name: "Outers", image: require("@/assets/img/outer.png") },
  { id: 5, name: "Shirts", image: require("@/assets/img/shirt.png") }
];
</script>


<style scoped>
.container-category {
  padding-left: 25px;
  padding-right: 25px;
  margin-bottom: 50px;
}
.h2-category {
  margin-left: 25px;
  font-size: 50px;
  font-family: "Bebas Neue";
  font-weight: 400;
  color: #000000;
  width: 145px;
  height: 60px;
}
.categories {
  margin-left: 25px;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 10px;
}
.category-image {
  width: 190px;
  height: 300px;
  margin-top: 50px;
  object-fit: cover;
  background-color: #D9D9D9;
  border-radius: 7px;
}
.category-name {
  display: block;
  margin-top: 10px;
  font-weight: bold;
  margin-left: 30%;
  margin-left: 14px;
}
.category-button {
  display: block;
  margin-top: 10px;
  font-weight: bold;
  background-color: transparent;
  border: none;
  color: #000000;
  cursor: pointer;
  font-size: 40px;
  font-family: "Bebas Neue";
  width: 145px;
  height: 60px;
  margin-left: 7%;
}
</style>
