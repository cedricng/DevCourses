import React from 'react';

const CourseForm = ({ handleInput, inputSearch, filterd }) => {

    return (
        <form className="search__form">
            <input
                type="text"
                placeholder="search for courses"
                name="inputSearch"
                className={
                    filterd.length === 0
                        ? "search__input not-items-input"
                        : "search__input items-found-input"
                }
                onChange={handleInput}
                value={inputSearch}
            />

            <select
                name="sortTerm"
                className="sort__input"
                onChange={handleInput}
            >
                <option>Select Item</option>
                <option value="title">Title</option>
                <option value="price">Price</option>
                <option value="students">Students</option>
            </select>

            <select
                name="sortOrder"
                className="order__input"
                onChange={handleInput}
            >
                <option value="asc">asc</option>
                <option value="desc">desc</option>
            </select>
        </form>
    );
}

export default CourseForm;