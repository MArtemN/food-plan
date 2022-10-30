import { Component } from 'react';
import FoodContainer from '../foodContainer/FoodContainer';
import FoodService from '../../services/FoodService';
import AddNewDay from '../addNewDay/AddNewDay';
import { v4 as uuidv4 } from 'uuid';

import './App.scss';
import picture from '../../resources/img/bg-picture.png';

class App extends Component{
    constructor (props) {
        super(props)
        this.state = {
            data: {},
            saveEditItemsToggle: false,
            test: {},
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

    deleteMealItem = (data, date, numberOfMeal) => {
        const modifiedData = JSON.parse(JSON.stringify(this.state.data));
            // idArr = data.map(item => (item.id)); //массив id для удаления

        delete modifiedData[date][numberOfMeal];

        if (window.confirm('Вы уверены, что хотите удалить прием пищи?')) {
            if (Object.keys(modifiedData[date]).length === 0) {
                delete modifiedData[date];
            }

            //все, что ниже делать после отправки на сервер
            this.setState(({data: modifiedData}));
        }
    }

    addNewFood = (data) => {
        const {date, numberOfMeal} = data;
        let modifiedData = JSON.parse(JSON.stringify(this.state.data));

        //все что ниже делать после отправки на сервер
        if (modifiedData[date]) {
            if (modifiedData[date][numberOfMeal]) {
                modifiedData[date][numberOfMeal].push(data);
            } else {
                modifiedData[date][numberOfMeal] = [data];
            }

            //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
            // код только для разработки добавляет id к новым блюдам
            modifiedData[date][numberOfMeal].map(item => {
                if (!item.id) {
                    item.id = uuidv4();
                }
                return item
            })
        } else {
            modifiedData[date] = {[numberOfMeal]: [data]}

            // код только для разработки добавляет id к новым блюдам и сортирует вывод
            let a = Object.entries(modifiedData);
            a.sort();
            a.reverse()
            modifiedData = Object.fromEntries(a);

            modifiedData[date][numberOfMeal].map(item => {
                if (!item.id) {
                    item.id = uuidv4();
                }
                return item
            })
        }
        //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

        this.setState(({data: modifiedData}));
    }

    saveChangesMenu = (data) => {
        console.log('save changes')
        console.log(data)
    }

    render () {
        const {data} = this.state,
            foodDataArr = Object.entries(data);
        const foodContainer = foodDataArr.map((item) => {
            return (
                <FoodContainer
                    key={uuidv4()}
                    data={item}
                    date={item[0]}
                    addNewFood={this.addNewFood}
                    deleteMealItem={this.deleteMealItem}
                    saveChangesMenu={this.saveChangesMenu}/>
            )
        })

        return (
            <div className="App">
                <div className="logo"><img src={picture} alt="picture"/></div>
                <h1>food plan</h1>
                <AddNewDay dataDates={Object.keys(this.state.data)} addNewFood={this.addNewFood}/>
                {foodContainer}
            </div>
        );
    }
}

export default App;
