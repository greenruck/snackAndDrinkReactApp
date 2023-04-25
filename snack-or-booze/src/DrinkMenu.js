import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./DrinkMenu.css";
import {
    Card,
    CardBody,
    CardTitle,
    CardText,
    ListGroup,
    ListGroupItem
} from "reactstrap";
import AddDrinkForm from "./AddDrinkForm";

function DrinkMenu() {
    const [drinks, setDrinks] = useState([]);
    useEffect(() => {
        async function getDrinks(){
            const res = await axios.get("http://localhost:5000/drinks")
            setDrinks(res.data);
        }
        getDrinks();
    }, [])
  
    const renderItems = () => {
      return (
        <section className="col-md-4">
            <Card>
                <CardBody>
                    <CardTitle className="font-weight-bold text-center">
                        Drink Menu
                    </CardTitle>
                    <CardText>
                        Thirsty? Today's drink menu has an option for everyone.
                    </CardText>
                    <ListGroup>
                        {drinks.map(drink => (
                            <Link to={`/drinks/${drink.id}`} key={drink.id}>
                                <ListGroupItem>{drink.name}</ListGroupItem>
                             </Link>
                        ))}
                    </ListGroup>
                </CardBody>
            </Card>
        </section>
      );
    };
    // end renderItems
  
    /** Add new item object to cart. */
    const addDrink = drink => {
      let newDrink = { ...drink, id: `${drink.name}` };
      setDrinks(newdrinks => [...drinks, newDrink]);
    };
    // end addItem
  
    return (
      <div className="DrinkMenu">
        {renderItems()}

        <AddDrinkForm addDrink={addDrink} />
        
      </div>
    );
  };
  // end
  
  export default DrinkMenu;
  