<template>
  <div class="mt-4">
    <h4 class="mb-3">Bình luận ({{ comments.length }})</h4>
    
    <div v-if="comments.length === 0" class="alert alert-info">
      Chưa có bình luận nào. Hãy là người đầu tiên bình luận!
    </div>

    <div class="list-group list-group-flush" v-else>
      <div 
        v-for="comment in comments" 
        :key="comment.id" 
        class="list-group-item p-3 mb-2 border rounded bg-light"
      >
        <div class="d-flex align-items-start">
          <img 
            :src="comment.userAvatar || 'https://ui-avatars.com/api/?name=' + comment.userName" 
            class="rounded-circle me-3" 
            width="50" 
            height="50" 
            alt="User Avatar"
          >
          
          <div class="flex-grow-1">
            <div class="d-flex justify-content-between align-items-center">
              <h6 class="fw-bold mb-1">{{ comment.userName }}</h6>
              <small class="text-muted">{{ formatDate(comment.createdAt) }}</small>
            </div>
            <p class="mb-0 text-break">{{ comment.content }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  comments: {
    type: Array,
    default: () => []
  }
});

const formatDate = (dateString) => {
  if (!dateString) return '';
  const options = { hour: '2-digit', minute: '2-digit', day: '2-digit', month: '2-digit', year: 'numeric' };
  return new Date(dateString).toLocaleDateString('vi-VN', options);
};
</script>