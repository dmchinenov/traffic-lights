<template>
  <div
    class="container__item"
    :style="'background: ' + this.color"
    :class="[lightOn ? 'active' : '', flashAnimation ? 'flash' : '']"
  >
    <p v-if="lightOn">{{ remainSeconds }}</p>
  </div>
</template>

<script>
export default {
  props: ["color", "mainColor", "seconds"],
  data() {
    return {
      startSeсonds: this.seconds,
      remainSeconds: this.seconds,
      lightOn: false,
      timer: null,
      flashAnimation: false,
    };
  },
  mounted() {
    this.enableLight();
    this.startTimer();
  },
  beforeDestroy() {
    this.stopTimer();
  },
  methods: {
    enableLight() {
      if (this.color == this.mainColor) {
        this.lightOn = true;
      }
    },
    startTimer() {
      this.timer = setInterval(() => {
        this.remainSeconds--;
      }, 1000);
    },
    stopTimer() {
      clearInterval(this.timer);
    },
  },
  watch: {
    remainSeconds(seconds) {
      if (seconds < 4) {
        this.flashAnimation = true;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.container__item {
  width: 200px;
  height: 200px;
  border-radius: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0.1;
  background: gray;
  box-sizing: border-box;
  p {
    font-size: 50px;
    color: whitesmoke;
    font-weight: 500;
  }
  &.active {
    opacity: 1;
    &.flash {
      animation: flash;
      animation-duration: 1s;
      animation-iteration-count: 3;
    }
  }
}

@keyframes flash {
	0% {
		opacity: 1;
	}
	50% {
		opacity: 0;
	}
	100% {
		opacity: 1;
	}
}
</style>