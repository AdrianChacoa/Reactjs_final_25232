import { useState } from "react";
import { ProductFormUI } from "../ProductFormUI/ProductFormUI";
import { validateProduct } from "../../../utils/validateProducts";
import { uploadToImgbb } from "../../../services/uploadImage";
import { createProduct } from "../../../services/products";
import "../ProductFormContainer/ProductFormContainer.css";

export const ProductFormContainer = () => {
  // ✅ Cambios en los estados iniciales
  const [loading, setLoading] = useState(false); 
  const [errors, setErrors] = useState({}); // Cambiado "" por {}
  const [file, setFile] = useState(null);
  const [product, setProduct] = useState({
    name: "",
    price: "",
    category: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors({}); // Limpia errores previos
    setLoading(true);

    // Validación
    const newErrors = validateProduct({ ...product, file });
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setLoading(false);
      return;
    }

    try {
      // 1. Subir imagen
      const imageUrl = await uploadToImgbb(file);
      
      // 2. Preparar data (Asegúrate que el backend/Firebase espere estos nombres de campos)
      const productData = {
        ...product,
        price: Number(product.price),
        imageUrl,
        createdAt: new Date() // Opcional: útil para ordenar productos
      };

      // 3. Crear en la DB
      await createProduct(productData);
      
      alert("✅ Producto cargado con éxito");

      // 4. Resetear formulario
      setProduct({ name: "", price: "", category: "", description: "" });
      setFile(null);
      
    } catch (error) {
      console.error("Error en el alta:", error);
      setErrors({ general: "No se pudo cargar el producto. Intente nuevamente." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <ProductFormUI
      product={product}
      errors={errors}
      onChange={handleChange}
      onFileChange={(selectedFile) => setFile(selectedFile)} 
      loading={loading}
      onSubmit={handleSubmit}
    />
  );
};