import s from "./Filter.module.css";
import PropTypes from "prop-types";
const Filter = ({ filter, onChange }) => {
  return (
    <div className={s.Filter}>
      <label className={s.FilterTitle}>Find contacts by name</label>
      <input type="text" name="name" value={filter} onChange={onChange}></input>
    </div>
  );
};
Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
export default Filter;
