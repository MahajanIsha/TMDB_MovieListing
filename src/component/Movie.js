import React from "react"
import {Route} from "react-router-dom"

class Movie extends React.Component
{
    constructor(props) {
        super(props);
        this.state = { movieDetails: {} };
        this.getMovieDetails = this.getMovieDetails.bind(this);

    }

    ImageURL = "http://image.tmdb.org/t/p/w185/";

    async getMovieDetails() {
        console.log("entered get movie details:"+ this.props.match.params.id);
        const url = 'https://api.themoviedb.org/3/movie/' + this.props.match.params.id + '?api_key=6d4410c95e7895145387bfb047a21d25&language=en-US';
        console.log(url);
        await fetch(url)
            .then(response => response.json())
            .then((json) => {
               this.setState({movieDetails: json});
            })
    }

  formatReleaseDate=()=>{
    var options = { year: 'numeric' };
    return new Date(this.state.movieDetails.release_date).toLocaleDateString([],options);
}

formatRunTime=()=>{
    var Hours = Math.floor(this.state.movieDetails.runtime /60);
    var minutes = this.state.movieDetails.runtime % 60  ;
    var returntime = Hours+"h "+minutes+"min" ;
    return returntime;

}
    render()
{
        console.log("Movie renderd for id " + this.state.movieDetails.id);
        this.getMovieDetails();
        

        const backdropURL= this.ImageURL+this.state.movieDetails.backdrop_path;
        const posterURL= this.ImageURL+this.state.movieDetails.poster_path;

       
        return(<div class="moviedetail">
            <div class="backgroundImage" >             
                <img src={backdropURL}></img>

            </div>
            <br/>
            <img class="profileImage" src={posterURL}></img>
            <div class="midTier"> 
                
                <p class="MovieName">{this.state.movieDetails.title}</p>
                <div class="MovieDetails"><span>{this.formatReleaseDate()} . {this.state.movieDetails.vote_average*10}%</span><br/><span>>{this.formatRunTime()}</span></div>
            </div>
            <div> 
               <h3 class="movieOverview">Overview</h3>
               <p class="detailOverview">{this.state.movieDetails.overview}</p>
            </div>
        </div>);
    }
}




export default Movie; 