import { Navigate } from 'react-router-dom';
import { useAuthContext } from '../../context/CartContext/AuthContext/useAuthContext';

export const RutaProtegida = ({ children }) => {
    const { user, loading } = useAuthContext(); 

    
    if (loading) {
        return <div>Cargando...</div>; 
    }

    if (!user) {
        return <Navigate to="/admin" />;
    }

    return children;
};