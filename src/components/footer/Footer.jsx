import React from 'react'
import './footer.css'
import { IoMdMailOpen} from 'react-icons/io'
import {BsTelephoneFill, BsLinkedin} from 'react-icons/bs'
import {FaLocationDot, FaSquareFacebook, FaInstagram} from 'react-icons/fa6'
import {FaTwitterSquare, FaYoutube} from 'react-icons/fa'
import {BiSolidTimeFive} from 'react-icons/bi'
import footerlogo from '../../assets/footer-logo.png'
import play from '../../assets/google-play-badge.png'
import apple from '../../assets/apple-store-badge.png'

function footer() {
  return (
    <div className='footer-main'>
      <div className="footer-part1">
          <div className="footer-part1-title">
            <img src={footerlogo} alt="" />
            <p>HealTether</p>
          </div>
          <div className='footer-part1-content'>
              Join us on this transformative journey as we <br/>
              redefine healthcare together. HealTether is here to<br/>
              meet all your healthcare needs, providing <br/>
              convenient, accessible, and high-quality care at<br/>
              your fingertips.
          </div>
          <div className="footer-part1-contact">
              <a href=''><FaSquareFacebook/></a>
              <a href=''><FaTwitterSquare/></a>
              <a href=''><BsLinkedin/></a>
              <a href=''><FaInstagram/></a>
              <a href=''><FaYoutube/></a>
          </div>
          <div className='footer-part1-apps'>
            <div className='footer-google-play'>
                <a href='#android-app'><img src={play} alt="" /></a>
            </div>
            <div className='footer-apple-store'>
                <a href='#ios-app'><img src={apple} alt="" /></a>
            </div>
          </div>

          <div className="footer-part1-copyright">
            &copy; Copyright 2023 HealTether. All Rights Reserved
          </div>
      </div>

      <div className="footer-part2">
          <h4>SITEMAP</h4>
          <ul className='footer-part2-list'>
                <li>
                  <a href="#home">Home</a>
                </li>
                <li>
                  <a href="#aboutus">About Us</a>
                </li>
                <li>
                  <a href="#products">Products</a>
                </li>
                <li>
                  <a href="#help">Help</a>
                </li>
          </ul>
      </div>

      <div className="footer-part3">
          <ul className='footer-part3-list'>
            <li><a href="">Privacy Policy</a></li>
            <li><a href="">FAQs</a></li>
            <li><a href="">Complaints</a></li>
          </ul>
      </div>

      <div className="footer-part4">
          <h4>CONTACT</h4>
          <ul className='footer-part4-list'>
            <li>
              <a href="mailto: hello@healtether.com"><IoMdMailOpen/> hello@healtether.com</a>
            </li>
            <li>
              <BsTelephoneFill/> +91-9080857909
            </li>
            <li>
              <FaLocationDot/> No.12(2) Veerazhagamman Street<br/>
              Bodinayakanur, Theni, Tamil Nadu
            </li>
            <li>
              <BiSolidTimeFive/> Open Hrs: <br/>
              Mon-Sat: 10 AM - 10 PM
            </li>
          </ul>
      </div>
    </div>
  )
}

export default footer