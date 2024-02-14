import React, { useState } from 'react';
import Modal from 'react-modal';
import Layout from "../../Layout/Layout"

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

const MyModal = ({ isOpen, handleClose }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={handleClose}
      contentLabel="My Modal"
      style={customStyles}
    >
      <h2>My Modal</h2>
      <button onClick={handleClose}>Close Modal</button>
    </Modal>
  );
};

const Blog = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <Layout>
      <button onClick={openModal}>Open Modal</button>
      <MyModal isOpen={modalIsOpen} handleClose={closeModal} />
    </Layout>
  );
};

export default Blog


