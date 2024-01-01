import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import reportWebVitals from './reportWebVitals';
import App from './component/app/App';
import Layout from './component/layout/Layout';
import Home from './screen/Home';
import { About } from './screen/About';
import { Product } from './screen/Product';
import { Office } from './screen/Office';
import { News } from './screen/News';
import { Faq } from './screen/Faq';
import { Contact } from './screen/Contact';
import { Vision } from './screen/Vision';
import { Management } from './screen/Management';
import { Agency } from './screen/Agency';
import { Download } from './screen/Download';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
    <Layout>
        
   <Routes>
          <Route exact path="/" element={<Home/>}/>
          {/*<Route exact path="/aboutUs" element={<About/>}/>*/}
          <Route path="/aboutUs/*">
            <Route path=":titleAbout" element={<About />}></Route>
          </Route>
          <Route path="/product/*">
            <Route path=":title" element={<Product />}></Route>
          </Route>

         {/* <Route exact path="/product" element={<Product/>}/>
          <Route exact path="/product/:title" element={<Product/>}/>*/}
           <Route path="/office/*">
            <Route path=":titleOffice" element={<Office />}></Route>
          </Route>
          {/*<Route exact path="/office" element={<Office/>}/>*/}
          <Route exact path="/news" element={<News/>}/>
          <Route exact path="/faq" element={<Faq/>}/>
          <Route exact path="/contact" element={<Contact/>}/>
          <Route exact path="/vision" element={<Vision/>}/>
          <Route exact path="/management" element={<Management/>}/>
          <Route exact path="/agency" element={<Agency/>}/>
          <Route exact path="/download" element={<Download/>}/>
        </Routes>
      </Layout>
        </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
