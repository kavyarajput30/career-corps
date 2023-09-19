
import './App.css';
import MainContent from './components/navbar/MainContent';
import MainLogo from './components/navbar/MainLogo';
import LoginSection from './components/navbar/LoginSection';
import Component from './components/first-component/Component';
import MainBox from './components/second-component/MainBox';
import Partners from './components/third-component/Partners';
import MainFooter from './components/footer/MainFotter';
function App() {
  return (
    <div>
    <div className='navbar'>
       <MainLogo></MainLogo>
       <MainContent></MainContent>
       <LoginSection></LoginSection>
    </div >
    <Component></Component>
    <MainBox></MainBox>
    <Partners></Partners>
    <MainFooter></MainFooter>

    </div>

  );
}

export default App;
