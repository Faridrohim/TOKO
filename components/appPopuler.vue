<template>
  <div class="container-populer">
    <div class="header-populer">
      <h2 class="h2-populer">PRODUK TERPOPULER</h2>
      <div class="buttons">
        <button class="filter-produk" :class="{ clicked: buttonClicked['terlaris'] }" @click="changeButtonColor('terlaris')">Terlaris</button>
        <button class="filter-produk" :class="{ clicked: buttonClicked['terbaru'] }" @click="changeButtonColor('terbaru')">Terbaru</button>
        <button class="filter-produk" :class="{ clicked: buttonClicked['termurah'] }" @click="changeButtonColor('termurah')">Termurah</button>
        <button class="filter-produk" :class="{ clicked: buttonClicked['promo'] }" @click="changeButtonColor('promo')">Promo</button>
      </div>
    </div>
    <div class="produkjual">
      <div v-for="populer in populers" :key="populer.id" class="populer">
  
          <img :src="populer.image" alt="Category Image" class="populer-image">
          <span class="populer-promo">{{ populer.promo }}</span>
          <span class="populer-name">{{ populer.name }}</span>
          <span class="populer-harga">{{ populer.harga }} </span>
          <span class="populer-diskon"> {{ cpopuler.diskon }} </span>
    
          <button class="btn-cart">
            <img src="@/assets/svg/cart.svg" style="height: 25px;" alt="Logo" class="cart-icon">
         </button>

      </div>
    </div>
    <h2 style="margin-top: 50px; margin-bottom: 50px;">BLOG</h2>
    <div  v-for="blogger in blog" :key="blogger.id" class="blogger">
      <img :src="blogger.image" alt="blog Image" class="blogger-image">
      <img :src="blogger.image" alt="blog Image" class="blogger-image">
      <img :src="blogger.image" alt="blog Image" class="blogger-image">
      <img :src="blogger.image" alt="blog Image" class="blogger-image">
      <div class="teks">
        <p>{{ blogger.tanggal }}</p>
        <h4>{{blogger.judul }}</h4>
        <p>{{ blogger.teks }}</p>
      </div>
      <div class="teks">
        <p>{{ blogger.tanggal }}</p>
        <h4>{{blogger.judul }}</h4>
        <p>{{ blogger.teks }}</p>
      </div>
      <div class="teks">
        <p>{{ blogger.tanggal }}</p>
        <h4>{{blogger.judul }}</h4>
        <p>{{ blogger.teks }}</p>
      </div>
      <div class="teks">
        <p>{{ blogger.tanggal }}</p>
        <h4>{{blogger.judul }}</h4>
        <p>{{ blogger.teks }}</p>
      </div>

      <router-view></router-view>
    </div>
  </div>
</template>

<script setup>
const buttonClicked = {
  terlaris: false,
  termurah: false,
  terbaru: false,
  promo: false,
};

const populers = [
  { id: 1, promo: "DISKON 40%", name: "DENIM JACKET", harga: "Rp 200.000", diskon: "Rp 250.000", qty: 1, image: require("@/assets/img/deminjaket.png") },
  { id: 2, promo: "DISKON 40%", name: "SHIRT", harga: "Rp 210.000", diskon: "Rp 250.000", qty: 1, image: require("@/assets/img/shirt1.png") },
  { id: 3, promo: "DISKON 40%", name: "POLO SHIRTS", harga: "Rp 150.000", diskon: "Rp 200.000", qty: 1, image: require("@/assets/img/poloshirt.png") },
  { id: 4, promo: "DISKON 40%", name: "OUTERS", harga: "Rp 200.000", diskon: "Rp 250.000", qty: 1, image: require("@/assets/img/potrait.png") },
];

const blog = [
  {
    id: 1,
    judul: "3 BARANG PENTING YANG BISA BIKIN PANGLING",
    tanggal: " 8 Desember 2023",
    image: require("@/assets/img/blogimg.png"),
    teks: "Dalam menunjang aktivitas sehari-hari, kita memerlukan beberapa barang bernilai fungsional untuk membantu memudahkan beragam kegiatan."
  }
];

const changeButtonColor = (size) => {
  buttonClicked[size] = !buttonClicked[size];
  for (let key in buttonClicked) {
    if (key !== size) {
      buttonClicked[key] = false;
    }
  }
};

