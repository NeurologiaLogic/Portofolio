import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Fullpage,{FullpageNavigation} from '@ap.cx/react-fullpage'
import PageController from './Pages/PageController';
function App() {
  return (
     <div className="App">
      <Fullpage>
        <FullpageNavigation />
        <PageController/>
      </Fullpage>
    </div>
  );
}

export default App;
