<template>
  <appNavbar />
  <div class="container">
    <div class="keranjang">
      <h1>KERANJANG</h1>
      <div class="total-barang">
        <input type="radio" class="check-utama" v-model="selectAll" @click="handleCheckAll">
        <span>Pilih Semua</span>
        <span class="total-checkout"> ({{ totalItems }} barang)</span>
      </div>
      <div v-for="(category, index) in categories" :key="category.id" class="list-barang">
        <input type="radio" class="check" v-model="category.checked" @click="handleCheckClick(index)">
        <img :src="category.image" alt="Gambar Produk" class="data-image">
        <p class="data-tag">{{ category.tag }}</p>
        <h3 class="data-nama">{{ category.nama }}</h3>
        <p class="data-jenis">{{ category.jenis }}</p>
        <h3 class="data-harga">{{ category.harga }}</h3>
        <button class="btn-hapus" @click="removeItem(index)">
          <img src="@/assets/svg/sampah.svg" class="icon-sampah">
        </button>
        <div class="count">
          <button @click="decrementCount(index)">-</button>
          <span>{{ category.qty }}</span>
          <button @click="incrementCount(index)">+</button>
        </div>
      </div>
    </div>
    <div class="checkout">
      <h2>Lokasi</h2>
      <img src="@/assets/svg/location.svg" class="icon-location">
      <span class="alamat-pengirim">Bulu Lor, Semarang, Jawa Tengah</span>
      <h2>RINGKASAN PESANAN</h2>
      <p>Subtotal ({{ totalItems }} barang) <span style="margin-left: 60px;" class="data-harga">{{ totalPrice }}</span></p>
      <p>Biaya Pengiriman</p>
      <h2>Total <span style="margin-left: 150px;" class="data-harga">{{ totalPrice }}</span></h2>
      <h5 style="margin-top: 20px; float:right;"><img src="@/assets/svg/bintang.svg" style="margin-bottom: 5px;" class="icon-bintang">Termasuk PPN, jika berlaku</h5>
      <router-link to="/Payment"> <button class="btn-checkout" @click="SaveData">Checkout</button></router-link>
    </div>
    <button class="tmbh" @click="addNewItem"></button>
    <router-view></router-view>
  </div>
</template>

<script setup>
import appNavbar from '@/components/appNavbar.vue';
import { ref, watchEffect } from 'vue';
import { useRouter } from 'vue-router'

const router = useRouter()



const saveToLocalStorage = () => {
  localStorage.setItem('categories', JSON.stringify(categories.value));
  localStorage.setItem('totalItems', JSON.stringify(totalItems.value));
  localStorage.setItem('totalPrice', JSON.stringify(totalPrice.value));
};
 
   const SaveData = () => {
  localStorage.setItem('categories', JSON.stringify(categories.value));
  localStorage.setItem('totalItems', JSON.stringify(totalItems.value));
  localStorage.setItem('totalPrice', JSON.stringify(totalPrice.value));

  router.push('/payment')
}
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
const totalItems = ref(categories.value.length);
const totalPrice = ref();

watchEffect(() => {
  totalPrice.value = categories.value.reduce((accumulator, category) => {
    const price = Number(category.harga?.replace?.("Rp ", "")?.replace?.(".", "")); 
    return accumulator + (price * category.qty);
  }, 0);
  saveToLocalStorage();
});


const incrementCount = (index) => {
  categories.value[index].qty++;
  totalItems.value++;
  saveToLocalStorage();
};

const decrementCount = (index) => {
  if (categories.value[index].qty > 1) {
    categories.value[index].qty--;
    totalItems.value--;
    saveToLocalStorage();
  }
};

const removeItem = (index) => {
  totalItems.value -= categories.value[index].qty;
  categories.value.splice(index, 1);
  saveToLocalStorage();
};

const selectAll = ref(false);
const handleCheckAll = () => {
  categories.value.forEach((category) => {
    category.checked = selectAll.value;
  });
};

const handleCheckClick = (index) => {
  categories.value[index].checked = !categories.value[index].checked;
  selectAll.value = categories.value.every((category) => category.checked);
  saveToLocalStorage();
}
const addNewItem = () => {
  categories.value.push({
    id: categories.value + 1,
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
  });
  totalItems.value++; 
};

</script>



