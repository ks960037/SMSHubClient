<template>
    <!-- 導覽列 -->
    <div class="container position-sticky z-index-sticky top-0">
        <div class="row">
            <div class="col-12">
                <nav
                    class="navbar navbar-expand-lg  blur blur-rounded top-0  z-index-3 shadow position-absolute my-3 py-2 start-0 end-0 mx-4">
                    <div class="container-fluid px-0">
                        <!-- 標題 -->
                        <a class="navbar-brand font-weight-bolder ms-sm-3"
                            href="https://shelled-waterfall-a4a.notion.site/Zhao-Kuan-Min-6e8887410bfe48ebb8327b2b092a49ef?pvs=4"
                            rel="tooltip" title="Screen~~簡訊服務" data-placement="bottom" target="_blank">
                            簡訊服務示範頁
                        </a>
                        <a href="https://www.google.com/"
                            class="btn btn-sm  bg-gradient-primary  btn-round mb-0 ms-auto d-lg-none d-block">購買</a>
                        <!-- 手機版 收和菜單按鈕 -->
                        <button class="navbar-toggler shadow-none ms-md-2" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navigation" aria-controls="navigation" aria-expanded="false"
                            aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon mt-2">
                                <span class="navbar-toggler-bar bar1" />
                                <span class="navbar-toggler-bar bar2" />
                                <span class="navbar-toggler-bar bar3" />
                            </span>
                        </button>
                        <div id="navigation" class="collapse navbar-collapse w-100 pt-3 pb-2 py-lg-0">
                            <!-- 下拉菜單範例 -->
                            <ul class="navbar-nav navbar-nav-hover mx-auto">
                                <li class="nav-item dropdown dropdown-hover mx-2">
                                    <a id="dropdownMenuDocs" role="button"
                                        class="nav-link ps-2 d-flex justify-content-between cursor-pointer align-items-center"
                                        data-bs-toggle="dropdown" aria-expanded="false">
                                        下拉菜單
                                        <img src="~/assets/img/down-arrow-dark.svg" alt="down-arrow" class="arrow ms-1">
                                    </a>
                                    <div class="dropdown-menu dropdown-menu-animation dropdown-lg mt-0 mt-lg-3 p-3 border-radius-lg"
                                        aria-labelledby="dropdownMenuDocs">
                                        <!-- 電腦版下拉菜單區塊 -->
                                        <div class="d-none d-lg-block">
                                            <ul class="list-group">
                                                <li class="nav-item list-group-item border-0 p-0">
                                                    <a class="dropdown-item py-2 ps-3 border-radius-md" href="">
                                                        <div class="d-flex">
                                                            <div class="icon h-10 me-3 d-flex mt-1">
                                                                <!-- 火箭圖標 -->
                                                                <img src="~/assets/img/rocket.svg" alt="火箭圖標">
                                                            </div>
                                                            <div>
                                                                <h6
                                                                    class="dropdown-header text-dark font-weight-bolder d-flex justify-content-cente align-items-center p-0">
                                                                    Getting Started</h6>
                                                                <span class="text-sm">如何開始使用簡訊服務</span>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </li>
                                                <li class="nav-item list-group-item border-0 p-0">
                                                    <a class="dropdown-item py-2 ps-3 border-radius-md" href="">
                                                        <div class="d-flex">
                                                            <div class="icon h-10 me-3 d-flex mt-1">
                                                                <!-- 文件圖標 -->
                                                                <img src="~/assets/img/document.svg" alt="文件圖標">
                                                            </div>
                                                            <div>
                                                                <h6
                                                                    class="dropdown-header text-dark font-weight-bolder d-flex justify-content-cente align-items-center p-0">
                                                                    Foundation</h6>
                                                                <span class="text-sm">相關規格文件</span>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                        <!-- 手機版下拉菜單區塊 -->
                                        <div class="row d-lg-none">
                                            <div class="col-md-12 g-0">
                                                <a class="dropdown-item py-2 ps-3 border-radius-md"
                                                    href="~/pages/about-us.html">
                                                    <div class="d-flex">
                                                        <div class="icon h-10 me-3 d-flex mt-1">
                                                            <img src="~/assets/img/rocket.svg" alt="火箭圖標">
                                                        </div>
                                                        <div>
                                                            <h6
                                                                class="dropdown-header text-dark font-weight-bolder d-flex justify-content-cente align-items-center p-0">
                                                                Getting Started</h6>
                                                            <span class="text-sm">如何開始使用簡訊服務</span>
                                                        </div>
                                                    </div>
                                                </a>
                                                <a class="dropdown-item py-2 ps-3 border-radius-md"
                                                    href="~/pages/about-us.html">
                                                    <div class="d-flex">
                                                        <div class="icon h-10 me-3 d-flex mt-1">
                                                            <img src="~/assets/img/document.svg" alt="文件圖標">
                                                        </div>
                                                        <div>
                                                            <h6
                                                                class="dropdown-header text-dark font-weight-bolder d-flex justify-content-cente align-items-center p-0">
                                                                Foundation</h6>
                                                            <span class="text-sm">相關規格文件</span>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                            <ul class="navbar-nav navbar-nav-hover mx-auto">
                                <li class="nav-item dropdown dropdown-hover mx-2">
                                    <a id="dropdownMenuDocs" role="button"
                                        class="nav-link ps-2 d-flex justify-content-between cursor-pointer align-items-center"
                                        data-bs-toggle="dropdown" aria-expanded="false">
                                        下拉菜單
                                        <img src="~/assets/img/down-arrow-dark.svg" alt="down-arrow" class="arrow ms-1">
                                    </a>
                                    <div class="dropdown-menu dropdown-menu-animation dropdown-lg mt-0 mt-lg-3 p-3 border-radius-lg"
                                        aria-labelledby="dropdownMenuDocs">
                                        <!-- 電腦版下拉菜單區塊 -->
                                        <div class="d-none d-lg-block">
                                            <ul class="list-group">
                                                <li class="nav-item list-group-item border-0 p-0">
                                                    <a class="dropdown-item py-2 ps-3 border-radius-md" href="">
                                                        <div class="d-flex">
                                                            <div class="icon h-10 me-3 d-flex mt-1">
                                                                <!-- 火箭圖標 -->
                                                                <img src="~/assets/img/rocket.svg" alt="火箭圖標">
                                                            </div>
                                                            <div>
                                                                <h6
                                                                    class="dropdown-header text-dark font-weight-bolder d-flex justify-content-cente align-items-center p-0">
                                                                    Getting Started</h6>
                                                                <span class="text-sm">如何開始使用簡訊服務</span>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </li>
                                                <li class="nav-item list-group-item border-0 p-0">
                                                    <a class="dropdown-item py-2 ps-3 border-radius-md" href="">
                                                        <div class="d-flex">
                                                            <div class="icon h-10 me-3 d-flex mt-1">
                                                                <!-- 文件圖標 -->
                                                                <img src="~/assets/img/document.svg" alt="文件圖標">
                                                            </div>
                                                            <div>
                                                                <h6
                                                                    class="dropdown-header text-dark font-weight-bolder d-flex justify-content-cente align-items-center p-0">
                                                                    Foundation</h6>
                                                                <span class="text-sm">相關規格文件</span>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                        <!-- 手機版下拉菜單區塊 -->
                                        <div class="row d-lg-none">
                                            <div class="col-md-12 g-0">
                                                <a class="dropdown-item py-2 ps-3 border-radius-md"
                                                    href="~/pages/about-us.html">
                                                    <div class="d-flex">
                                                        <div class="icon h-10 me-3 d-flex mt-1">
                                                            <img src="~/assets/img/rocket.svg" alt="火箭圖標">
                                                        </div>
                                                        <div>
                                                            <h6
                                                                class="dropdown-header text-dark font-weight-bolder d-flex justify-content-cente align-items-center p-0">
                                                                Getting Started</h6>
                                                            <span class="text-sm">如何開始使用簡訊服務</span>
                                                        </div>
                                                    </div>
                                                </a>
                                                <a class="dropdown-item py-2 ps-3 border-radius-md"
                                                    href="~/pages/about-us.html">
                                                    <div class="d-flex">
                                                        <div class="icon h-10 me-3 d-flex mt-1">
                                                            <img src="~/assets/img/document.svg" alt="文件圖標">
                                                        </div>
                                                        <div>
                                                            <h6
                                                                class="dropdown-header text-dark font-weight-bolder d-flex justify-content-cente align-items-center p-0">
                                                                Foundation</h6>
                                                            <span class="text-sm">相關規格文件</span>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                            <!-- 網頁版購買按鈕 -->
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