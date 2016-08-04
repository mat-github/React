class Layout extends React.Component{
  constructor(){//构造方法
    super();
    this.name="你好";
  }

  render(){
    return(
      <h1>it‘s  {this.name}!</h1>
    )
  }
}

ReactDOM.render(
  <Layout />,
  document.getElementById('app')
);
