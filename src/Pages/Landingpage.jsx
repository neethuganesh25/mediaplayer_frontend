import React from 'react'
import Header from './components/Header'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';




function Landingpage() {
  return (
    <>
    
    
    
    <div className='row'>
      <div className="col-1"></div>
      <div className="col-5">
        <h3 className='mt-5'>Welcome to <span className='text-warning'>Media Player</span></h3>
<p className='mt-5' style={{textAlign:'justify'}}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt excepturi, harum hic quaerat sint eos id saepe unde ratione adipisci quos pariatur labore, debitis ip sam, nulla ab nisi quasi vero?Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, ut! Sint perferendis a quisquam voluptatibus voluptas maxime et, similique ut consectetur modi reprehenderit dicta! Magni aut voluptatibus rem? Totam, similique?Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa consectetur mollitia illum fugit numquam quas dignissimos praesentium hic labore earum eaque, quod itaque eos obcaecati, necessitatibus minus blanditiis est delectus?</p>

<button className='btn bg-warning mt-5'><Link to={'/home'} style={{textDecoration:'none' 
  ,color:'white'}}>Get Started</Link></button>

      </div>
      <div className="col-5">
<img className='mt-5 ms-5 w-75' src="https://media.tenor.com/lhlDEs5fNNEAAAAC/music-beat.gif" alt=""   />
      </div>
      <div className="col-1"></div>
    </div>

<div className="row">
  <h3 className='text-center mt-5 '>Features</h3>
  <div className="col-1"></div>
  <div className="col-md-3 px-5 px-md-4 mt-4 ">
  <Card style={{ width: '100%'}} className='p-3'>
      <Card.Img variant="top" src="https://cdn.pixabay.com/animation/2022/11/02/10/53/10-53-39-437_512.gif" className='w-100' height={'300px'}  />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
       
      </Card.Body>
    </Card>
  </div>
  <div className="col-md-4 px-5 px-md-4 mt-4 ">
  <Card style={{ width: '100%' }}className='p-3'>
      <Card.Img variant="top" src="https://i.gifer.com/origin/b0/b0140e18ce756e94891c3cc4b2d4fec6_w200.webp"  className='w-100' height={'300px'} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
       
      </Card.Body>
    </Card>
  </div>
  <div className="col-md-3 px-5 px-md-4 mt-4 ">
  <Card style={{ width: '100%' }}className='p-3'>
      <Card.Img variant="top" src="https://i.gifer.com/origin/4d/4df0a6453ab542634821b4a8fd6b8fb0_w200.webp"  className='w-100' height={'300px'} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
       
      </Card.Body>
    </Card>
  </div>
  <div className="col-1"></div>

</div>

<div className="row w-100 mt-5">
  <div className="col-md-1"></div>
  <div className="col-md-10 border rounded p-3">
    <div className="row w-100">
      <div className="col-md-6">
        <h3 className='text-warning mt-3 text-center'>Simple fast and powerful</h3>
        <p className='mt-4 ' style={{textAlign:'justify'}}><span className='fs-4 text-danger' > Play Everything: </span>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, odio earum cum voluptatem quo vel quod, at ipsum beatae libero nulla, animi similique? Laboriosam nemo necessitatibus aspernatur sint amet doloribus!</p>
        <p className='mt-4 ' style={{textAlign:'justify'}}><span className='fs-4 text-danger'> Play Everything: </span>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, odio earum cum voluptatem quo vel quod, at ipsum beatae libero nulla, animi similique? Laboriosam nemo necessitatibus aspernatur sint amet doloribus!</p>
        <p className='mt-4 ' style={{textAlign:'justify '}}><span className='fs-4 text-danger'> Play Everything: </span>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, odio earum cum voluptatem quo vel quod, at ipsum beatae libero nulla, animi similique? Laboriosam nemo necessitatibus aspernatur sint amet doloribus!</p>
      
      </div>
      <div className="col-md-6 mt-5">
      <iframe width="100%" height="372" src="https://www.youtube.com/embed/nWxGhq_lBII" title="Madharasapattinam - Pookkal Pookkum Video | Aarya, Amy Jackson" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      </div>
    </div>
  </div>
  <div className="col-md-1"></div>

</div>
    </>
      
    
  )
}

export default Landingpage
 
