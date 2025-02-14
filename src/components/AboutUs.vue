<template>
  <section class="story" id="about">
            <div class="story__container">
                <div class="story--main">
                    <h3>Descubre</h3>
                    <h1>Nuestra historia</h1>
                    <p>Todo comenzó con un simple objetivo: hornear el pan perfecto cada mañana. Lo que empezó como un pequeño horno y una gran pasión, hoy es Panadería Delicias, donde cada crujido cuenta una historia y cada aroma te hace sentir en casa.

                    </p>
                    <button class="button--story button">Ver más</button>
                </div>
                <img src="/images/about-img.jpg" alt="Some Food" class="story--image">
            </div>     
 </section>
        

</template>

<script lang="ts" setup>

</script>

<style>


.story {
  height: 535.2px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
}

.story__container {
  width: 95%;
  height: 80%;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
}

.story__container .story--main {
  width: 40%;
  padding-right: 20px;
}

.story__container .story--main h3 {
  width: -webkit-max-content;
  width: -moz-max-content;
  width: max-content;
  color: #8f8989;
  text-transform: uppercase;
  font-family: 'Roboto Condensed', sans-serif;
  font-weight: 700;
}

.story__container .story--main h1 {
  width: -webkit-max-content;
  width: -moz-max-content;
  width: max-content;
}

.story__container .story--main p {
  width: 100%;
  color: #575555;
  font-size: 15px;
}

.story__container .story--main .button--story {
  margin-top: 13px;
  color: #c69963;
  border: 2px solid #c69963;
  font-size: 15px;
  font-weight: 700;
}

.story__container .story--image {
  max-height: 100%;
}


</style>