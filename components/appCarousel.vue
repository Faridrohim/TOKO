<template>
  <div class="carousel-container">
    <div class="carousel" style="height: 500px;">
      <div class="carousel-slide" :style="{ transform: 'translateX(' + offset + 'px)' }" ref="carouselSlide">
        <div v-for="(image, index) in images" :key="index" class="carousel-item">
          <img :src="image" alt="Carousel Image" class="carousel-image">
          <a href="#">
             <button class="explore-button">Explore Now</button>
          </a>
        </div>
      </div>

      <div class="dots">
        <span v-for="(image, index) in images" :key="index" 
              class="dot" :class="{ active: currentIndex === index }" 
              @click="goTo(index)"></span>
      </div>
    </div>
  </div>  
</template>

<script>
export default {
  name: "appCarousel",
  data() {
    return {
      images: [
        require("@/assets/img/Bannerr.png"),
        require("@/assets/img/banner1.png"),
        require("@/assets/img/banner2.jpg")
      ],
      currentIndex: 0,
      offset: 0
    };
  },
  methods: {
    goTo(index) {
      this.currentIndex = index;
      this.offset = -index * this.$refs.carouselSlide.offsetWidth;
      if (index === this.images.length - 1) {
        setTimeout(() => {
          this.currentIndex = 0;
          this.offset = 0;
        }, 5000); 
      }
    }
  }
};
</script>

<style scoped>

.carousel {
  position: relative;
  overflow: hidden;
  margin-bottom: 170px;
}

.carousel-slide {
  display: flex;
  transition: transform 0.5s ease;
}

.carousel-item {
  position: relative;
  width: auto;

}

.carousel-image {
  max-height: 500px;
  max-width: auto;
  width: 1213px;
}

.dots {
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
}

.dot {
  height: 20px;
  width: 20px;
  background-color: #ffffff;
  border-radius: 50%;
  display: inline-block;
  margin: 0 5px;
  cursor: pointer;
}

.dot.active {
  background-color: #232121;
}

.explore-button {
  position: absolute;
  bottom: 150px;
  left: 50%;
  transform: translateX(-50%);
  padding: 13px 35px;
  background-color: #ffffff;
  color: #232121;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  z-index: 1; 
  font-size: 20px;
}
</style>
