<template>
    <div class="container"> 
        <div class="img-edit">
            <h2>EDIT PROFILE</h2>
            <div v-for="category in categories" :key="category.id">
                <img :src="profileImage" alt="Gambar Profil" class="edit-image" @click="openFilePicker">
                <button class="btn-edit">
                    <img src="@/assets/svg/Pensil.svg" class="img-icon">
                    <input type="file" ref="fileInput" class="file-img" @change="handleImageChange">
                </button>
            </div>
        </div>
        <div class="form-edit">
            <h3>NAMA LENGKAP</h3>
            <input type="name" placeholder="Masukkan Nama Baru" required @input="handleInputChange('nama', $event)">
            <h3>KODE POS</h3>
            <input type="nomor" placeholder="Masukkan Kode Pos Baru" required @input="handleInputChange('kodePos', $event)">
            <h3>JENIS KELAMIN</h3>
            <input type="gender" placeholder="Laki-laki/Perempuan" required @input="handleInputChange('jenisKelamin', $event)">
            <div class="kanan"> 
                <h3>ALAMAT EMAIL</h3>
                <input type="email" placeholder="Masukkan Email Yang Baru" required @input="handleInputChange('email', $event)">
                <h3>TANGGAL LAHIR</h3>
                <input type="date" placeholder="mm/dd/yyyy" required @input="handleInputChange('tanggalLahir', $event)">
            </div>
            <div class="btn">
                <router-link to="/Profile"> <button class="cancel">NANTI SAJA</button></router-link>
                <router-link to="/Profile"> <button class="simpan" @click="handleSave" >SIMPAN</button></router-link>
            </div>
        </div>
        <div class="popup" v-show="popupVisible">
            <div class="popup-content">
                <span class="close" @click="closePopup">&times;</span>
                <h2>Pesan</h2>
                <p>Profil telah berhasil diperbarui!</p>
            </div>
        </div>
        <router-view></router-view>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';

const categories = ref([
  { id: 1, image: require("@/assets/img/profile.png") }
]);

const profileImage = ref("@/assets/img/profile.png");
const popupVisible = ref(false);
const fileInput = ref(null);
const router = useRouter();

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
onMounted(() => {
  const storedImageUrl = localStorage.getItem('profileImageKey');
  if (storedImageUrl) {
    profileImage.value = storedImageUrl;
    console.log('Retrieved image URL from local storage:', storedImageUrl);
  } else {
    console.log('No image URL found in local storage.');
  }
});

const handleInputChange = (field, event) => {
  console.log('Input field', field, 'has changed. New value:', event.target.value);
};

const handleSave = () => {
    const newData = {
        nama: "",
        tanggalLahir: "  ",
        jenisKelamin: "  ",
        email: " ",
        nomorHP: "  "
    };

    localStorage.setItem('biodata', JSON.stringify(newData));
    console.log('Biodata has been updated and saved to local storage:', newData);
    router.push({ name: 'Profile' });
};


const closePopup = () => {
  popupVisible.value = true;
  setTimeout(() => {
    popupVisible.value = false;
  }, 3000); 
};


</script>


<style scoped> 
.container {
margin-top: 70px;
margin-left: 70px;
margin-bottom: 70px;
display: flex;
}
/*image*/
.img-edit h2 {
font-size: 40px;
font-family: "Bebas Neue";
font-weight: 400;
}
.edit-image{
border-radius: 50%;
height: 170px;
width: 170px;
}
.file-img {
position: absolute;
top: 0;
left: 0;
opacity: 0;
width: 100%;
height: 100%;
cursor: pointer;
}

.btn-edit {
background-color: #232121;
border-radius: 50%;
height: 40px;
width: 40px;
align-items: center;
margin-left: -60px;
position: absolute;
margin-top: 135px;
border: #232121 solid 1px;
cursor: pointer;
}
/*image*/

/*form*/
.form-edit {
margin-top: 25px;
width: 790px;
height: 400px;
border: #D9D9D9 2px solid;
padding: 20px 15px;
margin-left: 50px;
font-size: 24px;
font-family: "Bebas Neue";
font-weight: 400;
}
.form-edit h3 {
margin-top: 15px;
margin-left: 5px;
}
input {
height: 30px;
width: 250px;
margin-left: 5px;
margin-top: 15px;
font-family: "Roboto";
}
input[type="date"] {
height: 30px;
width: 100px; 
margin-left: 5px;
margin-top: 15px;
font-family: "Roboto";
}
.kanan {
position: absolute;
right: 250px ;
margin-top: -307px;
}
.cancel {
margin-left: 5px;
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
margin-left: 10px;
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