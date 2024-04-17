<template>
  <appNavbar />
    <div class="container">
        <div v-for="category in categories" :key="category.id"  class="list-produk">
            <div class="navigation">
                <p class="abu-abu" style=" color: #b6b1b1; font-size: 20px; ">Men <img src="@/assets/svg/arrowright.svg" class="arrow"> Populer Product <img src="@/assets/svg/arrowright.svg"  class="arrow"> </p>
                <p class="hitam">Denim Jacket</p>
            </div>
            <div class="informasi-produk">
                <h3 class="data-name">{{ category.name }}</h3>
                <p style="margin-bottom: 5px;font-family: Roboto; "><img :src="category.bintang" alt="Bintang Produk" class="star" style="height: 25px; margin-bottom: -5px;">  (4.0)</p>
                <p style="font-family: roboto;font-size: 20px; font-weight: 500; margin-top: 10px;">Terjual 200+</p>
                <h3 class="data-harga">{{ category.harga }}</h3>
                <p class="ukuran"><b>Pilih Ukuran Pakaian</b></p>
                <button class="btn-ukuran" :class="{ clicked: buttonClicked['M'] }" @click="changeButtonColor('M')">M</button>
                <button class="btn-ukuran" :class="{ clicked: buttonClicked['L'] }" @click="changeButtonColor('L')">L</button>
                <button class="btn-ukuran" :class="{ clicked: buttonClicked['XL'] }" @click="changeButtonColor('XL')">XL</button>
                <button class="btn-ukuran" :class="{ clicked: buttonClicked['XXL'] }" @click="changeButtonColor('XXL')">XXL</button>
                <div class="beli">
                    <button class="btn-keranjang" :class="{ clicked: buttonClicked1['keranjang'] }" @click="changeButtonColor1('keranjang')">Masukkan Keranjang</button>
                    <router-link to="/Checkout"><button class="btn-beli" :class="{ clicked: buttonClicked1['beli'] }" @click="addNewItem">Beli Sekarang</button></router-link>
                </div>
            </div>
            <div class="gambar-produk">
             <div class="image-utama"><img :src="category.image" alt="Gambar Produk" class="data-image"></div> 
                <img :src="category.image" alt="Gambar Produk" class="image-mini1">
                <img :src="category.image" alt="Gambar Produk" class="image-mini2">
                <img :src="category.image" alt="Gambar Produk" class="image-mini3">
            </div>
        </div>
        <div class="deskripsi">
            <div class="desk">
                <h2>Deskripsi</h2>
                <p>JAKET DENIM JEANS TEBAL PRIA WANITA / JAKET DENIM / JAKET JEANS / JAKET TEBAL / JAKET PRIA MUSIM DINGIN
                  <br>
                  <br>
                  Material bahannya kita pakai bahan full jeans (bahan jeans yg tebaL)<br>
                  Dan tidak ngaret karena bukan jaket jeans cewe<br>
                  Untuk ukuran yang kami sediakan ada<br>
                  ukuran : M L XL<br>
                  size chart<br>
                  Panjang × lebar<br>
                  M : (50 × 58)<br>
                  L. : (52 × 60)<br>
                  XL : (54 × 62)<br>
                  selama masih ada di pajang di toko kami berarti barang masih tersedia, dan siap kami kirim pada kalian semua yg suka akan barang kami.<br>
                  Happy shopping.<br>
                  <br>
                  <br>
                  #jaketjeans<br>
                  #jaketjeansmurah<br>
                  #jaketjeanspria<br>
                  </p>
            </div>
            <div class="ulasan"></div>
            <div class="rating">
              <div class="total-ulasan">
                <h2 style="margin-bottom: 40px;">TOTAL ULASAN</h2>
                <img src="@/assets/svg/Star.svg" alt="bintang rating" class="big-star"> 
               <h2 style="margin-top: -70px; margin-left:100px;"> 4.8/5.0</h2>
               <div class="teks-star">
                <h3>95% pembeli puas</h3>
                <p style="color: #928F8F; font-family: Roboto">15 rating & 3 ulasan</p>

               </div>
                <div class="star5">
                  <h2 class="kanan"><img src="@/assets/svg/Star.svg" style="height:25px;" >  5</h2>
                  <div class="bar-container">
                    <div class="bar-5"></div>
                 </div>
                  <h2 class="kiri">2</h2>
                </div>
                <div class="star5">
                  <h2 class="kanan"><img src="@/assets/svg/Star.svg" style="height:25px;" >  4</h2>
                  <div class="bar-container">
                    <div class="bar-4"></div>
                 </div>
                  <h2 class="kiri">0</h2>
                </div>
                <div class="star5">
                  <h2 class="kanan"><img src="@/assets/svg/Star.svg" style="height:25px;" >  3</h2>
                  <div class="bar-container">
                    <div class="bar-3"></div>
                 </div>
                  <h2 class="kiri">1</h2>
                </div>
                <div class="star5">
                  <h2 class="kanan"><img src="@/assets/svg/Star.svg" style="height:25px;" >  2</h2>
                  <div class="bar-container">
                    <div class="bar-2"></div>
                 </div>
                  <h2 class="kiri">0</h2>
                </div>
                <div class="star5">
                  <h2 class="kanan"><img src="@/assets/svg/Star.svg" style="height:25px;" >  1</h2>
                  <div class="bar-container">
                    <div class="bar-1"></div>
                 </div>
                  <h2 class="kiri">0</h2>
                </div>
              </div>
              <div class="ulasan-pilihan">
                <h2 style="font-family: Bebas Neue; font-size: 35px; font-weight: 400; ">ULASAN PILIHAN</h2>
                <h3 style="font-family: Roboto; font-size: 20px; font-weight: 700;">Menampilkan 3 dari 3 ulasan</h3>
                <div class="filter">
                  <label for="sort"></label>
                  <select v-model="sortBy" id="sort" class="select">
                    <option value="newest">Terbaru</option>
                    <option value="oldest">Terlama</option>
                  </select>
                 </div>
                <div v-for="item in sortedItems" :key="item.id" class="ulasan1">
                  <span><img src="@/assets/svg/Star.svg" style="margin-right: 10px;"></span>
                  <span><img src="@/assets/svg/Star.svg" style="margin-right: 10px;"></span>
                  <span><img src="@/assets/svg/Star.svg" style="margin-right: 10px;"></span>
                  <span><img src="@/assets/svg/Star.svg" style="margin-right: 10px;"></span>
                  <span><img src="@/assets/svg/Star.svg"></span>
                  <span style="color: #928F8F;">  {{ item.tanggal }}</span>
                  <div class="profil-ulasan1">
                  <img :src="item.profil" style="height: 80px; margin-top: 30px;" class="profil-ulasan"> 
                  <p >{{ item.nama }} </p>
                  <br>
                  <p style="color: #928F8F; margin-top: -10px;">{{ item.varian }}</p>
                  </div>
                  <p style="margin-top: 20px; font-family: Roboto; font-size: 20px; font-weight: 600;">{{ item.review }}</p>
                </div>
              </div>
            </div>
            <div  v-for="category in categories" :key="category.id" class="rekomendasi-produk">
              <h2 style="font-family: Bebas Neue; font-size: 35px; font-weight: 400; ; ">REKOMENDASI</h2>
                <div class="rekomen">
                  <div class="rekomen-link">
                    <img :src="category.image" alt="Rekomen Image" class="rekomen-image">
                    <span class="rekomen-promo">{{ category.promo }}</span>
                    <span class="rekomen-name">{{ category.name }}</span>
                    <span class="rekomen-harga">{{ category.harga }} </span>
                    <router-link to="/Jacketdenim"> 
                      <button class="btn-cart">
                        <img src="@/assets/svg/cart.svg" style="height: 25px;" alt="Logo" class="cart-icon">
                      </button>
                    </router-link>
                  </div>     
                </div>
                <div class="rekomen">
                  <div class="rekomen-link">
                    <img :src="category.image" alt="Rekomen Image" class="rekomen-image">
                    <span class="rekomen-promo">{{ category.promo }}</span>
                    <span class="rekomen-name">{{ category.name }}</span>
                    <span class="rekomen-harga">{{ category.harga }} </span>
                    <router-link to="/Jacketdenim"> 
                      <button class="btn-cart">
                        <img src="@/assets/svg/cart.svg" style="height: 25px;" alt="Logo" class="cart-icon">
                      </button>
                    </router-link>
                  </div>     
                </div>
                <div class="rekomen">
                  <div class="rekomen-link">
                    <img :src="category.image" alt="Rekomen Image" class="rekomen-image">
                    <span class="rekomen-promo">{{ category.promo }}</span>
                    <span class="rekomen-name">{{ category.name }}</span>
                    <span class="rekomen-harga">{{ category.harga }} </span>
                    <router-link to="/Jacketdenim"> 
                      <button class="btn-cart">
                        <img src="@/assets/svg/cart.svg" style="height: 25px;" alt="Logo" class="cart-icon">
                      </button>
                    </router-link>
                  </div>     
                </div>
                <div class="rekomen">
                  <div class="rekomen-link">
                    <img :src="category.image" alt="Rekomen Image" class="rekomen-image">
                    <span class="rekomen-promo">{{ category.promo }}</span>
                    <span class="rekomen-name">{{ category.name }}</span>
                    <span class="rekomen-harga">{{ category.harga }} </span>
                    <router-link to="/Jacketdenim"> 
                      <button class="btn-cart">
                        <img src="@/assets/svg/cart.svg" style="height: 25px;" alt="Logo" class="cart-icon">
                      </button>
                    </router-link>
                  </div>     
                </div>
            </div>
            <div  v-for="category in categories" :key="category.id" class="rekomendasi-produk2">
              <div class="rekomen">
                <div class="rekomen-link">
                  <img :src="category.image" alt="Rekomen Image" class="rekomen-image">
                  <span class="rekomen-promo">{{ category.promo }}</span>
                  <span class="rekomen-name">{{ category.name }}</span>
                  <span class="rekomen-harga">{{ category.harga }} </span>
                  <router-link to="/Jacketdenim"> 
                    <button class="btn-cart">
                      <img src="@/assets/svg/cart.svg" style="height: 25px;" alt="Logo" class="cart-icon">
                    </button>
                  </router-link>
                </div>     
              </div>
              <div class="rekomen">
                <div class="rekomen-link">
                  <img :src="category.image" alt="Rekomen Image" class="rekomen-image">
                  <span class="rekomen-promo">{{ category.promo }}</span>
                  <span class="rekomen-name">{{ category.name }}</span>
                  <span class="rekomen-harga">{{ category.harga }} </span>
                  <router-link to="/Jacketdenim"> 
                    <button class="btn-cart">
                      <img src="@/assets/svg/cart.svg" style="height: 25px;" alt="Logo" class="cart-icon">
                    </button>
                  </router-link>
                </div>     
              </div>
              <div class="rekomen">
                <div class="rekomen-link">
                  <img :src="category.image" alt="Rekomen Image" class="rekomen-image">
                  <span class="rekomen-promo">{{ category.promo }}</span>
                  <span class="rekomen-name">{{ category.name }}</span>
                  <span class="rekomen-harga">{{ category.harga }} </span>
                  <router-link to="/Jacketdenim"> 
                    <button class="btn-cart">
                      <img src="@/assets/svg/cart.svg" style="height: 25px;" alt="Logo" class="cart-icon">
                    </button>
                  </router-link>
                </div>     
              </div>
              <div class="rekomen">
                <div class="rekomen-link">
                  <img :src="category.image" alt="Rekomen Image" class="rekomen-image">
                  <span class="rekomen-promo">{{ category.promo }}</span>
                  <span class="rekomen-name">{{ category.name }}</span>
                  <span class="rekomen-harga">{{ category.harga }} </span>
                  <router-link to="/Jacketdenim"> 
                    <button class="btn-cart">
                      <img src="@/assets/svg/cart.svg" style="height: 25px;" alt="Logo" class="cart-icon">
                    </button>
                  </router-link>
                </div>     
              </div>
            </div>
        </div>
    </div>
    <appFooter />
    <router-view></router-view>
  </template>


