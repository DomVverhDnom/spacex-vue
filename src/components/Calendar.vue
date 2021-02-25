<template>
  <section class="calendar">
    <div class="container">
      <ul class="calendar-list">
        <li v-for="item in rockets" :key="item.name" class="calendar-item">
          <article class="launches">
            <div class="launches-image">
              <img src="https://images2.imgbox.com/3c/0e/T8iJcSN3_o.png" alt="" />
            </div>
            <div class="launches-content">
              <h2 class="launches-title">
                <a href="https://en.wikipedia.org/wiki/Ratsat">
                  {{ item.name }}
                </a>
              </h2>
              <router-link to="/features" class="button launches-details">Подробнее</router-link>
            </div>
          </article>
        </li>
      </ul>
    </div>
  </section>
</template>
// доавить mapstate. из стора забрать ракеты и сформировать их
<script>
import { mapState } from "vuex";
// import rockets from "../store/modules/rockets";

export default {
  name: "Calendar",
  data: () => ({
    items: [
      { srcUrl: "https://images2.imgbox.com/3c/0e/T8iJcSN3_o.png" },
      { srcUrl: "https://images2.imgbox.com/4f/e3/I0lkuJ2e_o.png" },
      { srcUrl: "https://images2.imgbox.com/3d/86/cnu0pan8_o.png" },
      { srcUrl: "https://images2.imgbox.com/e9/c9/T8CfiSYb_o.png" },
    ],
  }),
  computed: {
    ...mapState("rockets", ["rockets"]),
  },
  created() {
    console.log(this.$store);
    this.$store.dispatch("rockets/fetchRockets");
  },
};
</script>

<style scoped>
.calendar {
  margin-top: 30px;
}

.calendar-list {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  margin-left: -15px;
  margin-right: -15px;
}

.calendar-item {
  margin: 15px;
}

/* launches */

.launches {
  width: 360px;
  height: 100%;
  border: 1px white solid;
  border-radius: 30px;
  background-color: #111111;
  overflow: hidden;
  padding: 30px;
  text-align: left;
}

.launches-date {
  font-size: 14px;
  margin-bottom: 15px;
  display: block;
}

.launches-image {
  position: relative;
}

.launches-content {
  overflow: hidden;
}

.launches-image img {
  object-fit: cover;
  display: block;
  margin: 0 auto;
}

.launches-title {
  margin-top: 25px;
  margin-bottom: 25px;
}

.launches-details {
  display: block;
}

@media (max-width: 425px) {
  .launches {
    width: 310px;
  }
}

/* details */

.details-row {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;
}

.details-title {
  font-size: 32px;
  margin-bottom: 30px;
}

.details-image,
.details-content {
  margin: 0 30px;
}

.details-youtube {
  margin: 0 auto;
  display: block;
}

.button-back {
  max-width: 200px;
  display: block;
  margin: 25px auto;
}

.button {
  color: #fff;
  min-width: 260px;
  padding: 20px;
  text-align: center;
  border: 2px solid #ffffff;
  box-sizing: border-box;
  border-radius: 6px;
  text-decoration: none;
}
</style>
