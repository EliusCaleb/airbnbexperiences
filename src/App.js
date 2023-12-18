import Navbar from "./components/Navbar";
import "./App.css";
import { Hero } from "./components/Hero";
import data from "./data";
import Card from "./components/Card";

function App() {
  //console.log(data)
  const cards = data.map((item) => {
    return <Card key={item.id} {...item} />;
  });
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <section className="cards-list">{cards}</section>
    </div>
  );
}

export default App;
