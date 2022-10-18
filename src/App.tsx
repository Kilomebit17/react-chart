import './App.css';
import { ChartComponent } from './components/charts';

const App = () => {
  return (
    <>
      <div className="container">
        <div id="chart">
          <ChartComponent />
        </div>
      </div>
    </>
  );
}

export default App;
