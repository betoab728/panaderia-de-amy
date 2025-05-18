<template>
  <section class="story" id="about">
    <div class="story__container">
      <div class="story--main">
        <h3>Descubre</h3>
        <h1>Nuestra historia</h1>
        <p>
          Todo comenzó con un simple objetivo: hornear el pan perfecto cada mañana. Lo que empezó como un pequeño horno y una gran pasión, hoy es Panadería Delicias, donde cada crujido cuenta una historia y cada aroma te hace sentir en casa.
        </p>
        <button class="button--story button">Ver más</button>
      </div>
      <img src="/images/about-img.jpg" alt="Some Food" class="story--image" />
    </div>
  </section>
</template>

<script lang="ts" setup>
</script>

<style scoped>
.story {
  padding: 2rem 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
}

.story__container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  max-width: 1200px;
  width: 100%;
}

.story--main {
  flex: 1 1 300px;
  max-width: 500px;
}

.story--main h3 {
  text-transform: uppercase;
  color: #8f8989;
  font-family: 'Roboto Condensed', sans-serif;
  font-weight: 700;
}

.story--main h1 {
  font-size: 2rem;
}

.story--main p {
  font-size: 1rem;
  color: #575555;
}

.button--story {
  margin-top: 1rem;
  color: #c69963;
  border: 2px solid #c69963;
  font-size: 1rem;
  font-weight: 700;
  padding: 0.5rem 1rem;
  background: transparent;
}

.story--image {
  flex: 1 1 300px;
  max-width: 500px;
  width: 100%;
  height: auto;
  object-fit: cover;
  border-radius: 8px;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .story__container {
    flex-direction: column;
    text-align: center;
  }

  .story--main,
  .story--image {
    max-width: 100%;
  }

  .story--image {
    order: -1;
  }
}
</style>
