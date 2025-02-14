<template>
  <section class="menu" id="menu">
            <img src="/images/budin.jpg" alt="">
            <div class="content">
                <h3>S/.9.99</h3>
                <h2>Budin especial</h2>
                <button class="button--menu button">detalles</button>
            </div>
            <img src="/images/tortas.jpg" alt="">
            <div class="content">
                <h3>S/.9.99</h3>
                <h2>Tortas y Cup Cake</h2>
                <button class="button--menu button">detalles</button>
            </div>
            <img src="/images/panetones.jpg" alt="">
            <div class="content">
                <h3>S/.9.99</h3>
                <h2>Panetones especiales</h2>
                <button class="button--menu button">detalles</button>
            </div>
            <img src="/images/panes.jpg" alt="">
            <div class="content">
                <h3>S/.9.99</h3>
                <h2>Panes integrales</h2>
                <button class="button--menu button">detalles</button>
            </div>
           
            
  </section>
</template>

<script lang="ts" setup>

</script>

<style>

.menu {
  width: 100%;
  display: -ms-grid;
  display: grid;
  -ms-grid-columns: (minmax(300px, 1fr))[auto-fill];
      grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  -ms-grid-rows: auto;
      grid-template-rows: auto;
  justify-items: center;
}

.menu img {
  height: 300px;
  width: 100%;
}

.menu .content {
  height: 300px;
  width: 300px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
      -ms-flex-direction: column;
          flex-direction: column;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
}

.menu .content h3 {
  color: #c69963;
  padding-bottom: 10px;
}

.menu .content h2 {
  color: black;
  padding-bottom: 10px;
}

.menu .content .button--menu {
  background-color: #da8116;
  border-radius: 5px;
  border: none;
  color: #fff;
}
</style>