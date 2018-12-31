import React,{Component} from 'react';
import Clock from "./Clock";


class App extends Component {

    state = {latitude: null}

    // constructor(props){
    //     super(props);
    //   // this.state = {latitude:null};

    // }

    render(){

        const{latitude} = this.state;
        

        window.navigator.geolocation.getCurrentPosition(
            position => this.setState({latitude: position.coords.latitude}),
            error => console.log(error)
        );

        return(
            <div>
                {`Latitude is ${latitude}`}
            <Clock 
                icon="sun.svg"
                timezone={"Sydney/Australia"} 
                date={new Date()} 
            />
        </div>

        )
    }
}

export default App;
