import React from 'react'
import './products.css'
import IMG from '../../assets/feature1.png'
import IMG1 from '../../assets/motif_1.png'
import IMG2 from '../../assets/motif_2.png'
import {BsArrowRight} from 'react-icons/bs'

function Products() {
  return (
    <div className='products-frame'>
        <div className="products__intro">
          products__intro
        </div>
        <div className="products__features">
          <div className="products__features-heading">
            Some Basic Features
          </div>
          <div className="products__feature1">
            <div className="products__feature1-content">
              <p className="products__feature-head1">
                Schedule appointments efforlessly,<br/>
                manage follow-ups and much more.
              </p>
              <p className="products__feature-para">
                Say goodbye to long waiting times. Book appointments with <br/>
                just a <span className='products__span'>3 clicks</span> and choose from <span className='products__span'>a wide range of a available <br/> time slots</span>
                that fit your schedule.
              </p>
              <div className="products__button">
                <a href="#get-started">Get Started</a>
              </div>
            </div>
            <div className="products__feature-img1">
              <img src={IMG} alt="" />
            </div>
          </div>
          
          <div className="products__feature2">
            <div className="products__feature-img2">
              <img src={IMG} alt="" />
            </div>
            <div className="products__feature2-content">
              <p className="products__feature-head1">
                Access and store data effortlessly
              </p>
              <p className="products__feature-para">
                Now you can store and access crucial information - from  <br/>
                <span className='products__span'>patient records to medical histories within seconds.</span> Enjoy <br/>
                quick and recognized data retrieval for informed decision-<br/>
                making, all at your fingertips.
              </p>
              <div className="products__button">
                <a href="#get-started">Get Started</a>
              </div>
            </div>
          </div>
          
          <div className="products__feature1">
          <div className="products__feature1-content">
              <p className="products__feature-head1">
                Achieve high productivity by connecting<br/>
                with patients.
              </p>
              <p className="products__feature-para">
                <span className='products__span'>Forage Stronger Bonds with your patients</span>by sharing<br/>
                important updates, providing personalized care instructions,<br/> or addressing patient queries in real-time.
              </p>
              <div className="products__button">
                <a href="#get-started">Get Started</a>
              </div>
            </div>
            <div className="products__feature-img1">
              <img src={IMG} alt="" />
            </div>
          </div>
          
          <div className="products__feature2">
            <div className="products__feature-img2">
              <img src={IMG} alt="" />
            </div>
            <div className="products__feature2-content">
              <p className="products__feature-head1">
                Get Analytical insights.
              </p>
              <p className="products__feature-para">
                Harness the power of data with advanced analytical tools. <br/>
                Facilitate research and gain valuable insights for providing<br/>
                better healthcare.
              </p>
              <div className="products__button">
                <a href="#get-started">Get Started</a>
              </div>
            </div>
          </div>
          
        </div>
        <div className="products__discover">
          product discover
        </div>
        <div className="products__embrace">
          <div className="products__embrace-content">
            <div className="products__embrace-head">
              Embrace a more<br/>
              sustainable and efficient<br/>
              future.
            </div>
            <div className="products__embrace-para">
              Join Our Community of Doctors on the Path of Healthcare Evolution.
            </div>
            <div className="products__button">
                <a href="#get-started">Get Started</a>
            </div>
          </div>
          <div className="products__embrace-articles">
            <div className="products__embrace-aricle">
              <div className="embrace__img">
                <img src={IMG1} alt="" />
              </div>
              <div className="products__embrace-blue">
                Explore the exquisite<br/>
                features
              </div>
              <div className="products__embrace-para1">
                Unleash full potential of<br/>
                the app. Check out the<br/>
                pricing details to take<br/>
                advantage of our premium<br/>
                features.
              </div>
              <a href="#pricing">
                <div className="products__embrace-blue">
                  Pricing details <BsArrowRight/>
                </div>
              </a>
            </div>

            <div className="products__embrace-aricle">
              <div className="embrace__img">
                <img src={IMG2} alt="" />
              </div>
              <div className="products__embrace-blue">
                Need Assistant with<br/>
                the app?
              </div>
              <div className="products__embrace-para1">
                Our dedicated team is<br/>
                eager to assist you. Call<br/>
                us to inquire about any<br/>
                aspect of the app.
              </div>
              <a href="#pricing">
                <div className="products__embrace-blue">
                  Contact support <BsArrowRight/>
                </div>
              </a>
            </div>
            
          </div>
        </div>
    </div>
  )
}

export default Products