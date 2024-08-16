/* eslint-disable react/prop-types */
import { Card } from "flowbite-react";

const Product = ({product}) => {
    // console.log(product)
    const {
        brand_name,
        category_name,
        date,
        image_url,
        price,
        short_description,
    } = product;

    return (
        <div>
            <Card
                className="max-w-sm"
            >
                <img className="w-full max-h-40" src={image_url} alt="" />
                <h1 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                    Brand: {brand_name}
                </h1>
                <h3 className="text-md font-normal tracking-tight text-gray-900 dark:text-white">
                    Category: {category_name}
                </h3>
                <p>
                    Description: {short_description}
                </p>
                <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-gray-900 dark:text-white">${price}</span>
                    <span>Created At: {date}</span>
                </div>
            </Card>
        </div>
    )
}

export default Product;