import { useState } from 'react';
import productList from '../productList';
import language from '../language';

const Filters = ({ selectedLanguage, updateFilteredList, setLanguage }) => {
    const [categoryFilter, setCategoryFilter] = useState('');
    const [nameFilter, setNameFilter] = useState('');
    const [priceFilter, setPriceFilter] = useState(0);

    let uniqueCategories = [''];
    productList.forEach(product => {
        if (!uniqueCategories.includes(product.category)) {
            uniqueCategories.push(product.category);
        }
    });


    function changeCategoryFilter(selectedCategory) {
        console.log(selectedCategory);

        if (selectedCategory === '') {
            updateFilteredList(productList);
        } else {
            let filteredList = [];

            productList.forEach(product => {
                if (product.category.includes(selectedCategory) && 
                    product.name.toLowerCase().includes(nameFilter) &&
                    parseInt(product.price.slice(1)) >= priceFilter) {
                        filteredList.push(product);
                }
            });

            updateFilteredList(filteredList);
        }

        setCategoryFilter(selectedCategory);
    }


    function filterByName(inputText) {
        let filteredNameList = [];

        productList.forEach(product => {
            if (product.name.toLowerCase().includes(inputText) &&
                product.category.includes(categoryFilter) &&
                parseInt(product.price.slice(1)) >= priceFilter) {
                    filteredNameList.push(product);
            }
        });

        updateFilteredList(filteredNameList);

        setNameFilter(inputText);
    }


    function filterByMinimumPrice(inputPrice) {
        let filteredPriceList = [];

        productList.forEach(product => {
            if (parseInt(product.price.slice(1)) >= inputPrice &&
                product.name.toLowerCase().includes(nameFilter) &&
                product.category.includes(categoryFilter)) {
                    filteredPriceList.push(product);
            }
        });

        updateFilteredList(filteredPriceList);

        setPriceFilter(inputPrice);
    }


    function resetFilters() {
        setCategoryFilter('');
        setNameFilter('');
        setPriceFilter(0);

        updateFilteredList(productList);
    }

    return (
        <section className="filter">
            <button onClick={() => setLanguage(language.romanian)}>RO</button>
            <button onClick={() => setLanguage(language.english)}>EN</button>

            <select value={categoryFilter} onChange={e => changeCategoryFilter(e.target.value)}>
                {uniqueCategories.map(option => (
                    <option key={option} value={option}>
                        {option}
                    </option>
                ))}
            </select>

            <input value={nameFilter} type="text" placeholder="Filter by name" onChange={e => filterByName(e.target.value.toLowerCase())} />

            <input value={priceFilter} type="number" placeholder="Filter by minimum price" onChange={e => filterByMinimumPrice(e.target.value)} />

            <button onClick={resetFilters}>Reset all filters</button>    
        </section>

        // <section className="filter">
        //     <button>
        //         <i className="flag flag-us"></i>
        //     </button>

        //     <button>
        //         <i className="flag flag-ro"></i>
        //     </button>

        //     <div>{selectedLanguage.resetFiltersButton}</div>
        // </section>
    );
}

export default Filters;
