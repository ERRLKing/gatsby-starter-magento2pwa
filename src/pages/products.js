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
        products(search: "shirt") {
            items {
                id
                name
                url_key
                image
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
`
