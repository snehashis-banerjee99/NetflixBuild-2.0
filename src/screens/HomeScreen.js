import React from "react";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import "./HomeScreen.css";
import Nav from "../components/Nav";
import requests from "../Requests";
import Row from "../components/Row";

function HomeScreen() {
  return (
    <div className="homeScreen">
      <Nav />
      {/* Nav Bar */}
      <Banner />
      {/* Banner */}
      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
      />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
      {/* Rows */}
      <Footer />
    </div>
  );
}

export default HomeScreen;
