import React from "react";
import CollectionPreview from "../component/ComponentPreview/collectionpreview.component";
import SHOP_DATA from "./shopdate";


class Shop extends React.Component  {

  constructor(props){
      super(props);

      this.state = {
        Collection: SHOP_DATA,
      }
  }

  render(){
    return (
      <div className='shop-page'>
      {
        this.state.Collection.map((item=>(
          
            <CollectionPreview key={item.id} title={item.title} items={item.items}/>
          
        )))
      }
      </div>
    )
  }
}

export default Shop;