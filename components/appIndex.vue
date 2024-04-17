<template>
    <div class="Navbar">
      <img src="@/assets/svg/logo.svg" alt="Logo" class="logo">
      <nav>
        <ul>
          <li><router-link to="/Index" class="link">Pria</router-link></li>
          <li>Wanita</li>
          <li><router-link to="/About" class="link">Tentang Kami</router-link></li>
          <li>Blog</li>
        </ul>
      </nav>
  
      <div class="form-search">
      <form class="search ">
        <input class="form-control" type="text" placeholder="Cari">
        <button class="btn-search">
          <img src="@/assets/svg/search.svg" alt="Logo" class="search-icon">
        </button>
      </form>
    </div>
    <div class="icon-nav">
      <ul class="icon">
        <li>
          <a href="#">     
            <button class="btn-search">
              <img src="@/assets/svg/lonceng.svg" alt="Logo" class="lonceng-icon">
            </button>
          </a>
        </li>
        <li>
         <router-link to="/Checkout">
            <button class="btn-search">
              <img src="@/assets/svg/cart.svg" alt="Logo" class="cart-icon">
            </button>
        </router-link>
        </li>
        <li>
         <router-link :to="checklogin ? '/Profile' : '/Login'">
            <button class="btn-search" >
              <img src="@/assets/svg/profile.svg" alt="Logo" class="profile-icon">
            </button>
          </router-link>
        </li>
      </ul>
    </div>

  </div>

  
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

  <div class="container-category">
    <h2 class="h2-category">KATEGORI</h2>
    <div class="categories">
      <div v-for="category in categories" :key="category.id" class="category">
          <img :src="category.image" alt="Category Image" class="category-image">
          <button class="category-button">{{ category.name }}</button>
      </div>
    </div>
  </div>

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
          <span class="populer-diskon"> {{ populer.diskon }} </span>
    
         <router-link to="/Jacketdenim"> <button class="btn-cart">
            <img src="@/assets/svg/cart.svg" style="height: 25px;" alt="Logo" class="cart-icon">
         </button> </router-link>

      </div>
    </div>
    <h2 class="h2-blog" style="margin-top: 50px; margin-bottom: 50px;">BLOG</h2>
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
    </div>
  </div>

  <router-view></router-view>
  <footer>
    <div class="container1">
    <img src="@/assets/svg/logo.svg" alt="Logo" class="logo1">
        <div class="col-2">
            <div class="Halaman">
                <h6 style="font-size: 18px;">Halaman</h6>
                <div class="Link-Halaman">
                    <a href="#">
                        <p>Pria</p>
                    </a>
                    <a href="#">
                        <p>Wanita</p>
                    </a>
                    <a href="#">
                        <p>Tentang Kami</p>
                    </a>
                    <a href="#">
                        <p>Blog</p>
                    </a>
                </div>
            </div>
        </div>
        <div class="col-2">
            <div class="Bantuan">
                <h6 style="font-size: 18px;">Bantuan dan Panduan</h6>
                <div class="Link-Bantuan">
                    <a href="#">
                        <p>Syarat dan ketentuan</p>
                    </a>
                    <a href="#">
                        <p>Kebijakan Privasi</p>
                    </a>
                    <a href="#">
                        <p>Tentang Kami</p>
                    </a>
                </div>
            </div>            
        </div>
        <div class="col-2">
            <div class="kontak">
                <h6 style="font-size: 18px;">Kontak Kami</h6>
                <div class="Link-Kontak">
                    <a href="#">
                        <div class="telpon">
                            <img src="@/assets/svg/telpon.svg" alt="Logo" class="icon-telpon">
                            <span class="span-telpon ">(+62) 889-019-8920</span>
                            <br>
                        </div>
                    </a>
                    <a href="#">
                        <div class="mail">
                            <img src="@/assets/svg/mail.svg" alt="Logo" class="icon-mail">
                            <span class="span-mail ">@anonym@gmail.com</span>
                        </div>
                    </a>
                    <a href="#">
                    </a>
                </div>
            </div>
        </div>
        <div class="col-2">
            <div class="Social">
                <h6 style="font-size: 18px;">Social Media</h6>
                <img src="@/assets/svg/facebook.svg" alt="Logo" class="icon-social">
                <img src="@/assets/svg/instagram.svg" alt="Logo" class="icon-social">
                <img src="@/assets/svg/twitter.svg" alt="Logo" class="icon-social">
                <img src="@/assets/svg/youtube.svg" alt="Logo" class="icon-social">
                <img src="@/assets/img/wordpres.png" alt="Logo" class="icon-word">
            </div>
        </div>
        <p class="copyright">@ 2023. Online Store. All rights reserved.</p>
    </div>
    <div class="border-bottom"></div>
