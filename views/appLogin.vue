<template>
    <div class="container">
        <div class="from">
            <h2>LOGIN</h2>

            <p style="font-family: Roboto;">Masuk dengan alamat e-mail dan kata sandi anda</p>
            <h3>ALAMAT EMAIL</h3>
            <input type="email" placeholder="Masukkan Alamat Email Anda" required id="emailInput" v-model="email">
            <h3>MASUKKAN PASSWORD</h3>
            <input type="password" placeholder="Masukkan Kata Sandi Anda" required id="passwordInput" v-model="password">
            <p style="font-size: 13px;">Kata sandi minimal 8 karakter dan terdiri dari huruf dan angka. Hanya simbol -_.@ yang dapat digunakan.</p>
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
           <router-link to="/Profile"> <button class="btn-regis" @click="handleLogin">LOGIN</button></router-link>
           <router-link to="/Registrasi"> <button class="btn-regis1">REGISTRASI</button></router-link>
        </div>
<RouterView></RouterView>
    </div>
</template>

<script setup>
import { ref } from 'vue';
    
const email = ref('');
const password = ref('');
const handleLogin = () => {
    localStorage.setItem('userEmail', email.value);
    console.log("Email yang akan dikirim:", email.value);
    console.log("Password yang akan dikirim:", password.value);
    const welcomePopup = document.createElement('div');
    welcomePopup.innerHTML = `Selamat datang, ${email.value}!`;
    welcomePopup.classList.add('welcome-popup');
    document.body.appendChild(welcomePopup);
    welcomePopup.style.position = 'fixed';
    welcomePopup.style.top = '30%';
    welcomePopup.style.right = '30px';
    welcomePopup.style.transform = 'translate(-50%, -50%)';
    welcomePopup.style.fontFamily = 'Bebas Neue';
    welcomePopup.style.fontSize = '24px';

    setTimeout(() => {
        document.body.removeChild(welcomePopup);
    }, 5000);
};




</script>


<style scoped>
@media screen and (max-width: 1024px) {
  .buatakun {
    width: 250px; 
    margin-right: -150px;
    top: 13%;
  }
  .buatakun h3 {
      font-size: 14px;
  }
  .buatakun h2 {
      font-size: 14px;
  }

  .btn-regis, .btn-regis1 {
    width: 100%; 
  }

  .facebook, .chrome {
    width: 100%;
    margin-top: 15px;
  }

  .btn-facebook, .btn-chrome {
    margin-top: -40px; 
    margin-left: calc(50% - 15px);
  }

  .from {
    width: 200%; 
    font-size: 16px;

  }
}
@media screen and (max-width: 430px) {
    .buatakun {
      width: 250px; 
      top: 13%;
    }
    .buatakun h3 {
        font-size: 14px;
    }
    .buatakun h2 {
        font-size: 14px;
    }
    .from {
      width: 100px;
      height: 300px;
      overflow-y: scroll;
    }
    .btn-regis, .btn-regis1 {
      width: 100%; 
    }
  
    .facebook, .chrome {
      width: 100%;
      margin-top: 15px;
    }
  
    .btn-facebook, .btn-chrome {
      margin-top: -40px; 
      margin-left: calc(50% - 15px);
    }
  
    .from {
      width: 200%; 
      font-size: 16px;

    }
  }
.container {
margin-top: 70px;
margin-left: 70px;
margin-bottom: 70px;
}
.buatakun {
height: 250px;
width: 400px;
right: 20%;
top: 13%;
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
.btn-regis1 {
    background-color: #ffffff;
    color: #000000;
    height: 45px;
    width: 140px;
    margin-top: 15px;
    font-size: 26px;
    font-family: "Bebas Neue";
    padding: 5px 0px;
    font-weight: 400;
    cursor: pointer;
    margin-left: 20px;
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
width: 205px;
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
height: 700px;
width: 400px;
padding: 20px;
}

input[type="email"], input[type="password"] {
width: 100%;
padding: 12px 20px;
margin: 8px 0;
box-sizing: border-box;
box-shadow: 0 2px 4px #0000001a; 
color: #000000;
font-size: 20px
}

.from p {
    margin-top: 20px;
    margin-bottom: 10px;
}

</style>