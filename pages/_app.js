import "@/styles/globals.css";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Head from "next/head";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function App({ Component, pageProps }) {

  const [cart, setCart] = useState({});
  const [subTotal, setSubTotal] = useState(0)
  const router = useRouter();

  useEffect(()=>{
    try{
      if(localStorage.getItem("cart")){
        setCart(JSON.parse(localStorage.getItem("cart")))
        saveCart(JSON.parse(localStorage.getItem("cart")))
      }
    }catch(error){
      console.error(error);
      localStorage.clear()
    }
  }, [])

  const saveCart = (myCart) => {
    localStorage.setItem("cart", JSON.stringify(myCart));
    let subT = 0;
    let keys = Object.keys(myCart)
    for(let i=0; i<keys.length; i++){
      subT += myCart[keys[i]].price * myCart[keys[i]].qty;
    }
    setSubTotal(subT);
  }

  const addToCart = (itemCode, qty, price, name, size, variant)=>{
    let newCart = {...cart};
    if(newCart[itemCode]){
      newCart[itemCode].qty += qty;
    } else {
      newCart[itemCode] = {qty:1, price, name, size, variant}
    }
    setCart(newCart);
    saveCart(newCart);
    toast.success('Item added to cart!', {
      position: "bottom-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });
  }

  
  const buyNow = (itemCode, qty, price, name, size, variant) => {
    saveCart({})
    let newCart = {itemCode: {qty:1, price, name, size, variant}};
    
    setCart(newCart);
    saveCart(newCart);
    router.push("/checkout");
  }

  const clearCart = () =>{
    setCart({})
    saveCart({})
  }

  const removeFromCart = (itemCode, qty, price, name, size, variant)=>{
    let newCart = {...cart};
    if(newCart[itemCode]){
      newCart[itemCode].qty -= qty;
    } 
    if(newCart[itemCode].qty <= 0){
      delete newCart[itemCode];
    }
    setCart(newCart);
    saveCart(newCart);
  }

  return( 
  <>
    <Head>
        <title>Gen-Z Wears</title>
        <meta name="description" content="Gen-Z Wears - Wearables by Gen-Z" />
      </Head>
    <Navbar cart={cart} addToCart={addToCart} clearCart={clearCart} removeFromCart={removeFromCart} subTotal={subTotal} />
    <Component ToastContainer={ToastContainer} buyNow={buyNow} cart={cart} addToCart={addToCart} clearCart={clearCart} removeFromCart={removeFromCart} subTotal={subTotal} {...pageProps} />;
    <Footer/>
  </>)
}
