import React, {Component} from 'react';
import Clock from "./Clock";

class App extends Component {
    //state = {latitude: null,error: null}

    constructor(props){
        super(props);
        this.state = {latitude: null, errorMessage: ""};

        window.navigator.geolocation.getCurrentPosition(
            position => this.setState({latitude: position.coords.latitude}),
            error => this.setState({errorMessage: error.message})
        )
    }

    isWarm(){
        const {latitude} = this.state;
        const date = new Date();
        const month = date.getMonth();
       
        if(latitude){
                if(
                    ((month>=4 && month <= 9) && latitude > 0)
                    ||
                    ((month<=4 || month >= 9) && latitude <0)
                    ||
                    (latitude === 0)

                ){
                    return true;
                }
        }

        return false;

    }

    decideIcon(){

        const summar = this.isWarm();
            if(summar){
                return "sun.svg";
            }

            return "snowflake.svg";

    }

    render() {

        const {latitude,errorMessage} = this.state;
        const icon = this.decideIcon();
        
       return (
        <div>
            {
                errorMessage ||
                <Clock 
                icon={latitude !== null ? this.decideIcon() : null }
                timezone={"Sydney/Australia"} 
                date={new Date() }
            />
            }
        </div>

        )
    }
}





// const App = (props) => {
//     window.navigator.geolocation.getCurrentPosition(
//         position => console.log(position.coords.latitude, position.coords.longitude),
//         error => console.log(error)
//     );

//     return (
//         <div>
//             <Clock 
//                 icon="sun.svg"
//                 timezone={"Sydney/Australia"} 
//                 date={new Date()} 
//             />
//         </div>
//     );
// }

export default App;
