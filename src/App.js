import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div class="hero_area">
        <header class="header_section">
          <div class="container">
            <nav class="navbar navbar-expand-lg custom_nav-container ">
              <a class="navbar-brand" href="index.html">
                <img src="electrochip/images/logo.png" alt="" />
                <span>Fortofolio</span>
              </a>
              <button
                class="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span class="s-1"> </span>
                <span class="s-2"> </span>
                <span class="s-3"> </span>
              </button>

              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <div class="d-flex ml-auto flex-column flex-lg-row align-items-center">
                  <ul class="navbar-nav  ">
                    <li class="nav-item active">
                      <a class="nav-link" href="index.html">
                        Home <span class="sr-only">(current)</span>
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="about.html">
                        {" "}
                        About
                      </a>
                    </li>

                    <li class="nav-item">
                      <a class="nav-link" href="blog.html">
                        {" "}
                        Blog{" "}
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="contact.html">
                        Contact{" "}
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </header>

        <section class=" slider_section ">
          <div class="container">
            <div class="row">
              <div class="col-md-6 ">
                <div class="detail_box">
                  <h1>Hai saya melanie saputeri hariyono</h1>
                  <p>saya murid smk negeri 6 jember,saya kelas XII RPL 2</p>
                </div>
              </div>
              <div class="col-lg-5 col-md-6 offset-lg-1">
                <div class="img_content">
                  <div class="img_container">
                    <div
                      id="carouselExampleControls"
                      class="carousel slide"
                      data-ride="carousel"
                    >
                      <div class="carousel-inner">
                        <div class="carousel-item active">
                          <div class="img-box">
                            <img
                              src="electrochip/images/p.jpeg
                              "
                              alt=""
                            />
                          </div>
                        </div>
                        <div class="carousel-item">
                          <div class="img-box">
                            <img
                              src="electrochip/images/slider-img.jpg"
                              alt=""
                            />
                          </div>
                        </div>
                        <div class="carousel-item">
                          <div class="img-box">
                            <img
                              src="electrochip/images/slider-img.jpg"
                              alt=""
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <a
                    class="carousel-control-prev"
                    href="#carouselExampleControls"
                    role="button"
                    data-slide="prev"
                  >
                    <span class="sr-only">Previous</span>
                  </a>
                  <a
                    class="carousel-control-next"
                    href="#carouselExampleControls"
                    role="button"
                    data-slide="next"
                  >
                    <span class="sr-only">Next</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <section class="about_section layout_padding">
        <div class="container">
          <div class="row">
            <div class="col-md-6">
              <div class="detail-box">
                <div class="heading_container">
                  <h2>Tentang saya</h2>
                </div>
                <p>
                  Nama saya melanie saputeri hariyono saya sekolah di SMK NEGERI
                  6 JEMBER kelas XII rpl 2 dan tepatnya ditahun 2024 february 21
                  saya berumur 18 tahun dan semoga di tahun ini saya lebih baik
                  dari tahun sebelumnya.
                </p>
                <p>
                  Wa : 082331626369 <br />
                  Ig : __melmelani <br />
                  Alamat : Teko'an tanggul kulon <br />
                </p>
              </div>
            </div>
            <div class="col-md-6">
              <div class="img_container">
                <div class="img-box b1">
                  <img src="electrochip/images/foto1.jpeg" alt="" />
                </div>
                <div class="img-box b2">
                  <img src="electrochip/images/foto2.jpeg" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* 
      <section class="blog_section layout_padding">
        <div class="container">
          <div class="heading_container">
            <h2>Blog</h2>
          </div>
          <div class="row">
            <div class="col-md-6">
              <div class="box">
                <div class="img-box">
                  <img src="electrochip/images/blog1.jpg" alt="" />
                </div>
                <div class="detail-box">
                  <h5>Blog Title Goes Here</h5>
                  <p>
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form, by injected humour, or randomised
                  </p>
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <div class="box">
                <div class="img-box">
                  <img src="electrochip/images/blog2.jpg" alt="" />
                </div>
                <div class="detail-box">
                  <h5>Blog Title Goes Here</h5>
                  <p>
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form, by injected humour, or randomised
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="info_section layout_padding">
        <div class="container">
          <div class="info_contact">
            <div class="row">
              <div class="col-md-12">
                <a href="">
                  <img src="electrochip/images/telephone-white.png" alt="" />
                  <span>Call : +012334567890</span>
                </a>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-4 col-lg-3">
              <div class="info_social">
                <div>
                  <a href="">
                    <img src="electrochip/images/fb.png" alt="" />
                  </a>
                </div>
                <div>
                  <a href="">
                    <img src="electrochip/images/twitter.png" alt="" />
                  </a>
                </div>
                <div>
                  <a href="">
                    <img src="electrochip/images/linkedin.png" alt="" />
                  </a>
                </div>
                <div>
                  <a href="">
                    <img src="electrochip/images/instagram.png" alt="" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      <script src="js/jquery-3.4.1.min.js"></script>
      <script src="js/bootstrap.js"></script>
    </div>
  );
}

export default App;
