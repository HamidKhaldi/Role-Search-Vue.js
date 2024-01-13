/* eslint-disable prettier/prettier */
// /* eslint-disable */
import $ from "jquery";
import Carousel from "../Carousel/Carousel.vue";
import Search from "../Search/Search.vue";


export default {
  name: 'Home',
  components: {
    Carousel,
    Search
  },
  data() {
    return {
        mobileView: false,
    }
  },
  methods: {
    checkWindow(){
        if(window.innerWidth <= 740 ){
          this.mobileView = true;
        } else {
          this.mobileView = false;
        }
    },
    checkScroll() {
      console.log("scrolled", $("#srFooter").offset().top);
      // if ($(".sr_footer").offset().top < 500) {
      //   $("#arrowUp").fadeIn(500);
      // } else {
      //   $("#arrowUp").fadeOut(500);
      // }
    },
  },
  mounted(){   
    this.checkWindow();
    window.addEventListener("resize", this.checkWindow);
    //$(window).on("scroll", this.checkScroll);
  },

}