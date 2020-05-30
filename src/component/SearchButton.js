import React, {Component} from "react"
import {Link} from 'react-router-dom'
class SearchButton extends Component
{
constructor(props)
{
  super(props)
  this.state={search: ''}
}


HandleSearch=(e)=>{
  this.setState({search:e.target.value })
  this.props.HandleSearch(e);
}

render()
{
return(     <div class="tb" id="cover">
<div class="td"><input type="text" placeholder="Search" onChange={this.HandleSearch} required/></div>

<Link to={`/Search/${this.state.search}`} > <button type="submit" onClick={this.props.HandleClick} >
 {/*   <div id="s-circle"></div>
    <span></span>*/}
  <img id="searchbutton" src={require('./searchicon.jpg')} alt="movie picture"/>
  </button></Link>
</div>
    );
    
}
}


export default SearchButton
