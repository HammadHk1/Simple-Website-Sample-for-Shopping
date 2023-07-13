import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import j1 from "../Items/Tshirts/tshirt1.jpeg";
import j2 from "../Items/Tshirts/tshirt2.jpeg";
import j3 from "../Items/Tshirts/tshirts.jpeg";
import logo from "../Images/image-removebg-preview.png";
const JData = [
  {
    id: 1,
    name: "1",
    price: 10,
    image: j1,
  },
  {
    id: 2,
    name: "2",
    price: 20,
    image: j2,
  },
  {
    id: 3,
    name: "3",
    price: 30,
    image: j3,
  },
];
<h1>
  <span>T</span>
  <br />
  <span>S</span>
  <br />
  <span>H</span>
  <br />
  <span>I</span>
  <br />
  <span>R</span>
  <br />
  <span>T</span>
  <br />
  <span>S</span>
  <br />
</h1>;
function Tshirt() {
  const [sortOrder, setSortOrder] = React.useState(""); // State to track the sorting order
  const handleSortOrder = (order) => {
    setSortOrder(order);
  };
  // Sort the jackets based on the selected sorting order
  const sortedJackets = JData.sort((a, b) => {
    if (sortOrder === "asc") {
      return a.price - b.price;
    } else if (sortOrder === "desc") {
      return b.price - a.price;
    }
    return 0;
  });
  return (
    <>
    <div style={{ textAlign: "center" }}>
        <img style={{ width: "250px" }} src={logo} alt="title" />
        </div>
      <div style={{ display: "flex", marginLeft: "80px", marginTop: "50px" }}>
        <div style={{ marginRight: "20px" }}>
          <h1>
            <span>T</span>
            <br />
            <span>S</span>
            <br />
            <span>H</span>
            <br />
            <span>I</span>
            <br />
            <span>R</span>
            <br />
            <span>T</span>
            <br />
            <span>S</span>
            <br />
          </h1>
        </div>
        <div className="hover" style={{ display: "flex", marginLeft: "50px" }}>
          {JData.map((card, index) => (
            <Card key={index} style={{ width: "18rem", marginRight: "50px" }}>
              <Card.Img variant="top" src={card.image} />
              <Card.Body>
                <Card.Title>Article : {card.name}</Card.Title>
                <Card.Text> Price : $ {card.price}</Card.Text>
                {/* <Link to={card.path}> */}
                <Button variant="primary">Add to Cart</Button>
                {/* </Link> */}
              </Card.Body>
            </Card>
          ))}
        </div>
      </div>
      <div className="button-container">
        <Button
          variant="primary"
          onClick={() => handleSortOrder("asc")}
          style={{ marginBottom: "10px" }}
        >
          Sort Ascending
        </Button>
        <Button
          variant="primary"
          onClick={() => handleSortOrder("desc")}
          style={{ marginBottom: "10px" }}
        >
          Sort Descending
        </Button>
      </div>
    </>
  );
}
export default Tshirt;
