import './App.css';
import {BrowserRouter,Route, Routes} from 'react-router-dom'
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import Cognizance from './Components/Cognizance';
import Services from './Components/Services';
import Contact from './Components/Contact';
import About from './Components/About';
import Careers from './Components/Careers';
import Search from './Components/Search';
import MobileAppDevelopment from './Components/MobileAppDevelopment';
import IOSAppDevelopment from './Components/IOSAppDevelopment';
import AnroidAppDevelopment from './Components/AnroidAppDevelopment';
import ContentWritting from './Components/ContentWritting';
import CloudSolutions from './Components/CloudSolutions';
import DevOpsService from './Components/DevOpsService';
import PHPWebDevelopment from './Components/PHPWebDevelopment';
import SaaSDevelopment from './Components/SaaSDevelopment';
import WebDesign from './Components/WebDesign';
import UiUxDesign from './Components/UiUxDesign';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import CyberspaceSafety from './Components/CyberspaceSafety';
import GrowYourBusiness from './Components/GrowYourBusiness';
import BenefitsOfPhp from './Components/BenefitsOfPhp';
import CustomSoftwareDevelopment from './Components/CustomSoftwareDevelopment';
import ChooseRightPhp from './Components/ChooseRightPhp';
import BestWebDevelopment from './Components/BestWebDevelopment';
import BestAndroidApp from './Components/BestAndroidApp';
import BuildDedicatesSoftware from './Components/BuildDedicatesSoftware';
import SaasApplication from './Components/SaasApplication';
import Client from './Components/Client';
import SearchJob from './Components/SearchJob';
import PageNotFound from './Components/PageNotFound';
import ScrollToTop from './Components/ScrollToTop';
import Signin from './Components/Signin';
import Signup from './Components/Signup';
import Forgotpassword from './Components/Forgotpassword';
import Resetpassword from './Components/Resetpassword';
import AllUsers from './Components/AllUsers';
import EditUser from './Components/EditUser';
import AddUser from './Components/AddUser';
import SingleUser from './Components/SingleUser';
import VerifyOTP from './Components/VerifyOTP';

function App() {
  return (
    <>
        <BrowserRouter>
        <ScrollToTop/>
          <Navbar/>
          <div className="socialicondiv d-none d-md-block">
            <div className='p-2 socialicon'>
              <a href="https://eminenceinnovation.com/" target="_blank"><WhatsAppIcon fontSize='large'/></a>
            </div>
           <div className='p-2 socialicon'>
              <a href="https://www.instagram.com/eminence_innovation/" target="_blank"><InstagramIcon fontSize='large'/></a>
           </div>
           <div className='p-2 socialicon'>
              <a href="https://twitter.com/innovation_ei" target="_blank"><TwitterIcon fontSize='large'/></a>
           </div>
           <div className='p-2 socialicon'>
              <a href="https://www.linkedin.com/company/eminence-innovation/" target="_blank"><LinkedInIcon fontSize='large'/></a>
           </div>
          </div>
          <Routes>
            <Route exact path='/' element={<Home/>}></Route>
            <Route exact path='/signin' element={<Signin/>}></Route>
            <Route exact path='/signup' element={<Signup/>}></Route>
            <Route exact path='/forgotpassword' element={<Forgotpassword/>}></Route>
            <Route exact path='/verifyotp' element={<VerifyOTP/>}></Route>
            <Route exact path='/resetpassword' element={<Resetpassword/>}></Route>
            <Route exact path='/allusers' element={<AllUsers/>}></Route>
            <Route exact path='/user' element={<SingleUser/>}></Route>
            <Route exact path='/updateuser' element={<EditUser/>}></Route>
            <Route exact path='/addUser' element={<AddUser/>}></Route>
            <Route exact path='/cognizance' element={<Cognizance/>}></Route>
            <Route exact path='/services' element={<Services/>}></Route>
            <Route exact path='/contact' element={<Contact/>}></Route>
            <Route exact path='/about' element={<About/>}></Route>
            <Route exact path='/careers' element={<Careers/>}></Route>
            <Route exact path='/search' element={<Search/>}></Route>
            <Route exact path='/services/mobile-app-development' element={<MobileAppDevelopment/>}></Route>
            <Route exact path='/services/ios-app-development' element={<IOSAppDevelopment/>}></Route>
            <Route exact path='/services/android-app-development' element={<AnroidAppDevelopment/>}></Route>
            <Route exact path='/services/web-design' element={<WebDesign/>}></Route>
            <Route exact path='/services/content-writing' element={<ContentWritting/>}></Route>
            <Route exact path='/services/php-web-development' element={<PHPWebDevelopment/>}></Route>
            <Route exact path='/services/devops-service' element={<DevOpsService/>}></Route>
            <Route exact path='/services/saas-development' element={<SaaSDevelopment/>}></Route>
            <Route exact path='/services/ui-ux-design' element={<UiUxDesign/>}></Route>
            <Route exact path='/services/cloud-solutions' element={<CloudSolutions/>}></Route>
            <Route exact path='/cognizance/cyberspace-safety-initiatives-by-india' element={<CyberspaceSafety/>}></Route>
            <Route exact path='/cognizance/grow-your-business-with-custom-mobile-apps' element={<GrowYourBusiness/>}></Route>
            <Route exact path='/cognizance/benefits-of-PHP-in-web-development' element={<BenefitsOfPhp/>}></Route>
            <Route exact path='/cognizance/custom-software-development-to-expand-your-business' element={<CustomSoftwareDevelopment/>}></Route>
            <Route exact path='/cognizance/choose-right-php-development-company' element={<ChooseRightPhp/>}></Route>
            <Route exact path='/cognizance/saas-application-development' element={<SaasApplication/>}></Route>
            <Route exact path='/cognizance/build-dedicates-software-development-team' element={<BuildDedicatesSoftware/>}></Route>
            <Route exact path='/cognizance/find-best-web-development-company' element={<BestWebDevelopment/>}></Route>
            <Route exact path='/cognizance/find-best-android-app-development-company' element={<BestAndroidApp/>}></Route>
            <Route exact path='/clients' element={<Client/>}></Route>
            <Route exact path='/jobs-search' element={<SearchJob/>}></Route>
            <Route exact path='/404' element={<PageNotFound/>}></Route>
          </Routes>
        </BrowserRouter>
    </>
  );
}

export default App;
