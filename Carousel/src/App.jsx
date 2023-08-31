import Carousel from './Components/Carousel';
import { shortList, list, longList } from './data';

const App = () => {
  return (
    <main>
      <Carousel data={longList} />
    </main>
  );
};
export default App;