<script setup>
import appNavbar from '@/components/appNavbar.vue';
import appFooter from '@/components/appFooter.vue';
import { ref, watchEffect  } from 'vue';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';
const store = useStore();


const router = useRouter();


const addNewItem = async () => {
  try {
    const dataToSend = {
      itemAdded: store.state.categories[0], 
      selectedSize: store.state.selectedSize
    };
    console.log('Data yang dikirim ke server:', dataToSend); 
    store.dispatch('addNewItem'); 
    router.push('/Checkout');
  } catch (error) {
    console.error('Error adding new item:', error.message); 
  }
};


const selectedSize = ref('');
const categories = ref([
  {
    id: 1,
    name: "DENIM JACKET",
    nama: "JAKET DENIM JEANS TEBAL PRIA WANITA",
    harga: "Rp 200.000",
    jenis: "Warna biru, ukuran: XL",
    kuantitas: "kuantitas 1",
    image: require("@/assets/img/deminjaket.png"),
    alamat: "Jl. Anjasmoro Raya, Tawangsari, Kec. Semarang Barat, Kota Semarang, Jawa Tengah 50144",
    estimasi: "1 Januari 2024 - 4 Januari 2024",
    bintang: require("@/assets/img/star.png"),
    promo: "FOR SALE",
    qty: 1,
  }
]);
const buttonClicked = ref({
  M: false,
  L: false,
  XL: false,
  XXL: false,
});
const buttonClicked1 = ref({
  keranjang: false,
  beli: false,
});

