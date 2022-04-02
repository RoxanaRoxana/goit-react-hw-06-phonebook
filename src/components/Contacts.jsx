import PropTypes from 'prop-types';
import styles from './Contacts.module.css';
import { useSelector } from 'react-redux';
import { selectFilter, selectContacts } from 'features/contactSlice';
import Contact from './Contact';


export default function Contacts() {
  let contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);

  const getFilteredContacts = () => {
    return contacts.filter(contact =>
      contact.name?.toLowerCase().includes(filter)
    );
  };


  contacts = getFilteredContacts();

  return (
    <>
      <ul className={styles.contact__list}>
        {contacts.map(item => (
          <Contact
            id={item.id}
            key={item.id}
            name={item.name}
            number={item.number}
          />
        ))}
      </ul>
    </>
  );
}

// export const Contacts = ({ contacts, onDeleteContact }) => {
//   return (
//     <>
//       <ul className={styles.contact__list}>
//         {contacts.map(({ id, name, number }) => (
//           <li key={id} className={styles.contact__item}>
//             <p className={styles.contact__text}>{name}:</p>
//             <p className={styles.contact__text}>{number}</p>
//             <button
//               onClick={() => onDeleteContact(id)}
//               className={styles.contact__button}
//             >
//               Delete
//             </button>
//           </li>
//         ))}
//       </ul>
//     </>
//   );
// };

Contacts.propTypes = {
  contacts: PropTypes.array,
  onDeleteContact: PropTypes.func,
};
