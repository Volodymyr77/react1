import logo from './logo.svg';
import './App.css';
import {peoples} from "./data/data";

function App() {


let className = 'target';

return (
    <div className={className}>
    {
        peoples.map(people=>{
            return (<div className={people.name}> {people.name} - {people.age} - {people.car}</div>)
        })
    }
    </div>
)
}

export default App;
