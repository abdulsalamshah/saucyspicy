import React from "react";
import {
  Card,
  CardBody,
  CardText,
  CardFooter,
  CardTitle,
} from "react-bootstrap";
import "./Reviews.css";
import Person1 from "../utils/images/header.jpg";
import Person2 from "../utils/images/header.jpg";
import Person3 from "../utils/images/header.jpg";
import Person4 from "../utils/images/header.jpg";

const Reviews = () => {
  return (
    <div className="reviews-section container">
      <h2 className="text-center mb-5 text-uppercase fw-bold fs-1">Reviews</h2>
      <div className="row g-4">
        <div className="col-lg-6">
          <Card className="h-10 shadow">
            <CardBody>
              <div className="p-4">
                <CardText>lorem lorem lorem</CardText>
              </div>
            </CardBody>

            <CardFooter className="d-flex align-items-center">
              <img
                src={Person1}
                className="img-fluid rounded-circle mx-3 shadow "
                alt=""
              />
              <CardTitle className="text-success">Sam Jillani</CardTitle>
            </CardFooter>
          </Card>
        </div>

        <div className="col-lg-6">
          <Card className="h-10 shadow">
            <CardBody>
              <div className="p-4">
                <CardText>lorem lorem lorem</CardText>
              </div>
            </CardBody>

            <CardFooter className="d-flex align-items-center">
              <img
                src={Person2}
                className="img-fluid rounded-circle mx-3 shadow "
                alt=""
              />
              <CardTitle className="text-success">Laiba Khan</CardTitle>
            </CardFooter>
          </Card>
        </div>

        <div className="col-lg-6">
          <Card className="h-10 shadow">
            <CardBody>
              <div className="p-4">
                <CardText>lorem lorem lorem</CardText>
              </div>
            </CardBody>

            <CardFooter className="d-flex align-items-center">
              <img
                src={Person3}
                className="img-fluid rounded-circle mx-3 shadow "
                alt=""
              />
              <CardTitle className="text-success">Nick</CardTitle>
            </CardFooter>
          </Card>
        </div>

        <div className="col-lg-6">
          <Card className="h-10 shadow">
            <CardBody>
              <div className="p-4">
                <CardText>lorem lorem lorem</CardText>
              </div>
            </CardBody>

            <CardFooter className="d-flex align-items-center">
              <img
                src={Person4}
                className="img-fluid rounded-circle mx-3 shadow "
                alt=""
              />
              <CardTitle className="text-success">Sam</CardTitle>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
