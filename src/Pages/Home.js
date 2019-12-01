import React, { Fragment } from "react";
import Hero from "../Components/Hero";
import Banner from "../Components/Banner";
import { Link } from "react-router-dom";
import Services from "../Components/Services";
import FeatureRooms from "../Components/FeatureRooms";
const Home = () => {
  return (
    <Fragment>
      <Hero>
        <Banner
          title="Luxurious rooms"
          subtitle="deluxe rooms starting at $299"
        >
          <Link to="/rooms" className="btn-primary">
            Our rooms
          </Link>
        </Banner>
      </Hero>
      <Services />
      <FeatureRooms />
    </Fragment>
  );
};
export default Home;
