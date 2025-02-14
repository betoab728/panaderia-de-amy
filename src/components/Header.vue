<template>
  <div>
    <section class="home" id="home">
            <div class="home__over-img"></div> 
            <img src="/images/header-bg.jpg" alt="" class="home__bgimage">

            <section class="home__header">
                <img src="/images/logo.png" alt="LOGO" class="header--logo">
                <ul class="header--list">
                    <li><a href="#home">Inicio</a></li>
                    <li><a href="#about">Nosotros</a></li>
                    <li><a href="#menu">Menu</a></li>
                    <li><a href="#order">Pedido</a></li>
                    <li><a href="#contacto">Contacto</a></li>
                </ul>
                
            </section>

          <Hero />

        </section> 
  </div>
</template>

<script lang="ts" setup>

</script>

<style>

.home {
  position: relative;
  height: 100vh;
}
    
.home__header {
  position: absolute;
  width: 100%;
  height: 133.8px;
  top: 0;
  right: 0;
  left: 0;
  z-index: 5;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  -ms-flex-pack: distribute;
      justify-content: space-around;
}

.home__header .header--logo {
  height: 100px;
  width: 100px;
}

.home__over-img {
  width: 100%;
  position: absolute;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  height: 100vh;
  z-index: 2;
  background-color: #112530;
  opacity: 80%;
}


.home__bgimage {
  height: 100%;
  width: 100%;
}

.home__header .header--list {
  width: 40%;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  -webkit-box-pack: justify;
      -ms-flex-pack: justify;
          justify-content: space-between;
}

.home__header .header--list li a {
  color: #fff;
  text-transform: uppercase;
  font-size: 14px;
}

.home__header .header--burger {
  display: none;
}

</style>