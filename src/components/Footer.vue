<template>
  <footer class="footer-container">
    <div class="logo">
        <img src="../assets/pngwing.com (1).png" alt="logo">
      <h1 class="logo-title">Noted</h1>
    </div>
    <ul>
      <li class="icon"><font-awesome-icon icon="fa-brands fa-twitter" /></li>
      <li class="icon"></li>
      <li class="icon"><fa icon="fa-brands fa-facebook" /></li>
    </ul>
    <div>
      <p>All Rights Reserved ©</p>
    </div>
  </footer>
</template>

<script setup>

</script>

<style scoped>
.footer-container {
  background-color: #DAA520;
  height: 150px; 
  display: flex; 
  align-items: center;
  justify-content: space-around; 
}

.logo {
  width: 50px;
  height: 50px;
  display: flex;
  flex-direction: row;
  align-items: center;
}

.logo-title {
  color: black;
  font-family: 'Lobster', serif;
  font-size: 30px;
}

.icon {
  color: black; 
}

p {
  color: black; 
}

</style>