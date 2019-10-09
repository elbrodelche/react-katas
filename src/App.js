import React from "react";
import ReactDOM from "react-dom";

const Product = props => {
  const plus = () => {
    // Call props.onVote to increase the vote count for this product
    console.log('plus');
    props.onVote(props, 1);
  };
  const minus = () => {
    // Call props.onVote to decrease the vote count for this product
    console.log('minus');
    props.onVote(props, -1);

  };
  return (
    <li>
      <span>{props.name}</span> - <span>votes: {props.votes}</span>
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

  componentDidMount() {
    this.setState({ products: this.props.products })
  }

  onVote = (votedProduct, vote) => {

      const updatedProducts = this.state.products.map((product) => {
        if (product.name === votedProduct.name) {
          return Object.assign({}, product, { votes: product.votes + vote });
        } else {
          return product;
        }
      });
      this.setState({ products: updatedProducts })

  };

  render() {
    const {products} =this.state;
    const listItems = products.map((product) =>
        <Product name={product.name} votes={product.votes} key={product.name} onVote={this.onVote} />
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

