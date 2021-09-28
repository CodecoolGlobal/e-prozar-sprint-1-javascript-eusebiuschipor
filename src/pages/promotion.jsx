import { useState } from 'react';
import getProductsForCategory from '../productList';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const Promotion = ({ selectedLanguage }) => {
    // const [promotedItem, setPromotedItem] = useState(productList[Math.floor(Math.random() * productList.length)]);

    // promotedItem.offer = parseInt(promotedItem.price.slice(1)) / 2
    
    const today = new Date();
    const day = today.getDate();
    let month = today.toLocaleString('default', { month: 'long' });
    month = month.charAt(0).toLocaleUpperCase() + month.slice(1);

    const getRandomProductFromCategory = (categoryId) => {
        const categoryProductsList = getProductsForCategory(categoryId);
        const randomProduct = categoryProductsList[Math.floor(Math.random() * categoryProductsList.length)];
        randomProduct.offer = parseInt(randomProduct.price.slice(1)) / 2
        return randomProduct;
    }

    const generateLegend = (product) => {
        return `For the ${day} ${month}, ${product.name}: from $${product.price} to $${product.offer} !`;
    }

    const randomProduct1 = getRandomProductFromCategory(1);
    const randomProduct2 = getRandomProductFromCategory(2);
    const randomProduct3 = getRandomProductFromCategory(3);

    return (
        <>
           <Carousel>
                <div>
                    <img src={randomProduct1.image} />
                    <p className="legend">{generateLegend(randomProduct1)}</p>
                </div>
                <div>
                    <img src={randomProduct2.image} />
                    <p className="legend">{generateLegend(randomProduct2)}</p>
                </div>
                <div>
                    <img src={randomProduct3.image} />
                    <p className="legend">{generateLegend(randomProduct3)}</p>
                </div>
            </Carousel>

            
       
        </>
    );
}

export default Promotion

