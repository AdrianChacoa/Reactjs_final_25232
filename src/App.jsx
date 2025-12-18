import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
import { MainLayout } from "./Layouts/MainLayout"; 
import { AdminLayout } from "./Layouts/AdminLayout";
import { Cart } from "./components/Cart/Cart";
import { ProductFormContainer } from "./components/adminComponents/ProductFormContainer/ProductFormContainer";
import { RutaProtegida } from "./components/RutaProtegida/RutaProtegida";
import { Login } from "./components/Login/Login";
import { Footer } from "./components/Footer/Footer";
import { AuthProvider } from './context/CartContext/AuthContext/AuthProvider'; 
import { CartProvider } from './context/CartContext/CartProvider';

function App() {
  return (
    <AuthProvider> 
      <CartProvider>
        <BrowserRouter>
            <Routes>
             <Route element={<MainLayout />}>
              <Route path="/" element={<ItemListContainer titulo={"Case PRO"} />} />
              <Route path="/category/:category" element={<ItemListContainer titulo={"CasePRO"} />} />
              <Route path="/detail/:id" element={<ItemDetailContainer />} />
              <Route path="/carrito" element={<Cart />} />
             </Route>

            
            <Route path="/admin" element={<AdminLayout />}>
              <Route index element={<Login />} />
            <Route
                path="alta-productos"
                element={
                <RutaProtegida>
                    <ProductFormContainer />
                </RutaProtegida>
                }
              />
            </Route>
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;