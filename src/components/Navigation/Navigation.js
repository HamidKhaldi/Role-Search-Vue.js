/* eslint-disable */

// import $ from "jquery";

// var windowWidth = $(window).width();
export default {
    name: "Navigation",
    data() {
        return {
            mobileView: false,
        }
    },
    methods: {  
        checkWindow(){
            if(window.innerWidth <= 980 ){
              this.mobileView = true;
            } else {
                this.mobileView = false;
            }
          },
    },
    mounted() {
        this.checkWindow();
        window.addEventListener('resize', this.checkWindow);
    }
 
};
