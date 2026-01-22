<template>
  <div class="card h-100 shadow-sm">
    <img 
      :src="post.image || 'https://via.placeholder.com/600x400?text=No+Image'" 
      class="card-img-top" 
      alt="Post Image"
      style="height: 200px; object-fit: cover;"
    >
    
    <div class="card-body d-flex flex-column">
      <h5 class="card-title text-truncate" :title="post.title">
        {{ post.title }}
      </h5>
      
      <div class="text-muted small mb-2">
        <i class="bi bi-person"></i> {{ post.author }} | 
        <i class="bi bi-calendar"></i> {{ formatDate(post.createdAt) }}
      </div>

      <p class="card-text flex-grow-1">
        {{ truncateText(post.content, 100) }}
      </p>

      <router-link :to="`/posts/${post.id}`" class="btn btn-primary mt-auto">
        Đọc tiếp
      </router-link>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  post: {
    type: Object,
    required: true
  }
});

const formatDate = (dateString) => {
  if (!dateString) return '';
  return new Date(dateString).toLocaleDateString('vi-VN');
};

const truncateText = (text, length) => {
  if (!text) return '';
  if (text.length <= length) return text;
  return text.substring(0, length) + '...';
};
</script>