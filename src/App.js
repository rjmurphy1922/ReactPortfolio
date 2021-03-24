// import logo from './logo.svg';
import bootstrap from 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import Header from "./components/Header"
import Projects from "./components/Projects"
import MyInfo from "./components/MyInfo"
import Footer from "./components/Footer"



function App() {
  return (
    <div>
      <Header />
      <Projects />
      <MyInfo />
      <Footer />
    </div>
  );
}

export default App;
