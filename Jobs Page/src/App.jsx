import { useEffect, useState } from 'react';
import JobInfo from './Components/JobInfo';
import BtnContainer from './Components/BtnContainer';

const url = 'https://course-api.com/react-tabs-project';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [jobs, setJobs] = useState([]);
  const [currentItem, setCurrentItem] = useState(0);

  const fetchData = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setJobs(data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (isLoading) {
    return (
      <section className='jobs-center'>
        <div className='loading'></div>
      </section>
    );
  }
  return (
    <section className='jobs-center'>
      <BtnContainer
        jobData={jobs}
        setCurrentItem={setCurrentItem}
        currentItem={currentItem}
      />
      <JobInfo jobData={jobs} currentItem={currentItem} />
    </section>
  );
};
export default App;
