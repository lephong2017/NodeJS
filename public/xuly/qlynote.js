
var list;
class Note extends React.Component{
  render(){
    return(
      <div className="note">
        <p>{this.props.title}</p>
        <p>{this.props.children}</p>
        <p>................................................</p>
      </div>
    );
  }
}

class FormInput extends React.Component{
  constructor(props){
    super(props);
    this.state = list.state;
    this.send = this.send.bind(this);
  }
  send(){
      var addtitle = this.refs.titleNote.value;
      var addcontents = this.refs.contentsNote.value;
//list.state.ListOfNote.unshift({ title:addtitle, contents:addcontents});
    //  list.state.status = "Đã thêm thành công";
      //list.setState({status:list.state.status});
    //  list.setState({ListOfNote: list.state.ListOfNote});

      $.post("/addNote",{title: addtitle, contents:addcontents}, function(data){
        list.setState({ListOfNote: data});
      });
      list.setState({status: "Hãy thêm note mới"});
      ReactDOM.unmountComponentAtNode(document.getElementById('div-form'));
  }
  render(){
    return(
      <div>
        <input  type="text" ref="titleNote" placeholder="Nhập tiêu đề ghi chú..."/>
        <textarea ref="contentsNote" placeholder="Nhập nội dung ..."></textarea>
        <button onClick={this.send}> Send </button>
      </div>
    );
  }
}
class ListNote extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      ListOfNote:[],
        status : "Note đang sẳn sàng..."
    };
    this.addNote = this.addNote.bind(this);
    list=this;
  }
  addNote(){
    ReactDOM.render(<FormInput/>,document.getElementById('div-form'));
  }
  render(){
    return (
      <div className="div-list">
        <p>{this.state.status}</p>
        <div id="div-form">

        </div>
        <button onClick={this.addNote} id="btn-list-add">Add note</button>
        <br/>
        {
          this.state.ListOfNote.map(function(note,index){
            return <Note key={index} title={note.title}>{note.contents}</Note>
          })
        }
      </div>
    );
  }

  componentDidMount(){
    var that = this;
    $.post("/getNotes",function(data){
      that.setState({ListOfNote: data});
    });
  }
}

ReactDOM.render(
  <ListNote/>,
  document.getElementById('root')
)
