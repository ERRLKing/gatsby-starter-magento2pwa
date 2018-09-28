import React from 'react';
import { Link } from "gatsby"

class ProductBox extends React.Component {
    render() {
        const minPrice = new Intl.NumberFormat('en', { style: 'currency', currency: this.props.currencyCode }).format(this.props.minPrice)

        return (
            <li>
                <Link to={`/products/${this.props.handle}`}>
                    {this.props.images &&
                        <img src={`https://magento23-beta.test/media/catalog/product/${this.props.images}`}
                            alt=""
                            style={{
                                maxWidth: '275px',
                            }}
                        />
                    }
                    {/* images.edges.length && images.edges.length > 1 &&
                        <img src={images.edges[1].node.originalSrc}
                            alt={images.edges[1].node.altText}
                            style={{
                                maxWidth: '275px',
                            }}
                        /> */
                    }
                    <h3>{this.props.title}</h3>
                    <div>{`From ${minPrice}`}</div>
                </Link>
            </li>
        )
    }
}

export default ProductBox