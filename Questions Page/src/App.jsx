import { useState } from 'react';
import Questions from './assets/Components/Questions';
import data from './data';

const App = () => {
  const [questions, setQuestions] = useState(data);
  const [expand, setExpand] = useState(false);

  return (
    <main>
      <Questions setOfQuestions={questions} />
    </main>
  );
};
export default App;
