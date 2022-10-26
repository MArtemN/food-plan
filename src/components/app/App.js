import { Component } from 'react';
import FoodContainer from '../foodContainer/FoodContainer';
import FoodService from '../../services/FoodService';
import { v4 as uuidv4 } from 'uuid';

import './App.scss';
import picture from '../../resources/img/bg-picture.png';

class App extends Component{
    constructor (props) {
        super(props)
        this.state = {
            data: {},
        }
    }

    foodService = new FoodService();

    getFood = () => {
        this.foodService
            .getResource('test.json')
            .then((res) => {
                this.setState({data: res});
            })
    }

    componentDidMount () {
        this.getFood();
    }

    render () {
        const {data} = this.state,
            foodDataArr = Object.entries(data);

        const foodContainer = foodDataArr.map((item) => {
            return (
                <FoodContainer key={uuidv4()} data={item}/>
            )
        })

        return (
            <div className="App">
                <div className="logo"><img src={picture} alt="picture"/></div>
                <h1>food plan</h1>
                {foodContainer}
            </div>
        );
    }
}

export default App;
