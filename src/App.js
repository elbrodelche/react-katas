import React from "react";
import ReactDOM from "react-dom";


const TodoItem = (props) => <li onClick={props.onClick}>{props.item.text}</li>

class TodoList extends React.Component {
  render() {
    const { items, onClick } = this.props;
    return (<ul onClick={onClick}>
      {items.map((item, index) =>
        <TodoItem item={item} key={index} onClick={this.handleItemClick.bind(this, item)}/>)}
    </ul>);
  }

  handleItemClick(item, event) {
    // Write your code here
    event.stopPropagation();
    if(!item.done){
      this.props.onItemClick(item,event)
    }
  }
}


const items = [ { text: 'Buy grocery', done: true },
  { text: 'Play guitar', done: false },
  { text: 'Romantic dinner', done: false }
];

const App = (props) => <TodoList
  items={props.items}
  onItemClick={(item, event) => { console.log(item, event) }}
/>;


ReactDOM.render(<App items={items} />, document.getElementById("root"));
