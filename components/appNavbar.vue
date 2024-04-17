<template>
  <div class="Navbar ">
    <img src="@/assets/svg/logo.svg" alt="Logo" class="logo">
    <nav>
      <ul>
        <li><router-link to="/Index" class="link">Pria</router-link></li>
        <li><router-link to="/Index" class="link">Wanita</router-link></li>
        <li><router-link to="/About" class="link">Tentang Kami</router-link></li>
        <li><router-link to="/Index" class="link">Blog</router-link></li>
      </ul>
    </nav>

    <div class="form-search">
    <form class="search ">
      <input class="form-control" type="text" placeholder="Cari">
      <button class="btn-search">
        <img src="@/assets/svg/search.svg" alt="Logo" class="search-icon">
      </button>
    </form>
  </div>
  <div class="icon-nav">
    <ul class="icon">
      <li>
        <a href="#">     
          <button class="btn-search">
            <img src="@/assets/svg/lonceng.svg" alt="Logo" class="lonceng-icon">
          </button>
        </a>
      </li>
      <li>
        <router-link to="/Checkout">   
          <button class="btn-search">
            <img src="@/assets/svg/cart.svg" alt="Logo" class="cart-icon">
          </button>
        </router-link>
      </li>
      <li>
        <router-link to="/Profile">
          <button class="btn-search">
            <img src="@/assets/svg/profile.svg" alt="Logo" class="profile-icon">
          </button>
        </router-link>  
      </li>
    </ul>
  </div>
<router-view></router-view>
  </div>
</template>

<script setup>
 
</script>

<style scoped>
.Navbar {
  background-color: #232121;
  height: 100px;
  width: 100%;
  top: 0;
  left: 0;
  position: fixed;
  z-index: 1; 
  }

@media screen and (max-width: 924px) {
  
  .Navbar {
      height: auto; 
      padding-left: 25px;
      padding-right: 25px;
      height: 100px;
  }
  nav ul {
    font-size: 16px;
  }
  .form-search {
    width: 40px;
  }

  }
  @media screen and (max-width: 398px) {
  
    .Navbar {
        height: auto; 
        padding-left: 25px;
        padding-right: 25px;
        height: 100px;
    }
    nav ul li {
      font-size: 26px;
      margin-bottom: -40px;
    }
    .form-search {
      width: 20px;
      margin-right: 50px;
    }
  
    }
  
  .logo {
  width: 100px; 
  height: auto;
  position: fixed;
  margin-left: 40px;
  margin-top: 30px;
  }
  .link {
      color: #FFFFFF;
      text-decoration: none;
    }
    
  .link:hover {
  color: #D9D9D9;
  }
  .btn-search{
  float: right;
  height: 25px;
  width: 25px;
  border: transparent;
  background-color: transparent;
  cursor: pointer;
  align-items: center;
  }
  .search-icon{
  height: auto;
  position: relative;
  margin-left: 40px;
  float: right;
  margin-top: 5px;
  }
  
  nav ul {
  list-style-type: none;
  padding: 0;
  margin-left: 180px;
  display: flex;
  justify-content: start;
  font-family: 'Bebas Neue';
  font-size: 30px;
  }
  
  nav ul li  {
  color: #FFFFFF;
  position: relative;
  display: inline-block;
  margin-right: 40px;
  margin-top: 30px; 
  }
  
  nav ul li:hover {
  color: #D9D9D9;
  }
  
  nav ul li::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: -5px; 
  width: 100%; 
  height: 2px; 
  background-color: #FFFFFF;
  transition: all 0.3s ease; 
  transform: scaleX(0); 
  }
  
  nav ul li:hover::after {
  transform: scaleX(1); 
  }
  
  .form-search {
  position: absolute;
  right: 20%;
  border: 0px  transparent;
  border-radius: 10px; 
  height: 30px;
  top: 30px; 
  width: 300px; 
  padding: 5px 15px;
  background-color: white; 
  font-size: 25px;
  outline: none; 
  }
  .search { 
  border-radius: 5px; 
  }
  
  .search input:focus {
  border: none;
  outline: none; 
  }
  
  .search input[type="text"] {
  width: 150px; 
  font-size: 20px;
  position: absolute;
  left: 5px;
  border: none; 
  padding: 5px 10px; 
  }
  
  .icon-nav {
  display: flex;
  right: 0;
  top: 29px;
  position: fixed;
  }
  .icon {
  list-style-type: none;
  display: flex;
  margin-right: 25px;
  justify-content: end;
  height: 35px;
  }
  
  .icon button{
  position: relative;
  padding-right: 60px;
  height: 40px;
  width: 15px;
  }
  
  
  .lonceng-icon, .cart-icon, .profile-icon {
  height: 35px;
  }
  .lonceng-icon:hover {
  transform: scale(1.1);
  transition: transform 0.3s ease, color 0.3s ease;
  }
  .cart-icon:hover {
  transform: scale(1.1);
  transition: transform 0.3s ease, color 0.3s ease;
  }
  .profile-icon:hover { 
  transform: scale(1.1);
  transition: transform 0.3s ease, color 0.3s ease;
  }
</style>