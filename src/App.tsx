import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { PageMain } from './pages/main';

const App = () => (
  <>
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<PageMain />} />
        </Routes>
    </BrowserRouter>
  </>
);

export default App;