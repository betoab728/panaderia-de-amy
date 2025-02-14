<template>
  <section class="sub" id="contacto">
            <div class="sub__container">
                <div class="sub--clock suber">
                    <font-awesome-icon icon="clock" />
                    <h2>Horario de atencion</h2>
                    <div class="clock--container conts">
                        <p>Lunes a Sabado: 6:00AM - 8pm</p>
                        <p>domingo: 6:00AM - 1.00PM</p>
                    </div>
                </div>
                <div class="sub--marker suber">
                  <font-awesome-icon icon="location-dot" />
                    <h2>Ubicacion</h2>
                    <div class="marker--container conts">
                        <p>Urb Bancaria II etapa mz B lote 12</p>
                        <p>Piura</p>
                    </div>
                </div>
                <div class="sub--phone suber">
                  <font-awesome-icon icon="phone" />
                    <h2>Contactanos</h2>
                    <div class="phone--container conts">
                        <p>Telefono : 935185330</p>
                        <p>Correo: contacto@gmail.com</p>
                    </div>
                </div>
            </div>
            <div class="sub__header">
                <h2>Prueba nuestras delicias</h2>
                <h1>Menu</h1>
            </div>
  </section>
</template>

<script lang="ts" setup>

</script>

<style>

.sub {
  width: 100%;
  height: 535.2px;
  background-color: #0c2733;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
      -ms-flex-direction: column;
          flex-direction: column;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  -webkit-box-pack: space-evenly;
      -ms-flex-pack: space-evenly;
          justify-content: space-evenly;
}

.sub__container {
  width: 80%;
  height: 60%;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
      -ms-flex-pack: justify;
          justify-content: space-between;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
}

.sub__container .suber {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
      -ms-flex-direction: column;
          flex-direction: column;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
}

.sub__container .suber .fa-clock {
  font-size: 50px;
  color: #c69963;
  padding-bottom: 20px;
}

.sub__container .suber .fa-phone {
  font-size: 50px;
  color: #c69963;
  padding-bottom: 20px;
}

.sub__container .suber .fa-location-dot {
  font-size: 50px;
  color: #c69963;
  padding-bottom: 20px;
}

.sub__container .suber h2 {
  font-size: 20px;
  padding-bottom: 20px;
  font-family: 'Roboto Condensed', sans-serif;
}

.sub__container .suber .conts {
  text-align: center;
}

.sub__container .suber .conts p {
  padding-top: 5px;
  opacity: 60%;
}

.sub__header {
  text-align: center;
}

.sub__header h2 {
  font-family: 'Roboto Condensed', sans-serif;
  opacity: 60%;
}
</style>