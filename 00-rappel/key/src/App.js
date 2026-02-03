import ProductList from "./ProductList";

function App() {
  const products = [
    {
      id: 1,
      name: "Produit 1",
      price: 10.99,
      description: "Description du produit 1...",
      image: "https://picsum.photos/200/300/?random=1",
    },
    {
      id: 2,
      name: "Produit 2",
      price: 19.99,
      description: "Description du produit 2...",
      image: "https://picsum.photos/200/300/?random=2",
    },
    {
      id: 3,
      name: "Produit 3",
      price: 14.99,
      description: "Description du produit 3...",
      image: "https://picsum.photos/200/300/?random=3",
    },
  ];

  return (
    <>
      <ProductList products={products} />
    </>
  );
}

export default App;
