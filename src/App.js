import './App.css';

import Card from './components/Card/Card';
import NavigationItems from './components/Navigation/NavigationItems/NavigationItems';

function App() {
  return (
    <div className="App">
      <NavigationItems />
      <h1>Hi</h1>
      <Card />
      <Card />
      <Card />
    </div>
  );
}

export default App;
