<template>
    <appNavbar />
    <div class="container">
        <div class="profil-utama">
            <div class="navigation">
                <p class="abu-abu" style=" color: #b6b1b1; font-size: 20px; ">Home <img src="@/assets/svg/arrowright.svg" class="arrow"> Keanggotaan <img src="@/assets/svg/arrowright.svg"  class="arrow"> </p>
                <p class="hitam">Profile</p>
            </div>
            <div class="profile-kiri">
                <img :src="profileImage" class="gambar-kiri">
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
        <div class="profile-saya">
            <h1>PROFILE SAYA</h1>
            <p>Kelola informasi profil Anda untuk mengontrol, melindungi dan mengamankan akun</p>         
             <router-link to="/Profile"><button @click="showProfile" class="btn-biodata"> BIODATA DIRI</button> </router-link> 
            <router-link to="/Editalamat"><button @click="showAddress" class="btn-alamat"> DAFTAR ALAMAT</button></router-link>
            <div class="profile-image">
                <img :src="profileImage" class="img-profile">
                <button class="btn-profile" @click="openFilePicker">PILIH FOTO</button>
                <input ref="fileInput" type="file" style="display: none" accept=".jpg, .jpeg, .png" @change="handleImageChange">
                <p>Besar file: maksimum 10.000.000 bytes (10 Megabytes). Ekstensi file yang diperbolehkan: .JPG .JPEG .PNG</p>
            </div>
            <div class="biodata">
                    <h2>Nama: </h2>
                    <h3 class="h3-input" style="color: #000000;"> Alexa Abigail</h3>
                    <h2>Tanggal Lahir: </h2>
                    <h3 class="h3-input" style="color: #000000;"> 11/11/1991</h3>
                    <h2>Jenis Kelamin:</h2>
                    <h3 class="h3-input" style="color: #000000;"> Perempuan</h3>
                    <h2>Email: </h2>
                    <h3 class="h3-input" style="color: #000000;"> alexa@gmail.com</h3>
                    <h2>Nomor HP: </h2>
                    <h3 class="h3-input" style="color: #000000;"> 628907354215</h3>
            </div>
        </div>
        <router-view></router-view>
    </div>
    <appFooter />
</template>

<script setup>

import appFooter from '@/components/appFooter.vue';
import appNavbar from '@/components/appNavbar.vue';
import { ref, onMounted  } from 'vue';
import { useRouter } from 'vue-router'

const biodata = ref({
    nama: "",
    tanggalLahir: "",
    jenisKelamin: "",
    email: "",
    nomorHP: ""
});

onMounted(() => {
    const storedData = localStorage.getItem('biodata');
    if (storedData) {
        biodata.value = JSON.parse(storedData);
        console.log('Retrieved biodata from local storage:', biodata.value);
    } else {
        console.log('No biodata found in local storage.');
    }
});

const profileImage = ref("@/assets/img/profile.png");

const openFilePicker = () => {
  fileInput.value.click();
};

const handleImageChange = (event) => {
  const file = event.target.files[0]; 
  const imageUrl = URL.createObjectURL(file);
  profileImage.value = imageUrl;
  localStorage.setItem('profileImageKey', imageUrl); 
  console.log('Image URL has been updated:', imageUrl);
};

const fileInput = ref(null);

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

const showProfile = () => {
  router.push({ name: 'Profile' });
};

const showAddress = () => {
  router.push({ name: 'Editalamat' });
};


</script>


<style  scoped>
.container {
margin-top: 170px;
margin-left: 70px;
margin-bottom: -700px;
display: flex;
}

@media screen and (max-width: 924px) {
    .profile-saya{
        margin-left: 100px;
        height: 440px;
        width: 500px;
    }
    }
    @media screen and (max-width: 1024px) {
        .profile-saya{
            margin-left: 100px;
            height: 440px;
            width: 500px;
        }
        }
.akun-saya, .pesanan, .notifikasi {
margin-top: 20px;
}
/*profil-saya*/
.profile-saya {
right: 0;
position: absolute;
height: 640px;
width: 700px;
border: #D9D9D9 1px solid;
padding: 15px 10px;
margin-top: 43px;
box-shadow: 1px 1px 1px 0px #D9D9D9;
margin-right: 100px;
padding: 20px;
}
.profile-image {
    height: 350px;
    width: 250px;
    border:#D9D9D9 1px solid ;
    margin-top: 30px;
    padding: 15px;
}
.img-profile{
    width: 250px;
    height: 230px;
}
.profile-saya h1 {
font-family: 'Bebas Neue';
font-weight: 400;
font-size: 50px;
}
.btn-profile{
background-color: #000000;
border: #000000;
color: #FFFFFF;
text-align: center;
height: 40px;
width: 250px;
font-size: 24px;
font-family: "Bebas Neue";
font-weight: 400;
margin-top: 10px;
}
.btn-biodata, .btn-alamat {
    background-color: transparent;
    border: transparent;
    font-size: 35px;
font-family: "Bebas Neue";
font-weight: 400;
margin-top: 20px;
margin-right: 40px;
margin-left: -5px;    
cursor: pointer;
color: #928F8F;
}

.btn-biodata:hover, .btn-alamat:hover{
    color: #000000;
    border-bottom: #000000 3px solid ;
}
.btn-biodata:active{
    color: #000000;
    border-bottom: #000000 3px solid ;
}
.profile-link{
display: flex;
margin-top: 50px;

}
.link {
    color: #928F8F ;
    text-decoration: none;
  }
.profile-link h2{
margin-right: 75px;
font-size: 35px;
font-family: "Bebas Neue";
font-weight: 400;
color: #928F8F;
cursor: pointer; 
transition: border-bottom-color 0.3s ease; 
border-bottom: 4px solid transparent;
}


.profile-link h2:hover {
border-bottom-color: #000000; 
color: #000000;
}   

.profile-saya p{
font-family: "Roboto";
font-weight: 500;
font-size: 20px;
color: #928f8f;
}
.profile-image p{
    font-size: 15px;
    font-family: "Roboto";
    font-weight: 400;
    color: #928f8f;
    width: 245px;
    height: 54px;
    margin-top: 10px;
}
.biodata {
    position: absolute;
    right: 35%;
    top: 220px;
    font-size: 14px;
font-family: "Roboto";
font-weight: 500;
color: #928F8F;

}
.biodata h2{
    margin-top: 30px;
}
.h3-input{ 
    position: absolute;
    width: 200px;
    margin-left: 220px;
    margin-top: -23px;
    font-size: 20px;
font-family: "Roboto";
font-weight: 700;
}
/*profil-saya*/

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
    margin-left: 230px;
    margin-top: -2px;
    }

.profile-kiri {
    width: 240px;
    margin-top: 20px;
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