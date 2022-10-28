import React from 'react'
const PCR=(props)=> {
  const category = props.category;
  return (
    <tr>
      <th colSpan="2" >
        {category}
      </th>
    </tr>
  );
}
export default PCR