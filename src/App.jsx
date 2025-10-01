
import { Suspense } from 'react';
import './App.css'
import Heading from './components/Heading'
import Navbar from './components/Navbar'
import OrderContainer from './components/OrderContainer';
import { ToastContainer } from 'react-toastify';


const loadOrders =async()=>{
  const res = await fetch('/orders.json')
  return res.json()
}
const ordersPromise = loadOrders();
const App =() => {
  
  //console.log(ordersPromise);
  return (
    <>

    <Navbar></Navbar>
    <Heading>Kitchen Room</Heading>
    <Suspense fallback={"Loading...................."}>
          <OrderContainer ordersPromise={ordersPromise}></OrderContainer>
    </Suspense>
    <ToastContainer>
       
    </ToastContainer>

    </>
  )
}

export default App
