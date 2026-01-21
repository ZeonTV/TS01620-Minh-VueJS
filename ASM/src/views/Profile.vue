<script setup>
import { ref } from 'vue';

const user = ref({
  name: 'Như Lê Hoàng Minh',
  email: 'zeontv1806@gmail.com',
  avatar: 'https://via.placeholder.com/150'
});

const handleUpdate = () => {
  alert('Cập nhật thông tin thành công!');
};
</script>

<template>
  <div class="container mt-5">
    <div class="row justify-content-center">
      <div class="col-md-4 text-center mb-4">
        <div class="card shadow-sm p-3">
          <img :src="user.avatar" class="rounded-circle img-fluid mx-auto d-block" style="width: 150px; height: 150px; object-fit: cover;">
          <h5 class="mt-3">{{ user.name }}</h5>
          <button class="btn btn-sm btn-outline-secondary mt-2">Đổi ảnh đại diện</button>
        </div>
      </div>

      <div class="col-md-8">
        <div class="card shadow">
          <div class="card-header bg-info text-white">
            <h5 class="mb-0">Chỉnh sửa hồ sơ</h5>
          </div>
          <div class="card-body p-4">
            <form @submit.prevent="handleUpdate">
              
              <div class="row mb-3">
                <label class="col-sm-3 col-form-label fw-bold">Họ và tên</label>
                <div class="col-sm-9">
                  <input type="text" class="form-control" v-model="user.name">
                </div>
              </div>

              <div class="row mb-3">
                <label class="col-sm-3 col-form-label fw-bold">Email</label>
                <div class="col-sm-9">
                  <input type="email" class="form-control" v-model="user.email" disabled readonly>
                  <small class="text-muted">Email không thể thay đổi</small>
                </div>
              </div>

              <div class="row mb-3">
                <label class="col-sm-3 col-form-label fw-bold">Mật khẩu mới</label>
                <div class="col-sm-9">
                  <input type="password" class="form-control" placeholder="Để trống nếu không đổi">
                </div>
              </div>

              <div class="row">
                <div class="col-sm-9 offset-sm-3">
                  <button type="submit" class="btn btn-info text-white">Lưu thay đổi</button>
                </div>
              </div>

            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>