const showBestSellers = () => [
  { id: 1, promo: "DISKON 40%", name: "DENIM JACKET", harga: "Rp 200.000", diskon: "Rp 250.000", image: require("@/assets/img/deminjaket.png") },
  { id: 2, promo: "DISKON 40%", name: "SHIRT", harga: "Rp 210.000", diskon: "Rp 250.000", image: require("@/assets/img/shirt1.png") },
  { id: 3, promo: "DISKON 40%", name: "POLO SHIRTS", harga: "Rp 150.000", diskon: "Rp 200.000", image: require("@/assets/img/poloshirt.png") },
  { id: 4, promo: "DISKON 40%", name: "OUTERS", harga: "Rp 200.000", diskon: "Rp 250.000", image: require("@/assets/img/potrait.png") },
];

const showNewArrivals = () => {
  // Implement logic for showing new arrivals
};

const showCheapest = () => {
  // Implement logic for showing cheapest items
};

const showPromotions = () => {
  // Implement logic for showing items with promotions
};
</script>


<style scoped>
.container-populer {
  padding: 0 25px;
  margin-left:25px;
  margin-bottom: 50px;
  overflow: hidden;
}

.header-populer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.h2-populer {
  font-size: 50px;
  font-family: "Bebas Neue";
  font-weight: 400;
  color: rgba(0, 0, 0, 1);
  width: auto;
  height: 60px;
  margin: 0;
}

.buttons {
  display: flex;
  margin-right: 30px;
  height: 40px;
  font-family: "Bebas Neue";
  font-size: 15px;

}

.filter-produk {
  margin-left: 10px;
  background-color: #ffffff;
  color: #000000;
  border: 1px solid #00000050;
  text-align: center;
  border-radius: 5px;
  cursor: pointer;
  width: 70px;
  transition: background-color 0.3s ease; 
}
.filter-produk:hover {
  background-color: #000000;
  color: #ffffff;
}
.filter-produk.clicked {
  color: #FFFFFF;
  background-color: #232121;
}

.btn-cart {
  height: 37px;
  width: 39px;
  margin-top: -5px;
  margin-left: 120px;
  color: #ffffff;
  background-color: #232121;
}

.produkjual {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 30px;
  z-index: 999;
}

.populer {
  font-size: 30px;
  font-family: "Bebas Neue", "Roboto";
  width: 300px;
  height: 480px;
  border: #00000050 1px solid ;
  border-radius: 7px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-top: 20px;

}
.populer-image {
  width: 300px;
  height: 360px;
  background-color: #D9D9D9;  
}

.blogger {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 30px; 
}
.teks {
  background-color: #ffffff;
  width: 250px;
  margin-left: 28px;
  border: 1px solid  #D9D9D9 ;
  box-shadow: #D9D9D9 0px 3px 2px 1px;
  padding: 10px;
  border-bottom-left-radius: 25px;
  border-bottom-right-radius: 25px;
  border-top-right-radius: 25px;
  border-top-left-radius: 7px;
  margin-top: -110px;
}
.teks p{
  font-size: 13px;
font-family: "Roboto";
font-weight: 500;
color: #928F8F;
margin-top: 5px;
}
.teks h4{
  font-size: 24px;
font-family: "Bebas Neue";
font-weight: 400;
margin-top: 5px;
}
.blogger-image {
  width: 330px;
  border-radius: 15px; 
}
.populer-name {
  display: block;
  margin-top: 10px;
  font-weight: bold;
  font-family: "Bebas Neue";
  margin-left: 10px;
}

.populer-harga {
  font-size: 23px;
  font-family: "Roboto";
  font-weight: 700;
  margin-left: 10px;
}
.populer-diskon {
  font-size: 13px;
  font-family: "Roboto";
  font-weight: 700;
  margin-left: 5px;
  position: absolute;
  text-decoration: line-through; 
  margin-top: 5px;
  width: 70px;
  color: #928F8F;

}
.populer-promo {
position: absolute;
margin-left: -290px;
font-size: 24px;
font-family: "Bebas Neue";
font-weight: 400;
background-color: #000000;
color: #ffffff;
margin-top: 10px;
width: 100px;
text-align: center;
border-radius: 5px;
}


</style>
