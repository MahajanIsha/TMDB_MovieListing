import React from "react"
import PopularMovie from "./PopularMovie"
import Movie from "./Movie"
import {Link} from 'react-router-dom';

class PopularMovieList extends React.Component
{
    constructor(props)
    {
        super(props);
    }
 
    render(){
        return(
            
                <div class="wrapper">
                {this.props.MovieList.length>0 
                ?this.props.MovieList.map((item, index) => (
                    <Link key={index} to={`/Movies/${item.id}`}>
                        <PopularMovie movie={item} key={index} />
                    </Link>
                ))
                :<h1>No movie found</h1>}
                </div>           
        );
        return(<div>PopularMoviescalled</div>);
    }
}

export default PopularMovieList;