</footer>

  </template>
  
<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';


const checklogin = ref(true);
const router = useRouter();
const checkLoginStatus = () => {
  const userEmail = localStorage.getItem('userEmail');
  if (!userEmail) {
    console.log('Belum ada pengguna yang login. Arahkan ke halaman login.');
    router.push('/Login');
  } else {
    console.log('Pengguna sudah login dengan email:', userEmail);
  }
};
onMounted(() => {
  checkLoginStatus();
  window.addEventListener('message', (event) => {
    if (event.data === 'userLoggedIn') {
      localStorage.setItem('userEmail', event.data);
      console.log('Pengguna berhasil login.');
    } else if (event.data === 'userLoggedOut') {
      localStorage.removeItem('userEmail');
      console.log('Pengguna berhasil logout.');
      router.push('/Login');
    }
  });
});
window.addEventListener('beforeunload', () => {
  localStorage.removeItem('userEmail');
});


const categories = [
  { id: 1, name: "Jaket", image: require("@/assets/img/jaket.png") },
  { id: 2, name: "T-Shirt", image: require("@/assets/img/Tshirt.png") },
  { id: 3, name: "Kemeja", image: require("@/assets/img/kemeja.png") },
  { id: 4, name: "Outers", image: require("@/assets/img/outer.png") },
  { id: 5, name: "Shirts", image: require("@/assets/img/shirt.png") }
];

  const images = [
    require("@/assets/img/Bannerr.png"),
    require("@/assets/img/banner1.png"),
    require("@/assets/img/banner2.jpg")
  ];
  const currentIndex = ref(0);
  const offset = ref(0);
  const carouselSlide = ref(null);
  
  const goTo = (index) => {
    currentIndex.value = index;
    offset.value = -index * carouselSlide.value.offsetWidth;
    if (index === images.length - 1) {
      setTimeout(() => {
        currentIndex.value = 0;
        offset.value = 0;
      }, 5000); 
    }
  };
  
  onMounted(() => {
    carouselSlide.value = document.querySelector('.carousel-slide');
  });
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

</script>
  
  
<style scoped>
.Navbar {
background-color: #232121;
height: 100px;
width: 100%;
top: 0;
left: 0;
position: fixed;
z-index: 1; 
}

@media screen and (max-width: 768px) {

.Navbar {
    height: 60px; 
}
nav li {
  font-size: 14px;
}
.logo {
 height: 20px;
 width: 40px;
}
.form-search{
  height: 30px;
  width: 100px;
  right: 40%;
}
.carousel-image {
  width: 200%; 
  justify-content: space-between;
}

.carousel-item {
  flex: 0 0 auto;
}

.dots, .explore-button {
  display: none; 
}
}

.logo {
width: 100px; 
height: auto;
position: fixed;
margin-left: 40px;
margin-top: 30px;
}
.link {
    color: #FFFFFF;
    text-decoration: none;
  }
  
.link:hover {
color: #D9D9D9;
}
.btn-search{
float: right;
height: 25px;
width: 25px;
border: transparent;
background-color: transparent;
cursor: pointer;
align-items: center;
}
.search-icon{
height: auto;
position: relative;
margin-left: 40px;
float: right;
margin-top: 5px;
}

nav ul {
list-style-type: none;
padding: 0;
margin-left: 180px;
display: flex;
justify-content: start;
font-family: 'Bebas Neue';
font-size: 30px;
}

