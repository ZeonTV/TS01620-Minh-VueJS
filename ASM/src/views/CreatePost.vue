<script setup>
import { ref } from 'vue';

const title = ref('');
const image = ref('');
const content = ref('');

const handlePost = () => {
  alert('Đã đăng bài viết: ' + title.value);
};
</script>

<template>
  <div class="container mt-5">
    <div class="card shadow">
      <div class="card-header bg-primary text-white">
        <h4 class="mb-0">Tạo Bài Viết Mới</h4>
      </div>
      <div class="card-body p-4">
        <form @submit.prevent="handlePost">
          
          <div class="row mb-3">
            <label class="col-sm-2 col-form-label fw-bold">Tiêu đề</label>
            <div class="col-sm-10">
              <input type="text" class="form-control" v-model="title" required placeholder="Nhập tiêu đề bài viết...">
            </div>
          </div>

          <div class="row mb-3">
            <label class="col-sm-2 col-form-label fw-bold">Hình ảnh (URL)</label>
            <div class="col-sm-10">
              <input type="text" class="form-control" v-model="image" placeholder="https://...">
            </div>
          </div>

          <div class="row mb-3">
            <label class="col-sm-2 col-form-label fw-bold">Nội dung</label>
            <div class="col-sm-10">
              <textarea class="form-control" v-model="content" rows="6" required placeholder="Viết nội dung ở đây..."></textarea>
            </div>
          </div>

          <div class="row">
            <div class="col-sm-10 offset-sm-2">
              <button type="submit" class="btn btn-primary px-4">Đăng bài</button>
            </div>
          </div>

        </form>
      </div>
    </div>
  </div>
</template>