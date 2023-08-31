import React from 'react';
import Question from './Question';

const Questions = ({ setOfQuestions }) => {
  return (
    <section className='container'>
      <h1>Questions</h1>
      <div>
        {setOfQuestions.map((question) => {
          return <Question key={question.id} {...question} />;
        })}
      </div>
    </section>
  );
};

export default Questions;
