import React from 'react';

function Course({ course }) {
    const { id, title, description, link, image, price } = course;

    return (
        <div className='course'>
            <div>
                <img src={image} alt={title} />
                <h4>{title}</h4>
                <h5>{description}</h5>
                <h3>{price} TL</h3>
                <a href={link} target='_blank' rel='noopener noreferrer'>Kursa Git</a>
            </div>
        </div>
    );
}

export default Course;
