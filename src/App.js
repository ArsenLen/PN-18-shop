import './App.css';
import Header from './components/Header/Header';
import Breadcrumbs from './components/Breadcrumbs/Breadcrumbs';
import { Route, Routes } from 'react-router-dom';
import CatalogPage from './pages/CatalogPage/CatalogPage'
import AccountPage from './pages/AccountPage/AccountPage';
import HomePage from './pages/HomePage/HomePage'
import Footer from './components/Footer/Footer';
import SingleProductPage from './pages/SingleProductPage/SingleProductPage';
import CartPage from './pages/CartPage/CartPage';
import CheckoutPage from './pages/CheckoutPage/CheckoutPage';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/catalog" element={<CatalogPage />} />
        <Route path="/account" element={<AccountPage />} />
        <Route path="/product/:id" element={<SingleProductPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
