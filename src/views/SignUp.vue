<template>
  <div class="signup-section">
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
          <label class="label">Confirm your password</label>
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
</template>

<script setup>

import { ref } from 'vue';
import { useRouter } from 'vue-router'
import { supabase, registro } from '../API';

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

h2 {
  font-size: 20px;
  font-weight: 600;
  color: black; 
}
.signup-section {
  height: 100vh; 
  padding-top: 30px; 
}

.container {
  width: 500px; 
}

#button {
  margin-top: 30px;
}

@media screen and (max-width: 420px) {

  .container {
    width: 180px; 
  }
}

</style>