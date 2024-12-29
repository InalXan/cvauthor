<script>
export default {
  data() {
    return {
      SlideItems: [
        { img: 'https://i.pinimg.com/736x/09/2a/72/092a72d60af2657c1a6eef1991d3e20e.jpg' },
        { img: 'https://i.pinimg.com/736x/80/14/ca/8014ca9f0a2e6a57afa2734b7f11453f.jpg' },
        { img: 'https://i.pinimg.com/736x/7a/46/2f/7a462f69f7735b8b919d139832c8a7f4.jpg' },
        { img: 'https://i.pinimg.com/736x/41/6b/8e/416b8e4e001b418342b979f952822259.jpg' },
        { img: 'https://i.pinimg.com/736x/c2/7d/ca/c27dca879ccd01280cae3ae49a6d8b2e.jpg' },
        { img: 'https://i.pinimg.com/736x/57/c8/37/57c8371cef3726760b988156b0945082.jpg' },
        { img: 'https://i.pinimg.com/736x/de/8b/85/de8b853f78df129724fed5eb03c95343.jpg' },
      ],
    }
  },
}
</script>

<template>
  <div
    class="slider my-5 bg-second shadow-[0 10px 20px -5px rgba(0, 0, 0, 0.125)] h-[100px] m-auto overflow-hidden relative w-[960px]"
  >
    <div class="slide-track">
      <div class="slide" v-for="SlideItem in SlideItems" :key="SlideItem.img">
        <img :src="SlideItem.img" height="100" width="250" alt="" />
      </div>
    </div>
  </div>
</template>

<style scoped>
@-webkit-keyframes scroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(calc(-250px * 7));
  }
}

@keyframes scroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(calc(-250px * 7));
  }
}

.slider::before,
.slider::after {
  background: linear-gradient(to right, white 0%, rgba(255, 255, 255, 0) 100%);
  content: '';
  height: 100px;
  position: absolute;
  width: 200px;
  z-index: 2;
}
.slider::after {
  right: 0;
  top: 0;
  transform: rotateZ(180deg);
}
.slider::before {
  left: 0;
  top: 0;
}
.slider .slide-track {
  -webkit-animation: scroll 40s linear infinite;
  animation: scroll 40s linear infinite;
  display: flex;
  width: calc(250px * 14);
}
.slider .slide {
  height: 100px;
  width: 250px;
}
</style>
