const datauser = () => {
  return {
    email: 'farid', 
    password: 'farid', 
  };
};
const categories = () => {
  return {
    id: 1,
    name: "DENIM JACKET",
    nama: "JAKET DENIM JEANS TEBAL PRIA WANITA",
    harga: "Rp 200.000",
    jenis: "Warna biru, ukuran: XL",
    kuantitas: "kuantitas 1",
    image: require("@/assets/img/deminjaket.png"),
    alamat: "Jl. Anjasmoro Raya, Tawangsari, Kec. Semarang Barat, Kota Semarang, Jawa Tengah 50144",
    estimasi: "1 Januari 2024 - 4 Januari 2024",
    bintang: require("@/assets/img/star.png"),
    promo: "FOR SALE",
    qty: 1,
  };
};

export default datauser; categories;