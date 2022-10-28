import React from 'react'
import SearchBar from './SearchBar'
import ProductT from './ProductT.js'

const FPT =(props)=> {
  const [filterText, setFilterText] = React.useState(""); 
  const [inStockOnly, setInStockOnly] = React.useState(false);
  
  return (
    <div >
      <h1>Productos</h1>
      <SearchBar 
        filterText={filterText}
        inStockOnly={inStockOnly}  
        onFilterTextChange={text => setFilterText(text)}
        onInStockChange={stock => setInStockOnly(stock)}
      />
      <ProductT 
        products={props.products} 
        filterText={filterText}
        inStockOnly={inStockOnly} 
      />
    </div>
  );
}

export default FPT

  
  





