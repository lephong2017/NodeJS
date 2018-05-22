class Hello extends React.Component {
  render() {
    return <div>Hello All</div>;
  }
}

class LePhong extends React.Component{

  render(){
    return (
      <div>
      <h1>Nguyen Le Phong</h1>
      <Button btn_name=" Follow me"/>
      <h1 className="cssColor">Nguyen Le Phong</h1>
      <h2 className="cssColor">Nguyen Le Phong</h2>
      <Button btn_name=" Info"/>
      <Hello />
      <p>Đây là nickname {this.props.nickname}</p>
      <p>{this.props.children}</p>
      </div>
    );
  }
}



class Button extends React.Component{
  constructor(props) {
    super(props);
    this.state = {Age: 21,Weight:82};
    this.getInfo = this.getInfo.bind(this);
    this.setAge = this.setAge.bind(this);
  }
  setAge(){
    this.state.Age= parseInt(this.state.Age)+1;
    this.state.Weight= parseInt(this.state.Weight)+1;
    this.setState(this.state);
  }

  getInfo(){
    alert(this.props.btn_name);
  }

  render(){
    return(
      <div>
      <h3>Độ tuổi: {this.state.Age}</h3>
      <h3>Cân nặng: {this.state.Weight}</h3>
      <button onClick={this.setAge}>Increase age </button>
      </div>
    );
  }
}


class InputTag extends React.Component{
  constructor(props){
    super(props);
    this.state = {text: ""};
    this.showValue = this.showValue.bind(this);
  }

  showValue(){
    var str = this.refs.textID.value;
    alert(str);
  }

  render(){
    return(
      <div>
        <input type="text" ref="textID"/>
        <button onClick={this.showValue}>Show value</button>
      </div>
    );
  }
}

ReactDOM.render(

  <InputTag />,
  // <LePhong nickname="AnhMap0107">Đây là thẻ children</LePhong>,
  document.getElementById('root')
);
