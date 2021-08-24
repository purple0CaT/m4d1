import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import MyNavbar from './component/MyNavbar';
import Home from './component/Home';

function App() {
  return (
    <>
      <MyNavbar title="SomeStoraunt" color='light'/>
      <div><h1 className='text-center'>Hello</h1></div>
      <Home />
    </>
  );
}
export default App;
