import React from "react";
import ReactDOM from "react-dom";

class Username extends React.Component {
  state = { value: "" };

  changeValue(value) {
    this.setState({ value });
  }

  render() {
    const { value } = this.state;
    return <h1>{value}</h1>;
  }
}


const App = () =>  {
  const nameRef = React.useRef(null);
  const usernameRef = React.useRef(null);

  function clickHandler() {
    usernameRef.current.changeValue(nameRef.current.value);
  }

  return (
    <div>
      <button onClick={clickHandler}>Change Username</button>
      <input type="text" ref={nameRef} />
      <Username ref={usernameRef} />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
