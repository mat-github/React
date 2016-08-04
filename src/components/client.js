class Layout extends React.Component{
  render(){
    return(
      React.createElement("h1", null, "hello work!!!")
    )
  }
}

ReactDOM.render(
  React.createElement(Layout, null),
  document.getElementById('app')
);
