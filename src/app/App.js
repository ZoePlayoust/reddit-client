
import './App.css';
import Header from '../components/header'
import Subreddit from '../components/subredditList';
import Posts from '../components/posts';

function App() {
  return (
    <div className="App">
    <Header/>
        <div className='grid'>
          <div className='subreddit'>
            <Subreddit />
            </div>
          <div className='post'>
            <Posts />
          </div>
   
    </div>
    </div>
  );
}

export default App;
