import React, { Component } from 'react';  //Siempre importamos el componente de React a la hora de empezar a crear un componente
import { Card, CardImg, CardImgOverlay, CardText, CardBody,
    CardTitle } from 'reactstrap';

    class DishDetail extends Component {

            constructor(props) {
            super(props);
         }

         renderDish(dish) {
            return (
               <div className="col-12 col-md-5 m-1">
                  <Card>
                     <CardImg top src={dish.image} alt={dish.name} />
                     <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                     </CardBody>
                  </Card>
               </div>
            );
         }

         renderComments() {
             if (this.props.dish.comments == null) {
                 return (
                     <div className="container">

                     </div>
                 )
             } else {
                 return (
                     <div className='col-12 col-md-5 m-1'>
                         <div className='column'>
                             <h4>Comments</h4>
                             {this.props.dish.comments.map (
                                 (value, idx) => {
                                     return(
                                         <div>
                                             <p>{value.comment}</p>
                                             <p>-- {value.author} , {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(value.date)))}</p> 
                                         </div>
                                     )
                                 }
                             )}
                         </div>
                     </div>
                 );
             }
         }

         render() {
            if (this.props.dish != null) {
               return (
                  <div className="container">
                     <div className="row">
                        {this.renderDish(this.props.dish)}
                        {this.renderComments(this.props.dish.comments)}
                     </div>
                  </div>
               );
            }
            else {
               return (
                  <div></div>
               );
            }
         }
    }
export default DishDetail; // Y al final del archivo siempre exportamos el componente creado para poder usarlo en otros archivos