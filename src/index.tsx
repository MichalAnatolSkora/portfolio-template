import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// import React from 'react';
// import ReactDOM from 'react-dom';
import ReactFullpage from '@fullpage/react-fullpage';
import { Card } from 'primereact/card';
import wolf from './WOLFGEO.jpg';

const Fullpage = () => (
  <ReactFullpage
    //fullpage options
    // licenseKey = {'YOUR_KEY_HERE'}
    scrollingSpeed={1000} /* Options here */
    navigation={true}
    render={({ state, fullpageApi }: any) => {
      let baseStyle: React.CSSProperties = { textAlign: 'center' };
      let titleCss: React.CSSProperties = {
        fontSize: '1.5rem',
        fontWeight: 700,
        marginBottom: '0.5rem',
      }
      return (
        <ReactFullpage.Wrapper>
          <div className="section" style={{ ...baseStyle, backgroundColor: '#E7E7E7' }}>
          {/* <div style= {{...titleCss}}>Title</div> */}
          <div className="p-d-flex p-jc-center">
            <div className="p-grid p-justify-start">
              <div className="p-col">
                <img src={wolf} height="500px"/>
              </div>
              <div className="p-col" style={{verticalAlign: 'middle'}}>
                {/* <Card style={{verticalAlign: 'middle'}} title="Jakis mega dlugi tytul" subTitle="Tylko teraz">
                  Tutaj jakis content
                </Card> */}
                <div className="p-grid p-align-center vertical-container">
                        <div className="p-col">
                            <div className="box">4</div>
                        </div>
                        <div className="p-col">
                            <div className="box">4</div>
                        </div>
                        <div className="p-col">
                            <div className="box">4</div>
                        </div>
                    </div>

              </div>              
            </div>
            </div>

            {/* <button onClick={() => fullpageApi.moveSectionDown()}>
              Click me to move down
            </button> */}
          </div>
          <div className="section" style={{ ...baseStyle, backgroundColor: '#69bdd2' }}>
            <div className="slide">Slide 2.1</div>
            <div className="slide">Slide 2.2</div>
            <div className="slide">Slide 2.3</div>
          </div>
        </ReactFullpage.Wrapper>
      );
    }}
  />
);

ReactDOM.render(<Fullpage />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
