import React, { Component } from 'react';
import { Media } from 'reactstrap';
import { Card, CardImg, CardImgOverlay, CardText, CardBody,
   CardTitle } from 'reactstrap';


class DishDetail extends Component {

  constructor(props) {
      super(props);
    }


  renderDish(dish) {
      if (dish != null)
        return(
          <Card>
              <CardImg top src={dish.image} alt={dish.name} />
              <CardBody>
                <CardTitle>{dish.name}</CardTitle>
                <CardText>{dish.description}</CardText>
              </CardBody>
          </Card>
        );
      else
          return(
              <div></div>
          );
  }

  renderComment(comments) {
    if (comments != null) {
        return comments.map((comment) => (
          <li key={comment.id}>
              <p>{comment.comment}</p>
              <p>{`-- ${comment.author} , ${comment.date}`}</p>
          </li>
        ));
    }
    else {
        return (<div></div>);
    }
  }


  render () {
    return (
      <div className="row">
        <div  className="col-12 col-md-5 m-1">
          {this.renderDish(this.props.dish)}
        </div>
        <div  className="col-12 col-md-5 m-1">
          <h4> Comments </h4>
          <ul className='list-unstyled'>
            {this.renderComment(this.props.dish.comments)}
          </ul>
        </div>
      </div>

    );
  }
}

export default DishDetail;
