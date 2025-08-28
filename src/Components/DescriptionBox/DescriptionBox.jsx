import React from 'react'
import './Descriptionbox.css'

const DescriptionBox = () => {
  return (
    <div className="descriptionbox">
        <div className="descriptionbox-navigator">
            <div className="descriptionbox-nav-box">
                Description
            </div>
            <div className="descriptionbox-nav-box fade">
                Reviews(122)
            </div>
        </div>
        <div className="descriptionbox-description">
            <p>
                An e-commerce website is an online platform that facilitates the buying and selling of goods and services over the internet. It provides a virtual storefront where customers can browse products, compare prices, and make purchases from the comfort of their own homes. E-commerce websites typically feature a user-friendly interface, secure payment options, and efficient order fulfillment processes to enhance the shopping experience.
            </p>
            <p>
                These websites often include product descriptions, images, customer reviews, and various payment methods to cater to a wide range of customers. </p>
        </div>

    </div>
  )
}

export default DescriptionBox