import React, {Component} from 'react';
import './Home.css';
//Importing

import MyMap from '../../Component/MyMap/MyMap';
import RoundBox from '../../Component/RoundBox/RoundBox';





class Home extends Component{
    render(){
        return(
            <div className="contain">
                <hr/>
                <MyMap />
                <hr/>
                <div className="konten">
                    <h1>Dashboard COVID-19</h1>
                    <div className="box-wrapper">
                        <RoundBox title="Meninggal" desc="40"/>
                        <RoundBox title="Dirawat" desc="320"/>
                        <RoundBox title="Positif" desc="400"/>
                        <RoundBox title="Sembuh" desc="40"/>
                    </div>
                </div>
                <hr/>
            </div>
        );
    }
}

export default Home;