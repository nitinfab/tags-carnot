import './App.css';
import TagsInput from './Tags';

const App = () => {
  const selectedTags = tags => console.log(tags);
  
  return (
      <div className="App">
          <TagsInput selectedTags={selectedTags} maxTagCount="10"/>
      </div>
  );
};

export default App;
