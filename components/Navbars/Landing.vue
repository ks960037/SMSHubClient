<template>
    <!-- 導覽列 -->
    <div class="container position-sticky z-index-sticky top-0">
        <div class="row">
            <div class="col-12">
                <nav :class="{ 'navbar-hidden': isNavbarHidden }"
                    class="navbar navbar-expand-lg  blur blur-rounded top-0  z-index-3 shadow position-absolute my-3 py-2 start-0 end-0 mx-4">
                    <div class="container-fluid px-0">
                        <!-- 標題 -->
                        <a class="navbar-brand font-weight-bolder ms-sm-3" href="#" rel="tooltip" title="title"
                            data-placement="bottom" target="_self">
                            快訊遞
                        </a>
                        <nuxt-link to="authentication/signin/basic"
                            class="btn btn-sm  bg-gradient-primary  btn-round mb-0 ms-auto d-lg-none d-block">Login</nuxt-link>
                        <div id="navigation" class="collapse navbar-collapse w-100 pt-3 pb-2 py-lg-0">
                            <!-- 下拉菜單範例 -->
                            <ul class="navbar-nav navbar-nav-hover mx-auto">
                                <li class="nav-item dropdown dropdown-hover mx-2">
                                    <a href="#point1"
                                        class="nav-link ps-2 d-flex justify-content-between cursor-pointer align-items-center">
                                        快速寄送
                                    </a>
                                </li>
                                <li class="nav-item dropdown dropdown-hover mx-2">
                                    <a href="#point2"
                                        class="nav-link ps-2 d-flex justify-content-between cursor-pointer align-items-center">
                                        技術支持
                                    </a>
                                </li>
                                <li class="nav-item dropdown dropdown-hover mx-2">
                                    <a href="#point3"
                                        class="nav-link ps-2 d-flex justify-content-between cursor-pointer align-items-center">
                                        使用場警
                                    </a>
                                </li>
                            </ul>
                            <ul class="navbar-nav navbar-nav-hover mx-auto">
                            </ul>
                            <ul class="navbar-nav d-lg-block d-none">
                                <li class="nav-item">
                                    <nuxt-link to="authentication/signin/basic"
                                        class="btn btn-sm  bg-gradient-primary  btn-round mb-0 me-1">Login</nuxt-link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <!-- End Navbar -->
            </div>
        </div>
    </div>
</template>


<style>
.navbar-hidden {
    transform: translateY(-130%);
    transition: transform 0.3s ease-in-out;
}
</style>

<script>
export default {
    data() {
        return {
            lastScrollPosition: 0,
            isNavbarHidden: false
        };
    },
    methods: {
        handleScroll() {
            console.log("開始滾動", window.scrollY);
            const currentScrollPosition = window.scrollY;
            if (currentScrollPosition > this.lastScrollPosition) {
                this.isNavbarHidden = true;
            } else {
                this.isNavbarHidden = false;
            }
            this.lastScrollPosition = currentScrollPosition;
            console.log("結束", this.isNavbarHidden);
        }
    },
    mounted() {
        window.addEventListener("scroll", this.handleScroll);
    },
    beforeDestroy() {
        window.removeEventListener("scroll", this.handleScroll);
    }
};
</script>