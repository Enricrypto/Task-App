<template>
  <div class="section">
    <div class="container">
      <h2>Sign up for an account</h2>
      <br>
      <form @submit.prevent="handleSignup">
        <div class="field">
          <label class="label">Name</label>
          <div class="control">
            <input v-model="name" class="input" type="text" placeholder="name">
          </div>
        </div>
        <div class="field">
          <label class="label">Email</label>
          <div class="control">
            <input v-model="email" class="input" type="email" placeholder="email">
          </div>
        </div>
        <div class="field">
          <label class="label">Password</label>
          <div class="control">
            <input v-model="password" class="input" type="password" placeholder="password">
          </div>
        </div>
        <div class="field">
          <label class="label">Confirm your Password</label>
          <div class="control">
            <input v-model="confirmPassword" class="input" type="password" placeholder="re-enter password">
          </div>
        </div>
        <div class="field">
          <div class="control">
            <input id="button" class="button is-link is-fullwidth" type="submit">
          </div>
        </div>
      </form>
    </div>
  </div>
  <Footer></Footer>
</template>

<script setup>

import { ref } from 'vue';
import { useRouter } from 'vue-router'
import { supabase, registro } from '../API';
import Footer from '../components/Footer.vue'

const router = useRouter();
const name = ref('');
const email = ref('');
const password = ref('');
const confirmPassword = ref('');

const verificarPassword = () => {
  if (password.value === confirmPassword.value) {
    return true
  } else {
    return false
  }
}

const handleSignup = async () => {
  try {
    if (verificarPassword()) {
      const response = await supabase.auth.signUp({
      email: email.value,
      password: password.value,
    });
      router.push({ name: 'login' })
    } else {
      return alert("password doesn't match")
    }
    
  } catch (error) {
    alert(error.error_description || error.message);
  }
};

</script>
<style scoped>

.container {
  width: 500px; 
}

#button {
  margin-top: 30px;
}

</style>