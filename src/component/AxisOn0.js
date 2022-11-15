import React ,{Component} from 'react';
import './Weather.css'
import cloud from './img/icons8-clouds-48.png'
import rain from './img/icons8-rain-48.png'
import sun from './img/icons8-sun-50.png'
import PropTypes from 'prop-types'

export default class AxisOn0 extends Component
{
   weather = [];
   temp = [];
   atm =[];

  constructor() {
    super();
    this.state = {
      weather: this.weather,
      temp:this.temp,
      atm:this.atm,
      
    };
    
  }


  static defaultProps =
  {
    lat : 18.5204303,
    long : 73.8567437
  }

  static propTypes ={

    lat : PropTypes.number,
    long : PropTypes.number
    
    }
    

   


  async componentDidMount() {
   
    
// navigator.geolocation.getCurrentPosition((position) => {
//   lat = (position.coords.latitude);
//   long = (position.coords.longitude);
// }, () => {
  
// });

    let url1 =`https://api.openweathermap.org/data/2.5/weather?lat=${this.props.lat}&lon=${this.props.long}&appid=6c8c3f41c7ce0abe278fda013a7f3451`;
    let data = await fetch(url1);
    let parseData = await data.json();
    this.setState({ weather: parseData,temp : parseData.main,atm : parseData.weather});
      }

  

  


  //static Celcius = (this.state.weather.main.temp)-273.15;
  

  render()
  {
    //console.log(this.state.weather.name);
    
   
    return(

<div>
<div className="card border-dark mb-3" style={{maxWidth: "600px",marginTop: "100px"}}>

  <div className="card-header bg-transparent border-dark">Temperature</div>
  <div className="card-body text-success">
    <h5 className="card-title"> {this.state.weather.name} - {(this.state.temp.temp-273.15).toFixed(2)}C </h5>
    {/* <h5 className='card-title'>{this.state.weather}</h5> */}
    <p className="card-text"></p>
  </div>
  {this.state.atm.map((element) => {
          return (
            <div key={element.id}>
  <div className="card-footer bg-transparent border-success">{element.description}</div>
  <div>
    {(element.main==="Clouds") &&
    
    <img src={cloud} alt="true"/>
  }
  {(element.main==="Clear") &&

     <img src={sun} alt="true"/>

}
{(element.main==="Rain") &&

     <img src={rain} alt="true"/>

}
    </div>
  </div>
          );
          }
          )
          }
  </div>

      </div>
  )
  }
}