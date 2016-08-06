class Layout extends React.Component{
  constructor(){//构造方法
    super();
    this.state={title:"WelCome",time:0};//默认标题
  }

  changeTitle(title){
    this.setState({title});
  }

  render(){
    return(
      React.createElement("div", null, 
        this.state.time, 
        React.createElement(Header, {changeTitle: this.changeTitle.bind(this), name: "some thing", title: this.state.title}), 
        React.createElement(Footer, null)
      )
    )
  }
}
