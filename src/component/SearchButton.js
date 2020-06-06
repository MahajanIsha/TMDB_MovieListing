import React, {Component} from "react"
import {Link} from 'react-router-dom'

class SearchButton extends Component
{
constructor(props)
{
  super(props)
  //this.state={search: ''}
}


HandleSearch=(e)=>{
  this.props.HandleSearch(e);
}

handleKeyPress = (event) => {
  if(event.key === 'Enter'){
    this.props.HandleClick();
  }
}

render()
{
return(     
<div class="tb">
  <div class="td">
    <input type="text" placeholder="Search" onChange={this.HandleSearch} required onKeyPress={this.handleKeyPress}/>
  </div>

  <button type="submit" onClick={this.props.HandleClick} >
    <img id="searchbutton" src={require('./searchicon.jpg')} alt="movie picture"/>
  </button>
</div>
    );
    
}
}


export default SearchButton
