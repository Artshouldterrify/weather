import Navbar from "./components/Navbar";
import Image from "./components/upImage";
import Description from "./components/Description";
import Metrics from "./components/Metrics";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Image id="preidct_page"/>
      <Description id="desc_page"/>
      <Metrics id="metric_page"/>
    </div>
  );
}

export default App;
