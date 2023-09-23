import Modal from 'react-bootstrap/Modal';
import { useSelector } from 'react-redux';

const CustomModal = ({id, showPopup, setShowPopup}) => {
  const allUsers = useSelector(state => state.app.users);
  console.log(showPopup);
  const user = allUsers.find(user => user.id === id);

  const {name, email, gender, age} = user;
  return (
      <div
        className="modal show"
        style={{ position: 'absolute', top:0, bottom: 0, right:0,
          display: 'flex', justifyContent: 'center',
          backgroundColor: 'black', alignItems: 'center', zIndex: 99,
          opacity: 0.8
        }}
      >
      <Modal.Dialog className='w-75'>
        <Modal.Header closeButton onClick={() => setShowPopup(false)}>
          <Modal.Title>Users Info</Modal.Title>
        </Modal.Header>

        <Modal.Body >
          <h4 className='text-capitalize'>Name: {name}</h4>
          <h4>Email: {email}</h4>
          <h4 className='text-capitalize'>Age: {age}</h4>
          <h4 className='text-capitalize'>Gender: {gender}</h4>
        </Modal.Body>

      </Modal.Dialog>
    </div>
  );
};

export default CustomModal;