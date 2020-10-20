import React, { Component } from 'react';
import { Map, TileLayer } from 'react-leaflet';
import './MyMap.css';

export default class MyMap extends Component {
    state = {
        lat: -2.2374328,
        lng: 120.9217419,
        zoom: 4,
    }
    render() {
        const position = [this.state.lat, this.state.lng];
        return (
            <Map className="mapClass" center={position} zoom={this.state.zoom}>
                <TileLayer 
                    attribution='&copy; <a href="https://esm.org/copyright">OpenStreesMaps</a> contributors' 
                    url="https://{s}.tile/openstreetmap.org/{z}/{x}/{y}.png" 
                    accessToken="sk.eyJ1Ijoicml2YW4yMCIsImEiOiJja2ZqeGcxM3AwYnNsMndxbW5sc3VwdzlrIn0.UBKdS3us18rKL_CwmdTRhw" 
                />
            </Map>
        );
    }
}