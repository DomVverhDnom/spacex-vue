export default {
  actions: {
    async fetchRockets(ctx) {
      const res = await fetch("https://api.spacexdata.com/v4/rockets");
      const posts = await res.json();
      console.log(posts);
      ctx.commit("updateRockets", posts);
    },
  },
  mutations: {
    updateRockets(state, posts) {
      state.rockets = posts;
    },
  },
  state: {
    rockets: [],
  },
  getters: {
    allPosts(state) {
      return state.posts;
    },
  },
};
