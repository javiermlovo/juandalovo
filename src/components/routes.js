import { Navigate, Route, Routes} from 'react-router-dom';
import Home from '../pages/home';
import About from '../pages/about';
import Contact from '../pages/contact';
import Portrait from '../pages/porfolio/portrait';
import Product from '../pages/porfolio/product';
import Corporative from '../pages/porfolio/corporative';
import Architectural from '../pages/porfolio/architectural';

export default function Rutas(){
    return(
        <Routes>
            <Route
                path=''
                element={<Navigate to={'/home'} replace/>}
            />
            <Route
                path='*'
                element={<Navigate to={'/home'} replace/>}
            />
            <Route
                path='/'
                element={<Navigate to={'/home'} replace/>}
            />
            <Route
                path='/home'
                element={<Home/>}
            />
            <Route
                path='/about'
                element={<About/>}
            />
            <Route
                path='/contact'
                element={<Contact/>}
            />
            <Route
                path='/porfolio/portrait'
                element={<Portrait/>}
            />
            <Route
                path='/porfolio/product'
                element={<Product/>}
            />
            <Route
                path='/porfolio/corporative'
                element={<Corporative/>}
            />
            <Route
                path='/porfolio/architectural'
                element={<Architectural/>}
            />
        </Routes>
    )
}