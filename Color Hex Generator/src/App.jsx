import Form from './Components/Form';
import ColorList from './Components/ColorList';
import Values from 'values.js';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';

const App = () => {
  const [colors, setColors] = useState(new Values('#000000').all(10));

  const newColor = (color) => {
    try {
      const newValue = new Values(color).all(10);
      setColors(newValue);
    } catch (error) {
      toast.error(error.message);
    }
  };
  return (
    <main>
      <Form newColor={newColor} />
      <ColorList colors={colors} />
      <ToastContainer position='top-center' />
    </main>
  );
};
export default App;
