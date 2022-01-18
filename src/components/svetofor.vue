<template>
  <div class="page" :style="'background: ' + mainColor">
    <div class="container">
      <light
        v-for="color in colors"
        :key="color"
        :color="color"
        :mainColor="mainColor"
        :seconds="seconds"
      ></light>
    </div>
  </div>
</template>

<script>
import light from "./light.vue";
export default {
  components: { light },
  props: {
    mainColor: {
      type: String,
      required: true,
    },
    seconds: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      colors: ["Brown", "Goldenrod", "OliveDrab"],
    };
  },
  mounted() {
    setTimeout(this.switchColor, this.seconds * 1000);
  },
  methods: {
    switchColor() {
      if (this.mainColor == this.colors[0]) {
        this.$router.push("/yellow");
      }
      if (this.mainColor == this.colors[1] && this.direction == "forward") {
        this.$router.push("/green");
      }
      if (this.mainColor == this.colors[1] && this.direction == "back") {
        this.$store.commit('setDirection', 'forward');
        this.$router.push("/red");
      }
      if (this.mainColor == this.colors[2]) {
        this.$store.commit('setDirection', 'back');
        this.$router.push("/yellow");
      }
    },
  },
  computed: {
    direction() {
      return this.$store.getters.getDirection;
    },
  },
};
</script>

<style lang="scss">
.page {
  height: 100vh;
  display: flex;
  align-items: center;
}

.container {
  width: 630px;
  height: 200px;
  background: rgb(22, 22, 22);
  border-radius: 130px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: auto;
  border: 15px solid rgb(14, 13, 13);
  box-shadow: -3px 5px 9px 3px rgba(0, 0, 0, 0.3);
}

@media screen and (max-width: 700px) {
  .container {
    width: 200px;
    height: 630px;
    flex-direction: column;
  }
}
</style>