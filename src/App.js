import { useState } from "react";
import CardItem from "./CardItem";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  const [foodObj] = useState({
    id: 12,
    img: "https://www.themealdb.com/images/media/meals/020z181619788503.jpg",
    name: "Ayam Percik",
    instruction:
      "In a blender, add the ingredients for the spice paste and blend..",
    link: "https://www.themealdb.com/meal/53050-Ayam-Percik-Recipe",
  });

  const [nbaData] = useState([
    {
      id: 1,
      img: "https://img.youtube.com/vi/FJfgqT_oOfo/maxresdefault.jpg",
      versus: "Los Angeles Lakers vs Phoenix Suns",
      description:
        "The Lakers return to Staples Center for game three against the Suns, with the Los Angeles faithful eager to inspire the best out of their team at home.      ",
      link: "https://www.thesportsdb.com/event/1134700",
    },
    {
      id: 2,
      img: "https://img.youtube.com/vi/yHVU5KqBs2I/maxresdefault.jpg",
      versus: " La Equidad vs Gremio",
      description: "lorem ipsum",
      link: "https://www.thesportsdb.com/event/1117200",
    },
  ]);

  const [personsData] = useState([
    {
      id: 1,
      img: "https://picsum.photos/200/300",
      name: "John",
      hairColor: "black",
      link: "https://google.com",
    },
    {
      id: 2,
      img: "https://picsum.photos/200/300",
      name: "Petro",
      hairColor: "yellow",
      link: "https://microsoft.com",
    },
    {
      id: 2,
      img: "https://picsum.photos/200/300",
      name: "Igor",
      hairColor: "dark",
      link: "https://microsoft.com",
    },
  ]);

  const renderFoodTitle = (item) => (
    <p className="text-left text-muted">{item.name}</p>
  );
  const renderFoodDescription = (item) => <span>{item.description}</span>;
  const renderFoodButton = (item) => (
    <button className="btn btn-dark">{item.name}</button>
  );

  const renderNbaVersus = ({ versus }) => (
    <p className="text-danger">#{versus}</p>
  );
  const renderNbaButton = ({ link }) => (
    <a className="btn btn-outline-info" href={link}>
      Match link
    </a>
  );
  const renderNbaDescription = (item) => item.description;

  const renderPersonName = (item) => (
    <a href={item.link} target="_blank">
      {item.name}
    </a>
  );
  const renderPersonDescription = (item) => <p>---{item.description}--- </p>;
  const renderPersonButton = (item) => (
    <button className="btn btn-success">Some button</button>
  );

  const renderCard = (item, renderTitle, renderDescription, renderButton) => (
    <CardItem
      item={item}
      renderTitle={renderTitle}
      renderDescription={renderDescription}
      renderButton={renderButton}
    />
  );

  const foodCard = renderCard(
    foodObj,
    renderFoodTitle,
    renderFoodDescription,
    renderFoodButton
  );

  const getNbaCard = (item) =>
    renderCard(item, renderNbaVersus, renderNbaDescription, renderNbaButton);

  const getPersonCard = (item) =>
    renderCard(
      item,
      renderPersonName,
      renderPersonDescription,
      renderPersonButton
    );

  const nbaList = nbaData.map((item) => (
    <div className="col-12 col-lg-4">{getNbaCard(item)}</div>
  ));

  const personList = personsData.map((item) => (
    <div className="col-12 col-lg-4">{getPersonCard(item)}</div>
  ));

  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-12">
            <h2>Food</h2>
            {foodCard}
          </div>

          {nbaList}

          {personList}
        </div>
      </div>
    </div>
  );
}

export default App;
