import React, { useState } from 'react';
import SearchButton from './SearchButton'
import PopularMovieList from './PopularMovieList'
import { NavLink, Route, HashRouter } from 'react-router-dom'
import { BrowserRouter as Router, Link } from 'react-router-dom';


const API_KEY = 'api_key=6ed12e064b90ae1290fa326ce9e790ff';
class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = { movieList: [], isPopulated: false, searchText: '', heading: 'Popular Movies', showMovieDetails: false };

    this.GetSearchedMovie = this.GetSearchedMovie.bind(this);
    this.HandleSearchClick = this.HandleSearchClick.bind(this);
    this.HandleSearch = this.HandleSearch.bind(this);
    this.getPopularMovies = this.getPopularMovies.bind(this);
  }

  UpdateisPopulated = bool => {
    this.setState({ isPopulated: bool });
  }

  HandleSearch(event) {
    let text = event.target.value;
    this.setState({ searchText: text });

  }
  async GetSearchedMovie() {


    let searchURL = "https://api.themoviedb.org/3/search/movie?api_key=6d4410c95e7895145387bfb047a21d25&language=en-US&query=" + this.state.searchText + "&page=1&include_adult=false";

    await fetch(searchURL)
      .then(response => response.json())
      .then((json) => {
        this.setState({
          movieList: json.results
        });
        this.setState({ isPopulated: true, heading: '' });



      })
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.location !== undefined) { this.GetSearchedMovie(); }
    else { this.getPopularMovies(); }
  }

  HandleSearchClick() {
    this.UpdateisPopulated(false);
    this.GetSearchedMovie();

  }

  async getPopularMovies() {
    await fetch('https://api.themoviedb.org/3/movie/popular?api_key=6d4410c95e7895145387bfb047a21d25&language=en-US')
      .then(response => response.json())
      .then((json) => {
        this.setState({
          movieList: json.results
        });
        this.setState({ isPopulated: true });
      })
  }
  async componentDidMount() {

    await fetch('https://api.themoviedb.org/3/movie/popular?api_key=6d4410c95e7895145387bfb047a21d25&language=en-US')
      .then(response => response.json())
      .then((json) => {
        this.setState({
          movieList: json.results
        });
        this.setState({ isPopulated: true });

      })


  }

  render() {

    if (this.props.match?.params.searchText === '') {

      this.getPopularMovies();
    }

    if (this.state.isPopulated) {
      return (
        <div>
          <h1>The Movie db</h1>
          <div>
            <SearchButton HandleClick={this.HandleSearchClick} HandleSearch={this.HandleSearch}></SearchButton>
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



export default Home;