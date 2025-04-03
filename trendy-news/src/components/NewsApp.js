import React, { useState, useEffect } from 'react';
import Card from './card';

const NewsApp = () => {
    const [search, setSearch] = useState("india");
    const [newsData, setNewsData] = useState([]);
    const API_KEY = "1b97655a322e42e99f370b830ba43ba9";

   
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

    const userInput=(event)=>{
        setSearch(event.target.value);
    }

    return (
        <div>
            <nav>
                <div>
                    <h1>Trendy News</h1>
                </div>
                <ul>
                    <li><a href="#">All News </a></li>  
                    <li><a href="#"> Trending</a></li>
                </ul>
                <div className="searchbar">
                    <input type="text" placeholder="Search news..." value={search} onChange={handleInput} />
                    <button onClick={getData}>Search</button>
                </div>
            </nav>

            <div>
                <p className='head'>Stay Updated with Trendy News</p>
            </div>

            <div className='categorybtn'>
                <button onClick={userInput} value="Sports">Sports</button>
                <button onClick={userInput} value="Politics">Politics</button>
                <button onClick={userInput} value="Entertainment">Entertainment</button>
                <button onClick={userInput} value="Health">Health</button>
                <button onClick={userInput} value="Fitness">Fitness</button>
               
            </div>

            <div>
             {newsData? <Card data={newsData} /> :[] }   
            </div>
        </div>
    );
};

export default NewsApp;
