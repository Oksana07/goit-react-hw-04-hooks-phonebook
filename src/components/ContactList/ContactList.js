import s from "./ContactList.module.css";
import PropTypes from "prop-types";

const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <ul className={s.ContactList}>
      {contacts.map(({ name, number, id }) => (
        <li key={id} id={s.ContactItem}>
          <p className={s.Text}>{name}:</p>
          <p className={s.Text}>{number}:</p>
          <button type="button" onClick={() => onDeleteContact(id)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};
ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    })
  ),
  onDeleteContact: PropTypes.func.isRequired,
};
export default ContactList;
