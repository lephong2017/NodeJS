class Album extends React.Component{
  constructor(props){
    super(props);
    this.state = {Hinh :2609};
    this.getSrcInCre = this.getSrcInCre.bind(this);
    this.getSrcDeInCre = this.getSrcDeInCre.bind(this);
  }

  getSrcInCre(){
    this.state.Hinh = this.state.Hinh+1;
    if(this.state.Hinh>2613){
      this.state.Hinh=2613;
    }
    this.setState(this.state);
  }
  getSrcDeInCre(){
    this.state.Hinh = this.state.Hinh-1;
    if(this.state.Hinh<2609){
      this.state.Hinh=2609;
    }
    this.setState(this.state);
  }


  render(){
    return(
      <div className="div_album">
        <img src={"img/IMG_"+this.state.Hinh+".jpg"} width="300px" height="350px"/>
        <hr/>
        <button className="btn_quaylai" onClick={this.getSrcDeInCre}>Quay lại</button>
        <button className="btn_continutes" onClick={this.getSrcInCre}>Tiếp theo</button>
      </div>
    );
  }
};

class ImageABCD extends React.Component{
  constructor(props){
    super(props);
    this.state ={Hinh: 2609};
    this.changeImage = this.changeImage.bind(this);
  }
  changeImage(){
    this.setState({Hinh: this.state.Hinh == 2613 ? 2609 : this.state.Hinh+1});
  }


  render(){
    return(<div>
      <img src={"img/IMG_"+this.state.Hinh+".jpg"} width="300px" height="350px"/>
      </div>
    );
  }

  componentDidMount(){
    setInterval(this.changeImage,1000);
  }

}
ReactDOM.render(
  //<Album />,
  <ImageABCD/>,
  document.getElementById('root')
);