nav ul li  {
color: #FFFFFF;
position: relative;
display: inline-block;
margin-right: 40px;
margin-top: 30px; 
}

nav ul li:hover {
color: #D9D9D9;
}

nav ul li::after {
content: '';
position: absolute;
left: 0;
bottom: -5px; 
width: 100%; 
height: 2px; 
background-color: #FFFFFF;
transition: all 0.3s ease; 
transform: scaleX(0); 
}

nav ul li:hover::after {
transform: scaleX(1); 
}

.form-search {
position: absolute;
right: 20%;
border: 0px  transparent;
border-radius: 10px; 
height: 30px;
top: 30px; 
width: 300px; 
padding: 5px 15px;
background-color: white; 
font-size: 25px;
outline: none; 
}
.search { 
border-radius: 5px; 
}

.search input:focus {
border: none;
outline: none; 
}

.search input[type="text"] {
width: 150px; 
font-size: 20px;
position: absolute;
left: 5px;
border: none; 
padding: 5px 10px; 
}

.icon-nav {
display: flex;
right: 0;
top: 29px;
position: fixed;
}
.icon {
list-style-type: none;
display: flex;
margin-right: 25px;
justify-content: end;
height: 35px;
}

.icon button{
position: relative;
padding-right: 60px;
height: 40px;
width: 15px;
}


.lonceng-icon, .cart-icon, .profile-icon {
height: 35px;
}
.lonceng-icon:hover {
transform: scale(1.1);
transition: transform 0.3s ease, color 0.3s ease;
}
.cart-icon:hover {
transform: scale(1.1);
transition: transform 0.3s ease, color 0.3s ease;
}
.profile-icon:hover { 
transform: scale(1.1);
transition: transform 0.3s ease, color 0.3s ease;
}
/*CAROUSEL*/
.carousel {
position: relative;
overflow: hidden;
margin-bottom: 150px;
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

/*CATEGORY*/
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
/*POPULER*/

.container-populer {
    padding: 0 25px;
    margin-left:25px;
    margin-bottom: 50px;
    position: relative;
overflow: hidden;
  }
  
  .header-populer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
  }
  
  .h2-populer, .h2-blog {
    font-size: 50px;
    font-family: "Bebas Neue";
    font-weight: 400;
    color: #000000;
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
/*FOOTER*/
.container1 {
width:  1110px;
height: 400px;
background-color: #232121;
position: absolute;
padding-left: 50px;
padding-right: 50px;
font-family: 'inter';
margin-top: 200px;
}
.border-bottom {
height: 275px;
width: 78.5%;
border-bottom:  1px #FFFFFF50 solid;
margin-left: 10.5%;
position: absolute;
margin-top: 240px;
}
.logo1 {
width: 100px; 
height: auto;
position: absolute;
margin-left: 80px;
margin-top: 65px;
}
.copyright {
margin-left: 80px;
color: #FFFFFF;
font-size: 12px;
margin-top: 12%;

}

.icon-telpon {
margin-top: 10px;
height: 23px;
width: auto;
}
.icon-mail {
margin-top: 13px;
width: 23px;
}

.icon-social {
margin-top: 25px;
height: 19px;
width: auto;
margin-right: 20px;
}
.icon-word{
height: 35px;
margin-bottom: -7px;
}

.Halaman, .Bantuan, .kontak, .Social {
color: #FFFFFF;
}
.Halaman {
margin-left: 19%;
margin-top: 70px;
}
.Bantuan {
margin-left: 32%;
margin-top: -128px;
}
.kontak{
margin-left: 54%;
margin-top: -102px;
}
.Social{
margin-left: 75%;
margin-top: -93px;
}

.Halaman a,.Bantuan a, .kontak a,.Social a {
text-decoration: none;
color: #FFFFFF;
}
.Link-Halaman p, .Link-Bantuan p {
margin-top: 10px;
font-weight: 400;
font-size: 14px;
}

.span-telpon{
position: absolute;
margin-top: 11px;
margin-left: 6px;
font-size: 14px;

}
.span-mail {
position: absolute;
margin-top: 13px;
margin-left: 6px;
font-size: 14px;

}
</style>