<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
  <main>
    <div
      class="hero min-h-screen"
      style="
        background-image: url(https://images.unsplash.com/photo-1546953304-5d96f43c2e94?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2129&q=80);
      "
    >
      <div class="hero-overlay bg-opacity-60"></div>
      <div class="hero-content text-center text-neutral-content">
        <div
          class="max-w-md animate__animated animate__fadeIn animate__delay-1s animate__slower"
        >
          <h1 class="mb-5 text-5xl font-bold">Study with Us</h1>
          <p class="mb-5">
            이제 내 방이 독서실이 됩니다<br />
            혼자 공부하지 말고 같이 공부하세요
          </p>
          <RouterLink to="/studyrooms" class="btn btn-secondary"
            >온라인 독서실 입장</RouterLink
          >
        </div>
      </div>
    </div>
  </main>
</template>
