import "./Item.css";

export const Item = ({ name, description, price, imageUrl, children }) => {

  return (
    <article className="product-item">
      <img src={imageUrl} className="product-image" />
      <h2 className="product-title">{name}</h2>
      <p>Descripcion: {description}</p>
      <p>Precio: ${price}</p>
    
      {children}
    </article>
  );
};
