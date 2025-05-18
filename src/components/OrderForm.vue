<template>
  <!-- Formulario de Pedido -->
  <section class="order" id="order">
            <div class="order__container">
                <h1>Realiza tu pedido</h1>
                <form ref="form" @submit.prevent="sendEmail" class="order--form">
                  <input type="text" name="cliente_nombre" placeholder="Nombre completo" required>
                  <input type="email" name="cliente_email" placeholder="Correo electrónico" required>
                  <input type="tel" name="cliente_telefono" placeholder="Número de teléfono" required>
                  <textarea name="mensaje" placeholder="Detalles de tu pedido" required></textarea>
                  <button type="submit">Enviar Pedido</button>
                </form>
            </div>
  </section>        
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import emailjs from '@emailjs/browser';

const form = ref<HTMLFormElement | null>(null); // Corregido: Asegurando que el ref tenga tipo HTMLFormElement

const sendEmail = () => {
  if (form.value) { // Validación para asegurar que no sea null
    emailjs.sendForm('service_l9a7rcg', 'template_ls355ok', form.value, 'dAJr2r3gH19g9SGDb')
      .then((result) => {
        console.log('Correo enviado:', result.text);
     
        alert('Pedido enviado con éxito');
        if (form.value !== null) {
            form.value.reset();
          }
      
      }, (error) => {
        console.error('Error:', error.text);
        alert('Error al enviar el pedido');
      });
  } else {
    console.error('El formulario no se ha cargado correctamente.');
  }
};
</script>

<style>

.order {
  padding: 50px;
  background-color: #f8f8f8;
  text-align: center;
}
.order__container {
  max-width: 600px;
  margin: 0 auto;
}
.order--form {
  display: flex;
  flex-direction: column;
}
.order--form input, .order--form textarea {
  margin: 10px 0;
  padding: 15px;
  border: 1px solid #ccc;
  border-radius: 5px;
  color: black;
}
.order--form button {
  padding: 15px;
  background-color: #d2691e;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
.order--form button:hover {
  background-color: #b35919;
}
</style>
