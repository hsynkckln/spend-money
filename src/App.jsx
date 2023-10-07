import logo from './logo.svg';
import './App.css';
import { SpentProvider } from './context/SpendMoney';
import Container from './components/Container';

function App() {
  return (
    <SpentProvider>
      <Container></Container>
    </SpentProvider>
  );
}

export default App;
