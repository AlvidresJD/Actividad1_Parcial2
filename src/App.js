
import './App.css';
import FPT from './com/FPT'

const PRODUCTS = [
  {category: 'Deportes', price: '$500', stocked: true, name: 'Playeras'},
  {category: 'Deportes', price: '$500', stocked: true, name: 'Balones'},
  {category: 'Deportes', price: '$500', stocked: false, name: 'Tenis'},
  {category: 'Licores', price: '$300', stocked: true, name: 'Smirnoff'},
  {category: 'Licores', price: '$300', stocked: false, name: 'Cerveza'},
  {category: 'Licores', price: '$300', stocked: true, name: 'Oso Negro'}
];

function App() {
  return (
    <div className="container">
      <FPT products={PRODUCTS}/>
    </div>
  );
}

export default App;