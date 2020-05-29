import React, {Component} from "react"

class SearchButton extends Component
{


render()
{
return(     <div class="tb" id="cover">
<div class="td"><input type="text" placeholder="Search" onChange={this.props.HandleSearch} required/></div>

  <button type="submit" onClick={this.props.HandleClick} >
 {/*   <div id="s-circle"></div>
    <span></span>*/}
  <img id="searchbutton" src={require('./searchicon.jpg')} alt="movie picture"/>
  </button>
</div>
    );
    
}
}


export default SearchButton
