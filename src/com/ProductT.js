import React from 'react'
import PCR from './PCR'
import ProductR from './ProductR.js'

const ProductT=(props)=> {
  const filterText = props.filterText;
  const inStockOnly = props.inStockOnly;
  
  const rows = [];
  let lastCategory = null;

  props.products.forEach((product) => {
    if (product.name.indexOf(filterText) === -1) {
      return;
    }
    if (inStockOnly && !product.stocked) {
      return;
    }
    if (product.category !== lastCategory) {
      rows.push(
        <PCR
          category={product.category}
          key={product.category} />
      );
    }
    
    rows.push(
      <ProductR
        product={product}
        key={product.name}
      />
    );
    lastCategory = product.category;
  });

  return (
    <table >
      <thead>
        <tr >
          <th >Nombre</th>
          <th >Precio</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
}

export default ProductT