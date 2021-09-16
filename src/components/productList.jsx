import { useState } from 'react';

const ProductList = ({ selectedLanguage, products, updateFilteredList }) => {
    const [productsInChart, setProductsInChart] = useState(0);
    
    function toggleAddToChart(product) {
        if (product.isAddedToChart) {
            product.isAddedToChart = false;
            setProductsInChart(productsInChart - 1);
        } else {
            product.isAddedToChart = true;
            setProductsInChart(productsInChart + 1);
        }
        
        updateFilteredList([...products]);
    }

    return (
        <>
            <section className="chart">
                <h3>You have {productsInChart} products in Chart</h3>
            </section>

            <section className="products">
                {products.map(product => 
                    <div key={product.id} className="card">
                        <div className="card-image">
                            <img src={product.image} alt={product.name} />
                        </div>
                        <div className="card-body">
                            <h3>{product.name}</h3>
                            <p>{product.description}</p>
                            <p className="price">{product.price}</p>
                            <button className="btn" onClick={() => toggleAddToChart(product)}>
                                    {product.isAddedToChart ? selectedLanguage.removeCartButton : selectedLanguage.addCartButton}
                            </button>
                        </div>
                    </div>
                )}
            </section>
        </>
    );
}

export default ProductList
