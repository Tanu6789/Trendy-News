import React, { useState, useEffect } from 'react';
import Card from './card';

const NewsApp = () => {
    const [search, setSearch] = useState("india");
    const [newsData, setNewsData] = useState([]);
    const API_KEY = "1b97655a322e42e99f370b830ba43ba9";

    const handleKeyPress = (e) => {
        if (e.key === "Enter") {
            getData();
        }
    };

    const getData = async () => {
        try {
            const response = await fetch(`https://newsapi.org/v2/everything?q=${search}&apiKey=${API_KEY}`);
            const jsonData = await response.json();

            if (jsonData.articles) {
                setNewsData(jsonData.articles);
            } else {
                setNewsData([]);
            }
        } catch (error) {
            console.error("Error fetching news:", error);
            setNewsData([]);
        }
    };

    useEffect(() => {
        getData();
    }, [search]);

    const handleInput = (e) => {
        setSearch(e.target.value);
    };

    const handleCategoryClick = (category) => {
        setSearch(category);
    };

    return (
        <div>
            <nav>
                <div>
                    <h1>Trendy News</h1>
                </div>
                <ul>
                    <li><a href="#">All News</a></li>  
                    <li><a href="#">Trending</a></li>
                </ul>
                <div className="searchbar">
                    <input
                        type="text"
                        placeholder="Search news..."
                        value={search}
                        onChange={handleInput}
                        onKeyDown={handleKeyPress}
                    />
                    <button onClick={getData}>Search</button>
                </div>
            </nav>

            <div>
                <p className='head'>Stay Updated with Trendy News</p>
            </div>

            <div className='categorybtn'>
                <button onClick={() => handleCategoryClick("Sports")}>Sports</button>
                <button onClick={() => handleCategoryClick("Politics")}>Politics</button>
                <button onClick={() => handleCategoryClick("Entertainment")}>Entertainment</button>
                <button onClick={() => handleCategoryClick("Health")}>Health</button>
                <button onClick={() => handleCategoryClick("Fitness")}>Fitness</button>
            </div>

            <div>
                {newsData.length > 0 ? <Card data={newsData} /> : <p>No news available</p>}
            </div>
        </div>
    );
};

export default NewsApp;
