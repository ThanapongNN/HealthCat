import React from 'react'
import { Router, Scene } from 'react-native-router-flux'

import LoginPageEN from './components/pageEN/LoginPageEN';
import ProfilePageEN from './components/pageEN/ProfilePageEN';
import CatPageEN from './components/pageEN/CatPageEN';
import VaccinePageEN from './components/pageEN/VaccinePageEN';
import AddVaccinePageEN from './components/pageEN/AddVaccinePageEN';
import EditVaccinePageEN from './components/pageEN/EditVaccinePageEN';
import TipsPageEN from './components/pageEN/TipsPageEN';
import Tips01EN from './components/pageEN/Tips01EN';
import Tips02EN from './components/pageEN/Tips02EN';
import Tips03EN from './components/pageEN/Tips03EN';
import ContactPageEN from './components/pageEN/ContactPageEN';

import LoginPageTH from './components/pageTH/LoginPageTH';
import ProfilePageTH from './components/pageTH/ProfilePageTH';
import CatPageTH from './components/pageTH/CatPageTH';
import VaccinePageTH from './components/pageTH/VaccinePageTH';
import AddVaccinePageTH from './components/pageTH/AddVaccinePageTH';
import EditVaccinePageTH from './components/pageTH/EditVaccinePageTH';
import TipsPageTH from './components/pageTH/TipsPageTH';
import Tips01TH from './components/pageTH/Tips01TH';
import Tips02TH from './components/pageTH/Tips02TH';
import Tips03TH from './components/pageTH/Tips03TH';
import ContactPageTH from './components/pageTH/ContactPageTH';

const Routes = () => (
   <Router>
      <Scene key = "root">
         <Scene key = "loginEN" component = {LoginPageEN}  hideNavBar={ true }/>
         <Scene key = "profileEN" component = {ProfilePageEN} initial = {true} hideNavBar={ true }/>
         <Scene key = "catEN" component = {CatPageEN} hideNavBar={ true }/>
         <Scene key = "vaccineEN" component = {VaccinePageEN} hideNavBar={ true }/>
         <Scene key = "addvaccineEN" component = {AddVaccinePageEN} hideNavBar={ true }/>
         <Scene key = "editvaccineEN" component = {EditVaccinePageEN} hideNavBar={ true }/>
         <Scene key = "tipsEN" component = {TipsPageEN} hideNavBar={ true }/>
         <Scene key = "tips01EN" component = {Tips01EN} hideNavBar={ true }/>
         <Scene key = "tips02EN" component = {Tips02EN} hideNavBar={ true }/>
         <Scene key = "tips03EN" component = {Tips03EN} hideNavBar={ true }/>
         <Scene key = "contactEN" component = {ContactPageEN} hideNavBar={ true }/>

         <Scene key = "loginTH" component = {LoginPageTH} hideNavBar={ true }/>
         <Scene key = "profileTH" component = {ProfilePageTH} hideNavBar={ true }/>
         <Scene key = "catTH" component = {CatPageTH} hideNavBar={ true }/>
         <Scene key = "vaccineTH" component = {VaccinePageTH} hideNavBar={ true }/>
         <Scene key = "addvaccineTH" component = {AddVaccinePageTH} hideNavBar={ true }/>
         <Scene key = "editvaccineTH" component = {EditVaccinePageTH} hideNavBar={ true }/>
         <Scene key = "tipsTH" component = {TipsPageTH} hideNavBar={ true }/>
         <Scene key = "tips01TH" component = {Tips01TH} hideNavBar={ true }/>
         <Scene key = "tips02TH" component = {Tips02TH} hideNavBar={ true }/>
         <Scene key = "tips03TH" component = {Tips03TH} hideNavBar={ true }/>
         <Scene key = "contactTH" component = {ContactPageTH} hideNavBar={ true }/>
      </Scene>
   </Router>
)
export default Routes
