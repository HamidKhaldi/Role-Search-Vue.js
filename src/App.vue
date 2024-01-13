<!-- eslint-disable prettier/prettier -->
<template>
  <Navigation></Navigation>
  <MobileNav></MobileNav>
  <router-view></router-view>
  <Footer></Footer>
  <a id="upArrow" class="sr_arrow-up-link">
    <img src="./assets/Images/arrow-up.png" alt="arrow-up" class="sr_scroll-img">
  </a>
</template>

<script>
import Navigation from "./components/Navigation/Navigation.vue";
import Footer from "./components/Footer/Footer.vue";
import MobileNav from "./components/Mobile-Navigation/MobileNav.vue";
import $ from "jquery";

export default {
  name: "App",
  components: {
    Navigation,
    MobileNav,
    Footer,
  },
  mounted() {
    $(document).ready(function () {
      $("#upArrow").click(function () {
        $("#app").animate({ scrollTop: 0 }, 1000);
        return false;
      });
    });
  },
};
</script>
<style lang="scss">
@import "./assets/scss/style.scss";
.sr_arrow-up-link {
  display: block;
  width: 50px;
  margin: 0 auto;
}
</style>
