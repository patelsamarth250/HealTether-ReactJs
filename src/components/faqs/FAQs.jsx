import {useState} from 'react';

import React from 'react'
import './faqs.css'
import {IoIosArrowDropdown} from 'react-icons/io'
import {PiHexagonThin} from 'react-icons/pi'

const faqs_data = [
    {
        question: "What is the Full form of EMR ans EHR in healthcare?",
        answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique ad eligendi magnam perspiciatis accusantium dignissimos. Cupiditate in quaerat neque doloribus consectetur omnis exercitationem maxime, eveniet optio. Eligendi possimus facilis neque."
    },
    {
        question: "Can I schedule follo-up appointments using the app?",
        answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique ad eligendi magnam perspiciatis accusantium dignissimos. Cupiditate in quaerat neque doloribus consectetur omnis exercitationem maxime, eveniet optio. Eligendi possimus facilis neque."
    },
    {
        question: "Is the telemedicine app secure for private consultations?",
        answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique ad eligendi magnam perspiciatis accusantium dignissimos. Cupiditate in quaerat neque doloribus consectetur omnis exercitationem maxime, eveniet optio. Eligendi possimus facilis neque."
    },
    {
        question: "How does the AI-powered Prescription Predictor work?",
        answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique ad eligendi magnam perspiciatis accusantium dignissimos. Cupiditate in quaerat neque doloribus consectetur omnis exercitationem maxime, eveniet optio. Eligendi possimus facilis neque."
    },
    {
        question: "Are online payments secure on the app?",
        answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique ad eligendi magnam perspiciatis accusantium dignissimos. Cupiditate in quaerat neque doloribus consectetur omnis exercitationem maxime, eveniet optio. Eligendi possimus facilis neque."
    }
]

function FAQs() {

    const [selected, setSelected] = useState(null)

    const toggle = (i) => {
        if(selected == i){
            return setSelected(null)
        }

        setSelected(i)
    }

  return (
    <div className="faqs-frame">
        
        <div className="faq-left">
            <div className="faq-heading">
                <h3>Got queries?</h3>
            </div>
            <div className="faq-heading-short">
            Let's solve your queries with our FAQ section.
            </div>

            <div className="faq-contents">
                <div className="faq-accordion">
                    {
                    faqs_data.map((item, i) => (
                        <div className="faq-item">
                            <div className={selected===i ? "faq-title" : "faq-title show-question"} onClick={() => toggle(i)}>
                                <h4 className>{item.question}</h4>
                                <span className={selected===i ? "faq-rotate": "faq-rotate-no"}> <IoIosArrowDropdown/> </span>
                            </div>
                            <div className={selected === i ? 'faq-answer show': 'faq-answer'}>
                                {item.answer}
                            </div>
                        </div>
                     ) )
                    }
                </div>
                <div className="faq-button">
                    <a href="#know-more">Know More</a>
                </div>
            </div>
        </div>
        <div className="faq-shape">
            <div className="faq-hexagon">
                <PiHexagonThin/>
            </div>
        </div>
    </div>
  )
}

export default FAQs