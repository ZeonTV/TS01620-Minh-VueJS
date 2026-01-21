<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const name = ref('');
const email = ref('');
const password = ref('');
const confirmPassword = ref('');
const router = useRouter();

const handleRegister = () => {
  if (password.value !== confirmPassword.value) {
    alert('Mật khẩu nhập lại không khớp!');
    return;
  }
  console.log('Đăng ký:', { name: name.value, email: email.value });
  alert('Đăng ký thành công! Hãy đăng nhập.');
  router.push('/login');
};
</script>

<template>
  <div class="container mt-5">
    <div class="card shadow" style="max-width: 800px; margin: auto;">
      <div class="card-header bg-success text-white">
        <h4 class="mb-0">Đăng Ký Tài Khoản</h4>
      </div>
      <div class="card-body p-4">
        <form @submit.prevent="handleRegister">
          
          <div class="row mb-3">
            <label class="col-sm-3 col-form-label fw-bold">Họ và tên</label>
            <div class="col-sm-9">
              <input type="text" class="form-control" v-model="name" required placeholder="Nhập họ tên...">
            </div>
          </div>

          <div class="row mb-3">
            <label class="col-sm-3 col-form-label fw-bold">Email</label>
            <div class="col-sm-9">
              <input type="email" class="form-control" v-model="email" required placeholder="name@example.com">
            </div>
          </div>

          <div class="row mb-3">
            <label class="col-sm-3 col-form-label fw-bold">Mật khẩu</label>
            <div class="col-sm-9">
              <input type="password" class="form-control" v-model="password" required>
            </div>
          </div>

          <div class="row mb-3">
            <label class="col-sm-3 col-form-label fw-bold">Xác nhận MK</label>
            <div class="col-sm-9">
              <input type="password" class="form-control" v-model="confirmPassword" required>
            </div>
          </div>

          <div class="row">
            <div class="col-sm-9 offset-sm-3">
              <button type="submit" class="btn btn-success">Đăng ký ngay</button>
              <span class="ms-3">Đã có tài khoản? <router-link to="/login">Đăng nhập</router-link></span>
            </div>
          </div>

        </form>
      </div>
    </div>
  </div>
</template>