<template>
  <footer class="footer-container">
    <div class="logo">
      <img width="30" src="https://res.cloudinary.com/dcg8x1th3/image/upload/v1666771568/APP/pngwing.com_1_suytbn.png"
        alt="logo">
      <h1 class="logo-title">Noted</h1>
    </div>
    <ul>
      <li class="icon">
        <fa :icon="['fab', 'facebook']" />
      </li>
      <li class="icon">
        <fa :icon="['fab', 'instagram']" />
      </li>
      <li class="icon">
        <fa :icon="['fab', 'twitter']" />
      </li>
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
  width: 180px;
  display: flex;
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
  font-weight: bolder;
}
</style>