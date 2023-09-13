import { useState } from 'react';
import ButtonLearnMore from './ButtonLearnMore/ButtonLearnMore';
import Card from './Card/Card';
import Modal from './Modal/Modal';
import BackDrop from './BackDrop/BackDrop';

export const App = () => {
  const [isShowModal, setIsShowModal] = useState(false);
  const hideModal = () => {
    setIsShowModal(false);
  };
  return (
    <div
    // style={{
    //   height: '100vh',
    //   display: 'flex',
    //   justifyContent: 'center',
    //   alignItems: 'center',
    //   fontSize: 40,
    //   color: '#010101',
    // }}
    >
      <Card>
        <ButtonLearnMore setIsShowModal={setIsShowModal} />
      </Card>

      {isShowModal && (
        <BackDrop hideModal={hideModal}>
          <Modal hideModal={hideModal} />
        </BackDrop>
      )}
    </div>
  );
};
