<script setup>
defineProps({
  img: String,
  title: String,
  tag: String,
});
</script>

<template>
  <label for="my-modal-1" class="cursor-pointer">
    <div class="card w-72 bg-secondary m-4 hover:bg-accent">
      <figure>
        <img class="object-cover w-72 h-48" :src="img" alt="study" />
      </figure>
      <div class="card-body">
        <h2 class="text-xl font-bold text-white text-center">{{ title }}</h2>
        <p class="text-neutral-content text-center text-sm">
          {{ tag }}
        </p>
      </div>
    </div>
  </label>

  <input type="checkbox" id="my-modal-1" class="modal-toggle" />
  <div class="modal modal-bottom sm:modal-middle">
    <div class="modal-box">
      <h3 class="font-bold text-3xl text-white text-center mb-10">
        이용방법🙇‍♀️
      </h3>
      <div class="py-4 text-white text-lg">
        <ol>
          <li>1️⃣ Personal Desk: 혼자 공부</li>
          <li>2️⃣ Study Room: 친구와 공부</li>
          <li>3️⃣ 1시 방향 Study Room: 모르는 사람들과 같이 공부</li>
        </ol>
      </div>
      <div class="modal-action">
        <label for="my-modal-1" class="btn btn-outline btn-error">취소</label>
        <RouterLink to="/studyrooms/1" class="btn btn-secondary"
          >입장</RouterLink
        >
      </div>
    </div>
  </div>
</template>
