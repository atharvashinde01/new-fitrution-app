import React from "react";
import "../css/EventsPage.css";
import { useHistory } from "react-router-dom";
import { Row, Col, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const EventsPage = () => {
  const history = useHistory();

  return (
    <div classname="eventpage">
      <div className="eventsContainer">
        <h1>Our Events - Fitness, Dance & Nutrition</h1>
        <Row xs={1} md={2} lg={4} className="g-4">
          {/* {Array.from({ length: 4 }).map((_, idx) => ( */}
          <Col>
            <Card>
              <Card.Img
                variant="top"
                src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1080&q=80"
              />
              <Card.Body>
                <Card.Title>Fitness - Weight Training</Card.Title>
                <Card.Text>
                  Fitness has become necessary during this lockdown. So we come up with our weight training webinar sessions for everyone stuck at home.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col>
            <Card>
              <Card.Img
                variant="top"
                src="https://images.unsplash.com/photo-1524594152303-9fd13543fe6e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80"
              />
              <Card.Body>
                <Card.Title>Zumba Classes</Card.Title>
                <Card.Text>
                  Veena Prajapati the Founder is a certified Zumba Trainer. She takes Zumba classes and free webinars for a entertaining workout.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col>
            <Card>
              <Card.Img
                variant="top"
                src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1153&q=80"
              />
              <Card.Body>
                <Card.Title>Nutrition Tips</Card.Title>
                <Card.Text>
                  Nutrition is the main field we work on. We provide Weight Management Tips, Diets, Exercises. There are external sources as well
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col>
            <Card>
              <Card.Img
                variant="top"
                src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80"
              />
              <Card.Body>
                <Card.Title>Home Workouts</Card.Title>
                <Card.Text>
                  We provide free home workout sessions to each and every one free over the internet. Health is not something you compromise on.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          {/* ))} */}
        </Row>

        <br />

        <Row xs={1} md={2} lg={4} className="g-4">
          {/* {Array.from({ length: 4 }).map((_, idx) => ( */}
          <Col>
            <Card>
              <Card.Img
                variant="top"
                src="https://images.unsplash.com/photo-1594737625785-a6cbdabd333c?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80"
              />
              <Card.Body>
                <Card.Title>Exercises</Card.Title>
                <Card.Text>
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col>
            <Card>
              <Card.Img
                variant="top"
                src="https://images.unsplash.com/photo-1551632811-561732d1e306?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80"
              />
              <Card.Body>
                <Card.Title>Cardio Workouts</Card.Title>
                <Card.Text>
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col>
            <Card>
              <Card.Img
                variant="top"
                src="https://images.unsplash.com/photo-1522199899308-2eef382e2158?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80"
              />
              <Card.Body>
                <Card.Title>Webinars on Fitness & Nutrition</Card.Title>
                <Card.Text>
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col>
            <Card>
              <Card.Img
                variant="top"
                src="https://images.unsplash.com/photo-1522898467493-49726bf28798?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fHp1bWJhfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
              />
              <Card.Body>
                <Card.Title>Cross Fit</Card.Title>
                <Card.Text>
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          {/* ))} */}
        </Row>
      </div>
    </div>
  );
};

export default EventsPage;
