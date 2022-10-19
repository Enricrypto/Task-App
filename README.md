# Vue 3 + Vite

This template should help get you started developing with Vue 3 in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar)


const onSubmit = async () => {
  try {
    const response = await supabase.auth.signInWithPassword({
      email: email.value,
      password: password.value
    });
    console.log(response.error)
    if (!response.error) {
      console.log('inicio de sesion exitosa')
    } else {
      console.log ('Error inicio')
    }
    router.push({ name: 'home' })
  } catch (error) {
    alert(error.error_description || error.message);
  }
};