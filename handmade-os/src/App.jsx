import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AuthScreen from './components/AuthScreen';
import PlansScreen from './components/PlansScreen';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AuthScreen />} />
        <Route path="/plans" element={<PlansScreen />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;