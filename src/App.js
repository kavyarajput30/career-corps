import "./App.css";
import MainContent from "./components/navbar/MainContent";
import MainLogo from "./components/navbar/MainLogo";
import LoginSection from "./components/navbar/LoginSection";
import MainBox from "./components/second-component/MainBox";
import Partners from "./components/third-component/Partners";
import MainFooter from "./components/footer/MainFotter";
import UpperSection from "./components/first-component/UpperSection";
import LowerSection from "./components/first-component/LowerSection";
import Ellipce from "./components/first-component/Ellipce";
function App() {
  return (
    <div>
      <div id="navbar">
        <MainLogo></MainLogo>
        <MainContent></MainContent>
        <LoginSection></LoginSection>
      </div>
      <div id="first_section">
        <Ellipce/>
        <UpperSection />
        <LowerSection />
      </div>

      <MainBox></MainBox>
      <Partners></Partners>
      <MainFooter></MainFooter>
    </div>
  );
}

export default App;
