import { useState } from 'react';
import Title from './Components/Title';
import data from './data';
import Menu from './Components/Menu';
import Categories from './Components/Categories';

const allCategories = ['all', ...new Set(data.map((item) => item.category))];

const App = () => {
  const [menu, setMenu] = useState(data);
  const [foodCategory, setFoodCategory] = useState(allCategories);

  //filter func
  const filterCategory = (category) => {
    if (category === 'all') {
      setMenu(data);
      return;
    }
    const newList = data.filter((item) => item.category === category);
    setMenu(newList);
  };

  return (
    <main className='menu'>
      <Title text='Our Menu' />
      <Categories categories={foodCategory} filter={filterCategory} />
      <Menu menus={menu} />
    </main>
  );
};
export default App;
