class Node extends React.Component{
  render(){
    return (
      <div>
        <img src={this.props.src} width="250px" height="300px"/>
        <p>{this.props.children}</p>
      </div>
    );
  }
}
class List extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      mang:
      [
        {src:"img/IMG_2609.jpg",name: "KMS"},
        {src:"img/IMG_2610.jpg",name: "XYZ"},
        {src:"img/IMG_2611.jpg",name: "ABCD"}
      ],
      status:"Hãy ấn vào thêm để nhìn thấy hình ảnh mới!!!"
    };
    this.addNode = this.addNode.bind(this);
  }

  addNode(){
    this.state.mang.unshift({src:"img/IMG_2612.jpg",name:"KMO"});
    this.setState({mang: this.state.mang});
  }

  render(){
    return (
      <div>
        <h3>{this.state.status}</h3>
        <button onClick={this.addNode}>Thêm đối tượng</button>
        {
          this.state.mang.map(function(node,index){
            return <Node key={index} src={node.src}>{node.name}</Node>
            })
        }
      </div>
    );
  }
}

ReactDOM.render(
  <List/>,
  document.getElementById('bth4')
)
