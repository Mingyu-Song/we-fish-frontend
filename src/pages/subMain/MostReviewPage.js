import React from 'react'
import ReactDOM from 'react-dom'
import { Link } from 'react-router-dom'
import Selector from 'pages/product/Selector_button'
import Layout from 'component/Layout'

class MostReviewPage extends React.Component {
  constructor() {
    super()
    this.state = {
      data: [],
    }
  }

  componentDidMount() {
    this.fetchProduct()
  }

  fetchProduct() {
    fetch('http://52.79.185.94:8000/product?category=1&query=-price')
      .then(res => res.json())
      .then(res => {
        this.setState({
          data: res.data,
        })
      })
    console.log(this.data)
  }

  render() {
    const { data } = this.state
    console.log(data)
    return (
      <Layout>
        <div className="content-wrapper">
          <section className="product-main-container">
            <div className="productList-section">
              <div className="productList__nav">
                <div>
                  <h1>후기많은상품</h1>
                </div>
                <Selector />
              </div>
              <ul className="productList">
                {data.map(item => (
                  <li className="product-item">
                    <Link to={`/product/detail/${item.id}`}>
                      <div className="productCard">
                        <div className="parent">
                          <img src={item.image} alt="" />
                        </div>
                      </div>
                      <div className="productCardContent">
                        <h1>{item.name}</h1>
                        <p>
                          <span>{Number(item.price).toLocaleString('kr')}</span>
                          원
                        </p>
                        <p>
                          <span>{item.rating}</span>
                          <span className="review">· 후기</span>
                        </p>
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        </div>
      </Layout>
    )
  }
}

export default MostReviewPage
