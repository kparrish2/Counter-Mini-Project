//import react into the bundle
import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import Clock from 'react-icons/lib/md/schedule';
//include bootstrap npm library into the bundle
import 'bootstrap';

//include your index.scss file into the bundle
import '../styles/index.scss';

//import your own components
import {Home} from './component/home.jsx';

var counter = 0;
setInterval (function(){
    const six = Math.floor(counter/1000000);
    const five = Math.floor(counter/10000);
    const four = Math.floor(counter/1000);
    const three = Math.floor(counter/100);
    const two = Math.floor(counter/10);
    const one = Math.floor(counter/1);
    counter++;

    ReactDOM.render(
  
        <SampleCounter 
            digitOne={one} 
            digitTwo={two} 
            digitThree={three} 
            digitFour={four}
            digitFive={five}
            digitSix={six}
            />
        
    ,
    document.querySelector('#app')
    );
}, 1000);


function SampleCounter(props){
    return (
        <div className="mainContainer bg-dark text-white w-50 p-5 ">
            <div className="clockContainer bg-secondary p-3 ml-10 d-inline-block rounded">
                <h1 className="clock d-inline"><Clock /></h1>
            </div>
            <div className="numberContainerOne bg-secondary p-3 ml-3 d-inline-block rounded">
                <h1 className="fourthDigit d-inline">{props.digitSix % 10}</h1>
            </div>
            <div className="numberContainerTwo bg-secondary p-3 ml-3 d-inline-block rounded">
                <h1 className="fourthDigit d-inline">{props.digitFive % 10}</h1>
            </div>
            <div className="numberContainerThree bg-secondary p-3 ml-3 d-inline-block rounded">
                <h1 className="fourthDigit d-inline">{props.digitFour % 10}</h1>
            </div>
            <div className="numberContainerFour bg-secondary p-3 ml-3 d-inline-block rounded">
                <h1 className="thirdDigit d-inline">{props.digitThree % 10}</h1>
            </div>
            <div className="numberContainerFive bg-secondary p-3 ml-3 d-inline-block rounded">
                <h1 className="secondDigit d-inline">{props.digitTwo % 10}</h1>
            </div>
            <div className="numberContainerSix bg-secondary p-3 ml-3 d-inline-block rounded">
                <h1 className="firstDigit d-inline">{props.digitOne % 10}</h1>
            </div>
        </div>    
            );
}

SampleCounter.propTypes = {
    digitSix: PropTypes.number,
    digitFive: PropTypes.number,
    digitFour: PropTypes.number,
    digitThree: PropTypes.number,
    digitTwo: PropTypes.number,
    digitOne: PropTypes.number
  
};
