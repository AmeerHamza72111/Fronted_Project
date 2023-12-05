import Header from "../components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import BackGround from "../components/BackGround";
import Heading1 from "../components/Heading1";
import Card from "../components/Card";
import img from "../images/image 631.jpg";
import img1 from "../images/newimg2.jpg";
import img3 from "../images/newimg1.jpg";
import Footer from "../components/Footer";
import { useState, useEffect } from "react";
import axios from "axios";

// const products = [
//   {
//     id: 1,
//     name: "Calander Book",
//     image: img,
//     rating: 4,
//     price: 2199,
//     text1: "Al Karam",
//     text2: "(4.1k) Customer Reviews",
//   },
//   {
//     id: 2,
//     name: "Mini Calander",
//     image: img1,
//     rating: 5.5,
//     price: 239,
//     text1: "Al Karam",
//     text2: "(4.1k) Customer Reviews",
//   },
//   {
//     id: 3,
//     name: "Product 3",
//     image: img3,
//     rating: 4,
//     price: 29.99,
//     text1: "Al Karam",
//     text2: "(4.1k) Customer Reviews",
//   },
//   {
//     id: 4,
//     name: "Product 4",
//     image: img,
//     rating: 4.5,
//     price: 12.99,
//     text1: "Al Karam",
//     text2: "(4.1k) Customer Reviews",
//   },
//   {
//     id: 5,
//     name: "Product 5",
//     image: img1,
//     rating: 4,
//     price: 425,
//     text1: "Al Karam",
//     text2: "(4.1k) Customer Reviews",
//   },
//   {
//     id: 6,
//     name: "Product 6",
//     image: img3,
//     rating: 4,
//     price: 257,
//     text1: "Al Karam",
//     text2: "(4.1k) Customer Reviews",
//   },
// ];

export const CardList = ({
  isPlannersAndKits,
  isNewArrival,
  isoldArv,
  newArv,
}) => {
  const [products, setProducts] = useState([]);

  const IsPlanner = () => {
    useEffect(() => {
      axios
        .get("https://picsum.photos/v2/list?page=1&limit=12")
        .then((response) => {
          const modifiedProducts = response.data.map((item) => ({
            id: item.id,
            name: `Image ${item.id}`,
            image: item.download_url,
            rating: 4,
            price: 29.99,
            text1: "Al Karam",
            text2: "(4.1k) Customer Reviews",
          }));
          setProducts(modifiedProducts);
        })
        .catch((error) => console.error("Error fetching data:", error));
    }, []);
  };
  const IsNewAr = () => {
    useEffect(() => {
      axios
        .get("https://picsum.photos/v2/list?page=8&limit=12")
        .then((response) => {
          const modifiedProducts2 = response.data.map((item) => ({
            id: item.id,
            name: `Image ${item.id}`,
            image: item.download_url,
            rating: 4,
            price: 29.99,
            text1: "Al Karam",
            text2: "(4.1k) Customer Reviews",
          }));
          setProducts(modifiedProducts2);
        })
        .catch((error) => console.error("Error fetching data:", error));
    }, []);
  };

  const test = () => {
    if (isPlannersAndKits) {
      IsPlanner();
      return (
        <div className="card-list">
          {products.map((product) => (
            <Card key={product.id} product={product} />
          ))}
        </div>
      );
    } else if (isNewArrival) {
      IsNewAr();
      return (
        <div className="card-list">
          {products.map((product) => (
            <Card key={product.id} product={product} />
          ))}
        </div>
      );
    } else if (isoldArv) {
      const slicedProducts = products.slice(0, 3);
      IsPlanner();
      return (
        <div className="card-list">
          {slicedProducts.map((product) => (
            <Card key={product.id} product={product} />
          ))}
        </div>
      );
    } else {
      const slicedProducts = products.slice(0, 3);
      IsNewAr();
      return (
        <div>
          <div className="card-list">
            {slicedProducts.map((product) => (
              <Card key={product.id} product={product} />
            ))}
          </div>
        </div>
      );
    }
  };
  return test();
};

function PlannerAndKits() {
  let t1 = "023 PLANNERS & KITS ";
  return (
    <div className="App">
      <Header />
      <BackGround />

      <Heading1 txt1={t1} />
      {/* <CardList products={products} isPlannersAndKits={isPlannersAndKits} /> */}

      <CardList isPlannersAndKits={true} />

      <Footer />
    </div>
  );
}

export default PlannerAndKits;
