import './App.css';
import Header from '../components/header';
import Subreddit from '../components/subredditList';
import SelectedSubreddit from '../features/selectedSubreddit/selectedSubreddit';

function App() {
  return (
    <div className="App">
    <Header/>
        <div className='grid'>
          <div className='subreddit'>
            <Subreddit />
            </div>
          <div className='post'>
           <SelectedSubreddit />
          </div>
   
    </div>
    </div>
  );
}

export default App;
