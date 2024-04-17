<template>
    <div class="container">
        <div class="form-alamat">
            <h2>EDIT ALAMAT</h2>
            <h3>Nama Lengkap</h3>
            <input type="name" placeholder="Masukkan Nama Anda" required v-model="namaLengkap">
            <h3>Alamat</h3>
            <input type="alamat" placeholder="Masukkan Alamat Baru Anda" required v-model="alamat">
            <button type="button" class="arrow"><img src="@/assets/svg/arrowrighthitam.svg" class="arrow"></button>
            <h3>Detail Lainnya</h3>
            <input type="detail" placeholder="Detail Lainnya (Cth: No rumah/patokan)" required v-model="detailLainnya">

            <div class="kanan"> 
            <h3>No Telepon</h3>
            <input type="nomor" placeholder="Masukkan Nomor Telepon Anda" required v-model="nomorTelepon">
            </div>
            <h3>Tandai Sebagai</h3>
            <div class="btn">
                <button
                  class="btn-kantor"
                  :class="{ 'selected': isKantorSelected }"
                  @click="setKantorStyle"
                >
                  Kantor
                </button>
                <button
                  class="btn-rumah"
                  :class="{ 'selected': !isKantorSelected }"
                  @click="setRumahStyle"
                >
                  Rumah
                </button>
            </div>
            <div class="btn-submit">
                <router-link to="/Profile"><button class="cancel" >NANTI SAJA</button></router-link>
                <router-link to="/Profile"><button class="simpan" @click="showPopup('save')">SIMPAN</button></router-link>
            </div>
            <div class="popup" v-show="popupVisible">
                <div class="popup-content">
                    <span class="close" @click="closePopup">&times;</span>
                    <h2>Pesan</h2>
                    <p>Alamat telah berhasil diperbarui!</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const isKantorSelected = ref(false);
const popupVisible = ref(false);


const namaLengkap = ref("");
const alamat = ref("");
const detailLainnya = ref("");
const nomorTelepon = ref("");

const setKantorStyle = () => {
    isKantorSelected.value = true;
    console.log("Kantor dipilih");
    console.log("Nama Lengkap:", namaLengkap.value);
    console.log("Alamat:", alamat.value);
    console.log("Detail Lainnya:", detailLainnya.value);
    console.log("Nomor Telepon:", nomorTelepon.value);
};

const setRumahStyle = () => {
    isKantorSelected.value = false;
    console.log("Rumah dipilih");
    console.log("Nama Lengkap:", namaLengkap.value);
    console.log("Alamat:", alamat.value);
    console.log("Detail Lainnya:", detailLainnya.value);
    console.log("Nomor Telepon:", nomorTelepon.value);
};

const showPopup = () => {
    popupVisible.value = true;
    setTimeout(() => {
        popupVisible.value = false;
        console.log("Popup ditutup setelah 3 detik");
    }, 3000); 
    console.log("Popup ditampilkan");
};

const closePopup = () => {
    popupVisible.value = false;
    console.log("Popup ditutup");
};
</script>



<style scoped>
.dropdown {
    position: relative;
    display: inline-block;
  }
  

  .dropdown-toggle {
    background-color: #fff;
    border: none;
    color: #333;
    padding: 10px;
    cursor: pointer;
  }
  

  .dropdown-menu {
    display: none;
    position: absolute;
    background-color: #fff;
    min-width: 160px;
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
    z-index: 1;
  }
  
  .dropdown:hover .dropdown-menu {
    display: block;
  }
.container {
margin-top: 70px;
margin-left: 70px;
margin-bottom: 70px;
display: flex;
height: 700px;
}
/*from-alamat*/
.form-alamat h2{
font-size: 50px;
font-family: "Bebas Neue";
font-weight: 400;

}
input {
height: 35px;
width: 300px;
margin-top: 10px;
font-family: "Roboto";
margin-bottom: 15px;
font-size: 20px;
padding-left: 10px;
}
input[type="alamat"] {
height: 35px;
width: 670px;
font-size: 20px;
font-family: "Roboto";
}
input[type="detail"] {
height: 35px;
width: 670px;
font-size: 20px;
font-family: "Roboto";
}
.kanan {
position: absolute;
right: 465px ;
margin-top: -345px;
}
.form-alamat h3 {
margin-top: 25px;
font-size: 20px;
font-family: "Roboto";
color: #928F8F;
}
.btn {
margin-top: 20px;
}
.btn-rumah{
margin-left: 30px;

}
.btn-kantor:focus,
.btn-rumah:focus {
outline: none;
}
.btn-kantor.selected {
background-color: #232121;
color: #ffffff;
}

.btn-rumah.selected {
background-color: #232121;
color: #ffffff;
}
.btn-kantor, .btn-rumah {
height: 40px;
width: 80px;
font-size: 20px;
text-align: center;
background-color: transparent;
border: 2px solid #000000;
border-radius: 5px;
font-family: "Roboto";
font-weight: 500;
}
.btn-submit{
right: 70px;
position: absolute;
margin-bottom: 100px;
}
.cancel {
margin-top: 60px;
height: 40px;
width: 100px;
font-size: 24px;
font-family: "Bebas Neue";
background-color: #ffffff;
border: #232121 1px solid;
cursor: pointer;
border-radius: 5px;
}

.simpan {
margin-left: 25px;
margin-top: 60px;
height: 40px;
width: 100px;
font-size: 24px;
font-family: "Bebas Neue";
color: #FFFFFF;
background-color: #232121;
border: #232121 1px solid;
cursor: pointer;
border-radius: 5px;
}
.arrow {
height: 25px;
position: absolute;
cursor: pointer;
margin-left: -40px;
background-color: transparent;
border: transparent;
margin-top: 3px;
}
.popup {
position: absolute;
right: 20px;
bottom:  30px;
z-index: 1;
background-color: #23212150;
height: auto;
width: auto;
padding: 15px;
border-radius: 15px
}
</style>