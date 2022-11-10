<script setup>
import CommonNavbar from "../../src/components/common/CommonNavbar.vue";
import CommonFooter from "../../src/components/common/CommonFooter.vue";
import RoomCard from "../../src/components/studyroom/RoomCard.vue";
</script>
<template>
  <CommonNavbar />
  <main
    class="container pb-72 mx-auto animate__animated animate__fadeIn animate__slower"
  >
    <h1 class="text-xl text-center text-white my-20">
      ✅ 입장을 원하는 온라인 독서실을 선택하세요
    </h1>
    <div class="flex flex-wrap justify-center">
      <RoomCard
        img="https://tecoble.techcourse.co.kr/static/348a6c1ea3a4fa8b6990e3e3bf4e8490/8ac6f/sample2.png"
        title="코딩/개발"
        tag="#파이썬 #모각코 #알고리즘"
      />
      <RoomCard
        img="https://pds.joongang.co.kr/news/component/htmlphoto_mmdata/202008/26/632baa3a-4ea9-4325-8698-226855268e72.jpg"
        title="수능"
        tag="#2023대학수학능력시험"
      />
      <RoomCard
        img="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Flag_of_the_Government_of_the_Republic_of_Korea.svg/1200px-Flag_of_the_Government_of_the_Republic_of_Korea.svg.png"
        title="공무원"
        tag="#국가직 #지방직 #임용고시"
      />
      <RoomCard
        img="https://images.unsplash.com/photo-1577035103604-54e9d4f0ca7c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2232&q=80"
        title="자기계발"
        tag="#취미 #독서 #자격증"
      />
    </div>
  </main>
  <CommonFooter />
</template>
