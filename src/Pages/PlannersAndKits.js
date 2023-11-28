import Header from "../components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import BackGround from "../components/BackGround";
import Heading1 from "../components/Heading1";
import Card from "../components/Card";
import img from "../images/Images.jpg";
import img1 from "../images/Images (1).jpg";
import Footer from "../components/Footer";
const products = [
  {
    id: 1,
    name: "Calander Book",
    image: img,
    rating: 4,
    price: 2199,
    text1: "Al Karam",
    text2: "(4.1k) Customer Reviews",
  },
  {
    id: 2,
    name: "Mini Calander",
    image: img1,
    rating: 5.5,
    price: 239,
    text1: "Al Karam",
    text2: "(4.1k) Customer Reviews",
  },
  {
    id: 3,
    name: "Product 3",
    image: img1,
    rating: 4,
    price: 29.99,
    text1: "Al Karam",
    text2: "(4.1k) Customer Reviews",
  },
  {
    id: 4,
    name: "Product 4",
    image: img,
    rating: 4.5,
    price: 12.99,
    text1: "Al Karam",
    text2: "(4.1k) Customer Reviews",
  },
  {
    id: 5,
    name: "Product 5",
    image: img1,
    rating: 4,
    price: 425,
    text1: "Al Karam",
    text2: "(4.1k) Customer Reviews",
  },
  {
    id: 6,
    name: "Product 6",
    image: img,
    rating: 4,
    price: 257,
    text1: "Al Karam",
    text2: "(4.1k) Customer Reviews",
  },
];

const CardList = ({ products }) => {
  return (
    <div className="card-list">
      {products.map((product) => (
        <Card key={product.id} product={product} />
      ))}
    </div>
  );
};

function PlannerAndKits() {
  return (
    <div className="App">
      <Header />
      <BackGround />
      <Heading1 />

      <CardList products={products} />
      <Footer />
    </div>
  );
}

export default PlannerAndKits;
