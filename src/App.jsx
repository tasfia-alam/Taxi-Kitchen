
import { Suspense } from 'react';
import './App.css'
import Heading from './components/Heading'
import Navbar from './components/Navbar'
import OrderContainer from './components/OrderContainer';
import { ToastContainer } from 'react-toastify';


const loadOrders = () => fetch('/orders.json').then(res => res.json());

const App =() => {
  const ordersPromise = loadOrders();
  //console.log(ordersPromise);
  return (
    <>

    <Navbar></Navbar>
    <Heading>Kitchen Room</Heading>
    <Suspense fallback={"Loading...................."}>
          <OrderContainer promise={ordersPromise}></OrderContainer>
    </Suspense>
    <ToastContainer>
       
    </ToastContainer>

    </>
  )
}

export default App
