import { CardList } from "../Pages/PlannersAndKits";
import BackGround from "./BackGround";
import Footer from "./Footer";
import Header from "./Header";
import Heading1 from "./Heading1";

export default function NewArrivals() {
  let t1 = "NEW ARRIVALS";
  return (
    <>
      <Header />
      <BackGround />
      <Heading1 txt1={t1} />
      <CardList isNewArrival={true} />
      <Footer />
    </>
  );
}
