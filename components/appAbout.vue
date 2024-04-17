<template>
    <appNavbar />
    <div class="container">
        <div class="banner">
            <img src="@/assets/img/blogimg.png" alt="banner" class="banner-img" style="height: 400px; width: 1115px;">
            <router-link to="/About"><button class="btn-about">TENTANG KAMI</button></router-link>
        </div>
        <div class="teks-about">
            <h1>TENTANG KAMI</h1>
            <p>Selamat datang di Online store, tempat di mana gaya bertemu kenyamanan. Kami menyajikan koleksi pakaian terkini yang berkualitas,
                 menyediakan pengalaman belanja daring yang memanjakan pelanggan. Dengan komitmen pada keberagaman gaya 
                 dan layanan pelanggan yang ramah, Online Store hadir untuk memenuhi kebutuhan fashion Anda. Bergabunglah 
                 dengan kami dalam merayakan gaya hidup modern dan nikmati kemudahan berbelanja pakaian berkualitas tinggi dengan penuh kepercayaan.</p>
        </div>
        <div class="profile-about">            
            <div class="img-dua">
                <img src="@/assets/img/imgabout.png" style="width: 230px; float:left;">
                <img src="@/assets/img/Imgabout2.png" style="width: 230px; " class="img-2">
             </div>
             <img src="@/assets/img/imgabout3.png" style="height: 663px; width: 250px; float:right; margin-top:-663px">
        </div>
        <div class="layanan">
            <h1>KENAPA PILIH KAMI?</h1>
            <div class="card-about">
                <div class="card-mobil">
                    <img src="@/assets/svg/mobil.svg" class="mobil">
                    <h2>PENGIRIMAN CEPAT</h2>
                    <p>Melayani pengiriman produk yang cepat</p>
                </div>
                <div class="card-uang">
                    <img src="@/assets/svg/uang.svg" class="uang">
                    <h2>HARGA TERJANGKAU</h2>
                    <p>Harga yang terjangkau, ramah di kantong</p>
                </div>
                <div class="card-kardus">
                    <img src="@/assets/svg/kardus.svg" class="kardus">
                    <h2>GARANSI BARANG</h2>
                    <p>Melayani pengiriman produk yang cepat</p>
                </div>

            </div>
        </div>
        <router-view></router-view>
    </div>
    <appFooter />
</template>

<script setup>
import appNavbar from '@/components/appNavbar.vue';
import appFooter from '@/components/appFooter.vue';
</script>

<style scoped>


@media screen and (max-width: 768px) {
    .container {
        margin-left: 50px;
    }

    .btn-about {
        width: 50px;
    }

    .profile-about {
        float: right;
        width: 100%;
        margin-top: 20px; 
        margin-bottom: 20px; 
        margin-left: 300px;
    }

    .teks-about {
        width: 100%;
    }

    .teks-about h1 {
        font-size: 30px;
    }

    .teks-about p {
        font-size: 16px;
    }

    .img-2 {
        float: right;
        margin-right: 0;
        margin-top: 10px;
    }

    .card-about {
        flex-direction: column;
    }

    .card-about h2 {
        font-size: 20px;
    }

    .card-about p {
        font-size: 14px;
    }

    .card-mobil,
    .card-uang,
    .card-kardus {
        width: 100%;
        margin-right: 0;
    }
}

@media screen and (max-width: 1080px) {
    .container {
        margin: 50px;
    }

    .btn-about {
        width: 50px;
    }

    .profile-about {
        float: none;
        width: 100%;
        margin-top: 20px; 
        margin-bottom: 20px; 
    }

    .teks-about {
        width: 100%;
    }

    .teks-about h1 {
        font-size: 30px;
    }

    .teks-about p {
        font-size: 16px;
    }

    .img-2 {
        float: none;
        margin-right: 0;
        margin-top: 10px;
    }

    .card-about {
        flex-direction: column;
    }

    .card-about h2 {
        font-size: 20px;
    }

    .card-about p {
        font-size: 14px;
    }

    .card-mobil,
    .card-uang,
    .card-kardus {
        width: 100%;
        margin-right: 0;
    }
}

.container {
    margin-top: 150px;
    margin-left: 50px;
    margin-right: 50px;
    }
.btn-about {
    border: 2px solid #ffffff;
    background-color: transparent;
    text-align: center;
    height: 40px;
    width: 200px;
    position: absolute;
    left: 40%;
    margin-top: -210px;
    cursor: pointer;
    color: #ffffff;
    font-family: "Bebas Neue";
    font-weight: 600;
    font-size: 30px;
}
.teks-about {
    width: 450px;
    margin-top: 50px;
    float: left;
}
.teks-about h1 {
    font-size: 50px;
font-family: "Bebas Neue";
font-weight: 400;
}
.teks-about p{
    margin-top: 10px;
    font-size: 20px;
font-family: "Roboto";
font-weight: 400;
}
.profile-about {
    float: right;
    margin-top: 50px;
    width: 500px;
    margin-bottom: 150px;
    
}
.img-2 {
    float: left;
    margin-right: 60px;
    margin-top: 20px;
}
.layanan {
    margin-top: 40px;
    float: left;
}
.layanan h1{
    font-size: 50px;
    font-family: "Bebas Neue";
    font-weight: 400;
}
.card-about {
    display: flex;
    text-align: center;
    margin-right: 20px;
}
.card-about h2 {
    font-size: 24px;
font-family: "Bebas Neue";
font-weight: 400;
}
.card-about p {
    font-size: 16px;
font-family: "Roboto";
font-weight: 400;
}
.card-mobil {
    background-color: #FFFFFF;
    width: 170px;
    box-shadow: 0px 3px 5px  #D9D9D9;
    align-items: center;
    height: 200px;
    border-radius: 15px;
    margin-top: 20px;
    margin-right: 20px;
}
.card-uang {
    background-color: #FFFFFF;
    width: 170px;
    box-shadow: 0px 3px 5px  #D9D9D9;
    align-items: center;
    height: 200px;
    border-radius: 15px;
    margin-top: 20px;
    margin-right: 20px;
}

.card-kardus {
    background-color: #FFFFFF;
    width: 170px;
    box-shadow: 0px 3px 5px  #D9D9D9;
    align-items: center;
    height: 200px;
    border-radius: 15px;
    margin-top: 20px;

}

.card-kardus, .card-mobil, .card-uang::after {
    content: '';
    background-color: #FFFFFF;
    transition: all 0.3s ease; 
    transform: scaleX(0); 
}
.card-kardus, .card-mobil, .card-uang:hover::after {
    transform: scaleX(1); 
}

</style>