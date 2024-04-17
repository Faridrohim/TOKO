<template>
    <div class="container">
        <div class="opsi-kurir">
            <h1>OPSI PILIHAN ALAMAT</h1>
            <div class="pilih-jasa">
                <h1>PILIH ALAMAT PENGIRIMAN</h1>
                <p>Estimasi tanggal diterima tergantung pada waktu pengemasan Penjual dan waktu pengiriman ke lokasi Anda</p>
                <div class="alamat1">
                    <input type="radio" class="pilih"  value="alamat1" v-model="selectedAddress" />
                    <h1 style="color: black;">Jl. Anjasmoro Raya, Tawangsari, Kec. Semarang Barat, Kota Semarang, Jawa Tengah 50144</h1>
                    <p class="est-paket">Akan diterima pada 25 - 28 Jan 2024</p>
                </div>
                <div class="alamat2">
                    <input type="radio" class="pilih" value="alamat1" v-model="selectedAddress"/>
                    <h1 style="color: black;">Jl. Sentyaki Raya No.7, Bulu Lor, Kec. Semarang Utara, Kota Semarang, Jawa Tengah 50179</h1>
                    <p class="est-paket">Akan diterima pada 28 - 30 Jan 2024</p>
                </div>
                <div class="alamat3">
                    <input type="radio" class="pilih" value="alamat1" v-model="selectedAddress" />
                    <h1 style="color: black;">Jl. Anggrek X No.32, Pekunden, Kec. Semarang Tengah, Kota Semarang, Jawa Tengah 50241</h1>
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



</script>

<style  scoped>
.container {
    margin-top: 70px;
    margin-left: 70px;
    margin-bottom: 270px;
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
.alamat1, .alamat2, .alamat3 {
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
.alamat1 h1, .alamat2 h1, .alamat3 h1{
    font-size: 16px; 
    font-family: "Roboto";
    font-weight: 800;
    width: auto;
}

.pilih {
    float: right;
    margin-top: 50px;
    margin-right: -15px;

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