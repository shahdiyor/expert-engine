import logo from './logo.svg';
import './App.css';
import { Chart, registerables } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { getRelativePosition } from 'chart.js/helpers';
import { YMaps, Map } from 'react-yandex-maps';

Chart.register(...registerables);

function App() {
  return (
    <div className='container'>
      <div className="menu"></div>
      <div className="main">
        <div className="nez">
          <div className="firstCol">
            <div className="map">
            <YMaps>
                <Map width='100%' height='500px' defaultState={{ center: [55.75, 37.57], zoom: 9 }} />
              </YMaps>
            </div>
            <div className="allBlock">
            {/* <div className="nazText"> Регион отслеживания </div>
            <div className="nazRazliv"> Название разлива <div className="coord">  (x,y) </div></div>

            <div className="struktur"> Структура <div className="nazStruk">  Равнина </div></div> */}

            </div>
          </div>
          <div className="secondCol">
            <div className="block"> 
            <div className="ugrozJiz"></div>
            <div className="ugroz"></div>
            </div>
            <div className="block">
            <div className="ugrozNaz"></div>
            {/* <div className="ugroz">...</div> */}
            </div>
            <div className="block Last"></div>
          </div>
          <div className="secondCol">
            <div className="blockL">
              <div className="blockLit"> 
              {/* <div className="conS"> S </div> */}
               </div>
              <div className="blockV"></div>
            </div>
            <div className="bpla"></div>
            <div className="ecol"></div>
          </div>
        </div>

      </div>



      {/* <Bar
        data={state}
        options={{
          title: {
            display: true,
            text: 'Average Rainfall per month',
            fontSize: 20
          },
          legend: {
            display: true,
            position: 'right'
          }
        }}
      /> */}
    </div>
  );
}

const state = {
  labels: ['January', 'February', 'March',
    'April', 'May'],
  datasets: [
    {
      label: 'Rainfall',
      backgroundColor: 'rgba(75,192,192,1)',
      borderColor: 'rgba(0,0,0,1)',
      borderWidth: 2,
      data: [65, 59, 80, 81, 56]
    }
  ]
}


export default App;
