import React from 'react';
import Imag from './Imag';
import './Header.css'

const Header = () => {
    return (
        <div className='container1'>
            <div className='item1'>
                <h1> An inspiring design delivered to your inbox every morning </h1>
                <p>Our team scouts the internet for the best designs, illustrations and art and delivers a truly inspiring one every day to your inbox</p>
                <h4> Show me how it looks </h4>

                <input type="text" placeholder='your email address here' className='inputs' style={{color:'black',border:'3px solid black'}} />
                <input type='button' className='inputs'  value="Register now" style={{backgroundColor:'black',color:'white' }}  />
                <h5 style={{color:"white"}}>Free - No Spam - No Data Sharing</h5>
                 </div>
            <div className='item'> <Imag/> </div>
        </div>
    );
};

export default Header;