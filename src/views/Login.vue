<template>
  <div class="login-section">
    <div class="container">
      <h2>Log into your account</h2>
      <br>
      <form @submit.prevent="onSubmit">
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
          <div class="control">
            <button class="button is-link is-fullwidth" type="submit" placeholder="Text input">Submit</button>

          </div>
        </div>
      </form>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '../store/auth'
import { logIn } from '../API'

const router = useRouter();
const authStore = useAuthStore();
const email = ref('');
const password = ref('');


const onSubmit = async () => {
  try {
    const data = await logIn(email.value, password.value)
    if (data.user) {
      const id = data.user.id
      authStore.login(email.value, password.value, id)
      router.push({ name: 'home' })
    } else {
      alert('usuario o contraseña invalida')
    }
  } catch (error) {
    console.log(error.error_description || error.message);
  }
};

</script>
<style scoped>
h2 {
  font-size: 20px;
  font-weight: 600;
  color: black;
}

.container {
  width: 500px;

}

.login-section {
  height: 100vh;
  padding-top: 30px;
}

@media screen and (max-width: 420px) {

  .container {
    width: 180px;
  }
}
</style>