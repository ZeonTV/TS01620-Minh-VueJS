<script setup>
import { ref } from 'vue';

const posts = ref([
  { id: 1, title: 'Làm quen với Vue.js', desc: 'Vue.js là framework rất dễ học...', img: 'https://via.placeholder.com/300x200' },
  { id: 2, title: 'Bootstrap 5 có gì mới?', desc: 'Không còn phụ thuộc jQuery...', img: 'https://via.placeholder.com/300x200' },
  { id: 3, title: 'Hướng dẫn Router', desc: 'Chuyển trang mượt mà trong SPA...', img: 'https://via.placeholder.com/300x200' },
]);
</script>

<template>
  <div class="container mt-4">
    <div class="row mb-4">
      <div class="col-12">
        <h1 class="border-bottom pb-2">Bài viết mới nhất</h1>
      </div>
    </div>

    <div class="row row-cols-1 row-cols-md-3 g-4">
      <div class="col" v-for="post in posts" :key="post.id">
        <div class="card h-100 shadow-sm">
          <img :src="post.img" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">{{ post.title }}</h5>
            <p class="card-text">{{ post.desc }}</p>
          </div>
          <div class="card-footer bg-white border-top-0">
            
            <router-link :to="'/post/' + post.id" class="btn btn-outline-primary w-100">
              Xem chi tiết
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>