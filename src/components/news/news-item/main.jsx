import React from 'react'
import './style.css'
import { BsPersonFill } from 'react-icons/bs'
import { MdFavorite } from 'react-icons/md'
import { FaCommentDots } from 'react-icons/fa'

function NewsElement(props) {
    return (
        <div className="news-element">
            <div className="new-element-item">
                    <img src={props.pic} alt="" />
                <div className="item-left-content">
                    <h2>{props.content}</h2>
                    <div className="icon-part">
                        <div className="element">
                            <BsPersonFill className="icon-element" /> <span>By Admin</span>
                        </div>
                        <div className="element">
                            <MdFavorite className="icon-element" /> <span>{props.num1} Love</span>
                        </div>
                        <div className="element">
                            <FaCommentDots className="icon-element" /> <span>{props.num2} Comment</span>
                        </div>
                    </div>
                    <p>{props.text}</p>
                    <div className="link">Read More...</div>
                </div>
            </div>
        </div>
    )
}
export default NewsElement