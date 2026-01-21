<script setup>
import { ref, onMounted, watch } from 'vue';
import { useRouter, useRoute } from 'vue-router';

const router = useRouter();
const route = useRoute(); 

const isLoggedIn = ref(false);
const userInfo = ref(null);

const checkLoginStatus = () => {
  const userStr = localStorage.getItem('user');
  if (userStr) {
    isLoggedIn.value = true;
    userInfo.value = JSON.parse(userStr);
  } else {
    isLoggedIn.value = false;
    userInfo.value = null;
  }
};

onMounted(() => {
  checkLoginStatus();
});

watch(route, () => {
  checkLoginStatus();
});

const handleLogout = () => {
  localStorage.removeItem('user');
  checkLoginStatus(); 
  alert('Đã đăng xuất thành công!');
  router.push('/login');
};
</script>

<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top shadow">
    <div class="container">
      <router-link class="navbar-brand fw-bold" to="/">
        <i class="bi bi-journal-text me-2"></i>Vue Blog
      </router-link>

      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarNav">
        
        <ul class="navbar-nav me-auto">
          <li class="nav-item">
            <router-link class="nav-link" to="/">Trang chủ</router-link>
          </li>
          <li class="nav-item" v-if="isLoggedIn">
            <router-link class="nav-link" to="/create-post">Đăng bài viết</router-link>
          </li>
        </ul>

        <ul class="navbar-nav ms-auto">
          <li class="nav-item dropdown">
            <a 
              class="nav-link dropdown-toggle active d-flex align-items-center" 
              href="#" 
              role="button" 
              data-bs-toggle="dropdown" 
              aria-expanded="false"
            >
              <span class="me-2">
                {{ isLoggedIn ? `Chào, ${userInfo.email.split('@')[0]}` : 'Tài khoản' }}
              </span>
            </a>
            
            <ul class="dropdown-menu dropdown-menu-end">
              <template v-if="!isLoggedIn">
                <li>
                  <router-link class="dropdown-item" to="/login">
                    <i class="bi bi-box-arrow-in-right me-2"></i>Đăng nhập
                  </router-link>
                </li>
                <li>
                  <router-link class="dropdown-item" to="/register">
                    <i class="bi bi-person-plus me-2"></i>Đăng ký
                  </router-link>
                </li>
              </template>

              <template v-else>
                <li>
                  <router-link class="dropdown-item" to="/profile">
                    <i class="bi bi-person-circle me-2"></i>Hồ sơ cá nhân
                  </router-link>
                </li>
                <li>
                  <router-link class="dropdown-item" to="/create-post">
                    <i class="bi bi-pencil-square me-2"></i>Viết bài mới
                  </router-link>
                </li>
                <li><hr class="dropdown-divider"></li>
                <li>
                  <a class="dropdown-item text-danger" href="#" @click.prevent="handleLogout">
                    <i class="bi bi-box-arrow-right me-2"></i>Đăng xuất
                  </a>
                </li>
              </template>
            </ul>
          </li>
        </ul>

      </div>
    </div>
  </nav>
</template>

<style scoped>
.router-link-active {
  color: #fff !important;
  font-weight: bold;
}

.nav-link {
  cursor: pointer;
}
</style>