import React from "react";
import CountryList from "../components/CountryList";
import AddCountry from "@/components/AddCountry";

const Home = () => {
  return (
    <div>
      <h1>Hello, wilder!</h1>
      <AddCountry />
      <CountryList />
    </div>
  );
};

export default Home;
