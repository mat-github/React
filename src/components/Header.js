class Header extends React.Component{
  render(){
    console.log(this.props);
    return(
      React.createElement(Title, {title: this.props.title})
    );
  }
}
