import React from 'react';
import { Link, StaticQuery, graphql } from "gatsby"

class ProductBox extends React.Component {
    render() {
        const minPrice = new Intl.NumberFormat('en', { style: 'currency', currency: this.props.currencyCode }).format(this.props.minPrice)

        return (
            <li>
                <StaticQuery
                    query={graphql`
                        query BackendUrl {
                            site {
                                siteMetadata {
                                    backendUrl
                                }
                            }
                        }
                    `}
                    render={data => (
                        <Link to={`/products/${this.props.handle}`}>
                            {this.props.images &&
                                <img src={`${data.site.siteMetadata.backendUrl}/media/catalog/product/${this.props.images}`}
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
                    )}
                />
            </li>
        )
    }
}

export default ProductBox