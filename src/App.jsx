import productList from "./productList";
import { useState } from "react";
import language from "./language";
import Filters from "./components/filters";
import ProductList from "./components/productList";
import Coupon from "./components/coupon";
import Promotion from "./components/promotion";

const App = () => {
    const [filteredList, setFilteredList] = useState(productList);

    const [selectedLanguage, setSelectedLanguage] = useState(language.english)


    function updateFilteredList(products) {
        setFilteredList([...products]);
    }

    const setLanguage = (newLanguage) => {
        setSelectedLanguage(newLanguage);
    }

    return (
        <div>            
            <Promotion selectedLanguage = {selectedLanguage} />

            <Filters updateFilteredList = {updateFilteredList} setLanguage = {setLanguage} />

            <Coupon products = {filteredList} updateFilteredList = {updateFilteredList} selectedLanguage = {selectedLanguage}/>

            <ProductList products = {filteredList} updateFilteredList = {updateFilteredList} selectedLanguage = {selectedLanguage} />

            <footer>
                <p>We bring you <strong>only the best products</strong> that can be randomly generated!</p>
                <p>Content from <a href="https://marak.github.io/faker.js/">faker.js</a> with images from <a href="https://picsum.photos/">Lorem Picsum</a></p>
            </footer>
        </div>
    );
};

export default App;


// "id":"2e36e6a6-21f5-46af-a16f-9b9d57fc9dcf",
// "name":"Handcrafted Fresh Towels",
// "price":"$223.00",
// "shortDescription":"Officiis ab optio consequuntur quidem et excepturi debitis.",
// "description":"Dolorem omnis qui omnis. Dolores occaecati autem aliquam nihil in non repellendus. Asperiores vel qui voluptatem qui aliquid. Vel sunt eos porro qui sed aliquam autem amet. Ea iure fugit animi est qui neque.",
// "image":"https://picsum.photos/id/1/500/500/",
// "category":"Music"