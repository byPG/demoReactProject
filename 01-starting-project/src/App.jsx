import Header from "./components/Header/Header.jsx";
import CoreConcepts from './components/CoreConcept.jsx';
import Examples from "./components/Examples.jsx";

function App() {
 
  return(
    <>
      <Header></Header>
      <main>
        <CoreConcepts></CoreConcepts>
        <Examples></Examples>
      </main>
    </>
  );
}

export default App;
