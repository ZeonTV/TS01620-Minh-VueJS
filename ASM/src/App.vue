<script setup>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
</script>

<template>
  <div class="d-flex flex-column min-vh-100">
    <!-- Header luôn ở trên cùng -->
    <Header />

    <!-- Main Content: Đẩy xuống 80px để không bị Header che -->
    <main class="container flex-grow-1" style="margin-top: 80px;">
      <router-view />
    </main>

    <!-- Footer luôn ở dưới cùng -->
    <Footer />
  </div>
</template>

<style>
body {
  background-color: #f8f9fa;
}
</style>