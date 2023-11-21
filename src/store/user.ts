import { defineStore } from "pinia";
import { reactive } from "vue";

// export const useUserStore = defineStore("login", {
//   state() {
//     return {
//       username: "小红",
//       age: 10,
//     };
//   },
// });

// export const useUserStore = defineStore("user", () => {
//   const user = reactive({
//     username: "小红",
//     age: 10,
//   });

//   return { user };
// });

export const useUserStore = defineStore("user", {
  state: () => ({
    name: "baby",
    age: 0,
    sex: "unknow",
  }),
  persist: {
    enabled: true, // true 表示开启持久化保存
    strategies: [
      {
        key: "user",
        storage: localStorage,
        // paths: ["name"],
      },
    ],
  },
});
