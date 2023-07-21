
import './App.css';
import UseEffectpractise from './UseEffect/UseEffectpractise';
import ChildComponent from './UseImperativeHandle/ChildComponent';
import ParentComponent from './UseImperativeHandle/ParentComponent';
import UseRefpractise from './UseRef/UseRefpractise';
import StatePractise from './UseState/StatePractise';
import StatePractise1 from './UseState/StatePractise1';
import UseLayoutPractise from './UserLayoutEffect/UserLayoutPractise';


function App() {
  return (
    <div className="App">
    <StatePractise/>
    <StatePractise1/>
   <UseEffectpractise/>
  <UseRefpractise/>
  <UseLayoutPractise/>
  <ParentComponent/>
  <ChildComponent/>

        </div>
  );
}

export default App;
