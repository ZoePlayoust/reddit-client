import './App.css';
import Header from '../components/header';
import CurrentSubreddit from '../features/currentSubreddit/currentSubreddit';

function App() {
  return (
    <div className="app">
    <Header/>
    <CurrentSubreddit />
    </div>
  );
}

export default App;
