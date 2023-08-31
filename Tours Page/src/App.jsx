import { useEffect, useState } from 'react';
import Tours from './Components/Tours';
import Loading from './Components/Loading';

const url = 'https://course-api.com/react-tours-project';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [tourPack, setTourPack] = useState([]);

  //function for removing tour
  const removeTour = (id) => {
    const newSetTour = tourPack.filter((tour) => tour.id !== id);
    setTourPack(newSetTour);
    console.log(newSetTour);
  };
  //fetching data outside useEffect block code
  const fetchData = async () => {
    setIsLoading(true);
    try {
      const resp = await fetch(url);
      const data = await resp.json();
      console.log(data);
      setTourPack(data);
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  };
  //to render at first load only
  useEffect(() => {
    fetchData();
  }, []);
  //show loading GIF loading
  if (isLoading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }
  //message if no tours are presented
  if (tourPack.length === 0) {
    return (
      <main>
        <div className='title'>
          <h2>No Tours Left</h2>
          <button
            type='button'
            style={{ marginTop: '2rem' }}
            className='btn'
            onClick={fetchData}
          >
            refresh
          </button>
        </div>
      </main>
    );
  }

  return (
    <main>
      <Tours tours={tourPack} removeTour={removeTour} />
    </main>
  );
};
export default App;
