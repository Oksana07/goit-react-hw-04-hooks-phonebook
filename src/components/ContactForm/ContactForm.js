import { useState } from "react";
import PropTypes from "prop-types";
import { v4 as uuidv4 } from "uuid";
import s from "./ContactForm.module.css";

function ContactForm({ onSubmit }) {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const shortNameId = uuidv4();
  const shortTelId = uuidv4();

  const handleChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "name":
        setName(value);
        break;
      case "number":
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(name, number);
    reset();
  };

  const reset = () => {
    setName("");
    setNumber("");
  };

  return (
    <div className={s.Container}>
      <form className={s.Form} onSubmit={handleSubmit}>
        <label htmlFor={shortNameId} className={s.FormTitle}>
          Name
        </label>
        <input
          className={s.FormInput}
          value={name}
          id={shortNameId}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          onChange={handleChange}
          required
        />
        <label htmlFor={shortTelId} className={s.FormTitle}>
          Number
        </label>
        <input
          className={s.FormInput}
          value={number}
          id={shortTelId}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          onChange={handleChange}
          required
        />
        <button type="submit" className={s.FormBtn}>
          Add contact
        </button>
      </form>
    </div>
  );
}
ContactForm.propTypes = {
  name: PropTypes.string,
  number: PropTypes.number,
  onSubmit: PropTypes.func.isRequired,
};

export default ContactForm;