const sortBy = ref('newest');
const items = ref([
  {
    id: 1,
    tanggal: "Hari ini",
    profil: require("@/assets/img/ulasan1.png"),
    nama: "Dika",
    varian: "Varian UK: XXL",
    review: "Barang di packing sangat rapi kurir juga sangat ramah",
    createdAt: new Date('2024-03-17')
  },
  {
    id: 2,
    tanggal: "1 Minggu lalu",
    profil: require("@/assets/img/ulasan2.png"),
    nama: "Reza",
    varian: "Varian UK: XXL",
    review: "Bahan Jaket nya bagus sesuai dengan yang ada di deskripsi",
    createdAt: new Date('2024-03-01')
  },
  {
    id: 3,
    tanggal: "1 Bulan lalu",
    profil: require("@/assets/img/ulasan3.png"),
    nama: "Pahlevi",
    varian: "Varian UK: L",
    review: "Packingnya kurang rapi",
    createdAt: new Date('2024-02-01')
  }
]);
const changeButtonColor = (size) => {
  console.log(`Ukuran dipilih: ${size}`);
  selectedSize.value = size;
  for (const key in buttonClicked.value) {
    if (Object.hasOwnProperty.call(buttonClicked.value, key)) {
      buttonClicked.value[key] = key === size;
    }
  }
};
const changeButtonColor1 = () => {
  console.log(`Keranjang. Ukuran barang yang dipilih: ${selectedSize.value}`);

};



