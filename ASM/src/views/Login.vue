<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const email = ref('');
const password = ref('');
const router = useRouter();

const handleLogin = () => {
  console.log('Login clicked', email.value, password.value);
  
  if (email.value && password.value) {
    alert('Đăng nhập thành công!');
    localStorage.setItem('user', JSON.stringify({ email: email.value }));
    router.push('/');
  } else {
    alert('Vui lòng nhập đầy đủ thông tin');
  }
};
</script>

<template>
  <div class="container mt-5">
    <div class="card shadow" style="max-width: 800px; margin: auto;">
      <div class="card-header bg-primary text-white">
        <h4 class="mb-0">Đăng nhập</h4>
      </div>
      
      <div class="card-body p-4">
        <form @submit.prevent="handleLogin">
          
          <div class="row mb-3">
            <label for="inputEmail" class="col-sm-4 col-form-label fw-bold">Email</label>
            <div class="col-sm-8">
              <input 
                type="email" 
                class="form-control" 
                id="inputEmail" 
                v-model="email" 
                placeholder="Nhập email của bạn..."
                required
              >
            </div>
          </div>

          <div class="row mb-3">
            <label for="inputPassword" class="col-sm-4 col-form-label fw-bold">Mật khẩu</label>
            <div class="col-sm-8">
              <input 
                type="password" 
                class="form-control" 
                id="inputPassword" 
                v-model="password" 
                placeholder="Nhập mật khẩu..."
                required
              >
            </div>
          </div>

          <div class="row mb-3">
            <div class="col-sm-9 offset-sm-3">
              <div class="form-check">
                <input class="form-check-input" type="checkbox" id="gridCheck1">
                <label class="form-check-label" for="gridCheck1">
                  Ghi nhớ đăng nhập
                </label>
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-sm-9 offset-sm-3">
              <button type="submit" class="btn btn-primary">Đăng nhập ngay</button>
            </div>
          </div>

        </form>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>