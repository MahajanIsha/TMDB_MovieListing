import React, { useState } from 'react';
import SearchButton from './SearchButton'
import PopularMovieList from './PopularMovieList'
import Header from './Header'
import { withRouter } from 'react-router-dom'

const API_KEY = 'api_key=6ed12e064b90ae1290fa326ce9e790ff';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = { movieList: [], isPopulated: false, searchText: '', heading: 'Popular Movies', showMovieDetails: false };

    this.GetSearchedMovie = this.GetSearchedMovie.bind(this);
    this.getPopularMovies = this.getPopularMovies.bind(this);
  }

  UpdateisPopulated = bool => {
    this.setState({ isPopulated: bool });
  }

  // General functions
  HandleSearchText=(event)=> {
    let text = event.target.value;
    this.setState({ searchText: text });
  }
  HandleSearchClick=()=> {
    this.props.history.push('/Search/'+this.state.searchText)
    this.UpdateisPopulated(false);
    this.GetSearchedMovie(this.state.searchText);
  }

  // get http respone
  async getPopularMovies() {
    await fetch("https://api.themoviedb.org/3/movie/popular?"+API_KEY+"&language=en-US")
      .then(response => response.json())
      .then((json) => {
        this.setState({
          movieList: json.results
        });
        this.setState({ isPopulated: true, heading: 'Popular Movies' });
      })
  }
  async GetSearchedMovie(searchText) {
    let searchURL = "https://api.themoviedb.org/3/search/movie?"+API_KEY+"&language=en-US&query=" + searchText + "&page=1&include_adult=false";

    if(searchText==='' || searchText === undefined)
    {
      this.getPopularMovies();
    }

    else
    {
      await fetch(searchURL)
        .then(response => response.json())
        .then((json) => {
          this.setState({
            movieList: json.results
          });
        this.setState({ isPopulated: true, heading: '' });
      })
    }
  }

  // lifecycle functions
  componentWillReceiveProps(nextProps) {
      var url = nextProps.location.pathname;
      if(url.trim() === "/")
      {
        this.GetSearchedMovie(); 
      }
      else{
      url = url.split("/");
      this.GetSearchedMovie(url[url.length - 1]); }
  }

 componentDidMount() 
 {
        var url = this.props.location.pathname;
        if(url.trim() === "/")
        {
          this.GetSearchedMovie(); 
        }
        else{
        url = url.split("/");
        this.GetSearchedMovie(url[url.length - 1]); }

 }
  componentWillUnmount() 
  {
     this.setState({isPopulated: false});
  }

  render() {

    if (this.state.isPopulated) {
      return (
        <div>
          <Header></Header>
          <br/> 
          <div>
            <SearchButton HandleClick={this.HandleSearchClick} HandleSearch={this.HandleSearchText}></SearchButton>
          </div>
          <br />
          <h3>{this.state.heading}</h3>
          <div><PopularMovieList MovieList={this.state.movieList}></PopularMovieList></div>
        </div>
      );
    }
    else {
      return <div></div>
    }

  }
}
export default withRouter(Home);
