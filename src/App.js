import React from "react";
import "./App.css";

// Components
import { Footer } from "Components/Footer/Footer";
import { Header } from "Components/Header/Header";

//Pages
import { AppRouter } from "Routes/AppRouter";

function App() {
  return (
    <React.Fragment>
      <Header />
      <AppRouter />
      <Footer />
    </React.Fragment>
  );
}

export default App;
