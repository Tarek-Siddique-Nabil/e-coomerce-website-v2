import React from 'react';
import { QueryClientProvider ,QueryClient} from 'react-query';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Body from './Components/Body/Body';
import Footer from './Components/Body/Footer';
import Header from './Components/Body/Header';
import Shop from './Components/Shop/Shop';


const App = () => {
  const client = new QueryClient();
  return (
  //  <Router>
  //   <Header/>
  //  <Routes>
  //     <Route path="/" element={<Body />} />
     
  //     <Route path='/shop'  element={<Shop/>}/>
 
  //  </Routes>
  //  <Footer/>
  //  </Router>
  <div>
    <QueryClientProvider client={client}>
      <Router>
    <Header/>
   <Routes>
      <Route path="/" element={<Body />} />
     
    <Route path='/shop'  element={<Shop/>}/>
 
   </Routes>
  <Footer/>
   </Router>
      </QueryClientProvider>
  </div>
  );
};

export default App;