const sortedItems = ref([]);
watchEffect(() => {
  if (sortBy.value === 'newest') {
    sortedItems.value = items.value.slice().sort((a, b) => b.createdAt - a.createdAt);
  } else if (sortBy.value === 'oldest') {
    sortedItems.value = items.value.slice().sort((a, b) => a.createdAt - b.createdAt);
  }
});

</script>

  
  <style scoped>
.container {
margin-top: 150px;
margin-left: 50px;
margin-right: 50px;
margin-bottom: -700px;
}
@media screen and (max-width: 1024px) {
  .informasi-produk {
    font-size: 16px;
    margin-right: -40px;
  }
  
  .beli {
    display: flex;
    }
}
.navigation {
display: flex;
justify-content: space-between;
width: 500px;
}
.rekomen-link {
  text-decoration: none;
  color: #000000;

}
.image-utama{
    background-color: #D9D9D9;
    height: 380px;
    width: 550px;
    border-radius:15px ;
    margin-top: 20px;
    align-items: center;

}
.profil-ulasan1 p{
  font-size: 20px;
font-family: "Roboto";
font-weight: 600;
margin-left: 90px;
margin-top: -70px;
}
.data-image{
margin-left: 140px;
    height: 380px;
    width: 280px;
}
.filter {
  float: right;
  margin-top: -40px;
}
.select {
 width: 120px;
 height: 30px;
 font-size: 18px;
font-family: "Roboto";
font-weight: 500;
}


.kanan {
  font-size: 18px;
  font-family: "Roboto";
  font-weight: 500;
}
.kiri {
  margin-left: 165px;
  margin-top: -27px;
  font-size: 18px;
  font-family: "Roboto";
  font-weight: 500;
}
.bar-container {
  width: 100px;
  background-color: #D9D9D9;
  text-align: center;
  color: white;
  border-radius: 15px;
  margin-left: 55px;
  margin-top: -27px;
}

