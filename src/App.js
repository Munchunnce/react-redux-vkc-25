
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Provider } from 'react-redux';
import store from './store/store';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Navigation from './components/Navigation';



function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
        <Navigation/>
          <Routes>
            <Route exact path='/' element={<Home/>}></Route>
            <Route path='/cart' element={<Cart/>}></Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
