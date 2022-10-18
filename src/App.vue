<template>
  <h1>Task App</h1>
  <ul>
    <li><RouterLink :to="{name: 'home'}">Home</RouterLink></li>
    <li><RouterLink :to="{name: 'login'}">Login</RouterLink></li>
  </ul>
  <router-view></router-view>
</template>
<script setup>
import { createClient } from '@supabase/supabase-js'
const supabase = createClient(import.meta.env.VITE_SUPABASE_URL, import.meta.env.VITE_SUPABASE_KEY)

</script>
<style scoped>
</style>