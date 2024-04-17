<template>
  <appNavbar />
    <div class="container">
        <div class="profil-utama">
          <div class="navigation">
            <p class="abu-abu" style=" color: #b6b1b1; font-size: 20px; ">Home <img src="@/assets/svg/arrowright.svg" class="arrow"> Notifikasi <img src="@/assets/svg/arrowright.svg"  class="arrow"> </p>
            <p class="hitam">Status Pesanan</p>
        </div>
            <div class="profile-kiri">
                <img :src="profileImage"  class="gambar-kiri">
                <h3>Laura Alexandra</h3>
            </div>
            <div class="profil-status">
                <div class="akun-saya">
                <img src="@/assets/svg/profilehitam.svg" class="logo-profile">
                <span  style="padding-left: 10px;" class="span-profile">AKUN SAYA</span>
                <ul>
                  <router-link to="/Profile" class="link"><li>Profile</li></router-link> 
                  <router-link to="/Editprofil" class="link"><li>Edit Profile</li></router-link>
                </ul>
                </div>
                <div class="pesanan">
                <img src="@/assets/svg/catatan.svg" class="logo-porfile">
                <span  style="padding-left: 10px;" class="span-profile" >PESANAN</span>
                <ul>
                  <router-link to="/Order" class="link"><li>Order History</li></router-link>
                </ul>
                </div>
                <div class="notifikasi">
                    <img src="@/assets/svg/loncengprofile.svg" class="logo-profile">
                    <span style="padding-left: 10px;" class="span-profile">NOTIFIKASI</span>
                    <ul>
                      <router-link to="/Statuspesanan" class="link"><li>Status pesanan</li></router-link>
                        <li>Promo</li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="status-pesanan">
            <div class="status-item" :class="{ 'active': isActive('/appStatuspesanan') }">
              <router-link to="/Statuspesanan" class="link">
                <h3>Semua</h3>
              </router-link>
            </div>
            <div class="status-item" :class="{ 'active': isActive('/appSedang-dikemas') }">
              <router-link to="/sedang-dikemas" class="link">
                <h3>Sedang Dikemas</h3>
              </router-link>
            </div>
            <div class="status-item" :class="{ 'active': isActive('/appSdikirim') }">
              <router-link to="/dikirim" class="link">
                <h3>Dikirim</h3>
              </router-link>
            </div>
            <div class="status-item" :class="{ 'active': isActive('/appStatuspesanan') }">
              <router-link to="/Statuspesanan" class="link">
                <h3>Selesai</h3>
              </router-link>
            </div>
            <div class="status-item" :class="{ 'active': isActive('/appdibatalkan') }">
              <router-link to="/dibatalkan" class="link">
                <h3>Dibatalkan</h3>
              </router-link>
            </div>
              <div v-for="category in categories" :key="category.id" class="informasi-pesanan">
                <img :src="category.image" alt="Gambar Produk" class="data-image">
                <p class="barangsampai">*Pesanan sudah diterima</p>
                <h3 class="data-nama">{{ category.nama }}</h3>
                <p class="data-jenis">{{ category.jenis }}</p>
                <p class="data-kuantitas">{{ category.kuantitas }}</p>
                <h3 class="data-harga">{{ category.harga }}</h3>
                <p class="total"> Total Pesanan </p>
              </div>
        </div>
    </div>
    <appFooter />
</template>

<script setup>
import appFooter from '@/components/appFooter.vue';
import { ref, onMounted  } from 'vue';
import { useRouter } from 'vue-router';
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


  const profileImage = ref("");
  onMounted(() => {
  const storedImageUrl = localStorage.getItem('profileImageKey');
  if (storedImageUrl) {
    profileImage.value = storedImageUrl;
    console.log('Retrieved image URL from local storage:', storedImageUrl);
  } else {
    console.log('No image URL found in local storage.');
  }
});

const router = useRouter();

const isActive = (to) => {
  return router.currentRoute.value.path === to;
};

</script>


<style  scoped>
.container {
  margin-top: 170px;
  margin-left: 70px;
  margin-bottom: -600px;
  display: flex;
  }
