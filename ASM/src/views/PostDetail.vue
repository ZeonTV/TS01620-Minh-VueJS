<script setup>
import { useRoute } from 'vue-router';
const route = useRoute();
</script>

<template>
  <div class="container mt-5">
    <div class="row">
      <div class="col-lg-8 mx-auto">

        <article>
          <h1 class="fw-bolder mb-3">Tiêu đề bài viết số {{ route.params.id }}</h1>
          <div class="text-muted fst-italic mb-3">Đăng bởi Nguyễn Văn A - 01/01/2024</div>
          <figure class="mb-4">
            <img class="img-fluid rounded" src="https://via.placeholder.com/900x400" alt="..." />
          </figure>
          <section class="mb-5">
            <p class="fs-5 mb-4">Đây là nội dung bài viết mẫu. Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
          </section>
        </article>

        <section class="mb-5">
          <div class="card bg-light">
            <div class="card-body">

              <form class="mb-4 d-flex gap-2">
                <textarea class="form-control" rows="3" placeholder="Viết bình luận của bạn..."></textarea>
                <button class="btn btn-primary align-self-start">Gửi</button>
              </form>

              <div class="d-flex mb-4">
                <div class="flex-shrink-0"><img class="rounded-circle" src="https://via.placeholder.com/50x50" alt="..." /></div>
                <div class="ms-3">
                  <div class="fw-bold">User 1</div>
                  Bài viết rất hay!
                </div>
              </div>
              <div class="d-flex mb-4">
                <div class="flex-shrink-0"><img class="rounded-circle" src="https://via.placeholder.com/50x50" alt="..." /></div>
                <div class="ms-3">
                  <div class="fw-bold">User 2</div>
                  Cảm ơn tác giả đã chia sẻ.
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>