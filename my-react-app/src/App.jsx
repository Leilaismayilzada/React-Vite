
import Article from "./components/Article";
import CustomCard from "./components/CustomCard";
import CardWithPic from "./components/CardsWithPics";
import Header from "./Layout/Header/header";
import Footer from "./Layout/Footer/footer";



function App() {
  return (
    <>
    <Header/>
      <Article />
      <CardWithPic/>
      <CustomCard />
      <Footer/>

    </>
  );
}


export default App;
