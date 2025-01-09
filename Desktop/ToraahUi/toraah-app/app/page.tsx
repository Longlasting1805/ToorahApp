import Image from "next/image";
// import ProductCard from "./components/ProductCard";
import Navbar from "./components/Navbar";
import Hamburger from "./components/Hamburger";
import Search from "./components/Search.";


export default function Home() {
  return (
   <main>
    {/* <h1>Hello world</h1> */}
    {/* <ProductCard /> */}
    <Navbar />
    <Hamburger />
    <Search />
    
   </main>
  )
}
