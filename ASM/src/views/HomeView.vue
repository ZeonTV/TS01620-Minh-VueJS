<template>
  <div>
    <div class="text-center mb-5">
      <h1 class="fw-bold">Chào mừng đến với Vue Blog</h1>
      <p class="text-muted">Nơi chia sẻ kiến thức và câu chuyện của bạn</p>
    </div>

    <div class="row row-cols-1 row-cols-md-3 g-4">
      <div class="col" v-for="post in posts" :key="post.id">
        <PostCard :post="post" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import PostCard from '../components/PostCard.vue';

const posts = ref([
  { id: 1, title: 'Bài viết số 1', content: 'Nội dung bài viết mẫu...', author: 'Admin', createdAt: '2025-01-20' },
  { id: 2, title: 'Học Vue.js rất vui', content: 'Vue.js là framework tuyệt vời...', author: 'User A', createdAt: '2025-01-21' },
]);
</script>