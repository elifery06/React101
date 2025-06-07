import React from 'react'

function Product(elif) {
    console.log(elif)
    return (
        <div>
            <div>Ürün Bilgileri</div>

            <div>
                <div>İsim: {elif.productName}</div>
                <div>Fiyat : {elif.price} TL</div>
            </div>

        </div>
    )
}

export default Product
