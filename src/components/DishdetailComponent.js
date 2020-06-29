import React, { Component } from 'react';
import { render } from '@testing-library/react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle} from 'reactstrap';

class Dishdetail extends Component {

    constructor(props){
        super(props);
        //construct state
        this.state = {
           
        }
    }


    renderDish(dish) {

        if (dish != null)
            return (
                <Card>
                    <CardImg top src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            );
        else

            return (
                <div></div>
            );
    }

    renderComments(comment) {
        if (comment == null) {
            this.return(
                <div></div>
            )
        }
        const dishComments = comment.map((commentsEach) => {
            return (
                <ul key={commentsEach.id} className='list-unstyled'>
                    <p>{commentsEach.comment}</p>
                    <p>-- {commentsEach.author}, {new Intl.DateTimeFormat('en', { year: 'numeric', month : 'short', day: '2-digit' }).format(new Date(commentsEach.date))}</p>
                </ul>
            )
        })
        return (
            <div>
                <h4><strong>Comments</strong></h4>
                {dishComments}
            </div>
        )
    }

    render() {
        const dish = this.props.dishs
        if (dish==null){
            return (
                <div></div>
            )
        }
        
        const dishContent = this.renderDish(dish)

        const commentContent = this.renderComments(dish.comments)

        return (
            <div className="row">
                <div className="col-12 col-md-5 m-1">
                    {dishContent}
                </div>
                <div className="col-12 col-md-5 m-1">
                    {commentContent}
                </div>
            </div>
        );
    }
}
export default Dishdetail;