
var list;
class Note extends React.Component{
  constructor(props){
    super(props);
    this.state={onEdit:false};
    this.delete = this.delete.bind(this);
    this.edit = this.edit.bind(this);
    this.save = this.save.bind(this);
    this.cancel = this.cancel.bind(this);
  }

  save(){
    var addtitle = this.refs.title.value;
    var addcontents = this.refs.contents.value;

    $.post("/updateNote",{idEdit:this.props.id,title: addtitle, contents:addcontents}, function(data){
      list.setState({ListOfNote: data});
    });
    this.setState({onEdit:false});
  }
  cancel(){
    this.setState({onEdit:false});
  }

  edit(){
    this.setState({onEdit:true});
  }

  delete(){
    $.post("/delNote",{idXoa:this.props.id}, function(data){
      list.setState({ListOfNote: data});
    });

  }
  render(){
    if(this.state.onEdit){
      return(
        <div className="note" >
          <input defaultValue={this.props.title} ref="title"/>
          <input defaultValue={this.props.children} ref="contents"/>
          <p>................................................</p>
          <button onClick={this.save} id="btn-save">Save</button>
          <button onClick={this.cancel} id="btn-cancel">Cancel</button>
        </div>
      );
    }else{
      return(
        <div className="note">
          <p>{this.props.title}</p>
          <p>{this.props.children}</p>
          <p>................................................</p>
          <button onClick={this.delete} id="btn-del">Delete</button>
          <button onClick={this.edit} id="btn-edit">Edit</button>
        </div>
      );
    }

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
            return <Note key={index} id={index} title={note.title}>{note.contents}</Note>
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
