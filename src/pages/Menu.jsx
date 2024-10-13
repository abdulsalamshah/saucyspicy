import React from "react";
import "./Menu.css";
import { Card, CardBody, CardText, CardTitle } from "react-bootstrap";
import BreakfastImg from "../utils/images/wanderlust.png";
import LunchImg from "../utils/images/wanderlust.png";
import DinnerImg from "../utils/images/wanderlust.png";
import DessertImg from "../utils/images/wanderlust.png";

const Breakfasting = [
  {
    id: 1,
    name: "Breakfast",
    description: "sausage, tomato, mushrooms, eggs",
    price: "$12",
  },
  {
    id: 2,
    name: "Avocado toast",
    description: "avocado, onion, tomatoes, poached egg, bread",
    price: "$8",
  },
  {
    id: 3,
    name: "Burrito",
    description: "cheese, potatoes, tortilla",
    price: "$11",
  },
];

const Lunching = [
  {
    id: 1,
    name: "Lunch",
    description: "sausage, tomato, mushrooms, eggs",
    price: "$12",
  },
  {
    id: 2,
    name: "Avocado toast",
    description: "avocado, onion, tomatoes, poached egg, bread",
    price: "$8",
  },
  {
    id: 3,
    name: "Burrito",
    description: "cheese, potatoes, tortilla",
    price: "$11",
  },
];

const Dinnering = [
  {
    id: 1,
    name: "Dinner",
    description: "sausage, tomato, mushrooms, eggs",
    price: "$12",
  },
  {
    id: 2,
    name: "Avocado toast",
    description: "avocado, onion, tomatoes, poached egg, bread",
    price: "$8",
  },
  {
    id: 3,
    name: "Burrito",
    description: "cheese, potatoes, tortilla",
    price: "$11",
  },
];

const Desserting = [
  {
    id: 1,
    name: "Dessert",
    description: "sausage, tomato, mushrooms, eggs",
    price: "$12",
  },
  {
    id: 2,
    name: "Avocado toast",
    description: "avocado, onion, tomatoes, poached egg, bread",
    price: "$8",
  },
  {
    id: 3,
    name: "Burrito",
    description: "cheese, potatoes, tortilla",
    price: "$11",
  },
];

const Menu = () => {
  return (
    <div className="menu-page">
      <header className="mt-5">
        <div className="container h-100 d-flex align-items-center justify-content-center">
          <h1 className="text-light">Menu</h1>
        </div>
      </header>

      <div className="breakfast my-5">
        <div className="container">
          <h2 className="text-center fs-1 mb-4 mb-lg-5 text-uppercase fw-bold text-success">
            Breakfast
          </h2>
          <div className="row flex-column-reverse flex-lg-row ">
            <div className="col-lg-6 d-flex justify-content-center">
              <img
                src={BreakfastImg}
                className="img-fluid w-75 mt-4 mt-lg-0"
                alt=""
              />
            </div>
            <div className="col-lg-6 d-flex flex-column justify-content-around">
              {Breakfasting.map((Breakfasting) => (
                <div key={Breakfasting.id}>
                  <Card className="border-0">
                    <CardBody>
                      <CardTitle className="text-center fs-3">
                        {Breakfasting.name}
                      </CardTitle>
                      <CardText className="text-center fs-5">
                        {Breakfasting.description}
                      </CardText>
                      <CardText className="text-center fs-3 fw-bold text-success">
                        {Breakfasting.price}
                      </CardText>
                    </CardBody>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="lunch bg-dark text-light py-5">
        <div className="container">
          <h2 className="text-center fs-1 mb-4 mb-lg-5 text-uppercase fw-bold text-success">
            Lunch
          </h2>
          <div className="row flex-column-reverse flex-lg-row ">
            <div className="col-lg-6 d-flex justify-content-center">
              <img
                src={LunchImg}
                className="img-fluid w-75 mt-4 mt-lg-0"
                alt=""
              />
            </div>
            <div className="col-lg-6 d-flex flex-column justify-content-around">
              {Lunching.map((Lunching) => (
                <div key={Lunching.id}>
                  <Card className="border-0">
                    <CardBody>
                      <CardTitle className="text-center fs-3">
                        {Lunching.name}
                      </CardTitle>
                      <CardText className="text-center fs-5">
                        {Lunching.description}
                      </CardText>
                      <CardText className="text-center fs-3 fw-bold text-success">
                        {Lunching.price}
                      </CardText>
                    </CardBody>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="dinner my-5">
        <div className="container">
          <h2 className="text-center fs-1 mb-4 mb-lg-5 text-uppercase fw-bold text-success">
            Dinner
          </h2>
          <div className="row flex-column-reverse flex-lg-row ">
            <div className="col-lg-6 d-flex justify-content-center">
              <img
                src={DinnerImg}
                className="img-fluid w-75 mt-4 mt-lg-0"
                alt=""
              />
            </div>
            <div className="col-lg-6 d-flex flex-column justify-content-around">
              {Dinnering.map((Dinnering) => (
                <div key={Dinnering.id}>
                  <Card className="border-0">
                    <CardBody>
                      <CardTitle className="text-center fs-3">
                        {Dinnering.name}
                      </CardTitle>
                      <CardText className="text-center fs-5">
                        {Dinnering.description}
                      </CardText>
                      <CardText className="text-center fs-3 fw-bold text-success">
                        {Dinnering.price}
                      </CardText>
                    </CardBody>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="dessert bg-dark text-light py-5">
        <div className="container">
          <h2 className="text-center fs-1 mb-4 mb-lg-5 text-uppercase fw-bold text-success">
            Dessert
          </h2>
          <div className="row flex-column-reverse flex-lg-row ">
            <div className="col-lg-6 d-flex justify-content-center">
              <img
                src={DessertImg}
                className="img-fluid w-75 mt-4 mt-lg-0"
                alt=""
              />
            </div>
            <div className="col-lg-6 d-flex flex-column justify-content-around">
              {Desserting.map((Desserting) => (
                <div key={Desserting.id}>
                  <Card className="border-0">
                    <CardBody>
                      <CardTitle className="text-center fs-3">
                        {Desserting.name}
                      </CardTitle>
                      <CardText className="text-center fs-5">
                        {Desserting.description}
                      </CardText>
                      <CardText className="text-center fs-3 fw-bold text-success">
                        {Desserting.price}
                      </CardText>
                    </CardBody>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
