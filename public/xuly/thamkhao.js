class Data extends React.Component{
getInitialState: function(){
  return {main: '', place: 'London, UK', weather: [{icon: ''}] }
},

componentDidMount: function(){
  var comp = this;
  $.get("http://api.openweathermap.org/data/2.5/weather?q="+comp.state.place+"&appid=abunchofnumbers", function(data){
    comp.setState(data);
  });
},

setit: function(){
  this.setState({place: document.getElementById('stuff').value});
  console.log(this.state.place);
},

render: function(){
  return (<div>
    <p>{this.state.name}</p>
    <p>{this.state.main.temp}</p>
    <p>{this.state.weather[0].icon}</p>
    <input type="text" id="stuff" />
    <input type="submit" value="submeet" onClick={this.setit}/>
    </div>);
}
}

ReactDOM.render(
  <Data/>,
  document.getElementById('thamkhao')
)
