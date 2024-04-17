<template>
  <appNavbar />
    <div class="container">
      <div class="pembayaran">
        <div class="atm">
          <img src="@/assets/svg/card.svg" alt="atm">
          <h2>KARTU KREDIT/DEBIT <img src="@/assets/svg/verified.svg" class="checkbox"></h2>
          <p>Tambah Kartu</p>
          
          <div class="pilih-atm">
            <button>
              <img src="@/assets/svg/mandiri.svg">
            </button>
            <button>
              <img src="@/assets/svg/master.svg">
            </button>
            <button>
              <img src="@/assets/svg/visa.svg">
            </button>
          </div>
          <div class="pilih-online">
            <img src="@/assets/svg/dana.svg" class="logo-dana" alt="dana">
            <input type="radio" name="dana" class="dana" id="gambar"  @dblclick="handleDoubleClick">
            <h2>DANA</h2>
            <div class="garis"></div>
            <p style="margin-top: 10px;">Aktifkan & Bayar</p>
          </div>
         
        </div>
        <button type="input" class="btn-pesanan">BUAT PESANAN</button>
        
      </div>
        <div  v-for="(category, index) in categories" :key="index"  class="payment">
          <router-link to="/Opsialamat"><button class="btn-alamat">UBAH</button></router-link>
          <h2>Alamat</h2>
          <p style="color: #928f8f;">{{ category.alamat }}</p>
        </div>
          <div class="pengiriman">
            <router-link to="/Opsikurir"> <button class="btn-alamat">UBAH</button></router-link>
              <h2>PEMILIHAN PENGIRIMAN</h2>
              <div v-for="kurir in kurirpilihan" :key="kurir.id" class="data-pengiriman">
              <img src="@/assets/svg/verified.svg" class="logo-verif">
              <p class="harga-kurir"> {{ kurir.hargakurir }}</p>
              <p class="kurir-pilihan">{{ kurir.kuririd }}</p>
              <p class="estimasi-kurir">{{ kurir.estimasi }}</p>
          </div>
   
          <div v-for="category in categories" :key="category.id" class="informasi-pesanan">
            <img :src="category.image" alt="Gambar Produk" class="data-image">
            <h3 class="data-nama">{{ category.nama }}</h3>
            <p class="data-jenis">{{ category.jenis }}</p>
            <h3 class="data-harga">{{ category.harga }}</h3>
            <p class="data-kuantitas">{{ category.kuantitas }}</p>
          </div>
      </div>
<router-view></router-view>
    </div>
</template>

<script setup>
import appNavbar from '@/components/appNavbar.vue';


const categories = [
        {
          id: 1,
          tag: "DENIM JAKET",
          nama: "JAKET DENIM JEANS TEBAL PRIA WANITA",
          harga: "Rp 200.000",
          jenis: "Warna biru, ukuran: XL",
          kuantitas: "Kuantitas 1",
          image: require("@/assets/img/deminjaket.png"),
          alamat: "Jl. Anjasmoro Raya, Tawangsari, Kec. Semarang Barat, Kota Semarang, Jawa Tengah 50144",
          estimasi: "1 Januari 2024 - 4 Januari 2024",
        }
      ];


const kurirpilihan = [
  {
    id: 1,
    hargakurir: "Rp.13.000",
    kuririd: "Standar",
    estimasi: "Estimasi tiba 1-4 jan"
  },

];
function handleDoubleClick(event) {
  const target = event.target;
  target.checked = false;
}
const retrieveFromLocalStorage = () => {
  const categories = JSON.parse(localStorage.getItem('categories'));
  const totalItems = JSON.parse(localStorage.getItem('totalItems'));
  const totalPrice = JSON.parse(localStorage.getItem('totalPrice'));
  console.log('Categories:', categories);
  console.log('Total Items:', totalItems);
  console.log('Total Price:', totalPrice);

};
retrieveFromLocalStorage();
</script>


