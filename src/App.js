import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import './App.css';
import FirstPage2 from './containers/firstPage/FirstPage2';
import HomeAr from './containers/HomeAr';
import Contact from './containers/contact/Contact';
import ContactEn from './containers/contact/ContactEn';
import Rice from './components/products/rice/Rice';
import RiceEn from './components/products/rice/RiceEn';
import Ahlia from './containers/ahlia/Ahlia';
import AhliaEn from './containers/ahlia/AhliaEn';
import Alia from './containers/alia/Alia';
import AliaEn from './containers/alia/AliaEn';
import Oufuq from './containers/oufuq/Oufuq';
import OufuqEn from './containers/oufuq/OufuqEn';
import ProductDaffa from './containers/product/ProductDaffa';
import ProductDaffaEn from './containers/productEn/ProductDaffaEn';
import ProductWhiteRose from './containers/product/ProductWhiteRose';
import ProductWhiteRoseEn from './containers/productEn/ProductWhiteRoseEn';
import ProductSakhaa from './containers/product/ProductSakhaa';
import ProductSakhaaEn from './containers/productEn/ProductSakhaaEn';
import ProductMonafess from './containers/product/ProductMonafess';
import ProductMonafessEn from './containers/productEn/ProductMonafessEn';
import ProductGhassen from './containers/product/ProductGhassen';
import ProductGhassenEn from './containers/productEn/ProductGhassenEn';
import ProductWatani from './containers/product/ProductWatani';
import ProductWataniEn from './containers/productEn/ProductWataniEn';
import ProductSamaha from './containers/product/ProductSamaha';
import ProductSamahaEn from './containers/productEn/ProductSamahaEn';
import ProductWafer1 from './containers/product/ProductWafer1';
import ProductWafer2 from './containers/product/ProductWafer2';
import ProductWafer3 from './containers/product/ProductWafer3';
import ProductWafer4 from './containers/product/ProductWafer4';
import OilProduct from './containers/product/OilProduct';
import OilProduct2 from './containers/product/Oil2Product';
import Pasta1Product from './containers/product/Pasta1Product';
import Pasta2Product from './containers/product/Pasta2Product';


import OurMessage from './containers/ourMessage/OurMessage';
import OurMessageEn from './containers/ourMessage/OurMessageEn';
import OurProfile from './containers/ourProfile/OurProfile';
import OurProfileEn from './containers/ourProfile/OurProfileEn';
import OurHistory from './containers/ourHistory/OurHistory';
import OurHistoryEn from './containers/ourHistory/OurHistoryEn';

import OurProducts from './containers/ourProducts/OurProducts';
import OurProductsEn from './containers/ourProducts/OurProductsEn';
import Origins from './containers/origins/Origins';
import OriginsEn from './containers/origins/OriginsEn';
import Stores from './containers/stores/Stores';
import StoresEn from './containers/stores/StoresEn';
import Charity from './containers/charity/Charity';
import Employees from './containers/employees/Employees';
import Trucks from './containers/trucks/Trucks';
import TrucksEn from './containers/trucks/TrucksEn';

import Sakhaa from './containers/sakhaa/Sakhaa';
import SakhaaEn from './containers/sakhaa/SakhaaEn';
import SakhaaPasta from './containers/sakhaa/SakhaaPasta';
import SakhaaPastaEn from './containers/sakhaa/SakhaaPastaEn';
import SakhaaOil from './containers/sakhaa/SakhaaOil';
import SakhaaOilEn from './containers/sakhaa/SakhaaOilEn';
import Raka from './containers/raka/Raka';
import RakaEn from './containers/raka/RakaEn';

import Lacasa from './containers/lacasa/Lacasa';
import Colian from './containers/colian/Colian';
import Kap from './containers/kapnera/Kap';
import KapEn from './containers/kapnera/KapEn';
import LalQilla from './containers/lalQilla/LalQilla';
import Bauducco from './containers/bauducco/Bauducco';
import Zeeba from './containers/zeeba/Zeeba';
import Mutlu from './containers/mutlu/Mutlu';
import Sunar from './containers/sunar/Sunar';


import AllProducts from './containers/allProducts/AllProducts';
import News from './containers/news/News';

