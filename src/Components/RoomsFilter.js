import React from "react";
import { useContext } from "react";
import { RoomContext } from "../context";
import Title from "../Components/Title";

//Get all unique value
const getUnique = (items, value) => {
  return [...new Set(items.map(item => item[value]))];
};
export default function RoomsFilter({ rooms }) {
  const context = useContext(RoomContext);
  const {
    handleChange,
    type,
    capacity,
    price,
    minSize,
    minPrice,
    maxPrice,
    maxSize,
    breakfast,
    pets
  } = context;
  //Get an array of unique types
  let types = getUnique(rooms, "type");
  types = ["all", ...types];
  //maping to jsx
  types = types.map((item, index) => {
    return (
      <option value={item} key={index}>
        {item}
      </option>
    );
  });
  let people = getUnique(rooms, "capacity");
  people = people.map((item, index) => {
    return (
      <option key={index} value={item}>
        {item}
      </option>
    );
  });
  return (
    <section className="filter-container">
      <Title title="search rooms" />
      <form className="filter-form">
        {/*select type*/}
        <div className="form-group">
          <label htmlFor="type">room type</label>
          <select
            className="form-control"
            name="type"
            id="type"
            value={type}
            onChange={handleChange}
          >
            {types}
          </select>
        </div>

        {/*end select type*/}
        {/*select guests*/}
        <div className="form-group">
          <label htmlFor="capacity">Guest</label>
          <select
            className="form-control"
            name="capacity"
            id="capacity"
            value={capacity}
            onChange={handleChange}
          >
            {people}
          </select>
        </div>

        {/*end select guests*/}

        {/* room price*/}
        <div className="form-group">
          <label htmlFor="price">room price ${price}</label>
          <input
            type="range"
            name="price"
            min={minPrice}
            max={maxPrice}
            id="price"
            value={price}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        {/*end room price*/}
        {/* room size */}
        <div className="form-group">
          <label htmlFor="size">room size</label>
          <div className="size-inputs">
            <input
              type="number"
              name="minSize"
              id="size"
              value={minSize}
              onChange={handleChange}
              className="size-input"
            />
            <input
              type="number"
              name="maxSize"
              id="size"
              value={maxSize}
              onChange={handleChange}
              className="size-input"
            />
          </div>
        </div>

        {/*end room size*/}

        {/*extras*/}
        <div className="form-group">
          <div className="single-extras">
            <input
              type="checkbox"
              onChange={handleChange}
              checked={breakfast}
              name="breakfast"
              id="breakfast"
            />
            <label htmlFor="breakfast">breakfast</label>
          </div>

          <div className="single-extras">
            <input
              type="checkbox"
              onChange={handleChange}
              checked={pets}
              name="pets"
              id="pets"
            />
            <label htmlFor="pets">pets</label>
          </div>
        </div>
        {/* end extras*/}
      </form>
    </section>
  );
}
