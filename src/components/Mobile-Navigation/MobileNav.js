/* eslint-disable prettier/prettier */
import $ from "jquery";

export default {
    name: 'MobileNav',
    data() {
        return {
            mobileView: false,
        }
    },
    methods: {
        checkWindow() {
            if (window.innerWidth <= 980) {
                this.mobileView = true;
            } else {
                this.mobileView = false;
            }
        },
        openMenu(e){
            e.preventDefault();
            $(".sr_popout-menu").addClass('active');
            $(".sr_nav-list-close-link").removeClass("hide-button");
            $(".sr_ham-menu-toggle--tablet").addClass("hide-button");
        },
        closeMenu(e) {
            e.preventDefault();
            $(".sr_popout-menu").removeClass('active');
            $(".sr_nav-list-close-link").addClass("hide-button");
            $(".sr_ham-menu-toggle--tablet").removeClass("hide-button");            
        }
    },
    mounted() {
        this.checkWindow();
        window.addEventListener('resize', this.checkWindow);
    }
}

