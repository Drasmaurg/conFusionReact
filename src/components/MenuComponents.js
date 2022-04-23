import React, { Component } from 'react';  //Siempre importamos el componente de React a la hora de empezar a crear un componente
import DishDetail from   '../components/DishdetailComponent';
import { Card, CardImg, CardImgOverlay, CardText, CardBody,
  CardTitle } from 'reactstrap';



  class Menu extends Component {

    constructor(props) {
       super(props);

       this.state = {
          selectedDish: null
       }
    }

    onDishSelect(dish) {
       this.setState({ selectedDish: dish});
    }

    render() {
       const menu = this.props.dishes.map((dish) => {
          return (
             <div className="col-12 col-md-5 m-1">
                <Card key={dish.id} onClick={() => this.onDishSelect(dish)}>
                   <CardImg width="100%" src={dish.image} alt={dish.name} />
                   <CardImgOverlay>
                      <CardTitle>{dish.name}</CardTitle>
                   </CardImgOverlay>
                </Card>
             </div>
          );
       });

       return (
          <div className="container">
             <div className="row">
                {menu}
             </div>
             <DishDetail dish={this.state.selectedDish} />
          </div>
       );
    }
 }


export default Menu; // Y al final del archivo siempre exportamos el componente creado para poder usarlo en otros archivos