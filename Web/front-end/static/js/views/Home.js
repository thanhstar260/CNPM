import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("Trang chu");
    }

    async getHtml(){
        return`
        
        <head>
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" />
          <link rel="stylesheet" href="/front-end/static/css/Home.css">
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.css" integrity="sha512-UTNP5BXLIptsaj5WdKFrkFov94lDx+eBvbKyoe1YAfjeRPC+gT5kyZ10kOHCfNZqEui1sxmqvodNUx3KbuYI/A==" crossorigin="anonymous"
            referrerpolicy="no-referrer" />
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.theme.default.min.css" integrity="sha512-sMXtMNL1zRzolHYKEujM2AqCLUR9F2C4/05cdbxjjLSRvMQIciEPCQZo++nk7go3BtSuK9kfa/s+a4f4i5pLkw=="
            crossorigin="anonymous" referrerpolicy="no-referrer" />
          <script src="https://code.jquery.com/jquery-1.12.4.min.js" integrity="sha256-ZosEbRLbNQzLpnKIkEdrPv7lOy9C27hHQ+Xp8a4MxAQ=" crossorigin="anonymous"></script>
        </head>
        
        <body>
        
          <header>
            <div class="head_container">
              <div class="head flex">
                <div class="logo flex">
                  <a href="#">
                    <h3>BOOKRENTAL</h3>
                  </a>
        
                  <div class="search">
                    <input type="text" placeholder="Nhập tên tác giả, thể loại, ..." name="" value="">
                    <i class="fa fa-search"></i>
                  </div>
                </div>
        
                <div class="left flex">
                  <div class="head_icon">
                    <i class="fa fa-user-circle"></i>
                    <label>Đăng nhập</label>
                  </div>
                  <div class="head_icon">
                    <i class="fa fa-heart"></i>
                    <label>Yêu thích</label>
                  </div>
                  <div class="head_icon">
                    <i class="fa fa-shopping-cart"></i>
                    <label>Giỏ hàng</label>
                  </div>
                </div>
              </div>
              <div class="navbar">
                <nav>
                  <ul id="menuitem">
                    <li> <a href="/home" data-link>Trang chủ</a> </li>
                    <li> <a href="/books" data-link>Sách</a> </li>
                    <li> <a href="/discount" data-link>Khuyến mãi và gói thuê bao</a> </li>
                    <li> <a href="/about-us" data-link>Về chúng tôi</a> </li>
                  </ul>
                </nav>
                <span class="fa fa-bars" onclick="menutoggle()"></span>
              </div>
            </div>
          </header>
          <script>
            var menuitem = document.getElementById("menuitem");
            menuitem.style.maxHeight = "0px";
        
            function menutoggle() {
              if (menuitem.style.maxHeight == '0px') {
                menuitem.style.maxHeight = "400px"
              } else {
                menuitem.style.maxHeight = "0px"
              }
            }
          </script>
        
          
        
        <!----------------------------------------- Home --------------------------------------------->
          <section class="home" >
            <div class="slider">
              <div class="slide active">
                <div class="container-promo">
                  <div class="caption">
                    <h1>Hè về giảm giá sốc</h1>
                    <p> Đọc sách giá rẻ nhiều thể loại</p>
                    <a href="#">Xem ngay</a>
                  </div>
                </div>
              </div>
              <div class="slide  ">
                <div class="container-promo">
                  <div class="caption">
                    <h1>Hè về giảm giá sốc</h1>
                    <p> Đọc sách giá rẻ nhiều thể loại</p>
                    <a href="#">Xem ngay</a>
                  </div>
                </div>
              </div>
              <div class="slide  ">
                <div class="container-promo">
                  <div class="caption">
                    <h1>Hè về giảm giá sốc</h1>
                    <p> Đọc sách giá rẻ nhiều thể loại</p>
                    <a href="#">Xem ngay</a>
                  </div>
                </div>
              </div>
            </div>
        
            <!-- control -->
            <div class="control">
              <div class="prev">
                <i class="fa fa-arrow-circle-left"></i>
              </div>
              <div class="next">
                <i class="fa fa-arrow-circle-right"></i>
              </div>
            </div>
          </section>
        
          <script>
            const slide = document.querySelector(".slider").children;
            const prev = document.querySelector(".prev");
            const next = document.querySelector(".next");
        
            let index = 0;
        
            prev.addEventListener("click", function() {
              prevslide()
        
            })
        
            next.addEventListener("click", function() {
              nextslide()
        
            })
        
            function prevslide() {
              if (index == 0) {
                index = slide.length - 1;
              } else {
                index--;
              }
              changeSlide();
            }
        
            function nextslide() {
              if (index == slide.length - 1) {
                index = 0;
              } else {
                index++;
              }
              changeSlide();
            }
        
            function changeSlide() {
              for (let i = 0; i < slide.length; i++) {
                slide[i].classList.remove("active");
              }
              slide[index].classList.add("active");
            }
        
            function autoPlay() {
              nextslide();
            }
            let timer = setInterval(autoPlay, 4000);
          </script>
        
        <!-------------------------------------------- product ------------------------------------------------>
        
          <section class="product">
        <!------------ Sach moi ------------->
            <div class="container">
              <div class="heading">
                <h2>Sách mới </h2>
                <a href="#">
                  <h3>Xem tất cả<span><i class="fa fa-arrow-right"></i></span></h3>
                </a>
              </div>
              <div class="owl-carousel owl-theme">
                <div class="item">
                  <div class="img">
                    <img src="/front-end/static/css/images/dac-nhan-tam.jpg">
                  </div>
                  <div class="text">
                    <h4>DALE CARNEGIE</h4>
                    <h3>Đắc nhân tâm</h3>
                    <div class="rate flex">
                      <i class="fa fa-star "></i>
                      <i class="fa fa-star "></i>
                      <i class="fa fa-star "></i>
                      <i class="fa fa-star "></i>
                      <i class="fa fa-star "></i>
                    </div>
                    <h1>3000 vnd </h1>
                    <button>Thêm vào giỏ hàng <span><i class="fa fa-shopping-cart "></i></span></button>
                  </div>
                </div>
                <div class="item">
                  <div class="img">
                    <img src="/static/images/dam_nghi_lai.jpg">
                  </div>
                  <div class="text">
                    <h4>ADAM GRANT</h4>
                    <h3>Dám nghĩ lại</h3>
                    <div class="rate flex">
                      <i class="fa fa-star "></i>
                      <i class="fa fa-star "></i>
                      <i class="fa fa-star "></i>
                      <i class="fa fa-star "></i>
                      <i class="fa fa-star "></i>
                    </div>
                    <h1>3000 vnd </h1>
                    <button>Thêm vào giỏ hàng <span><i class="fa fa-shopping-cart "></i></span></button>
                  </div>
                </div>
                <div class="item">
                  <div class="img">
                    <img src="/front-end/static/css/images/dong_chay.jpg">
                  </div>
                  <div class="text">
                    <h4>DALE CARNEGIE</h4>
                    <h3>Dòng chảy</h3>
                    <div class="rate flex">
                      <i class="fa fa-star "></i>
                      <i class="fa fa-star "></i>
                      <i class="fa fa-star "></i>
                      <i class="fa fa-star "></i>
                      <i class="fa fa-star "></i>
                    </div>
                    <h1>3000 vnd </h1>
                    <button>Thêm vào giỏ hàng <span><i class="fa fa-shopping-cart "></i></span></button>
                  </div>
                </div>
                <div class="item">
                  <div class="img">
                    <img src="/front-end/static/css/images/do_thai.jpg">
                  </div>
                  <div class="text">
                    <h4>PAUL JOHNSON</h4>
                    <h3>Lịch sử do thái</h3>
                    <div class="rate flex">
                      <i class="fa fa-star "></i>
                      <i class="fa fa-star "></i>
                      <i class="fa fa-star "></i>
                      <i class="fa fa-star "></i>
                      <i class="fa fa-star "></i>
                    </div>
                    <h1>3000 vnd </h1>
                    <button>Thêm vào giỏ hàng <span><i class="fa fa-shopping-cart "></i></span></button>
                  </div>
                </div>
                <div class="item">
                  <div class="img">
                    <img src="/front-end/static/css/images/lsvv.jpg">
                  </div>
                  <div class="text">
                    <h4>BILL BRYSON</h4>
                    <h3>Lịch sử vạn vật</h3>
                    <div class="rate flex">
                      <i class="fa fa-star "></i>
                      <i class="fa fa-star "></i>
                      <i class="fa fa-star "></i>
                      <i class="fa fa-star "></i>
                      <i class="fa fa-star "></i>
                    </div>
                    <h1>3000 vnd </h1>
                    <button>Thêm vào giỏ hàng <span><i class="fa fa-shopping-cart "></i></span></button>
                  </div>
                </div>
                <div class="item">
                  <div class="img">
                    <img src="/front-end/static/css/images/mat_ma.jpg">
                  </div>
                  <div class="text">
                    <h4>JASON FUNG</h4>
                    <h3>Mật mã tiểu đường</h3>
                    <div class="rate flex">
                      <i class="fa fa-star "></i>
                      <i class="fa fa-star "></i>
                      <i class="fa fa-star "></i>
                      <i class="fa fa-star "></i>
                      <i class="fa fa-star "></i>
                    </div>
                    <h1>3000 vnd </h1>
                    <button>Thêm vào giỏ hàng <span><i class="fa fa-shopping-cart "></i></span></button>
                  </div>
                </div>
                <div class="item">
                  <div class="img">
                    <img src="/front-end/static/css/images/mkns.jpg">
                  </div>
                  <div class="text">
                    <h4>NGUYÊN PHONG</h4>
                    <h3>Muôn kiếp nhân sinh</h3>
                    <div class="rate flex">
                      <i class="fa fa-star "></i>
                      <i class="fa fa-star "></i>
                      <i class="fa fa-star "></i>
                      <i class="fa fa-star "></i>
                      <i class="fa fa-star "></i>
                    </div>
                    <h1>3000 vnd </h1>
                    <button>Thêm vào giỏ hàng <span><i class="fa fa-shopping-cart "></i></span></button>
                  </div>
                </div>
                <div class="item">
                  <div class="img">
                    <img src="/front-end/static/css/images/phuong_ho.jpg">
                  </div>
                  <div class="text">
                    <h4>DALE CARNEGIE</h4>
                    <h3>Phượng hồ</h3>
                    <div class="rate flex">
                      <i class="fa fa-star "></i>
                      <i class="fa fa-star "></i>
                      <i class="fa fa-star "></i>
                      <i class="fa fa-star "></i>
                      <i class="fa fa-star "></i>
                    </div>
                    <h1>3000 vnd </h1>
                    <button>Thêm vào giỏ hàng <span><i class="fa fa-shopping-cart "></i></span></button>
                  </div>
                </div>
                <div class="item">
                  <div class="img">
                    <img src="/front-end/static/css/images/thien.jpg">
                  </div>
                  <div class="text">
                    <h4>HATENGU</h4>
                    <h3>Thiền</h3>
                    <div class="rate flex">
                      <i class="fa fa-star "></i>
                      <i class="fa fa-star "></i>
                      <i class="fa fa-star "></i>
                      <i class="fa fa-star "></i>
                      <i class="fa fa-star "></i>
                    </div>
                    <h1>3000 vnd </h1>
                    <button>Thêm vào giỏ hàng <span><i class="fa fa-shopping-cart "></i></span></button>
                  </div>
                </div>
                <div class="item">
                  <div class="img">
                    <img src="/front-end/static/css/images/tu_duy.jpg">
                  </div>
                  <div class="text">
                    <h4>DAN ERIALY</h4>
                    <h3>Tư duy</h3>
                    <div class="rate flex">
                      <i class="fa fa-star "></i>
                      <i class="fa fa-star "></i>
                      <i class="fa fa-star "></i>
                      <i class="fa fa-star "></i>
                      <i class="fa fa-star "></i>
                    </div>
                    <h1>3000 vnd </h1>
                    <button>Thêm vào giỏ hàng <span><i class="fa fa-shopping-cart "></i></span></button>
                  </div>
                </div>
              </div>
        
        <!------------ Sach hot -------------->
            <div class="container">
              <div class="heading">
                <h2>Sách hot </h2>
                <a href="#">
                  <h3>Xem tất cả<span><i class="fa fa-arrow-right"></i></span></h3>
                </a>
              </div>
              <div class="owl-carousel owl-theme">
                <div class="item">
                  <div class="img">
                    <img src="/front-end/static/css/images/dac_nhan_tam.jpg">
                  </div>
                  <div class="text">
                    <h4>DALE CARNEGIE</h4>
                    <h3>Đắc nhân tâm</h3>
                    <div class="rate flex">
                      <i class="fa fa-star "></i>
                      <i class="fa fa-star "></i>
                      <i class="fa fa-star "></i>
                      <i class="fa fa-star "></i>
                      <i class="fa fa-star "></i>
                    </div>
                    <h1>3000 vnd </h1>
                    <button>Thêm vào giỏ hàng <span><i class="fa fa-shopping-cart "></i></span></button>
                  </div>
                </div>
                <div class="item">
                  <div class="img">
                    <img src="/front-end/static/css/images/dam_nghi_lai.jpg">
                  </div>
                  <div class="text">
                    <h4>ADAM GRANT</h4>
                    <h3>Dám nghĩ lại</h3>
                    <div class="rate flex">
                      <i class="fa fa-star "></i>
                      <i class="fa fa-star "></i>
                      <i class="fa fa-star "></i>
                      <i class="fa fa-star "></i>
                      <i class="fa fa-star "></i>
                    </div>
                    <h1>3000 vnd </h1>
                    <button>Thêm vào giỏ hàng <span><i class="fa fa-shopping-cart "></i></span></button>
                  </div>
                </div>
                <div class="item">
                  <div class="img">
                    <img src="/front-end/static/css/images/dong_chay.jpg">
                  </div>
                  <div class="text">
                    <h4>DALE CARNEGIE</h4>
                    <h3>Dòng chảy</h3>
                    <div class="rate flex">
                      <i class="fa fa-star "></i>
                      <i class="fa fa-star "></i>
                      <i class="fa fa-star "></i>
                      <i class="fa fa-star "></i>
                      <i class="fa fa-star "></i>
                    </div>
                    <h1>3000 vnd </h1>
                    <button>Thêm vào giỏ hàng <span><i class="fa fa-shopping-cart "></i></span></button>
                  </div>
                </div>
                <div class="item">
                  <div class="img">
                    <img src="/front-end/static/css/images/do_thai.jpg">
                  </div>
                  <div class="text">
                    <h4>PAUL JOHNSON</h4>
                    <h3>Lịch sử do thái</h3>
                    <div class="rate flex">
                      <i class="fa fa-star "></i>
                      <i class="fa fa-star "></i>
                      <i class="fa fa-star "></i>
                      <i class="fa fa-star "></i>
                      <i class="fa fa-star "></i>
                    </div>
                    <h1>3000 vnd </h1>
                    <button>Thêm vào giỏ hàng <span><i class="fa fa-shopping-cart "></i></span></button>
                  </div>
                </div>
                <div class="item">
                  <div class="img">
                    <img src="/front-end/static/css/images/lsvv.jpg">
                  </div>
                  <div class="text">
                    <h4>BILL BRYSON</h4>
                    <h3>Lịch sử vạn vật</h3>
                    <div class="rate flex">
                      <i class="fa fa-star "></i>
                      <i class="fa fa-star "></i>
                      <i class="fa fa-star "></i>
                      <i class="fa fa-star "></i>
                      <i class="fa fa-star "></i>
                    </div>
                    <h1>3000 vnd </h1>
                    <button>Thêm vào giỏ hàng <span><i class="fa fa-shopping-cart "></i></span></button>
                  </div>
                </div>
                <div class="item">
                  <div class="img">
                    <img src="/front-end/static/css/images/mat_ma.jpg">
                  </div>
                  <div class="text">
                    <h4>JASON FUNG</h4>
                    <h3>Mật mã tiểu đường</h3>
                    <div class="rate flex">
                      <i class="fa fa-star "></i>
                      <i class="fa fa-star "></i>
                      <i class="fa fa-star "></i>
                      <i class="fa fa-star "></i>
                      <i class="fa fa-star "></i>
                    </div>
                    <h1>3000 vnd </h1>
                    <button>Thêm vào giỏ hàng <span><i class="fa fa-shopping-cart "></i></span></button>
                  </div>
                </div>
                <div class="item">
                  <div class="img">
                    <img src="/front-end/static/css/images/mkns.jpg">
                  </div>
                  <div class="text">
                    <h4>NGUYÊN PHONG</h4>
                    <h3>Muôn kiếp nhân sinh</h3>
                    <div class="rate flex">
                      <i class="fa fa-star "></i>
                      <i class="fa fa-star "></i>
                      <i class="fa fa-star "></i>
                      <i class="fa fa-star "></i>
                      <i class="fa fa-star "></i>
                    </div>
                    <h1>3000 vnd </h1>
                    <button>Thêm vào giỏ hàng <span><i class="fa fa-shopping-cart "></i></span></button>
                  </div>
                </div>
                <div class="item">
                  <div class="img">
                    <img src="/front-end/static/css/images/phuong_ho.jpg">
                  </div>
                  <div class="text">
                    <h4>DALE CARNEGIE</h4>
                    <h3>Phượng hồ</h3>
                    <div class="rate flex">
                      <i class="fa fa-star "></i>
                      <i class="fa fa-star "></i>
                      <i class="fa fa-star "></i>
                      <i class="fa fa-star "></i>
                      <i class="fa fa-star "></i>
                    </div>
                    <h1>3000 vnd </h1>
                    <button>Thêm vào giỏ hàng <span><i class="fa fa-shopping-cart "></i></span></button>
                  </div>
                </div>
                <div class="item">
                  <div class="img">
                    <img src="/front-end/static/css/images/thien.jpg">
                  </div>
                  <div class="text">
                    <h4>HATENGU</h4>
                    <h3>Thiền</h3>
                    <div class="rate flex">
                      <i class="fa fa-star "></i>
                      <i class="fa fa-star "></i>
                      <i class="fa fa-star "></i>
                      <i class="fa fa-star "></i>
                      <i class="fa fa-star "></i>
                    </div>
                    <h1>3000 vnd </h1>
                    <button>Thêm vào giỏ hàng <span><i class="fa fa-shopping-cart "></i></span></button>
                  </div>
                </div>
                <div class="item">
                  <div class="img">
                    <img src="/front-end/static/css/images/tu_duy.jpg">
                  </div>
                  <div class="text">
                    <h4>DAN ERIALY</h4>
                    <h3>Tư duy</h3>
                    <div class="rate flex">
                      <i class="fa fa-star "></i>
                      <i class="fa fa-star "></i>
                      <i class="fa fa-star "></i>
                      <i class="fa fa-star "></i>
                      <i class="fa fa-star "></i>
                    </div>
                    <h1>3000 vnd </h1>
                    <button>Thêm vào giỏ hàng <span><i class="fa fa-shopping-cart "></i></span></button>
                  </div>
                </div>
              </div>
        
        <!------------ Sach pho bien -------------->
            <div class="container">
              <div class="heading">
                <h2>Sách phổ biến </h2>
                <a href="#">
                  <h3>Xem tất cả<span><i class="fa fa-arrow-right"></i></span></h3>
                </a>
              </div>
              <div class="owl-carousel owl-theme">
                <div class="item">
                  <div class="img">
                    <img src="/front-end/static/css/images/dac_nhan_tam.jpg">
                  </div>
                  <div class="text">
                    <h4>DALE CARNEGIE</h4>
                    <h3>Đắc nhân tâm</h3>
                    <div class="rate flex">
                      <i class="fa fa-star "></i>
                      <i class="fa fa-star "></i>
                      <i class="fa fa-star "></i>
                      <i class="fa fa-star "></i>
                      <i class="fa fa-star "></i>
                    </div>
                    <h1>3000 vnd </h1>
                    <button>Thêm vào giỏ hàng <span><i class="fa fa-shopping-cart "></i></span></button>
                  </div>
                </div>
                <div class="item">
                  <div class="img">
                    <img src="/front-end/static/css/images/dam_nghi_lai.jpg">
                  </div>
                  <div class="text">
                    <h4>ADAM GRANT</h4>
                    <h3>Dám nghĩ lại</h3>
                    <div class="rate flex">
                      <i class="fa fa-star "></i>
                      <i class="fa fa-star "></i>
                      <i class="fa fa-star "></i>
                      <i class="fa fa-star "></i>
                      <i class="fa fa-star "></i>
                    </div>
                    <h1>3000 vnd </h1>
                    <button>Thêm vào giỏ hàng <span><i class="fa fa-shopping-cart "></i></span></button>
                  </div>
                </div>
                <div class="item">
                  <div class="img">
                    <img src="/front-end/static/css/images/dong_chay.jpg">
                  </div>
                  <div class="text">
                    <h4>DALE CARNEGIE</h4>
                    <h3>Dòng chảy</h3>
                    <div class="rate flex">
                      <i class="fa fa-star "></i>
                      <i class="fa fa-star "></i>
                      <i class="fa fa-star "></i>
                      <i class="fa fa-star "></i>
                      <i class="fa fa-star "></i>
                    </div>
                    <h1>3000 vnd </h1>
                    <button>Thêm vào giỏ hàng <span><i class="fa fa-shopping-cart "></i></span></button>
                  </div>
                </div>
                <div class="item">
                  <div class="img">
                    <img src="/front-end/static/css/images/do_thai.jpg">
                  </div>
                  <div class="text">
                    <h4>PAUL JOHNSON</h4>
                    <h3>Lịch sử do thái</h3>
                    <div class="rate flex">
                      <i class="fa fa-star "></i>
                      <i class="fa fa-star "></i>
                      <i class="fa fa-star "></i>
                      <i class="fa fa-star "></i>
                      <i class="fa fa-star "></i>
                    </div>
                    <h1>3000 vnd </h1>
                    <button>Thêm vào giỏ hàng <span><i class="fa fa-shopping-cart "></i></span></button>
                  </div>
                </div>
                <div class="item">
                  <div class="img">
                    <img src="/front-end/static/css/images/lsvv.jpg">
                  </div>
                  <div class="text">
                    <h4>BILL BRYSON</h4>
                    <h3>Lịch sử vạn vật</h3>
                    <div class="rate flex">
                      <i class="fa fa-star "></i>
                      <i class="fa fa-star "></i>
                      <i class="fa fa-star "></i>
                      <i class="fa fa-star "></i>
                      <i class="fa fa-star "></i>
                    </div>
                    <h1>3000 vnd </h1>
                    <button>Thêm vào giỏ hàng <span><i class="fa fa-shopping-cart "></i></span></button>
                  </div>
                </div>
                <div class="item">
                  <div class="img">
                    <img src="/front-end/static/css/images/mat_ma.jpg">
                  </div>
                  <div class="text">
                    <h4>JASON FUNG</h4>
                    <h3>Mật mã tiểu đường</h3>
                    <div class="rate flex">
                      <i class="fa fa-star "></i>
                      <i class="fa fa-star "></i>
                      <i class="fa fa-star "></i>
                      <i class="fa fa-star "></i>
                      <i class="fa fa-star "></i>
                    </div>
                    <h1>3000 vnd </h1>
                    <button>Thêm vào giỏ hàng <span><i class="fa fa-shopping-cart "></i></span></button>
                  </div>
                </div>
                <div class="item">
                  <div class="img">
                    <img src="/front-end/static/css/images/mkns.jpg">
                  </div>
                  <div class="text">
                    <h4>NGUYÊN PHONG</h4>
                    <h3>Muôn kiếp nhân sinh</h3>
                    <div class="rate flex">
                      <i class="fa fa-star "></i>
                      <i class="fa fa-star "></i>
                      <i class="fa fa-star "></i>
                      <i class="fa fa-star "></i>
                      <i class="fa fa-star "></i>
                    </div>
                    <h1>3000 vnd </h1>
                    <button>Thêm vào giỏ hàng <span><i class="fa fa-shopping-cart "></i></span></button>
                  </div>
                </div>
                <div class="item">
                  <div class="img">
                    <img src="/front-end/static/css/images/phuong_ho.jpg">
                  </div>
                  <div class="text">
                    <h4>DALE CARNEGIE</h4>
                    <h3>Phượng hồ</h3>
                    <div class="rate flex">
                      <i class="fa fa-star "></i>
                      <i class="fa fa-star "></i>
                      <i class="fa fa-star "></i>
                      <i class="fa fa-star "></i>
                      <i class="fa fa-star "></i>
                    </div>
                    <h1>3000 vnd </h1>
                    <button>Thêm vào giỏ hàng <span><i class="fa fa-shopping-cart "></i></span></button>
                  </div>
                </div>
                <div class="item">
                  <div class="img">
                    <img src="/front-end/static/css/images/thien.jpg">
                  </div>
                  <div class="text">
                    <h4>HATENGU</h4>
                    <h3>Thiền</h3>
                    <div class="rate flex">
                      <i class="fa fa-star "></i>
                      <i class="fa fa-star "></i>
                      <i class="fa fa-star "></i>
                      <i class="fa fa-star "></i>
                      <i class="fa fa-star "></i>
                    </div>
                    <h1>3000 vnd </h1>
                    <button>Thêm vào giỏ hàng <span><i class="fa fa-shopping-cart "></i></span></button>
                  </div>
                </div>
                <div class="item">
                  <div class="img">
                    <img src="/front-end/static/css/images/tu_duy.jpg">
                  </div>
                  <div class="text">
                    <h4>DAN ERIALY</h4>
                    <h3>Tư duy</h3>
                    <div class="rate flex">
                      <i class="fa fa-star "></i>
                      <i class="fa fa-star "></i>
                      <i class="fa fa-star "></i>
                      <i class="fa fa-star "></i>
                      <i class="fa fa-star "></i>
                    </div>
                    <h1>3000 vnd </h1>
                    <button>Thêm vào giỏ hàng <span><i class="fa fa-shopping-cart "></i></span></button>
                  </div>
                </div>
              </div>
            </section>
        
            <script src="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js"></script>
          
            <script>
              $('.owl-carousel').owlCarousel({
                loop: true,
                margin: 10,
                nav: true,
                dots: false,
                navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
                responsive: {
                  412: {
                    items: 1
                  },
                  768: {
                    items: 2
                  },
                  1000: {
                    items: 5
                  }
                }
              })
            </script>
        
        <!----------------------------footer-------------------------------->
        <footer>
          <div class="container">
              <div class="box_footer1">
                <h3>THÔNG TIN LIÊN HỆ</h3>
                <p>
                  Địa chỉ: P. Linh Trung, Thủ Đức, TP.HCM<br>
                  Mở cửa: 7h30 a.m<br>
                  Đóng cửa: 9h p.m<br>
                  Hotline: 0328518596<br>
                  Email: info@bookrental.com<br>
                </p>
              </div>
              <div class="box_footer2">
                <h3>FOLLOW US</h3>
                <a href="" target="_blank">
                  <i class="fab fa-facebook"></i>
                </a>
                <a href="" target="_blank">
                  <i class="fab fa-instagram"></i>
                </a>
              </div>
              <div class="box_footer3">
                <h3>HƯỚNG DẪN</h3>
                <div class="hd"><a href="">Điều khoản</a></div>
                <div class="hd"><a href="">Hướng dẫn thuê sách</a></div>
                <div class="hd"><a href="">Chính sách đổi trả</a></div>
                <div class="hd"><a href="">Bảo mật thông tin</a></div>
              </div>
          </div>
        </footer>
        // <div id="app"></div>
        // <script type="module" src="/front-end/static/js/index.js"></script>
        </body>
        
        </html>
        
        
        `
        ;

    }
}