.bar-5 {width: 90px; height: 8px; background-color: #232121; border-radius: 15px;}
.bar-4 {width: 0px; height: 8px; background-color: #D9D9D9; border-radius: 15px;}
.bar-3 {width: 50px; height: 8px; background-color: #232121; border-radius: 15px;}
.bar-2 {width: 0px; height: 8px; background-color: #D9D9D9; border-radius: 15px;}
.bar-1 {width: 0px; height: 8px; background-color: #D9D9D9; border-radius: 15px;}

.image-mini1, .image-mini2, .image-mini3{
    background-color: #d9d9d9;
    height: 190px;
    width: 170px;
    border-radius:15px ;
    margin-right: 20px;
    margin-top: 20px;
}
.data-harga {
    font-size: 30px;
font-family: "Roboto";
font-weight: 500;
margin-top: 10px;
}
.data-name {
    width: 300px;
    font-weight: 500;
    font-size: 36px;
    color: #000000;
    font-family: "Bebas Neue";
  }
.star {
    margin-right: 10px;
    margin-bottom: 15px;
}
.ulasan-pilihan {
  float: right;
  height: 500px;
  width: 800px;
  margin-top: -400px;
}
.btn-ukuran {
    margin-top: 15px;
    margin-right: 10px;
    background-color: transparent;
    border-radius: 5px;
    font-size: 16px;
font-family: "Roboto";
font-weight: 500;
height: 30px;
width: 40px;
border: 1px solid #232121;
cursor: pointer;
text-align: center;
}
.btn-ukuran:hover {
    color: #FFFFFF;
    background-color: #232121;
}
.btn-ukuran.clicked {
    color: #FFFFFF;
    background-color: #232121;
  }
  .btn-keranjang, .btn-beli {
    width: 170px;
    height: 40px;
    border: 1px solid #232121;
cursor: pointer;
text-align: center;
margin-top: 20px;
margin-right: 15px;
background-color: transparent;
border-radius: 5px;
font-size: 16px;
font-family: "Roboto";
font-weight: 500;
  }
  .btn-beli:hover, .btn-keranjang:hover {
    color: #FFFFFF;
    background-color: #232121;
}
.btn-keranjang.clicked, .btn-beli.clicked {
    color: #FFFFFF;
    background-color: #232121;
  }
.ukuran {
    font-size: 24px;
font-family: "Roboto";
font-weight: 700;
margin-top: 15px;
}
.hitam {
position: absolute;
font-family: "Roboto";
font-weight: 500;
font-size: 20px;
margin-left: 230px;
margin-top: -2px;
}
.arrow {
color: #b6b1b1 ;
position: relative;
height: 20px;
width: 20px;
margin-bottom: -2px;
}        
.informasi-produk {
    float: right;
    margin-top: 20px;
}
.deskripsi {
    width: 1120px;
    height: 2400px;
    border: #00000050 2px solid;
    margin-top: 30px;
}
.desk {
 padding: 25px;
}
.desk p {
  font-size: 20px;
font-family: "Roboto";
font-weight: 500;
}
.desk h2 {
  font-size: 35px;
  font-family: "Bebas Neue";
  font-weight: 400;}

  .desk h2:hover {
    border-bottom: #000000 3px solid;
    width: 110px;
    display: inline-block;
  }
  .rating {
    width: 1065px;
    height: 500px;
    margin-top: 30px;
    margin-left: 25px;
  }
  .total-ulasan {
    width: 265px;
    height: 400px;
  }
  .total-ulasan h2{
    font-size: 35px;
    font-family: "Bebas Neue";
    font-weight: 400;
    
  }
  .big-star {
    height: 80px;
    width: auto;
    margin-top: 30px;
  }
  .total-ulasan h3 {
    font-size: 25px;
    font-family: "Bebas Neue";
    font-weight: 400;
  }
  .teks-star{
    margin-left: 20px;
    margin-top: 20px;
  }
  .ulasan1{
    margin-top: 50px;
  }
  .rekomendasi-produk {
    margin-left: 20px;
    margin-right: 20px;
    margin-top: 300px;
    display: grid;
    grid-template-columns: repeat(10, 1fr);
    grid-gap: 10px;
  }
  .rekomendasi-produk2 {
    margin-left: 180px;
    margin-top: -20px;
    display: grid;
    grid-template-columns: repeat(10, 1fr);
    grid-gap: 10px;
  }
  .btn-cart {
    transition: transform 0.5s; 
  }
  
  .rekomen {
    font-size: 30px;
    font-family: "Bebas Neue", "Roboto";
    width: 253px;
    height:370px;
    border:  #d9d9d9 1px solid ;
    border-radius: 15px;
    background-color: #FFFFFF;
    box-shadow: 0px  4px 2px  #d9d9d9;
    margin-top: 60px;
    margin-left: -160px;
    display: grid;
    grid-template-columns: repeat(10, 1fr);
    grid-gap: 10px;
    margin-right: 170px;

  }
  .rekomen-image {
    width: 253px;
    height: 260px;
    background-color:  #d9d9d9;
    align-items: center;
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
    
  }
  

  .rekomen-name {
    display: block;
    margin-top: 10px;
    font-weight: bold;
    font-family: "Bebas Neue";
    margin-left: 10px;
  }
  
  .rekomen-harga {
    font-size: 23px;
    font-family: "Roboto";
    font-weight: 700;
    margin-left: 10px;
  }
  .rekomen-promo{
    position: absolute;
    float: left;
    margin-left: -245px;
    color: #FFFFFF;
    background-color: #232121;
    margin-top: 10px;
    width: 80px;
    text-align: center;
    font-size: 24px;
    height: auto;
    border-radius: 5px;
  }
  .btn-cart {
    height: 37px;
    width: 39px;
    margin-top: -5px;
    margin-left: 75px;
    color: #ffffff;
    background-color: #232121;
   cursor: pointer;
  }
  </style>
