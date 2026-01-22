<template>
  <footer class="bg-dark text-light py-4 mt-auto">
    <div class="container">
      <div class="row">
        <div class="col-md-6 mb-3 mb-md-0">
          <h5 class="text-uppercase mb-3">Vue Blog App</h5>
          <p class="small text-muted">
            Ứng dụng blog đơn giản được xây dựng với Vue.js 3 và Bootstrap 5.
            Bài tập Assignment môn học.
          </p>
        </div>
        
        <div class="col-md-3 mb-3 mb-md-0">
          <h5 class="text-uppercase mb-3">Liên kết</h5>
          <ul class="list-unstyled">
            <li><router-link to="/" class="text-decoration-none text-light hover-link">Trang chủ</router-link></li>
            <li><router-link to="/about" class="text-decoration-none text-light hover-link">Giới thiệu</router-link></li>
          </ul>
        </div>

        <div class="col-md-3">
          <h5 class="text-uppercase mb-3">Kết nối</h5>
          <div>
            <a href="https://www.facebook.com/bin.minh.50702/?locale=vi_VN" class="text-light me-3"><i class="bi bi-facebook"></i></a>
            <a href="https://github.com/ZeonTV/TS01620-Minh-VueJS" class="text-light"><i class="bi bi-github"></i></a>
          </div>
        </div>
      </div>

      <hr class="my-4 border-secondary">
      
      <div class="text-center small text-muted">
        &copy; {{ new Date().getFullYear() }} Như Lê Hoàng Minh-TS01620.
      </div>
    </div>
  </footer>
</template>

<style scoped>
.hover-link:hover {
  text-decoration: underline !important;
  color: #0d6efd !important;
}
</style>