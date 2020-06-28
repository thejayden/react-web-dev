import React, { Component } from 'react';
import { Media } from 'reactstrap';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle} from 'reactstrap';

class Menu extends Component {
    //required
    constructor(props){
        super(props);
        //construct state
        this.state = {
            selectedDish : null
        }
    }
    //function to set state according to dish selected
    onDishSelect(dish){
        this.setState({ selectedDish : dish });
    }
    //function to return item displayed using reactstrap card layout according to "dish" props
    renderDish(dish){
        //check if state is set, i.e. if any dish is selected
        if (dish != null)
            //this will be passed into render() to display image of dish selected
            return(
                <Card>
                    <CardImg top src={dish.image} alt={dish.name}/>
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            );
        else
            //return empty div if selectedDish == null
            return (
                <div></div>
            );
    }

    //render screen
    render(){
        //The map() method calls the provided function once for each element in an array, in order.
        const menu = this.props.dishes.map((dish) => {
            return(
                //card takes up entire screen for extra small to small
                //card takes up 5 columns for mdeium screen sizes and above
                //1px margin all around
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
                <div className = "row">
                    <div className="col-12 col-md-5 m-1">
                        {this.renderDish(this.state.selectedDish)}
                    </div>
                </div>
            </div>
        );
    }
}

export default Menu;