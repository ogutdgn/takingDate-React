import CurrentDate from "./CurrentDate";
import CurrentTime from "./CurrentTime";
import Header from "./Header";

function App() {
  return (
    <div>
      <Header/>
      <div style={{display: "flex", justifyContent: "space-around"}}>
        <CurrentDate/>
        <CurrentTime/>
      </div>
    </div>
  );
}

export default App;