.akun-saya, .pesanan, .notifikasi {
margin-top: 20px;
}
/*status pesanan*/
.status-pesanan {
display: flex;
width: 840px;
position: absolute; 
margin-left: 300px;
font-size: 25px;
font-family: "Bebas Neue";
font-weight: 400;
color: #928f8f;
}
.status-item h3{
margin-right: 76px;
margin-top: 40px

}
.link {
  color: #928F8F;
  text-decoration: none;
}
.active {
  color: #000000; 
}
.link:hover {
color: #000000;
}
.informasi-pesanan {
    height: 400px;
    width: 750px;
    border: #ffffff 1px solid;
    position: absolute;
    margin-top: 100px;
    box-shadow: 1px 2px 3px 1px #D9D9D9;
    display: flex;
    padding: 20px;

}
.data-image {
  height: 100px;
  width: auto;
}

.data-nama {
  width: 300px;
  font-weight: 500;
  font-size: 24px;
  color: #000000;
}

.data-jenis {
 position: absolute;
 margin-top: 40px;
 margin-left: 75px;
 font-size: 20px;

}

.data-kuantitas {
  position: absolute;
  margin-top: 65px;
  margin-left: 75px;
  font-size: 20px;
}

.data-harga {
  position: absolute;
  margin-top: 120px;
  right: 40px;
  bottom: 40px;
  color: #000000;
  font-family: "Bebas Neue";
font-weight: 400;
font-size: 30px;
}
.barangsampai {
  position: absolute;
  right: 40px;
  color: #000000;
  font-size: 13px;
  font-family: "Roboto";
  font-weight: 700;
  margin-top: 5px;
}

.total {
  position: absolute;
right: 0;
margin-right: 170px;
color: #000000;
font-size: 18px;
font-family: "Roboto";
font-weight: 700;
bottom: 45px;
}
.status-item h3:hover {
    border-bottom: #000000 4px solid;
    color: #000000;
    cursor: pointer;
  }
  
/*status pesanan*/


.akun-saya ul, .notifikasi ul, .pesanan ul {
  margin-top: 10px;
  list-style: none;
  color: #928F8F;
  font-family: "Roboto";
  font-weight: 500;
  cursor: pointer;
}

.span-profile {
  margin-top: 4px;
  position: absolute;
  font-size: 24px;
font-family: "Bebas Neue";
font-weight: 400;
}
.akun-saya ul li::before,
.notifikasi ul li::before,
.pesanan ul li::before {
  content: '';
  display: inline-block;
  width: 8px; 
  height: 8px;
  border-radius: 50%; 
  background-color: #928F8F; 
  margin-right: 15px;
  margin-left: -40px;
}
.akun-saya ul li:hover,
.notifikasi ul li:hover,
.pesanan  ul li:hover{
color: black; 
}

.akun-saya ul li.hover,
.notifikasi ul li.hover,
.pesanan  ul li.hover {
color: black;
}


.logo-profile {
    height: 30px;
    width: 25px;
}
.profil-status {
    margin-top: 30px;
    width: 200px;
    height: 500px;
    border: #D9D9D9 1px solid;
    padding: 15px 10px;
    box-shadow: 1px 1px 1px 0px #D9D9D9;
}
.navigation {
display: flex;
justify-content: space-between;
width: 500px;
margin-bottom: 50px;
}
.arrow {
color: #b6b1b1 ;
position: relative;
height: 17px;
width: 20px;
margin-bottom: -2px;
}
.profil-utama p{
font-family: "Roboto";
font-weight: 500;
font-size: 20px;
}
.hitam {
position: absolute;
font-family: "Roboto";
font-weight: 500;
font-size: 20px;
margin-left: 200px;
}

.profile-kiri {
    width: 240px;
    margin-top: -30px;
    padding: 15px;
    display: flex;
    align-items: center;
    box-shadow: 1px 2px 3px 1px #D9D9D9;
}

.gambar-kiri {
    border-radius: 50%;
    height: 90px;
    width: 90px;
}

.profile-kiri h3{
    position: relative;
    margin-left: 10px;
    font-size: 19px;
font-family: "Roboto";
font-weight: 700;
color: rgba(0, 0, 0, 1);

}
</style>