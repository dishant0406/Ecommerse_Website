import React from "react";

import ColletionItem from "../collection-item/collection-item.component";
import './collectionpreview.styles.css'


const CollectionPreview = ({title, items})=>(

  <div className="collection-preview">
    <h1 className="title">{title.toUpperCase()}</h1>
    <div className="preview">
      {items.filter((_, idx)=>idx<4).map(item=>(
        <ColletionItem key={item.id} imageUrl={item.imageUrl} name={item.name} price={item.price}/>
      ))}
    </div>
  </div>
)

export default CollectionPreview;