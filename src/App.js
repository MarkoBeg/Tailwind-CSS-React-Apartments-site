import Header from "./Header.js";
import Header2 from "./Header2.js";
import Main from "./Main";
import MainBottom from "./MainBottom";
import Footer from "./Footer";
import apartemntsData from "./apartmentsData";
import Apartments from "./Apartments";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useState } from "react";
import Buttons from "./Buttons";

function App() {
  const [data, setData] = useState(apartemntsData);

  const allRooms = () => {
    return setData(apartemntsData);
  };

  const filterSingle = () => {
    let desc = apartemntsData.filter((item, i) =>
      item.desc.includes("Single Room")
    );
    setData(desc);
  };
  const filterLuxury = () => {
    let desc = apartemntsData.filter((item, i) =>
      item.desc.includes("Luxury Room")
    );
    setData(desc);
  };
  const filterDouble = () => {
    let desc = apartemntsData.filter((item, i) =>
      item.desc.includes("2 Rooms Apartment")
    );
    setData(desc);
  };

  const petsAllowed = () => {
    let pets = apartemntsData.filter((item, i) => {
      return item.pets === true;
    });
    setData(pets);
  };
  const brekfastAllowed = () => {
    let brekfast = apartemntsData.filter((item, i) => {
      return item.brekfast === true;
    });
    setData(brekfast);
  };
  const filterPriceHigh = () => {
    let priceHigh = apartemntsData.sort((a, b) => {
      if (a.price > b.price) {
        return -1;
      } else return 1;
    });
    setData(priceHigh);
  };
  const filterPriceLow = () => {
    let priceLow = apartemntsData.sort((a, b) => {
      if (b.price > a.price) {
        return -1;
      } else return 1;
    });
    setData(priceLow);
  };
  const filterGuest = () => {
    let guest = apartemntsData.filter((item, i) => {
      return item.guests >= 3;
    });
    setData(guest);
  };

  return (
    <div>
      <Router>
        <Switch>
          <Route path="/apartments">
            <Header2></Header2>
            <Buttons
              guest={filterGuest}
              priceHigh={filterPriceHigh}
              priceLow={filterPriceLow}
              brekfast={brekfastAllowed}
              pets={petsAllowed}
              allRooms={allRooms}
              singleRoom={filterSingle}
              luxuryRoom={filterLuxury}
              doubleRoom={filterDouble}
            ></Buttons>
            <Apartments data={data}></Apartments>
          </Route>
          <Route path="/">
            <Header></Header>
            <Main></Main>
            <MainBottom></MainBottom>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
