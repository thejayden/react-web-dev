import React from 'react';
import { Card, CardImg, CardText, CardBody,
    CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

    function RenderDish({dish}) {

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

    function RenderComments({comment}) {
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

    const DishDetail = (props) => {
        if (props.dish==null){
            return (
                <div></div>
            )
        }

        return (
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>{props.dish.name}</h3>
                        <hr />
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        <RenderDish dish={props.dish} />
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        <RenderComments comment={props.comments} />
                    </div>
                </div>
            </div>

            /*
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        <RenderDish dish={props.dish}/>
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        <RenderComments comment = {props.dish.comments}/>
                    </div>
                </div>
            </div>
            */

        );
    }
export default DishDetail;