import Home from './containers/Home';
import EmployeesEn from './containers/employees/EmployeesEn';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
      
          <Route path="/" exact component={FirstPage2} />
          <Switch>
            {/* Arabic Lang */}
    <Route path="/ar" exact component={HomeAr} />
    <Route path="/ar/about/message" exact component={OurMessage} />
    <Route path="/ar/about/profile" exact component={OurProfile} />
    <Route path="/ar/about/history" exact component={OurHistory} />

    <Route path="/ar/products" exact component={OurProducts} />
    <Route path="/ar/origins" exact component={Origins} />
    <Route path="/ar/stores" exact component={Stores} />
    <Route path="/ar/charity" exact component={Charity} />

    <Route path="/ar/contact" exact component={Contact} />
    <Route path="/ar/rice" exact component={Rice} />
    <Route path="/ar/ahlia" exact component={Ahlia} />
    <Route path="/ar/ahlia/1" exact component={ProductWhiteRose} />
    <Route path="/ar/ahlia/2" exact component={ProductSakhaa} />
    <Route path="/ar/ahlia/3" exact component={ProductMonafess} />
    <Route path="/ar/ahlia/4" exact component={ProductDaffa} />
    <Route path="/ar/ahlia/5" exact component={ProductGhassen} />
    <Route path="/ar/ahlia/6" exact component={ProductWatani} />
    <Route path="/ar/ahlia/7" exact component={ProductSamaha} />

    <Route path="/ar/alia" exact component={Alia} />
    <Route path="/ar/alia/2" exact component={OilProduct} />
    <Route path="/ar/alia/3" exact component={Pasta1Product} />
    <Route path="/ar/alia/4" exact component={Pasta2Product} />
    <Route path="/ar/alia/5" exact component={OilProduct2} />
    
    <Route path="/ar/oufuq" exact component={Oufuq} />

    <Route path="/ar/sakhaa" exact component={Sakhaa} />
    <Route path="/ar/sakhaa/pasta" exact component={SakhaaPasta} />
    <Route path="/ar/sakhaa/oil" exact component={SakhaaOil} />
    <Route path="/ar/raka" exact component={Raka} />
    <Route path="/ar/raka/1" exact component={ProductWafer1} />
    <Route path="/ar/raka/2" exact component={ProductWafer2} />
    <Route path="/ar/raka/3" exact component={ProductWafer3} />
    <Route path="/ar/raka/4" exact component={ProductWafer4} />

    <Route path="/ar/lacasa" exact component={Lacasa} />
    <Route path="/ar/colian" exact component={Colian} />
    <Route path="/ar/kapnera" exact component={Kap} />
    <Route path="/ar/lalqilla" exact component={LalQilla} />
    <Route path="/ar/bauducco" exact component={Bauducco} />
    <Route path="/ar/zeeba" exact component={Zeeba} />
    <Route path="/ar/mutlu" exact component={Mutlu} />
    <Route path="/ar/sunar" exact component={Sunar} />
    
    
    <Route path="/ar/products" exact component={AllProducts} />
    <Route path="/ar/news" exact component={News} />
    <Route path="/ar/employees" exact component={Employees} />
    <Route path="/ar/trucks" exact component={Trucks} />
  {/* English Lang */}
  <Route path="/en" exact component={Home} />
  <Route path="/en/about/profile" exact component={OurProfileEn} />
  <Route path="/en/products" exact component={OurProductsEn} />
  <Route path="/en/origins" exact component={OriginsEn} />
  <Route path="/en/trucks" exact component={TrucksEn} />
  <Route path="/en/stores" exact component={StoresEn} />
  <Route path="/en/employees" exact component={EmployeesEn} />

  <Route path="/en/about/message" exact component={OurMessageEn} />
  <Route path="/en/kapnera" exact component={KapEn} />
  <Route path="/en/about/history" exact component={OurHistoryEn} />
  <Route path="/en/ahlia" exact component={AhliaEn} />
  <Route path="/en/ahlia/1" exact component={ProductWhiteRoseEn} />
  <Route path="/en/ahlia/2" exact component={ProductSakhaaEn} />
  <Route path="/en/ahlia/3" exact component={ProductMonafessEn} />
  <Route path="/en/ahlia/4" exact component={ProductDaffaEn} />
  <Route path="/en/ahlia/5" exact component={ProductGhassenEn} />
  <Route path="/en/ahlia/6" exact component={ProductWataniEn} />
  <Route path="/en/ahlia/7" exact component={ProductSamahaEn} />
  <Route path="/en/alia" exact component={AliaEn} />
  <Route path="/en/raka" exact component={RakaEn} />
  <Route path="/en/sakhaa/oil" exact component={SakhaaOilEn} />
  <Route path="/en/sakhaa/pasta" exact component={SakhaaPastaEn} />
  <Route path="/en/sakhaa" exact component={SakhaaEn} />

  <Route path="/en/contact" exact component={ContactEn} />
  <Route path="/en/rice" exact component={RiceEn} />


  <Route path="/en/oufuq" exact component={OufuqEn} />
    </Switch>

  
    </div>
  </BrowserRouter>  
  );
}

export default App;
