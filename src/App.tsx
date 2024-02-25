import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import ListPage from './pages/list';
import DetailPage from './pages/detail';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ListPage/>} />
          <Route path="/detail/:id" element={<DetailPage/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
