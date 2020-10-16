import React from "react";
import HomePage from './HomePage'
import axios from 'axios';

export default class HomePageContainer extends React.Component {
    constructor(props){
        super(props)
        this.state={
            recipeList:null,
        }
    }

    async componentDidMount(){
        const result = await axios.get(`http://starlord.hackerearth.com/recipe`);

        this.setState({
            recipeList:result.data
        })
      }

    render() {
        return (
            <div>
                <HomePage recipeList={this.state.recipeList}/>
            </div>
        );
    }
}
