import React from "react"
import PopularMovie from "./PopularMovie"
import Movie from "./Movie"
import {Link} from 'react-router-dom';

class PopularMovieList extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {renderMovieDetails: false, movieId:0};
    }

   
    render(){
    
   {/*} this.MovieList.map(movie => <PopularMovie movie={movie}></PopularMovie>) */}
        return(
            
                <div class="wrapper">
                {this.props.MovieList.map((item, index) => (
                    <Link key={index} to={`/Movies/${item.id}`}>
                        <PopularMovie movie={item} key={index} />
                    </Link>
                ))}
                </div>
           
        );
        return(<div>PopularMoviescalled</div>);
}
    
}

export default PopularMovieList;