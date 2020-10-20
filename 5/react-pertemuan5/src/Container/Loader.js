import React,{Fragment} from 'react';

//Importing
import Header from '../Component/Header/Header';
import Footer from '../Component/Footer/Footer';
import Home from './Home/Home';



const Loader = () =>{
    return(
        <Fragment>
            <div className="wrapper">
                <Header />
                    <Home />
                <Footer />
            </div>
        </Fragment>
    );
}

export default Loader;