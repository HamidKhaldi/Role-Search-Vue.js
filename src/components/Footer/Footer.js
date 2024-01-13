/* eslint-disable prettier/prettier */
// /* eslint-disable */
import $ from "jquery";

export default {
  name: 'Footer',
  components: {
  },
  data() {
    return {
      userHasScrolled: false,
    }
  },
  watch:{},
  methods: {
    checkScroll() {
      //alert();
    },
  },
  mounted(){
    $(window).on("scroll", this.checkScroll, { capture: true });
  },

}