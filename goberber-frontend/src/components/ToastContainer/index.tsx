import React from 'react';
import { FiXCircle } from 'react-icons/fi';

import { Container, Toast } from './styles';

const ToastContainer: React.FC = () => {
  return (
    <Container>
      <Toast hasDescription>
        <button type="button">
          <div>
            <strong>teste</strong>
            <p>teste</p>
          </div>
          <FiXCircle size={18} />
        </button>
      </Toast>

      <Toast type="success" hasDescription={false}>
        <button type="button">
          <div>
            <strong>teste</strong>
          </div>
          <FiXCircle size={18} />
        </button>
      </Toast>

      <Toast type="error" hasDescription>
        <button type="button">
          <div>
            <strong>teste</strong>
            <p>teste</p>
          </div>
          <FiXCircle size={18} />
        </button>
      </Toast>
    </Container>
  );
};

export default ToastContainer;
