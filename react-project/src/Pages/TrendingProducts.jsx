import React, { useEffect, useState } from 'react';

const TrendingProducts = () => {
  const [products, setProducts] = useState([]);
  const [activeTab, setActiveTab] = useState('all');

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  const filteredProducts = () => {
    if (activeTab === 'all') return products;
    return products.filter(product => product.category === activeTab);
  };

  return (
    <section className="py-5" id="trending">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <div className="bootstrap-tabs product-tabs">
              <div className="tabs-header d-flex justify-content-between border-bottom my-5">
                <h3>Trending Products</h3>
                <nav>
                  <div className="nav nav-tabs" id="nav-tab" role="tablist">
                    <button
                      className={`nav-link text-uppercase fs-6 ${activeTab === 'all' ? 'active' : ''}`}
                      onClick={() => setActiveTab('all')}
                    >
                      All
                    </button>
                    <button
                      className={`nav-link text-uppercase fs-6 ${activeTab === "men's clothing" ? 'active' : ''}`}
                      onClick={() => setActiveTab("men's clothing")}
                    >
                      Men's Clothing
                    </button>
                    <button
                      className={`nav-link text-uppercase fs-6 ${activeTab === "women's clothing" ? 'active' : ''}`}
                      onClick={() => setActiveTab("women's clothing")}
                    >
                      Women's Clothing
                    </button>
                    <button
                      className={`nav-link text-uppercase fs-6 ${activeTab === 'jewelery' ? 'active' : ''}`}
                      onClick={() => setActiveTab('jewelery')}
                    >
                      Jewelry
                    </button>
                    <button
                      className={`nav-link text-uppercase fs-6 ${activeTab === 'electronics' ? 'active' : ''}`}
                      onClick={() => setActiveTab('electronics')}
                    >
                      Electronics
                    </button>
                  </div>
                </nav>
              </div>
              <div className="tab-content" id="nav-tabContent">
                <div className="tab-pane fade show active">
                  <div className="product-grid row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5">
                    {filteredProducts().map((product) => (
                      <div className="col" key={product.id}>
                        <div className="product-item">
                          <a href="#" className="btn-wishlist">
                            <svg width="24" height="24">
                              <use xlinkHref="#heart"></use>
                            </svg>
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
                                  <svg width="16" height="16">
                                    <use xlinkHref="#minus"></use>
                                  </svg>
                                </button>
                              </span>
                              <input type="text" name="quantity" className="form-control input-number" value="1" readOnly />
                              <span className="input-group-btn">
                                <button type="button" className="quantity-right-plus btn btn-success btn-number">
                                  <svg width="16" height="16">
                                    <use xlinkHref="#plus"></use>
                                  </svg>
                                </button>
                              </span>
                            </div>
                            <a href="#" className="nav-link">
                              Add to Cart <iconify-icon icon="uil:shopping-cart" />
                            </a>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrendingProducts;
