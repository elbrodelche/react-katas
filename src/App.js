import React from "react";
import ReactDOM from "react-dom";

const Product = props => {
  const plus = () => {
    // Call props.onVote to increase the vote count for this product
  };
  const minus = () => {
    // Call props.onVote to decrease the vote count for this product
    console.log('\n< ------------------------ minus  ------------------------ >\n');

  };
  return (
    <li>
      <span>{ props.name}</span> - <span>votes: {props.votes}</span>
      <button onClick={plus}>+</button>{" "}
      <button onClick={minus}>-</button>
    </li>
  );
};

class GroceryApp extends React.Component {

  // Finish writing the GroceryApp class
  state = {
    products: []
  };


  onVote = (dir, index) => {
    // Update the products array accordingly ..
    console.log('\n< ------------------------ update  ------------------------ >\n');
  };

  render() {
    const {products} =this.props;
    const listItems = products.map((product) =>
        <Product name={product.name} votes={product.votes} key={product.name}  />
    );
    return (
      <ul>
        {/* Render an array of products, which should call this.onVote when + or - is clicked */}
        {listItems}
      </ul>
    );
  }
}

document.body.innerHTML = "<div id='root'></div>";

ReactDOM.render(<GroceryApp
  products={[
    { name: "Oranges", votes: 0 },
    { name: "Bananas", votes: 0 }
  ]}
/>, document.getElementById('root'));
console.log(document.getElementById('root').innerHTML);

