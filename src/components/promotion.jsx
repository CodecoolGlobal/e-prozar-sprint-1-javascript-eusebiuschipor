import { useState } from 'react';
import productList from '../productList';

const Promotion = ({ selectedLanguage }) => {
    const [promotedItem, setPromotedItem] = useState(productList[Math.floor(Math.random() * productList.length)]);

    promotedItem.offer = parseInt(promotedItem.price.slice(1)) / 2
    const today = new Date();
    const day = today.getDate();
    let month = today.toLocaleString('default', { month: 'long' });
    month = month.charAt(0).toLocaleUpperCase() + month.slice(1);

    return (
        <>
            <section className="promotion">
                <h2>Don't miss today's hot deal!</h2>
                <div className="card">
                    <div className="card-image"> 
                        <img src={promotedItem.image} alt={promotedItem.name} />
                    </div>
                    <div className="card-body"> 
                    <h3>{promotedItem.name}</h3>
                    <p>{promotedItem.shortDescription}</p>
                    <p className="old-price">{promotedItem.price}</p>
                    <p>
                        <span>
                            ${promotedItem.offer}
                        </span> only on <span>{day} {month}</span>
                    </p>
                    <a href="#" className="btn">{selectedLanguage.buyPromotionBtn}</a>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Promotion
