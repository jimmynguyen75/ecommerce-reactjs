import React, { useState } from 'react';
import { Button, Modal } from 'antd';
import { useEffect } from 'react';

type Props = {
    showModal: boolean;
  };
function PredictionModal({showModal}: Props) {
  const [isModalOpen, setIsModalOpen] = useState(false);

//   const showModal = () => {
//     setIsModalOpen(true);
//   };
 
 useEffect(() => {
    setIsModalOpen(showModal)
}, []);
  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </>
  );
};

export default PredictionModal;