import React, { Component } from 'react';
import { Media } from 'reactstrap';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle} from 'reactstrap';
import Dishdetail from './DishdetailComponent'

class Menu extends Component {

    constructor(props){
        super(props);
        //construct state
        this.state = {
            selectedDish : null
        }
    }

    onDishSelect(dish) {
        this.setState({ selectedDish : dish });
    }

    render(){
        const menu = this.props.dishes.map((dish) => {
            return(
                <div className="col-12 col-md-5 m-1">
                    <Card key={dish.id}
                        //Card onClick event returns the function onDishSelect, setting state according to clicked item
                        onClick={() => this.onDishSelect(dish)}>
                        <CardImg width="100%" src={dish.image} alt={dish.name} />
                        <CardImgOverlay>
                            <CardTitle>{dish.name}</CardTitle>
                        </CardImgOverlay>
                    </Card>
                </div>
            );
            
        });

        return(
            <div className="container">
                <div className = "row">
                    {menu} 
                </div>
                <Dishdetail dishs={this.state.selectedDish} />
            </div>
        );
    }
}

export default Menu;