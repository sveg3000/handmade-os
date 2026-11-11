import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import AuthScreen from './components/AuthScreen';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AuthScreen />} />
        <Route path="/plans" element={<div style={{ padding: 50 }}>Экран подписки (сделаем следующим!)</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;