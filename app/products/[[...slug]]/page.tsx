import React from 'react'

interface Props {
    params: {
        slug: string[];
    };
    searchParams: {
        sortOrder: string
    }
}

const ProductPage = ({ params: { slug }, searchParams: { sortOrder } }: Props) => {
    console.log(slug);

    return (
        <div>
            <h5>商品类型{slug}</h5>
            <h5>排序方式{sortOrder}</h5>
        </div>
    )
}

export default ProductPage