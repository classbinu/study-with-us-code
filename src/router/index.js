import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import StudyRoomsView from "../views/StudyRoomsView.vue";
import StudyRoomView from "../views/StudyRoomView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/studyrooms",
      name: "studyrooms",
      component: StudyRoomsView,
    },
    {
      path: "/studyrooms/:id",
      name: "studyroom",
      component: StudyRoomView,
    },
    // {
    //   path: "/about",
    //   name: "about",
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import("../views/AboutView.vue"),
    // },
  ],
});

export default router;
