import "./index.css";
import cards from "./data/cards";
import Card from "./components/Card";
function App() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 min-h-screen place-content-center gap-3 bg-gray-100 p-12">
      {cards.map((card) => (
        <Card cardData={card} key={card.id} />
      ))}
    </div>
  );
}

export default App;
