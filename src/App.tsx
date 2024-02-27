import { BrowserRouter, Route, Routes } from 'react-router-dom';
import IndexPage from './pages/index';
import ListPage from './pages/list';
import DetailPage from './pages/detail';

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<IndexPage/>} />
          <Route path="/list" element={<ListPage/>} />
          <Route path="/detail/:id" element={<DetailPage/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
