import React from 'react';

const Card = ({ data }) => {
    return (
        <div className="cardcontainer">
            {data.map((item, index) => (
                <div className="card" key={index}>
                    <img src={item.urlToImage || "https://via.placeholder.com/320x180"} alt="news" />
                    <div className="content">
                        <p className="title">{item.title}</p>
                        <p className="description">{item.description}</p>
                        <a href={item.url} target="_blank" rel="noopener noreferrer">
                            <button>Read More</button>
                        </a>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Card;
