<template>
    <div class="container">
        <div class="opsi-kurir">
            <h1>OPSI PILIHAN KURIR</h1>
            <div class="pilih-jasa">
                <h1>PILIH JASA PENGIRIMAN</h1>
                <p>Estimasi tanggal diterima tergantung pada waktu pengemasan Penjual dan waktu pengiriman ke lokasi Anda</p>
                <div class="JNT-reguler">
                    <input type="radio" class="pilih" @click="handlekurirSelection('REGULER')">
                    <h1 style="color: black;">JNT RP.13.000 </h1>
                    <h1 class="abu1">REGULER</h1>
                    <p class="est-paket">Akan diterima pada 25 - 28 Jan 2024</p>
                </div>
                <div class="JNT-ekonomi">
                    <input type="radio" class="pilih" @click="handlekurirSelection('EKONOMI')">
                    <h1 style="color: black;">JNT RP.10.000 </h1>
                    <h1 class="abu2">EKONOMI</h1>
                    <p class="est-paket">Akan diterima pada 28 - 30 Jan 2024</p>
                </div>
                <div class="JNT-gratis">
                    <input type="radio" class="pilih" @click="handlekurirSelection('GRATIS ONGKIR')">
                    <h1 style="color: black;">JNT RP.0 </h1>
                    <h1 class="abu3">GRATIS ONGKIR</h1>
                    <p class="est-paket">Akan diterima pada 25 - 28 Jan 2024</p>
                </div>
            </div>
            <div class="btn">
                <router-link to="/Payment"> <button class="cancel">NANTI SAJA</button></router-link>
                <router-link to="/Payment"> <button class="simpan" @click="handleSave">SIMPAN</button></router-link>
            </div>
            <router-view></router-view>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const selectedkurir = ref('');

const handlekurirSelection = (courierType) => {
    selectedkurir.value = courierType;
};


const handleSave = () => {

    const newData = {
        courier: selectedkurir.value,
    };
    localStorage.setItem('dataPengiriman', JSON.stringify(newData));
    console.log('Data pengiriman telah diperbarui:', newData);
};

</script>

<style  scoped>
.container {
    margin-top: 70px;
    margin-left: 70px;
    margin-bottom: 70px;
    width: 630px;
    }
.opsi-kurir h1 {
    font-size: 35px;
    font-family: "Bebas Neue";
    font-weight: 400;

}
.pilih{
    right: 45%;
    margin-top: 15px;
    position: absolute;
    height: 20px;
    width: 20px;
}

/*JNT*/
.JNT-reguler {
    border: 2px  #D9D9D9 solid;
    border-radius: 15px;
    padding: 0px 10px 10px;
    margin-top: 15px;
} 
.JNT-ekonomi {
    border: 2px #D9D9D9 solid;
    border-radius: 15px;
    padding: 0px 10px 10px;
    margin-top: 15px;
} 
.JNT-gratis {
    border: 2px  #D9D9D9 solid;
    border-radius: 15px;
    padding: 0px 10px 10px;
    margin-top: 15px;
} 
.pilih-jasa h1 {
    font-size: 24px;
font-family: "Roboto";
font-weight: 500;
margin-top: 10px;
color: #928F8F;
}
.pilih-jasa p{
    font-size: 15px;
font-family: "Roboto";
font-weight: 400;
color:  #928F8F;
padding-top: 5px;
}
.JNT-reguler h1, .JNT-ekonomi h1, .JNT-gratis h1{
    font-size: 20px;
    font-family: "Roboto";
    font-weight: 800;
}
.JNT-reguler p, .JNT-ekonomi p, .JNT-gratis p{
    font-size: 16px;
    font-family: "Roboto";
    font-weight: 500;
    color: #000000;
}
.abu1 {
    font-size: 20px;
    font-family: "Roboto";
    font-weight: 500; 
    position: absolute;
    margin-left: 150px;
    top: 212px;
}
.abu2 {
    font-size: 20px;
    font-family: "Roboto";
    font-weight: 500; 
    position: absolute;
    margin-left: 150px;
    top: 299px;
}
.abu3 {
    position: absolute;
    font-size: 20px;
    font-family: "Roboto";
    font-weight: 500; 
    margin-left: 100px;
    top: 388px;
}
.pilih {
    float: right;
    padding-bottom: 20px;

}
.JNT-reguler:hover, .JNT-ekonomi:hover, .JNT-gratis:hover {
    border-color: #000000; 
}
.JNT-reguler input[type="radio"]:checked + h1, .JNT-ekonomi input[type="radio"]:checked + h1, .JNT-gratis input[type="radio"]:checked + h1 {
    color: #000000; 
}
.pilih :checked {
    
    border-color: black;
    color: black; 
}
.btn{
    left: 40%;
    position: absolute;
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