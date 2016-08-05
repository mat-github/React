class Layout extends React.Component{
  constructor(){//构造方法
    super();
    this.state={title:"WelCome",time:0};//默认标题
  }

  render(){
    // setTimeout(()=>{
    //   this.setState({time:this.state.time+1});
    // },1000)
    setTimeout(()=>{
      this.setState({title:"WelCome will"});
    },2000);
    return(
      React.createElement("div", null, 
        this.state.time, 
        React.createElement(Header, {name: "some thing", title: this.state.title}), 
        React.createElement(Header, {title: "other title"}), 
        React.createElement(Footer, null)
      )
    )
  }
}
