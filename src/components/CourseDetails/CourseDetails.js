import React from 'react';
import courses from '../../data.json'
import './CourseDetails.css'
import { useParams } from  'react-router-dom'

const CourseDetails = (props) => {
	const params = useParams();
	console.log(params)
	const courseID = params["id"];
	console.log(courseID);
	const course = courses.find(c => c.id === courseID);
	return (
		<div className='course__details'>
			<div className='img__container--d'>
				<img className="course__img--d" src={course.courseImage} alt={course.title} />
			</div>
			<div className='course__content--d'>
				<span className={course.isHot ? "course__status" : ""}>
					{course.isHot ? "Hot" : null}
				</span>

				<h3 className='course__title'>{course.title}</h3>
				<p className='course__desc'>{course.desc}</p>
				<span className='course__price'>{course.price}</span>
				<div className="categories">
					{course.categories.map(cat => (<p>{cat}</p>))}
				</div>

			</div>
		</div>
	);
}
export default CourseDetails;