class Button extends React.Component{
  constructor(props) {
    super(props);
    this.state = {num: 0};
    this.inCreNum = this.inCreNum.bind(this);
  }
  inCreNum(){
    this.state.num= parseInt(this.state.num)+1;
    this.setState(this.state);
  }

  render(){
    return(
      <div>
      <button onClick={this.inCreNum}>{this.props.name} {this.state.num} </button>
      </div>
    );
  }
}

ReactDOM.render(
  <Button name="Hello, "/>,
  document.getElementById('root')
);
