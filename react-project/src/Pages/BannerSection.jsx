import React from 'react';

const BannerSection = () => {
  return (
    <section
      className="py-3"
      style={{
        backgroundImage: "url('assets/images/background-pattern.jpg')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <div className="banner-blocks">

              {/* Swiper Main Section */}
              <div className="banner-ad large bg-info block-1">
                <div className="swiper main-swiper">
                  <div className="swiper-wrapper">

                    {/* Slide 1 */}
                    <div className="swiper-slide">
                      <div className="row banner-content p-5">
                        <div className="content-wrapper col-md-7">
                          <div className="categories my-3">100% natural</div>
                          <h3 className="display-4">Fresh Smoothie & Summer Juice</h3>
                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dignissim massa diam elementum.</p>
                          <a
                            href="#"
                            className="btn btn-outline-dark btn-lg text-uppercase fs-6 rounded-1 px-4 py-3 mt-3"
                          >
                            Shop Now
                          </a>
                        </div>
                        <div className="img-wrapper col-md-5">
                          <img src="assets/images/product-thumb-1.png" alt="Smoothie" className="img-fluid" />
                        </div>
                      </div>
                    </div>

                    {/* Slide 2 */}
                    <div className="swiper-slide">
                      <div className="row banner-content p-5">
                        <div className="content-wrapper col-md-7">
                          <div className="categories mb-3 pb-3">100% natural</div>
                          <h3 className="banner-title">Fresh Smoothie & Summer Juice</h3>
                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dignissim massa diam elementum.</p>
                          <a href="#" className="btn btn-outline-dark btn-lg text-uppercase fs-6 rounded-1">
                            Shop Collection
                          </a>
                        </div>
                        <div className="img-wrapper col-md-5">
                          <img src="assets/images/product-thumb-1.png" alt="Smoothie" className="img-fluid" />
                        </div>
                      </div>
                    </div>

                    {/* Slide 3 */}
                    <div className="swiper-slide">
                      <div className="row banner-content p-5">
                        <div className="content-wrapper col-md-7">
                          <div className="categories mb-3 pb-3">100% natural</div>
                          <h3 className="banner-title">Heinz Tomato Ketchup</h3>
                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dignissim massa diam elementum.</p>
                          <a href="#" className="btn btn-outline-dark btn-lg text-uppercase fs-6 rounded-1">
                            Shop Collection
                          </a>
                        </div>
                        <div className="img-wrapper col-md-5">
                          <img src="assets/images/product-thumb-2.png" alt="Tomato Ketchup" className="img-fluid" />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Swiper Pagination */}
                  <div className="swiper-pagination"></div>
                </div>
              </div>

              {/* Banner Ad Block 2 */}
              <div
                className="banner-ad bg-success-subtle block-2"
                style={{
                  backgroundImage: "url('assets/images/ad-image-1.png')",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "right bottom",
                }}
              >
                <div className="row banner-content p-5">
                  <div className="content-wrapper col-md-7">
                    <div className="categories sale mb-3 pb-3">20% off</div>
                    <h3 className="banner-title">Fruits & Vegetables</h3>
                    <a href="#" className="d-flex align-items-center nav-link">
                      Shop Collection
                    </a>
                  </div>
                </div>
              </div>

              {/* Banner Ad Block 3 */}
              <div
                className="banner-ad bg-danger block-3"
                style={{
                  backgroundImage: "url('assets/images/ad-image-2.png')",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "right bottom",
                }}
              >
                <div className="row banner-content p-5">
                  <div className="content-wrapper col-md-7">
                    <div className="categories sale mb-3 pb-3">15% off</div>
                    <h3 className="item-title">Baked Products</h3>
                  </div>
                </div>
              </div>

            </div>
            {/* / Banner Blocks */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerSection;
