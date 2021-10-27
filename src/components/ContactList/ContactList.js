import s from "./ContactList.module.css";
import PropTypes from "prop-types";

const ContactList = ({ contacts, deleteContact }) => {
  return (
    <div>
      <ul className="contact-list">
        {contacts.map(({ name, number, id }) => (
          <li key={id} className={s.contact__item}>
            <p className={s.item}>{name}:</p>
            <p className={s.item}>{number}</p>
            <button
              key={id}
              type="button"
              className={s.onClick__btn}
              onClick={() => deleteContact(id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
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
  deleteContact: PropTypes.func.isRequired,
};

export default ContactList;
