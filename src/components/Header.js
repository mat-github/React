class Header extends React.Component{
  handleChange(e){
    const title=e.target.value;
    this.props.changeTitle(title);
    this.setState({title});
  }

  render(){

    return(
      React.createElement("div", null, 
        React.createElement(Title, {title: this.props.title}), 
        React.createElement("input", {value: this.props.title, onChange: this.handleChange.bind(this)})
      )
    );
  }
}