<style scoped>
.container {
    margin-top: 170px;
    margin-left: 70px;
    margin-bottom: 270px;
    }
.total-barang {
    margin-top: 20px;
    border-top: 1px solid transparent; 
    box-shadow: 0px 3px 5px  #D9D9D9;
    display: flex;
    width: 600px;
    height: 30px;
    padding: 10px;
    text-align: center;
    align-items: center;
}
.tmbh{
  color: transparent;
  background-color: transparent;
  border: transparent;
  width: 20px;
  height: 20px;
}
.total-barang span {
margin-left: 10px;
}
.total-barang input {
    margin-right: 15px;
}
.total-checkout {
    color: #928F8F;
}
input[type="radio"].check {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    width: 25px; 
    height: 25px;
    border: 1px solid #00000050; 
    border-radius: 4px; 
    outline: none;
    cursor: pointer; 
    vertical-align: middle; 
    margin-right: 5px; 
    position: relative;
}


input[type="radio"].check:checked {
    background-color: #000000;
    height: 25px;
    width: 25px;
}
input[type="radio"].check-utama {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    width: 25px; 
    height: 25px;
    border: 1px solid #00000050; 
    border-radius: 4px; 
    outline: none;
    cursor: pointer; 
    vertical-align: middle; 
    margin-right: 5px; 
    position: relative;
}


input[type="radio"].check-utama:checked {
    background-color: #000000;
    height: 25px;
    width: 25px;
}

.list-barang {
    margin-top: 20px;
    border-top: 1px solid transparent; 
    box-shadow: 0px 3px 5px  #D9D9D9;
    display: flex;
    width: 600px;
    height: 150px;
    padding: 10px;
}

.data-image {
    height: 90px;
    margin-top: 40px;
}
.data-nama {
    position: absolute;
    margin-top: 40px;
    margin-left: 120px;
    font-weight: 500;
    font-size: 24px;
    color: #000000;
    font-family: "Bebas Neue";

}
.data-nama {
    position: absolute;
    margin-top: 40px;
    margin-left: 125px;
    font-weight: 500;
    font-size: 24px;
    color: #000000;
    font-family: "Bebas Neue";

}
.data-jenis {
    position: absolute;
    margin-top: 67px;
    margin-left: 125px;
    font-weight: 500;
    font-size: 18px;
    color:#928F8F;
    font-family: "Roboto";

}
.data-tag {
    font-weight: 700;
    font-size: 24px;
    color: #000000;
    font-family: "Bebas Neue";


}
.data-harga {
    position: absolute;
    font-weight: 800;
    font-size: 18px;
    color:#000000;
    font-family: "Roboto";
    margin-left: 480px;
}
.btn-hapus {
    position: absolute;
    margin-left: 465px;
    margin-top: 100px;
    background-color: transparent;
    cursor: pointer;
    border: transparent;
    height: 30px;
    width: 30px;
}
.count {
    width: 80px;
    height: 40px;
    border: 2px solid #928F8F;
    border-radius: 15px;
    position: absolute;
    margin-left: 510px;
    margin-top: 100px;
    text-align: center;
    font-family: "Roboto";
    font-weight: 3200;
}
.count button {
    background-color: transparent;
    border: transparent;
    font-size: 30px;
    font-weight: 200;
    text-align: center;
    align-items: center;
}
.count span {
    font-size: 25px;
    font-weight: 200;
}

/*checkout*/
.checkout {
    margin-top: 20px;
    border-top: 1px solid transparent; 
    box-shadow: 0px 3px 5px  #D9D9D9;
    width: 300px;
    height: 300px;
    padding: 10px;
    position: absolute;
    right: 10%;
    top: 40%;
    padding-left: 10px;
}
.checkout h2 {
    font-size: 20px;
font-family: "Bebas Neue";
font-weight: 400;
padding: 10px;
}
.checkout p {
    margin-left: 10px;
    margin-bottom: 15px;
}
.icon-location {
    height: 20px;
    width: 20px;
    margin-left: 5px;
}
.alamat-pengirim {
    margin-bottom: 5px;
    position: absolute;
}
.btn-checkout {
    width: 100%;
    background-color: #000000;
    color: #FFFFFF;
    height: 30px;
    font-size: 20px;
    font-family: "Bebas Neue";
    font-weight: 400;
    text-align: center;
    cursor: pointer;
}
</style>
