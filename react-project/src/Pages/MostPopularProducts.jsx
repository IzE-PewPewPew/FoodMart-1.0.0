import React, { useEffect, useState } from 'react';

const MostPopularProducts = () => {
  const [products, setProducts] = useState([]);
  const [popularProducts, setPopularProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        setProducts(data);

        // Simulate most popular products by sorting based on rating
        const sortedProducts = [...data].sort((a, b) => (b.rating?.rate || 0) - (a.rating?.rate || 0));
        setPopularProducts(sortedProducts.slice(0, 8)); // Adjust the slice range as needed
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <section className="py-5 overflow-hidden">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <div className="section-header d-flex justify-content-between">
              <h2 className="section-title" id="Popular">Most Popular Products</h2>
              <div className="d-flex align-items-center">
                <a href="#" className="btn-link text-decoration-none">View All Categories →</a>
                <div className="swiper-buttons">
                  <button className="swiper-prev products-carousel-prev btn btn-primary">❮</button>
                  <button className="swiper-next products-carousel-next btn btn-primary">❯</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="products-carousel swiper">
              <div className="swiper-wrapper">
                {popularProducts.map((product) => (
                  <div className="product-item swiper-slide" key={product.id}>
                    <a href="#" className="btn-wishlist">
                      <svg width="24" height="24"><use xlinkHref="#heart"></use></svg>
                    </a>
                    <figure>
                      <a href="#" title={product.title}>
                        <img src={product.image} alt={product.title} className="tab-image" />
                      </a>
                    </figure>
                    <h3>{product.title}</h3>
                    <span className="qty">Category: {product.category}</span>
                    <span className="rating">
                      <svg width="24" height="24" className="text-primary">
                        <use xlinkHref="#star-solid"></use>
                      </svg>{' '}
                      {product.rating?.rate || 'No rating'}
                    </span>
                    <span className="price">${product.price}</span>
                    <div className="d-flex align-items-center justify-content-between">
                      <div className="input-group product-qty">
                        <span className="input-group-btn">
                          <button type="button" className="quantity-left-minus btn btn-danger btn-number">
                            <svg width="16" height="16"><use xlinkHref="#minus"></use></svg>
                          </button>
                        </span>
                        <input
                          type="text"
                          name="quantity"
                          className="form-control input-number"
                          value="1"
                          readOnly
                        />
                        <span className="input-group-btn">
                          <button type="button" className="quantity-right-plus btn btn-success btn-number">
                            <svg width="16" height="16"><use xlinkHref="#plus"></use></svg>
                          </button>
                        </span>
                      </div>
                      <a href="#" className="nav-link">
                        Add to Cart <iconify-icon icon="uil:shopping-cart" />
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* <!-- / products-carousel --> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MostPopularProducts;
