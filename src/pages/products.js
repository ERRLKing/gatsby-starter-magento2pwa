import React from 'react'
import { graphql } from 'gatsby'
import ProductList from '../components/ProductList'
class Products extends React.Component {
    render() {
        const products = this.props.data.magento.products

        return (
            <div>
                <h1>All Products</h1>
                <ProductList products={products}
                    style={{
                        display: 'grid',
                    }}
                />
            </div>
        )
    }
}

export default Products

export const query = graphql`
query productsQuery {
    magento {
        category(id: 11) {
            products {
                total_count
                items {
                    name
                    url_key
                    image
                    image_label
                    price {
                        minimalPrice {
                            amount {
                                value
                                currency
                            }
                        }
                    }
                }
            }
        }
    }
}
`
