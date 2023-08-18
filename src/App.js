import './App.css';
import Header from './pages/Header';
import ParentComponent from './pages/ParentComponent';
import Bmi from './pages/Bmi';

function App() {
  var x = "Hello";
  const arr = ["name", "age"];
  return (
    <div className="App">
      {x}
      <Header/>
      <ParentComponent/>
      {
        arr.map((data,i)=>{
          return(
            <div key={i}>{data}</div>
          )
        })
      }
      <Bmi/>

    </div>
  );
}

export default App;
