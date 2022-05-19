import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
         Searchdle
        </p>
    <Slider
  aria-label="Size"
  defaultValue={5}
  getAriaValueText={valuetext}
  valueLabelDisplay="auto"
  step={1}
  marks
  min={4}
  max={11}
/>
      </header>
    </div>
  );
}

export default App;
