import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./FoodMenu.css";
import {
  Card,
  CardBody,
  CardTitle,
  CardText,
  ListGroup,
  ListGroupItem
} from "reactstrap";
import AddSnackForm from "./AddSnackForm";

function FoodMenu() {
  const [snacks, setSnacks] = useState([]);
  useEffect(() => {
    async function getSnacks(){
      const res = await axios.get("http://localhost:5000/snacks")
      setSnacks(res.data);
    }
    getSnacks();
  }, [])
  const renderItems = () => {
    return (
      <section className="col-md-4">
        <Card>
          <CardBody>
            <CardTitle className="font-weight-bold text-center">
              Food Menu
            </CardTitle>
            <CardText>
             Today's menu is created from local farm to table ingredients and includes the following options:
            </CardText>
            <ListGroup>
              {snacks.map(snack => (
                <Link to={`/snacks/${snack.id}`} key={snack.id}>
                  <ListGroupItem>{snack.name}</ListGroupItem>
                </Link>
              ))}
            </ListGroup>
          </CardBody>
        </Card>
      </section>
    );
  };
  const addSnack = snack => {
    let newSnack = {...snack, id: `${snack.name}`};
    setSnacks(newSnacks => [...snacks, newSnack]);
  };
  return(
    <div className="SnackMenu">
      {renderItems()}

      <AddSnackForm addSnack={addSnack} />
    </div>
  );
};

export default FoodMenu;
