import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import AuthScreen from './components/AuthScreen';
import PlansScreen from './components/PlansScreen';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AuthScreen />} />
        <Route path="/plans" element={<PlansScreen />} />
        <Route
          path="/dashboard"
          element={
            <div style={{ padding: 50, textAlign: 'center' }}>
              <h1>🚧 Dashboard в разработке</h1>
              <p>Сделаем следующим!</p>
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;