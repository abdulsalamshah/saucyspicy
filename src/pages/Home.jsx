import React from 'react'
import MenuBtn from '../components/MenuBtn'
import './Home.css';
import AboutImg from '../utils/images/wanderlust.png';
import { Link } from 'react-router-dom';
import ImageGallery from '../components/ImageGallery';
import ContactInfo from '../components/ContactInfo';
import ContactImg from '../utils/images/wanderlust.png';

const Home = () => {
  return (
    <div className='home-page'>
        <header className='h-100 min-vh-100 d-flex align-items-center text-light shadow'>
            <div className='container'>
              <div className='row'>
                <div className='col-sm-6 d-flex d-sm-block flex-column align-items-center'>
                   <h2 className='mb-0 text-black fw-bold'>Welcome To</h2>
                   <h1 className='mb-5 text-black fw-bold text-center text-sm-start'>Saucy Spicy</h1>
                  <MenuBtn />
                </div>
              </div>
            </div>
        </header>

       <div className='container my-5'>
        <div className='row'> 
          <div className='col-lg-6 d-flex justify-content-center d-none d-lg-flex'>
           <img src={AboutImg} className='img-fluid w-50' alt="about img" />
          </div>
           
           <div className='col-lg-6 d-flex flex-column align-items-center justify-content-center'>
            <h2 className='fs-1 mb-5 text-uppercase fw-bold'>About Us</h2>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,</p>
            <p className='mb-5'>but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
           <Link to='/about'>
            <button type='button' className='btn btn-lg' style={{backgroundColor:'black', color:'white'}}>More About Us</button>
           </Link>
           </div>
        </div>
       </div>
       <div className='menu-section py-5 text-light shadow'>
  <div className='container d-flex flex-column align-items-center'>
    <h2 className='fs-1 mb-2 text-uppercase fw-bold'>Our Favorites</h2>
    <div className='row mb-5 w-100 d-flex flex-column'>  {/* Changed to flex-column */}
      <div className='col-12 d-flex flex-column align-items-center mb-5'> {/* Changed to col-12 */}
      <br />
        <h3 className='fs-2 mb-5'>Food</h3>
        <ul className='px-0'>
          <li className='d-flex justify-content-between'>
            <p className='fs-3 mx-2'>English Breakfast</p>
            <p className='fs-3 mx-2 text-success fw-bold'>$12</p>
          </li>
          <li className='d-flex justify-content-between'>
            <p className='fs-3 mx-2'>Spicy Beef</p>
            <p className='fs-3 mx-2 text-success fw-bold'>$15</p>
          </li>
          <li className='d-flex justify-content-between'>
            <p className='fs-3 mx-2'>Spaghetti Bolognese</p>
            <p className='fs-3 mx-2 text-success fw-bold'>$10</p>
          </li>
        </ul>
      </div>
      <div className='col-12 d-flex flex-column align-items-center mb-5'> {/* Changed to col-12 */}
        <h3 className='fs-2 mb-5'>Drinks</h3>
        <ul className='px-0'>
          <li className='d-flex justify-content-between'>
            <p className='fs-3 mx-2'>Coffee</p>
            <p className='fs-3 mx-2 text-success fw-bold'>$2</p>
          </li>
          <li className='d-flex justify-content-between'>
            <p className='fs-3 mx-2'>Juice</p>
            <p className='fs-3 mx-2 text-success fw-bold'>$1</p>
          </li>
          <li className='d-flex justify-content-between'>
            <p className='fs-3 mx-2'>Spirits</p>
            <p className='fs-3 mx-2 text-success fw-bold'>$5</p>
          </li>
        </ul>
      </div>
    </div>
    <MenuBtn />
  </div>
</div>
<ImageGallery />
<div className='bg-dark text-light py-5 shadow'>
 <div className='container'>
 <div className='row d-flex align-items-center justify-content-center text-center'>
<div className='col-lg-6 d-flex flex-column align-items-center justify-content-center mb-5 mb-lg-0'>
  <ContactInfo />
  <div className='col-lg-6 d-flex justify-content-center'>
   <img src={ContactImg} className='img-fluid w-50' alt="" />
    </div>
</div>
</div>

 </div>
</div>
</div>

  )
}

export default Home
