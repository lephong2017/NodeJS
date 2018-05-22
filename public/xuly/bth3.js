class Node extends React.Component{
  render(){
    return(<p>{this.props.children}</p>);
  }
}
class ArrayString extends React.Component{
  constructor(props){
    super(props);
    this.state = {mang:["Nguyễn Lê Phong","Nguyễn Tấn Hậu","Huỳnh Phước Ngà","Nguyễn Phúc Thịnh"],
                  status:"Hãy thêm thành viên để có thêm niềm vui!!!"};
    this.addText = this.addText.bind(this);
    this.containsArr = this.containsArr.bind(this);
  }
  addText(){
    var str = this.refs.textName.value;
    alert(containsArr(this.state.mang,str));
    if(str in this.state.mang){
      this.setState({status:"Thành viên này đã tồn tại"});
    }else{
      this.state.mang.push(str);
      this.setState({mang: this.state.mang});
      this.setState({status:"Thêm thành viên thành công!"});
    }
    this.refs.textName.value="Nguyễn Văn A";
  }

  containsArr(a, obj) {
    for (var i = 0; i < a.length; i++) {
        if (a[i] === obj) {
            return true;
        }
    }
    return false;
}


  render(){
    return(<div>
      <p>{this.state.status}</p>
      <input type="text" ref="textName"/>
      <button onClick={this.addText} className="btn_continutes">Add Member</button>
      {
          this.state.mang.map(function (node,index) {
            return <Node key={index}>{node}</Node>
          })
      }
      </div>);
  }
}

ReactDOM.render(
  <ArrayString/>,
  document.getElementById('bth3')
);
