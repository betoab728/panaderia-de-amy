<template>
  <div>
      
    <section class="home__welcome">
                <div class="welcome--content">
                  <h1>Panadería y pasteleria</h1>
                    <h1 >D' AMY</h1>
                    <h3>¡Productos preparados como nunca antes los habías visto!</h3>
                    <div class="welcome--buttons">
                        <button class="button-welcome button">Promociones</button>
                        <button class="button-welcome button">Has un pedido</button>
                    </div>
                </div>
    </section>
  </div>
</template>

<script lang="ts" setup>

</script>

<style>

.home__welcome {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  height: 100%;
  width: 100%;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
  z-index: 3;
}

.home__welcome .welcome--content {
  text-align: center;
}

.home__welcome .welcome--content h3 {
  padding-top: 5px;
  opacity: 70%;
}

.home__welcome .welcome--content .welcome--buttons {
  padding-top: 20px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  -webkit-box-pack: space-evenly;
      -ms-flex-pack: space-evenly;
          justify-content: space-evenly;
}

.home__welcome .welcome--content .welcome--buttons .button {
  color: #fff;
  border: 1px solid #c69963;
}
</style>