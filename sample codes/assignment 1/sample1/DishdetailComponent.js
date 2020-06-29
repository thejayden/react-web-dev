import React, { Component } from "react";
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";

class DishDetail extends Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    renderDish(dish) {
        if (dish != null) {
            return (
                <Card key={dish.id}>
                    <CardImg top src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            );
        } else {
            return <div></div>;
        }
    }

    renderComments(dish) {
        if (dish != null && dish.comments != null) {
            const commentList = dish.comments.map((c) => {
                return (
                    <div key={c.id}>
                        <li>{c.comment}</li>
                        <br />
                        <li>
                            -- {c.author} {c.date}
                        </li>
                        <br />
                    </div>
                );
            });

            return (
                <div>
                    <h4>Comments</h4>
                    <ul className="list-unstyled">{commentList}</ul>
                </div>
            );
        } else {
            return <div></div>;
        }
    }

    render() {
        return (
            <div className="row">
                <div className="col-12 col-md-5 m-1">
                    {this.renderDish(this.props.dish)}
                </div>
                <div className="col-12 col-md-5 m-1">
                    {this.renderComments(this.props.dish)}
                </div>
            </div>
        );
    }
}

export default DishDetail;