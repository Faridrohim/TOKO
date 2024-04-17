<template>
    <div class="container">
        <div class="from">
            <h2>REGISTRASI</h2>

            <h3>NAMA ANDA</h3>
            <input type="email" placeholder="Masukkan Nama Anda" required>
            <h3>TANGGAL LAHIR</h3>
            <div class="date-inputs">
                <input type="number" id="tgl" name="tgl" placeholder="dd *" min="1" max="31" required style="font-size: 20px;">
                <span class="date-separator"></span>
                <input type="number" id="bln" name="bln" placeholder="mm *" min="1" max="12" required style="font-size: 20px;">
                <span class="date-separator"></span>
                <input type="number" id="thn" name="thn" placeholder="yyyy *" min="1950" max="2030" required style="font-size: 20px;">
              </div>
            <h3>MASUKKAN EMAiL & PASSWORD</h3>
            <input type="email" placeholder="Masukkan Email Anda" required>
            <div class="show">
                <input :type="showPassword ? 'text' : 'password'" placeholder="********" required >
                <button class="mata"  @click="togglePasswordVisibility">
                <img src="@/assets/img/show-outline.png" alt="logo"> <p style="margin-top: -25px; margin-left: 35px;">SHOW</p>
                </button>
            </div>
            <p style="font-size: 13px;">Kata sandi minimal 8 karakter dan terdiri dari huruf dan angka. Hanya simbol -_.@ yang dapat digunakan.</p>
            <h2>GENDER</h2>
            <input type="radio" id="male" name="gender" value="male">
            <label for="male">PRIA</label>
            <input type="radio" id="female" name="gender" value="female">
            <label for="female" >WANITA</label>
            <h2>ATAU</h2>
            <div class="chrome">
                <h3>GOOGLE</h3>
                <span>     
                  <button class="btn-chrome">
                  <img src="@/assets/svg/chrome.svg" alt="Logo" class="chrome-icon">
                  </button>
                </span>
            </div>
        
            <div class="facebook">
                <h3>FACEBOOK</h3>
                <span>     
                  <button class="btn-facebook">
                  <img src="@/assets/img/logofacebook.png" alt="Logo" class="facebook-icon">
                  </button>
                </span>
            </div>
        </div>
        <div class="buatakun">
            <h2>BUAT AKUN</h2>
            <p style="margin-top: 20px; font-size: 18px; width:350px;">Sangat mudah. Masukkan alamat email Anda, isi formulir di halaman berikutnya dan nikmati keuntungan dari memiliki akun, misalnya:</p>
            <span style="font-size: 15px;"><img src="@/assets/svg/centang.svg" alt="icon" class="centang">Produk dengan harga spesial sepanjang tahun, setiap hari.</span><br>
            <span style="font-size: 15px;"><img src="@/assets/svg/centang.svg" alt="icon" class="centang">Produk dengan harga spesial sepanjang tahun, setiap hari.</span><br>
            <span style="font-size: 15px;"><img src="@/assets/svg/centang.svg" alt="icon" class="centang">Produk dengan harga spesial sepanjang tahun, setiap hari.</span><br>
            <span style="font-size: 15px;"><img src="@/assets/svg/centang.svg" alt="icon" class="centang">Produk dengan harga spesial sepanjang tahun, setiap hari.</span><br>
            <router-link to="/Login"><button class="btn-regis" @click="register">REGISTRASI</button></router-link>
        </div>
<RouterView></RouterView>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const showPassword = ref(false);
const togglePasswordVisibility = () => {
  showPassword.value = !showPassword.value;
};



</script>

<style scoped>
 

.container {
margin-top: 70px;
margin-left: 70px;
margin-bottom: 70px;
}
.password-input {
position: relative;
height: 70px;
font-size: 20px;

}
.radio-buttons {
display: flex;
flex-direction: row;
align-items: center;

}
.radio-buttons input[type="radio"] {
margin-right: 10px;
height: 30px;
}
#female{
    margin-left: 50px;
    top: 710px;
}
.radio-buttons label {
margin-right: 20px;
}
.show input {
    min-width: 380px; 
    min-height: 43px;
    margin-top: 10px;
    padding-left: 10px;
    font-size: 16px;
  }
.mata {
position: absolute;
    width: 50px;
    margin-left: -120px;
    height: 30px;
    margin-top: 20px;
    background: transparent;
    border: transparent;
}
.buatakun {
height: 250px;
width: 400px;
right: 20%;
top: 25%;
position: absolute;
padding: 20px;
}
.btn-regis {
background-color: #000000;
color: #FFFFFF;
height: 45px;
width: 140px;
margin-top: 15px;
font-size: 26px;
font-family: "Bebas Neue";
padding: 5px 0px;
font-weight: 400;
cursor: pointer;
}
.date-inputs {
display: flex;
height: 35px;
size: 30px;
width: 25px;
color: #000000;
}

.date-inputs input {
width: 50px; 
margin-right: 10px;
text-align: center;
width: 205px;
color: #000000;

}

.date-separator {
margin-right: 5px; 
}
  
.centang {
height: 30px;
width: 30px;
margin-top: 10px;
padding-top: 7px;
margin-right: 5px;
margin-bottom: -7px;
}

.container h2 {
font-size: 50px;
font-family: "Bebas Neue";
font-weight: 400;
color: #000000;
width: 188px;
height: 60px;
}
.container h3 {
font-size: 30px;
font-family: "Bebas Neue";
font-weight: 400;
color: #000000;
width: 295px;
height: 42px;
margin: 10px 0px;
}

.facebook {
border: #00000050 1px solid;
width: 250px;
padding-left: 15px;
height: 50px;
padding-bottom: 5px;
}

.btn-facebook {
height: 10px;
width: 30px; 
background-color: #FFFFFF;
position: absolute;
border: none;
margin-top: -50px;
margin-left: 140px;
padding-bottom: 10px;
}
.facebook-icon {
height: 30px;
width: 30px;
position: absolute;
}

.chrome {
border: #00000050 1px solid;
width: 250px;
height: 50px;
margin-top: 15px;
margin-bottom: 15px;
padding-left: 15px;
padding-bottom: 5px;
}

.btn-chrome {
height: 30px;
width: 30px; 
background-color: #FFFFFF;
position: absolute;
border: none;
margin-top: -60px;
margin-left: 140px;
padding-bottom: 10px;

}
.chrome-icon {
height: 30px;
width: 30px;
position: absolute;
}

.from {
border: 1px solid #00000050;
height: 900px;
width: 400px;
padding: 20px;
}

input[type="email"], input[type="password"] {
width: 100%;
padding: 12px 20px;
margin: 8px 0;
box-sizing: border-box;
box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); 
color: #000000;
font-size: 20px;

}

.from p {
    margin-top: 20px;
    margin-bottom: 10px;
}
.btn-registrasi [type="submit"] {
    background-color: #000000;
    color: white;
    padding: 14px 20px;
    margin: 8px 0;
    border: none;
    cursor: pointer;
    width: 100%;
}

.btn-registrasi [type="submit"]:hover {
    opacity: 0.8;
}

</style>