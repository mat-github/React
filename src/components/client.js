class Layout extends React.Component{
  constructor(){//构造方法
    super();
    this.name="你好";
  }

  render(){
    return(
      React.createElement("h1", null, "it‘s  ", this.name, "!")
    )
  }
}

ReactDOM.render(
  React.createElement(Layout, null),
  document.getElementById('app')
);
