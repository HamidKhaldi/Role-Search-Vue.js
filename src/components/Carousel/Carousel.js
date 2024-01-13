/* eslint-disable */


export default {
    name: "Carousel",
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
    },
    mounted() {
        this.checkWindow();
        window.addEventListener("resize", this.checkWindow);
    }
 
};
