import { ref } from "vue";
import { defineStore } from "pinia";

export const useCommonStore = defineStore("common", () => {
  const showNavFooter = ref(false);

  return { showNavFooter };
});
