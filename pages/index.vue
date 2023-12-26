<template>
  <NavbarsLanding></NavbarsLanding>
  <!-- 內容 -->
  <!-- 主標題部分 -->
  <header>
    <div class="page-header min-vh-85">
      <div>
        <img
          class="position-absolute fixed-top ms-auto w-50 h-100 z-index-0 d-none d-sm-none d-md-block border-radius-section border-top-end-radius-0 border-top-start-radius-0 border-bottom-end-radius-0"
          src="~/assets/img/BG.jpg" alt="image">
      </div>
      <div class="container">
        <div class="row">
          <div class="col-lg-7 d-flex">
            <div class="card card-body blur text-md-start text-center px-sm-5 shadow-lg mt-sm-5 py-sm-5">
              <h1 class="text-gradient text-primary mb-0">
                快訊遞
              </h1>
              <p>{{ $t('hello') }}</p>
              <h2 class="text-dark mb-4">
                快速觸達，廣泛連結
              </h2>
              <p class="lead text-dark pe-md-4 me-md-4">
                專業簡訊平台，迅速傳遞訊息至千萬客戶，有效提升您的業務溝通與聯繫效率，是您理想的市場推廣夥伴。
              </p>
              <div class="buttons">
                <NuxtLink to="https://t.me/hk888online">
                  <button type="button" class="btn btn-rounded bg-gradient-primary mt-4">
                    聯絡我們
                  </button>
                </NuxtLink>
                <NuxtLink to="#">
                  <button type="button" class="btn btn-rounded btn-outline-secondary mt-4 ms-2">
                    了解更多
                  </button>
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>

  <!-- 四大標語 -->
  <section class="py-md-7 pb-5">
    <div class="container">
      <div class="row text-center">
        <div class="col-lg-3 col-md-6">
          <div class="info">
            <h5 class="mt-2">
              簡單
            </h5>
            <p>體驗我們的簡訊平台，以最簡單的傳遞您的信息，直接、無障礙地連接您與客戶。</p>
          </div>
        </div>
        <div class="col-lg-3 col-md-6">
          <div class="info">
            <h5 class="mt-2">
              快速
            </h5>
            <p>快速簡訊平台，讓您的信息迅速傳遞，無需等待，即時連結您與客戶高效溝通。</p>
          </div>
        </div>
        <div class="col-lg-3 col-md-6">
          <div class="info">
            <h5 class="mt-2">
              方便
            </h5>
            <p>方便快捷的簡訊服務，讓您輕鬆管理通訊，無論何時何地都能與客戶保持聯繫。</p>
          </div>
        </div>
        <div class="col-lg-3 col-md-6">
          <div class="info">
            <h5 class="mt-2">
              高效
            </h5>
            <p>高效簡訊平台，確保您的信息準確送達，提升效能，讓每一次互動都更具價值。</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- 主要賣點 -->
  <section id="point1">
    <div class="container">
      <div class="row">
        <div class="col-md-6 ms-auto me-auto text-center">
          <h2 class="text-gradient text-primary">
            快速寄送簡訊
          </h2>
          <p>
            了解我們的平台如何運作
          </p>
        </div>
      </div>
      <div class="row mt-5">
        <div class="col-md-6 position-relative">
          <div class="position-relative ms-md-5 me-md-n5">
            <div class="blur-shadow-image">
              <img class="image-left rounded-3 img-fluid position-relative top-0 end-0 bg-cover"
                src="https://image.cache.storm.mg/styles/smg-800x533-fp/s3/media/image/2023/04/10/20230410-051717_U27054_M843731_bf11.jpg?itok=aui0rut4"
                alt="image">
            </div>
          </div>
          <div class="position-absolute bottom-0 mb-5 ms-n2 me-3 start-0 end-2 d-md-block d-none">
            <div class="blur-shadow-image">
              <img class="image-container rounded-3 img-fluid position-relative bg-cover"
                src="https://cw-image-resizer.cwg.tw/resize/uri/https%3A%2F%2Fstorage.googleapis.com%2Fwww-cw-com-tw%2Farticle%2F202010%2Farticle-5f8ecc2cc3961.jpg/?w=1600&format=webp"
                alt="image">
            </div>
          </div>
        </div>
        <div class="col-md-5">
          <div class="position-relative ms-n4 mb-5 mt-8 d-md-block d-none">
            <div class="blur-shadow-image">
              <img class="image-right rounded-3 img-fluid position-relative bg-cover"
                src="https://storage.googleapis.com/www-cheers-com-tw/article/202002/article-5e4757c6e78ee.jpg"
                alt="image">
            </div>
          </div>
          <h3 class="mb-4">
            如何更好的傳達資訊
          </h3>
          <p>
            我們的簡訊平台專為快速發送大量簡訊而設計，結合了先進的技術和用戶友好的介面。首先，平台採用高效的數據處理系統，能夠在短時間內處理和發送成千上萬的簡訊。這意味著無論您需要傳達的信息有多麼龐大，我們的系統都能迅速應對。
          </p>
          <p>
            此外，我們的平台具有直觀的操作界面，使用者可以輕鬆上傳和管理接收者名單，並且能夠設計和定制簡訊內容。透過批量發送功能，用戶只需幾個簡單步驟，就能實現大規模的信息傳播，大大節省了時間和精力。
          </p>
          <p>
            我們還提供了詳細的發送報告，讓您能夠追蹤每條簡訊的送達狀態，確保信息準確無誤地傳遞給每一位接收者。總的來說，我們的簡訊平台不僅快速高效，而且用戶友好，完全適應現代快節奏的商業和通訊需求。
          </p>
        </div>
      </div>
    </div>
  </section>

  <section class="bg-gradient-primary position-relative overflow-hidden">
    <!-- 波浪分隔 start -->
    <div class="position-absolute w-100 z-inde-1 top-0 mt-n3">
      <svg width="100%" viewBox="0 -2 1920 157" version="1.1" xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink">
        <title>wave-down</title>
        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
          <g fill="#FFFFFF" fill-rule="nonzero">
            <g id="wave-down">
              <path id="Path-Copy-2"
                d="M0,60.8320331 C299.333333,115.127115 618.333333,111.165365 959,47.8320321 C1299.66667,-15.5013009 1620.66667,-15.2062179 1920,47.8320331 L1920,156.389409 L0,156.389409 L0,60.8320331 Z"
                transform="translate(960.000000, 78.416017) rotate(180.000000) translate(-960.000000, -78.416017) " />
            </g>
          </g>
        </g>
      </svg>
    </div>
    <div class="container py-lg-10 py-7" id="point2">
      <div class="row">
        <div class="col-lg-6 d-flex justify-content-center flex-column">
          <div id="carouselExampleIndicator" class="carousel slide py-7" data-bs-ride="carousel">
            <!-- 輪播標記 -->
            <div class="carousel-indicators justify-content-start ms-0">
              <a href="javascript:;">
                <img src="~/assets/img/google.svg" alt="..."
                  class="avatar avatar-sm avatar-scale-up shadow border-0 active"
                  data-bs-target="#carouselExampleIndicator" data-bs-slide-to="0">
                <span class="text-white mx-2">&#124;</span>
              </a>
              <a href="javascript:;">
                <img src="~/assets/img/google.svg" alt="..." class="avatar avatar-sm avatar-scale-up shadow border-0"
                  data-bs-target="#carouselExampleIndicator" data-bs-slide-to="1">
                <span class="text-white mx-2">&#124;</span>
              </a>
              <a href="javascript:;">
                <img src="~/assets/img/google.svg" alt="..." class="avatar avatar-sm avatar-scale-up shadow border-0"
                  data-bs-target="#carouselExampleIndicator" data-bs-slide-to="2">
              </a>
            </div>
            <!-- 輪播內容 -->
            <div class="carousel-inner">
              <h2 class="text-white mb-0">
                技術支持
              </h2>
              <p class="text-white opacity-8 mb-1">
                我們獲得以下這些服務商的技術支持
              </p>
              <hr class="text-white horizontal opacity-6 mb-4 mt-2 w-25 text-start">
              <!-- 輪播資訊 -->
              <div class="carousel-item active">
                <h6 class="text-white opacity-8 pe-5">
                  技術商功能描述：
                  提供定制化的技術解決方案，滿足不同行業和企業的特定需求。
                  利用最新的技術趨勢和創新，如人工智能、大數據分析，以及雲計算，為客戶創造競爭優勢。
                  專業團隊負責系統的整合和實施，確保技術方案與客戶的現有系統無縫對接。
                  提供從前期咨詢、系統設計到後期部署和維護的全方位服務。
                </h6>
              </div>
              <div class="carousel-item">
                <h6 class="text-white opacity-8 pe-5">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat at
                  quasi nemo delectus recusandae aspernatur numquam ipsum odio enim earum doloremque libero magnam, totam
                  tempore corporis ut repellat accusamus officiis?
                </h6>
              </div>
              <div class="carousel-item">
                <h6 class="text-white opacity-8 pe-5">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab quae
                  mollitia vero, facilis molestiae qui incidunt velit, accusamus id necessitatibus ad in eveniet, illo
                  iusto doloremque! Et officia iusto illum!
                </h6>
                <div class="author mt-4">
                  <div class="name">
                    <span class="text-white">consectetur adipisicing</span>
                    <div class="stats">
                      <small class="text-white opacity-6">sapiente consequuntur</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- 合作夥伴 logo 群 -->
        <div class="col-md-6 justify-content-center flex-column d-sm-none d-md-none d-lg-flex d-xl-flex">
          <div class="row justify-content-center d-none d-md-flex">
            <div class="col-1 mb-4" />
            <div class="col-5 mb-4">
              <div class="d-block bg-white avatar avatar-lg rounded-circle p-3 ms-6 mt-2 fadeIn3 fadeInBottom">
                <img src="~/assets/img/google.svg" alt="Logo Image">
              </div>
            </div>
            <div class="col-4 mb-4">
              <div class="d-block bg-white avatar avatar-lg rounded-circle p-3 ms-6 mt-2 fadeIn3 fadeInBottom">
                <img src="~/assets/img/google.svg" alt="Logo Image">
              </div>
            </div>
          </div>
          <div class="row justify-content-end d-none d-md-flex">
            <div class="col-4 my-4">
              <div class="d-block bg-white avatar avatar-lg rounded-circle p-3 ms-4 fadeIn1 fadeInBottom">
                <img src="~/assets/img/google.svg" alt="Logo Image">
              </div>
            </div>
            <div class="col-3 my-4">
              <div class="d-block bg-white avatar avatar-lg rounded-circle p-3 me-auto fadeIn1 fadeInBottom">
                <img src="~/assets/img/google.svg" alt="Logo Image">
              </div>
            </div>
            <div class="col-3 my-4">
              <div class="d-block bg-white avatar avatar-lg rounded-circle p-3 fadeIn3 fadeInBottom ms-3 mt-3">
                <img src="~/assets/img/google.svg" alt="Logo Image">
              </div>
            </div>
          </div>
          <div class="row d-none d-md-flex">
            <div class="col-6">
              <div class="d-block bg-white avatar avatar-lg rounded-circle p-3 ms-auto mt-5 fadeIn2 fadeInBottom">
                <img src="~/assets/img/google.svg" alt="Logo Image">
              </div>
            </div>
            <div class="col-6 mt-6">
              <!-- Logo -->
              <div class="d-block bg-white avatar avatar-lg rounded-circle p-3 mx-auto mt-n3 fadeIn3 fadeInBottom">
                <img src="~/assets/img/google.svg" alt="Logo Image">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 波浪分隔 end -->
    <div class="position-absolute w-100 bottom-0">
      <svg width="100%" viewBox="0 -1 1920 166" version="1.1" xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink">
        <title>wave-up</title>
        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
          <g transform="translate(0.000000, 5.000000)" fill="#FFFFFF" fill-rule="nonzero">
            <g id="wave-up" transform="translate(0.000000, -5.000000)">
              <path
                d="M0,70 C298.666667,105.333333 618.666667,95 960,39 C1301.33333,-17 1621.33333,-11.3333333 1920,56 L1920,165 L0,165 L0,70 Z" />
            </g>
          </g>
        </g>
      </svg>
    </div>
  </section>
  <section class="py-7">
    <div class="container" id="point3">
      <div class="row">
        <div class="col-md-5 ms-auto me-auto text-center">
          <div class="p-3 info-hover-warning">
            <div class="icon icon-shape bg-gradient-primary shadow icon-shape-circle text-primary">
              <i class="fa fa-cogs" />
            </div>
            <h3 class="text-gradient text-primary mb-0 mt-4">
              使用場景
            </h3>
          </div>
          <p>如何透過我們的服務迅速拓展您的業務？</p>
        </div>
      </div>
      <div class="row mt-5">
        <div class="col-md-4 ms-auto my-auto">
          <div class="cursor-pointer">
            <div class="card card-background tilt" data-tilt="">
              <div class="full-background" style="background-color: #005555" />
              <div class="card-body pt-7 text-center">
                <div class="icon icon-lg up mb-3">
                  <img src="~/assets/img/converse.svg" alt="交談圖標">
                </div>
                <h2 class="text-white up mb-0">
                  產品推廣
                </h2>
                <p class="lead up">
                  角色定位：產品經理
                </p>
                <button type="button" class="btn btn-white btn-lg mt-3 up">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-5 me-auto my-auto ms-md-5">
          <div class="p-3 info-horizontal d-flex">
            <div>
              <h5>1. 目標客戶精準定位</h5>
              <p>
                利用平台的數據分析功能，精確識別目標客戶群，確保推廣信息發送給最有可能對產品感興趣的客戶。
                透過客戶行為和偏好的深入分析，定制個性化的推廣信息，提高轉化率。
              </p>
            </div>
          </div>
          <div class="p-3 info-horizontal d-flex">
            <div>
              <h5>2. 即時推廣活動通知</h5>
              <p>
                簡訊平台能夠即時發送大量訊息，確保客戶能夠在第一時間獲得最新的產品推廣和特惠信息。
                這種即時性對於限時優惠或特殊活動尤為重要，幫助提升客戶參與度和銷售機會。
              </p>
            </div>
          </div>
          <div class="p-3 info-horizontal d-flex">
            <div>
              <h5>3. 追蹤與反饋分析</h5>
              <p>
                平台提供的追蹤和分析工具可以幫助企業了解簡訊推廣的效果。
                這些數據有助於優化未來的推廣策略，提升營銷效率和ROI。
              </p>
            </div>
          </div>
        </div>
      </div>
      <hr class="dark my-md-6 mt-2 mx-7">
      <div class="row">
        <div class="col-md-5 ms-auto my-auto">
          <div class="p-3 info-horizontal d-flex">
            <div>
              <h5>1. 自動化服務提醒</h5>
              <p>
                簡訊平台可以自動發送服務提醒，如預約確認、付款提醒或保養通知，提升客戶體驗。
                自動化的流程降低了人工操作的錯誤率和工作量，提高了效率。
              </p>
            </div>
          </div>
          <div class="p-3 info-horizontal d-flex">
            <div>
              <h5>2. 即時客戶支持</h5>
              <p>
                客戶可以透過簡訊快速獲得支援，如問題解答或緊急服務請求。
                這種即時性對於緊急情況特別重要，能夠快速解決客戶的問題，提升客戶滿意度。
              </p>
            </div>
          </div>
          <div class="p-3 info-horizontal d-flex">
            <div>
              <h5>3. 客戶反饋收集</h5>
              <p>
                透過簡訊輕鬆收集客戶反饋，如滿意度調查或產品使用心得。
                客戶反饋對於產品和服務的改進至關重要，有助於企業更好地了解客戶需求和市場趨勢。
              </p>
            </div>
          </div>
        </div>
        <div class="col-md-4 me-auto my-auto ms-md-5">
          <div class="cursor-pointer">
            <div class="card card-background tilt" data-tilt="">
              <div class="full-background" style="background-color: #005555" />
              <div class="card-body pt-7 text-center">
                <div class="icon icon-lg up mb-3">
                  <img src="~/assets/img/converse.svg" alt="交談圖標">
                </div>
                <h2 class="text-white up mb-0">
                  客戶服務與支持
                </h2>
                <p class="lead up">
                  角色定位：客服人員
                </p>
                <button type="button" class="btn btn-white btn-lg mt-3 up">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- 公司資訊&版權宣告 -->
  <footer class="footer pt-5 mt-5">
    <hr class="horizontal dark mb-5">
    <div class="container">
      <div class=" row">
        <div class="col-md-3 mb-4 ms-auto">
          <div>
            <h6 class="text-gradient text-primary font-weight-bolder">
              快訊遞
            </h6>
          </div>
          <div>
            <h6 class="mt-3 mb-2 opacity-8">
              快速觸達，廣泛連結
            </h6>
            <ul class="d-flex flex-row ms-n3 nav">
              <li class="nav-item">
                <a class="nav-link pe-1" href="https://www.facebook.com/" target="_blank">
                  <i class="fab fa-facebook text-lg opacity-8"></i>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link pe-1" href="https://twitter.com/" target="_blank">
                  <i class="fab fa-twitter text-lg opacity-8"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="col-md-2 col-sm-6 col-6 mb-4">
          <div>
            <h6 class="text-gradient text-primary text-sm">
              Company
            </h6>
            <ul class="flex-column ms-n3 nav">
              <li class="nav-item">
                <a class="nav-link" href="https://www.google.com/" target="_blank">
                  About Us
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="https://www.google.com/" target="_blank">
                  blog
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="col-md-2 col-sm-6 col-6 mb-4">
          <div>
            <h6 class="text-gradient text-primary text-sm">
              Resources
            </h6>
            <ul class="flex-column ms-n3 nav">
              <li class="nav-item">
                <a class="nav-link" href="https://www.google.com/" target="_blank">
                  Lorem, ipsum dolor
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="https://www.google.com/" target="_blank">
                  sit amet consectetur
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="https://www.google.com/" target="_blank">
                  adipisicing elit.
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="https://www.google.com/" target="_blank">
                  aspernatur tenetur
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="col-md-2 col-sm-6 col-6 mb-4">
          <div>
            <h6 class="text-gradient text-primary text-sm">
              Help & Support
            </h6>
            <ul class="flex-column ms-n3 nav">
              <li class="nav-item">
                <a class="nav-link" href="https://www.google.com/" target="_blank">
                  Lorem, ipsum dolor
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="https://www.google.com/" target="_blank">
                  sit amet consectetur
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="https://www.google.com/" target="_blank">
                  adipisicing elit.
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="https://www.google.com/" target="_blank">
                  aspernatur tenetur
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="col-md-2 col-sm-6 col-6 mb-4 me-auto">
          <div>
            <h6 class="text-gradient text-primary text-sm">
              Legal
            </h6>
            <ul class="flex-column ms-n3 nav">
              <li class="nav-item">
                <a class="nav-link" href="https://www.google.com/" target="_blank">
                  Terms &amp; Conditions
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="https://www.google.com/" target="_blank">
                  Privacy Policy
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="https://www.google.com/" target="_blank">
                  Licenses (EULA)
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="col-12">
          <div class="text-center">
            <p class="my-4 text-sm">
              All rights reserved. Copyright ©
            </p>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
definePageMeta({
  layout: false,
});
</script>