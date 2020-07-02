import React, { Component } from 'react';
import Menu from './MenuComponent';
import { DISHES } from "../shared/dishes";
import DishDetail from './DishdetailComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dishes: DISHES,
            selectedDish: null
        };
    }

    onDishSelect(dishId) {
        this.setState({ selectedDish: dishId });
    }

    render() {
        return (
            <div className="App">
                <Header/>
                <Menu dishes={this.state.dishes} 
                    onClick={(dishId) => this.onDishSelect(dishId)}/>
                <DishDetail 
                //for each dish in dishes array, find dish id that matches the one that is selected(clicked)
                //calls subarry within dishes array which contains dish.id as one of ite elements 
                    dish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]} />
                {/* 
        <DishDetail dishes={this.state.dishes} /> */}
                <Footer/>
            </div>
        );
    }
}

export default Main;
