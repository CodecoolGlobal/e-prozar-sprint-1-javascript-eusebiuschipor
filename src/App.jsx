import productList from "./productList";

const App = () => {
    console.log(productList)
    return (
        <div>
            <div style={{textAlign: "center"}}>Random Product of the day</div>

            <div style={{textAlign: "center"}}>The rest of the products</div>
            
            <footer>
                <p>We bring you <strong>only the best products</strong> that can be randomly generated!</p>
                <p>Content from <a href="https://marak.github.io/faker.js/">faker.js</a> with images from <a href="https://picsum.photos/">Lorem Picsum</a></p>
            </footer>
        </div>
    );
};

export default App;