import { useState } from "react";
import SearchBar from "./components/SearchBar";
import searchImages from './api'
import ImageList from "./components/ImageList";

function App() {
    const [ images, setImages ] = useState([]);

    const handleSubmit = async (term) => {
        const result = await searchImages(term); // array of object - list of images

        setImages(result);
    }
    return (
        <div className="App">
            <SearchBar onSubmit={handleSubmit}/>
            <ImageList images={images}/>
        </div>
    );
}

export default App;
