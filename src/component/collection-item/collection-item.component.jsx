import React from "react";

import './collection-item.styles.css'

const ColletionItem= ({name, imageUrl, price})=>(
  <div className="collection-item">
    <div className="image"
     style={{
       backgroundImage: `url(${imageUrl})`
    }}/>
    <div className="disc">
    <h1 className="name">{name}</h1>
    <h2 className="price">{`${price}$`}</h2>
    
    </div>
    <div className="button">ADD TO CART</div>
  

  </div>
)

export default ColletionItem;