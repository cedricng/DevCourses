import React from "react";
import { Link } from "react-router-dom";
import "./Item.css";
const Item = ({ course }) => {
    return (
        <div className="course">
            <div className="course__img--container">
                <img
                    src={course.courseImage}
                    alt={course.title}
                    className="course__img"
                />
            </div>
            <Link to={'/courses/' + course.id}>
                {course.title}
            </Link>
            <span className="course__price">{course.price}$</span>
            <span className={course.isHot ? "course__status hot" : "course__status"}>
                {course.isHot ? "Hot" : null}
            </span>
        </div>
    );
};

export default Item;
