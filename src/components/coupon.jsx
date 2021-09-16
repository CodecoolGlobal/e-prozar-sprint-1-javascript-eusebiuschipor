import { useRef, useState } from 'react';
import productList from '../productList';

const originalPrices = productList.map(product => ({id: product.id, price: product.price}));

const Coupon = ({ selectedLanguage, updateFilteredList, products }) => {
    const inputRef = useRef();
    const [error, setError] = useState('');

    const applyDiscount = () => {
        let inputNumber = parseInt(inputRef.current.value);

        if (isNaN(inputNumber)) {
            setError('Invalid input');
            setTimeout(() => setError(''), 2000);
        } else {
            products.forEach((product) => {
                let objOriginalPrices = originalPrices.find(x => x.id === product.id);
                let originalPrice = objOriginalPrices.price;
                let price = parseInt(originalPrice.slice(1));
                let newPrice = price - price * (inputNumber / 100);
    
                product.price = `$${newPrice}`;
            });
    
            setError('');
            updateFilteredList(products);
        }
    }

    return (
        <>
            <section className="coupon">
                {/* {selectedLanguage.couponPlaceHolder} */}
                <div>{error}</div>

                <input ref={inputRef} type='text' />
                <button onClick={() => applyDiscount()}>Apply discount</button>
            </section>
        </>
    );
}

export default Coupon;
