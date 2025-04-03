import React from 'react'

const Card = ({data =[]}) => {
  console.log(data);
  if (!Array.isArray(data) || data.length === 0) {  
    return <p>No news available</p>;  
  }
  const readMore=(url)=>{
    window.open(url)
  }
  return (
    <div className='cardcontainer'>
       {data.map((curItem, index) => (
        <div className='card' key={index}> 
          <img 
            src={curItem.urlToImage }  
           
          /> 
          <div className='content'>
            <a className='title' onclick={()=>readMore(curItem.url)}>{curItem.title} </a>  
            <p>{curItem.description}</p>
            <button onClick={()=>window.open(curItem.url)}> 
              Read More 
            </button>  
          </div>
        </div>
      ))}
       </div>
  )
}

export default Card;