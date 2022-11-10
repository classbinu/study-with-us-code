<script setup>
import CommonNavbar from "../../src/components/common/CommonNavbar.vue";
import CommonFooter from "../../src/components/common/CommonFooter.vue";
</script>

<template>
  <CommonNavbar />
  <main>
    <div class="flex justify-center my-8">
      <div class="badge badge-lg badge-warning">
        아바타가 움직이지 않으면 화면 클릭 후 방향키 조작
      </div>
    </div>
    <div class="flex justify-center">
      <iframe src="https://zep.us/play/ykmQJA"> 오류가 발생하였습니다. </iframe>
    </div>
  </main>
  <CommonFooter />
</template>

<style scope>
iframe {
  display: block;
  border: none;
  height: 80vh;
  width: 90vw;
  border: 0;
}
</style>
