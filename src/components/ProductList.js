import React from 'react';
import ProductBox from './ProductBox'

class ProductList extends React.Component {
    render() {
        const productList = this.props.products.map((product) => {
            const { id, name, url_key, image, price } = product

            return <ProductBox
                        key={id.toString()}
                        handle={url_key}
                        title={name}
                        images={image}
                        minPrice={price.minimalPrice.amount.value}
                        currencyCode={price.minimalPrice.amount.currency}
                    />
        })

        return (
            <>
                <ul style={{
                        display: 'grid',
                        gridTemplateColumns: '1fr 1fr 1fr',
                        gridGap: '10px',
                        listStyle: 'none',
                    }}
                >
                    {productList}
                </ul>
            </>
        )
    }
}

export default ProductList