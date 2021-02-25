<template>
  <section class="features">
    <h2 class="features-title">Falcon 1 <br />Overview</h2>
    <div class="overview">
      <table class="table">
        <caption class="table-title">
          Size
        </caption>
        <thead v-for="item in rockets" :key="item">
          <tr>
            <td class="table-column">HEIGHT</td>
            <td class="table-column">{{ item.height.meters }} m / {{ item.height.feet }} ft</td>
          </tr>
          <tr>
            <td class="table-column">DIAMETER</td>
            <td class="table-column">{{ item.diameter.meters }} m / {{ item.diameter.feet }} ft</td>
          </tr>
          <tr>
            <td class="table-column">MASS</td>
            <td class="table-column">{{ item.mass.kg }} kg / {{ item.mass.lb }} lb</td>
          </tr>
          <tr>
            <td class="table-column">PAYLOAD TO LEO</td>
            <td class="table-column">450 kg / 992 lb</td>
          </tr>
        </thead>
      </table>
      <img src="img/falcon-1.png" alt="rocket" class="rocket" data-rellax-speed="14" />
      <article>
        <h3 class="features-subtitle">DESCRIPTION</h3>
        <p class="features-text">
          The Falcon 1 was an expendable launch system privately developed and manufactured by
          SpaceX during 2006-2009. On 28 September 2008, Falcon 1 became the first
          privately-developed liquid-fuel launch vehicle to go into orbit around the Earth.
        </p>
      </article>
    </div>
  </section>
</template>

<script>
// import rockets from "../store/modules/rockets";

import { mapState } from "vuex";
// console.log(rockets);
export default {
  name: "Features",
  props: {
    color: String,
  },
  computed: {
    ...mapState("rockets", ["rockets"]),
  },
};
</script>

<style scoped>
.features {
  position: relative;
  max-width: 1230px;
  width: 90%;
  margin: auto;
  padding: 100px 0;
}

.features-title {
  font-weight: bold;
  font-size: 28px;
  line-height: 140%;
  text-transform: uppercase;
  margin-bottom: 80px;
}

.table {
  margin-bottom: 100px;
}

.table-title,
.features-subtitle {
  font-weight: bold;
  font-size: 24px;
  line-height: 140%;
  text-transform: uppercase;
  margin-bottom: 40px;
  text-align: left;
}

.table-column {
  width: 300px;
  padding-top: 7px;
  padding-bottom: 7px;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 179.69%;
}

.features-text {
  max-width: 490px;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 29px;
}

.rocket {
  position: absolute;
  top: 100px;
  right: 0;
  z-index: 99;
  max-width: 300px;
}

@media (max-width: 960px) {
  .rocket {
    max-width: 230px;
  }

  .table-column {
    width: 250px;
  }
}

@media (max-width: 768px) {
  .rocket {
    display: none;
  }
}

@media (max-width: 576px) {
  .rocket {
    position: static;
    margin-bottom: 30px;
  }

  .table {
    margin-bottom: 0;
  }

  .table-column {
    font-size: 14px;
    width: 150px;
  }
}

@media (max-width: 576px) {
  .features {
    padding-top: 30px;
    padding-bottom: 0;
  }
}
</style>
