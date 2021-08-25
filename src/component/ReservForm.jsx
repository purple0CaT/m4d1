import React from "react";
import { Form, Button } from "react-bootstrap";

class ReservForm extends React.Component {
  state = {
    reservation: {
      name: "",
      phone: "",
      numberOfPeople: 1,
      smoking: false,
      dateTime: "",
      specialRequests: "",
    },
  };

  handleInput = (e, key) => {
    this.setState({
      reservation: {
        ...this.state.reservation,
        [key]: key === "smoking" ? e.target.checked : e.target.value,
      },
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    let url = 'https://striveschool.herokuapp.com/api/reservation'
    console.log(this.state.reservation);

    try {
        fetch(url, {
            method: 'POST',
            body: JSON.stringify(this.state.reservation),
            headers: {
                'Content-type': 'application/json'
            }
        })
        .then(response => {
            if (response.ok){
                alert('Succes!')
            } else {
                alert("Error")
            }
        })
    } catch (error) {
        console.log(error)
    }


    this.setState({
      reservation: {
        name: "",
        phone: "",
        numberOfPeople: 1,
        smoking: false,
        dateTime: "",
        specialRequests: "",
      },
    });
  };

  render() {
    return (
      <div className="text-center">
        <h1>Make a reservation</h1>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group>
            <Form.Label>Your name</Form.Label>
            <Form.Control
              type="text"
              placeholder="...enter name"
              value={this.state.reservation.name}
              onChange={(e) => this.handleInput(e, "name")}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Your phone</Form.Label>
            <Form.Control
              type="number"
              placeholder="...enter phone"
              value={this.state.reservation.phone}
              onChange={(e) => this.handleInput(e, "phone")}
            />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlSelect1">
            <Form.Label>Number of people</Form.Label>
            <Form.Control
              as="select"
              value={this.state.reservation.numberOfPeople}
              onChange={(e) => this.handleInput(e, "numberOfPeople")}
            >
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
              <option>6</option>
              <option>7</option>
              <option>8</option>
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="formBasicCheckbox">
            <Form.Check
              type="checkbox"
              label="Smoking?"
              checked={this.state.reservation.smoking}
              onChange={(e) => this.handleInput(e, "smoking")}
            />
          </Form.Group>
          <Form.Group controlId="formBasicCheckbox">
            <Form.Label>Pick a date</Form.Label>
            <Form.Control
              type="datetime-local"
              value={this.state.reservation.dateTime}
              onChange={(e) => this.handleInput(e, "dateTime")}
            />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>Any special request?</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="..."
              value={this.state.reservation.specialRequests}
              onChange={(e) => this.handleInput(e, "specialRequests")}
            />
          </Form.Group>

          <Button variant="info" type="submit">
            Submit reservation
          </Button>
        </Form>
      </div>
    );
  }
}

export default ReservForm;
