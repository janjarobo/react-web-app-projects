import React, { useState } from 'react';
import { data } from './data';
import List from './components/List';

const App = () => {
  const [people, setPeople] = useState(data);

  //func to delete per person

  const deletePerson = (id) => {
    let newPeople = people.filter((person) => person.id !== id);
    setPeople(newPeople);
  };

  //func to delete all
  const deletePeople = () => {
    setPeople([]);
  };

  return (
    <main>
      <div>
        <h1 style={{ marginTop: '20px' }}>
          Your {people.length} friends have birthdays today
        </h1>
        <List
          people={people}
          deletePerson={deletePerson}
          deletePeople={deletePeople}
        />
      </div>
    </main>
  );
};

export default App;
