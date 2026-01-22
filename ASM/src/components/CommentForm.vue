<template>
  <div class="card mb-4">
    <div class="card-body">
      <h5 class="card-title mb-3">Để lại bình luận</h5>
      <form @submit.prevent="submitComment">
        <div class="mb-3">
          <label for="commentContent" class="form-label">Nội dung</label>
          <textarea 
            class="form-control" 
            id="commentContent" 
            rows="3" 
            v-model="content" 
            placeholder="Chia sẻ suy nghĩ của bạn..."
            required
          ></textarea>
        </div>
        <button type="submit" class="btn btn-primary">
          <i class="bi bi-send-fill"></i> Gửi bình luận
        </button>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref, defineEmits } from 'vue';

const content = ref('');
const emit = defineEmits(['submit-comment']);

const submitComment = () => {
  if (content.value.trim()) {
    emit('submit-comment', content.value);
    content.value = '';
  }
};
</script>