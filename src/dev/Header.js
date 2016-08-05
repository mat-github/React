class Header extends React.Component{
  render(){
    console.log(this.props);
    return(
      <Title title={this.props.title}/>
    );
  }
}
