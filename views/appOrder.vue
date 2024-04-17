<template>
    <AppNavbar />
    <div class="container">
        <div class="order">
            <h1>ORDER HISTORY</h1>
            <div class="order-search">
                  <input class="order-control" type="text" placeholder="Cari riwayat belanja disini">
                  <button class="btn-search">
                    <img src="@/assets/svg/search.svg" alt="Logo" class="search-icon">
                  </button>
            </div>
            <div class="search-date">
                <button class="btn-date">
                    <img src="@/assets/svg/tanggal.svg" alt="logo" class="date">
                    <p>Pilih Tanggal Riwayat Order</p>
                </button>
            </div>

            <div v-for="category in  categories" :key="category.id" class="informasi-order">
                <div class="informasi-pesanan">
                        <img :src="category.image" alt="Gambar Produk" class="data-image">
                        <h3 class="data-nama">{{ category.nama }}</h3>
                        <p class="data-jenis">{{ category.jenis }}</p>
                        <p class="total"> TOTAL PEMBAYARAN </p>
                        <h3 class="data-harga">{{ category.harga }}</h3>
                </div>
                <div class="garis"></div>
                <div class="informasi-alamat">
                    <h2>Alamat</h2>
                    <p class="data-alamat"> {{ category.alamat }}</p>
                </div>
                <div class="garis"></div>
                <div class="informasi-estimasi">
                    <h2>Dikirim - Diterima</h2>
                    <img src="@/assets/svg/jam.svg" alt="logo" class="logo-jam">
                    <p class="data-estimasi">{{ category.estimasi }}</p>
                    <h2>Pengiriman</h2>
                    <div v-for="kurir in kurirpilih" :key="kurir.id" class="data-pengiriman">
                        <img src="@/assets/svg/verified.svg" class="logo-verif">
                        <p class="harga-kurir"> {{ kurir.hargakurir }}</p>
                        <p class="kurir-pilihan">{{ kurir.kuririd }}</p>
                        <p class="estimasi-kurir">{{ kurir.estimasi }}</p>
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import AppNavbar from '@/components/appNavbar.vue';
import { ref } from 'vue';

    const categories = ref ([
        {
          id: 1,
          nama: "JAKET DENIM JEANS TEBAL PRIA WANITA",
          harga: "Rp 200.000",
          jenis: "Warna biru, ukuran: XL",
          image: require("@/assets/img/deminjaket.png"),
          alamat: "Jl. Anjasmoro Raya, Tawangsari, Kec. Semarang Barat, Kota Semarang, Jawa Tengah 50144",
          estimasi: "1 Januari 2024 - 4 Januari 2024",
          createdAt: new Date('2024-01-4')

        },
    ]);


     const kurirpilih = [
        {
          id: 1,
          hargakurir: "Rp.13.000",
          kuririd: "Standar",
          estimasi: "Estimasi tiba 1-4 jan"
        }
      ];



</script>


`
<style scoped>
.container {
    margin-top: 150px;
    margin-left: 70px;
    margin-bottom: 70px;
    display: flex;
}
.order-control{
    height: 45px;
    width: 400px;
    border-radius: 5px;
    font-size: 20px;
    font-family: "Roboto";
font-weight: 400;
padding-left: 10px;
margin-top: 30px;
}
.order h1{
    font-family: "Bebas Neue";
font-weight: 400;
font-size: 50px;
}
.input [type=date]{
    border: transparent;
}
.garis {
    border-right: #D9D9D9 2px solid;
    height: 220px;
}
.btn-search{
  background-color: transparent;
  border: transparent;
  margin-left: -50px;
  margin-top: 45px;
  position: absolute;
}
.btn-date{
    background-color: transparent;
    border: transparent;
    position: absolute;
    right: 35%;
    margin-top: -40px;
    display: flex;
    cursor: pointer;
}
.date {
height: 35px;
appearance: none; 
border: none;
text-decoration: none;
margin-top: -1px;
}
.btn-date p{
    padding-left: 10px;
    color: #928F8F;
    padding-top: 7px;
    font-size: 17px;
font-family: "Roboto";
font-weight: 500;

}

/*infromasi pesanan*/
.informasi-order{
    width: 1100px;
    height: 250px;
    margin-top: 50px;
    border-top: 1px solid transparent; 
    box-shadow: 0px 3px 5px  #D9D9D9;
    display: flex;
}
.informasi-order h2 {
    font-size: 20px;
font-family: "Roboto";
font-weight: 800;
}
.informasi-pesanan {
    width: 500px;
    max-width: 500px;
    display:flex;
    padding: 0px 15px;
}
.data-image{
    background-color: #D9D9D9;
    height: 100px;
    width: 100px;
    border-radius:15px ;
}
.data-nama {
    font-size: 24px;
font-family: "Bebas Neue";
font-weight: 400;
width: 296px;
padding-left: 10px;

}
.data-jenis {
    position: absolute;
    margin-left: 110px;
    margin-top: 35px;
    color: #928F8F;
    font-size: 20px;
    font-family: "Roboto";
}
.total {
    position: absolute;
    margin-left: 110px;
    margin-top: 70px;
    font-size: 24px;
font-family: "Bebas Neue";
font-weight: 400;
}
.data-harga {
    position: absolute;
    margin-left: 110px;
    margin-top: 105px;
    color: #928F8F;
    font-size: 20px;
font-family: "Roboto";
font-weight: 500;
}
.informasi-alamat {
    width: 300px;

}
.informasi-estimasi {
    width: 300px;
}
/*alamat*/
.informasi-alamat {
    padding: 0px 20px;
}
.data-alamat{
    font-size: 18px;
font-family: "Roboto";
font-weight: 500;
color: #928f8f;
width: 289px;
padding-top: 12px;
}
/*estemasi*/
.informasi-estimasi{
    padding: 0px 20px;
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
</style>