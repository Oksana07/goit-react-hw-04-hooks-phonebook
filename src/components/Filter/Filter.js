import PropTypes from "prop-types";
import s from "./Filter.module.css";

const Filter = ({ filter, onChange }) => {
  return (
    <div className={s.filter__container}>
      <label className={s.filter__title}>
        Find contacts by name
        <input
          className={s.filter__input}
          type="text"
          value={filter}
          name="name"
          onChange={onChange}
        />
      </label>
    </div>
  );
};

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Filter;
