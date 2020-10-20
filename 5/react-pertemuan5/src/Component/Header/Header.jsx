import React, {Component} from 'react';
import './Header.css';




class Header extends Component{
    state = {
        toogle:false
    }
    Toogle = () =>{
        this.setState({toogle:!this.state.toogle})
    }
    render(){
        return(
            <div className={this.state.toogle ? "header res" : "header"}>
                <div className="logo">
                    <p>Dashboard COVID-19</p>
                </div>
                <div className="b_toogle" onClick={this.Toogle}>
                    <li className="fa fa-bars"></li>
                </div>
                <div className={this.state.toogle ? "navibar responsive" : "navibar"}>
                    <a href="/home">
                        <li className="navi">Home</li>
                    </a>
                    <a href="/ksus">
                        <li className="navi">Kasus</li>
                    </a>
                    <a href="/bansos">
                        <li className="navi">BANSOS</li>
                    </a>
                    <a href="/dnt">
                        <li className="navi">Donasi</li>
                    </a>
                    <a href="/kntk">
                        <li className="navi">Kontak</li>
                    </a>
                    <a href="/appdo">
                        <li className="navi">App</li>
                    </a>
                </div>
            </div>
        );
    }
}

export default Header;