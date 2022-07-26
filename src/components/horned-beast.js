import React from "react";
import Card from 'react-bootstrap/Card';


class HornedBeasts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  handleClick = () => {
    this.props.selectedBeast(this.props.arr);
    this.setState({
      count: this.state.count + 1,
    });
  }
  render() {
    return (
      <Card onClick={this.handleClick}>
        <Card.Img variant="top" src={this.props.image_url} />
        <Card.Body>
          <Card.Title>{this.props.title}</Card.Title>
          <Card.Text>{this.props.description}</Card.Text>
          <div>{this.state.count} ❤️</div>
        </Card.Body>
      </Card>
    );
  }
}

export default HornedBeasts;