<style scoped>
.container {
margin-top: 170px;
margin-left: 50px;
margin-bottom: 70px;
}
.payment {
    width: 600px;
    margin-top: 20px;
    padding: 15px;
    align-items: center;
    border-top: transparent;
    box-shadow: 0px 3px 3px 1px #D9D9D9;
}
.pengiriman {
  width: 600px;
  margin-top: 20px;
  padding: 15px;
  align-items: center;
  border-top: transparent;
  box-shadow: 0px 3px 3px 1px #D9D9D9;
}

.btn-alamat {
  float: right;
  background-color: transparent;
  font-family: "Bebas Neue";
  font-weight: 400;
  font-size: 24px;
  text-align: center;
  border: transparent;
  cursor: pointer;
}
.payment h2, .pengiriman h2{
margin-bottom: 15px;
color:#232121;
font-family: "Bebas Neue";
font-weight: 500;
font-size: 24px;
}
.logo-jam {
  height: 25px;
  width: 25px;
  margin-top: 10px;
  margin-bottom: 10px;
}
.data-estimasi {
  margin-left: 30px;
  position: absolute;
  margin-top: -35px;
  font-size: 15px;
font-family: "Roboto";
font-weight: 500;
color: #928F8F;

}

.data-pengiriman {
  border: 1px #000000 solid;
  border-radius: 15px;
  width: 160px;
  height: 90px;
  padding-left: 10px;
  padding-top: 10px;
  margin-top: 10px;
  font-size: 16px;
font-family: "Roboto";
font-weight: 600;
}
.harga-kurir{
  margin-top: -25px;
  position: absolute;
  margin-left: 30px;
}
.estimasi-kurir{
  margin-top: 5px;
  color: #928F8F;
}
/*pengiriman*/
.data-image{
  height: 100px;
  width: 100px;
}
.data-nama {
  width: 300px;
  font-weight: 500;
  font-size: 24px;
  color: #000000;
  font-family: "Bebas Neue";
  padding-left: 5px;
}
.data-harga {
  position: absolute;
  margin-left: 500px;
  font-size: 20px;
font-family: "Roboto";
font-weight: 800;
}
.informasi-pesanan {
  width: 500px;
  max-width: 500px;
  display:flex;
  margin-top: 20px;
}

.data-kuantitas {
  position: absolute;
  margin-left: 500px;
  font-size: 18px;
  font-family: "Roboto";
  margin-top: 30px;
  color: #928F8F;
}
.data-jenis {
  position: absolute;
  margin-left: 105px;
  margin-top: 30px;
  color: #928F8F;
  font-size: 18px;
  font-family: "Roboto";
}
.pembayaran {
  width: 400px;
  height: 500px;
  padding: 15px;
  border-top: transparent;
  box-shadow: 0px 3px 3px 1px #D9D9D9;
  float: right;
  margin-right: 50px;
  margin-bottom: 70px;
}

.atm {
  border: 1px #000000 solid;
  border-radius: 15px;
  width: 365px;
  height: 90px;
  padding: 15px;
  margin-top: 30px;
font-family: "Bebas Neue";
font-weight: 500;
font-size: 16px;
}
.atm h2 {
  position: absolute;
  margin-top: -40px;
  margin-left: 45px;
}
.checkbox {
  margin-left: 140px;
  position: absolute;
}
.atm p{
  font-size: 15px;
  font-family: "Roboto";
  font-weight: 500;
  color: #928F8F;
  margin-top: 30px;
}
.pilih-atm {
  float: right;
  margin-top: -25px;
  
}
.pilih-atm button {
  border: transparent;
  background-color: transparent;
  cursor: pointer;
  margin-right: -5px;

}
.pilih-atm button :hover{
  border: #000000 solid 1px;

}
.pilih-online {
  margin-top: 50px;
}
.pilih-online h2 {
  margin-left: 60px;
}
.dana {
  float: right;
  height: 20px;
  width: 20px;
}
.garis {
  border-bottom: #D9D9D9 3px solid;
  margin-top: 20px;
  width: 400px;
  margin-left: -15px;

}
.btn-pesanan {
  width: 100%;
  background-color: #000000;
  color: #FFFFFF;
  height: 30px;
  font-size: 20px;
  font-family: "Bebas Neue";
  font-weight: 400;
  text-align: center;
  cursor: pointer;
  margin-top: 100px;
}

</style>