import React from 'react'
import Movie from './Movie'
import { Link } from 'react-router-dom';

const popularMovieURL="http://image.tmdb.org/t/p/w185/"
class PopularMovie extends React.Component{
    constructor(props)
    {
        super(props)
    }
   
    GetReleaseDate = () =>
    {
       const releaseDate= this.props.state.release_date;
       const relDates = releaseDate.split('-') ;

    }

     formatReleaseDate=()=>{
        var options = { year: 'numeric', month: 'long' };
        return new Date(this.props.movie.release_date).toLocaleDateString([],options);
    }

   HandleClick=() =>
   {
       this.props.HandleClick(this.props.movie.id)
   }
 
    render()
    { 
        const posterURL="http://image.tmdb.org/t/p/w185/" + this.props.movie.poster_path;
       
        return(    
        <div class="gridBox"> 
      
          <div class="gridAnchor"  > 
             <span class="topleft" style={{backgroundColor: this.props.movie.vote_average>7?'green':(this.props.movie.vote_average>4?'blue':'red')}}>{this.props.movie.vote_average*10}%</span>
             <img class="gridImage" src={posterURL} alt="movie picture"/>
              <div style={{color: 'white', }}> 
                 <text>{this.props.movie.title}</text><br/>
                 <text>{this.formatReleaseDate()}</text>
              </div> 
          </div>
  
        </div>
      
        );
    }
}

export default PopularMovie;