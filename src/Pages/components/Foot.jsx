import React from 'react'
import { faVideo } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';


function Foot() {
  return (
   <>
<div className="row w-100 mt-5">
    <div className="col-md-4 ms-2 ">
    
       <div className='d-flex'>
       <FontAwesomeIcon className='text-warning ' icon={faVideo} beat size='2xl'/>
           
       <h4 className='ms-3'>Media Player</h4></div> 
        <p style={{textAlign:'justify'}}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum quia animi dolores odio doloribus perspiciatis beatae! Recusandae sunt eum quas consequuntur maxime laborum non! Repudiandae ea quibusdam dolorum ut quaerat.</p>
    </div>
    <div className="col-md-2  justify-content-center d-flex">
        <div>
        <h4>Links</h4>
        <p className='mt-4'><Link to={'/'}>Landing Page</Link></p>
        <p><Link to={'/home'}>Homepage</Link></p>
        <p><Link to={'/watch-history'}>Watch History</Link></p>
        </div>
    </div>
    <div className="col-md-2 justify-content-center d-flex">
        <div>
        <h4>Guides</h4>
        <p className='mt-4'>React</p>
        <p>React Bootstrap</p>
        <p>Bootswatch</p>
        </div>
    </div>
    <div className="col-md-3 ">
        <h4>Contact Us</h4>
       <div className='d-flex mt-4'>
       <input type="email" placeholder='Email Id' className='form-control w-50'/>
       <button className='btn btn-warning ms-3'>Subscribe</button>
       </div>
       <div className='d-flex mt-3' style={{justifyContent:'space-between'}}>
        <FontAwesomeIcon className='text-danger' icon={faInstagram} size='2xl'/>
        <FontAwesomeIcon className='text-primary' icon={faFacebook}  size='2xl'/>
        <FontAwesomeIcon className='text-primary ' icon={faLinkedin}  size='2xl'/>
        <FontAwesomeIcon className='text-primary'icon={faTwitter}  size='2xl'/>
       </div>
    </div>
    <div className="col-md-1"></div>
    
</div>
   </>
  )
}

export default Foot
