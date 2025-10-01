import React, { use, useState } from 'react';
import States from './States';
import { UtensilsCrossed } from 'lucide-react';
import OrderCard from './cards/OrderCard';
import { toast } from 'react-toastify';

const OrderContainer = ({ ordersPromise }) => {
    //console.log(promise)
    const orders = use(ordersPromise);
    //console.log(orders)

    const[cookingItems, setCookingItems] = useState([]);

    const[readyItems, setReadyItems] = useState([]);

    const handleOrderClick = (order) =>{
        toast("Order is Cooking")
        setCookingItems((prevItems)=> 

            {
                const isExit = prevItems.find((item) => item.id === order.id);

                if(isExit){
                    alert("Already Cooking!!!");
                    return prevItems;
                }

                return[...prevItems, order];



            });
            
        //     [...prevItems, order] );

        // const isExit = cookingItems.find((item) => item.id == order.id);

        // //console.log(isExit);

        // if(isExit){
        //     alert("Allready Cooking!!!");
        //     return prevItems;
        // }

        // const newCookingItems = [...cookingItems , order];
        // setCookingItems(newCookingItems);
    };


    const handleCooking = (item) =>{
        setCookingItems((prev) => prev.filter((i) => i.id !==item.id));

    const readyItem = {
        ...item, cookedTime: new Date()
    };  

        setReadyItems((prev) =>{
            const exists = prev.find((i) => i.id === item.id);
            if(exists) return prev;
            return [...prev, readyItem];
        });
    };


    console.log(cookingItems);
    console.log(readyItems);

    return (
        <div>
            
            <States cookingTotal={cookingItems.length} 
            orderTotal= {orders.length}
            readyTotal={readyItems.length} >

            </States>
            <section className='w-11/12 max-auto py-10 mx-14 grid grid-cols-1 lg:grid-cols-12 gap-5'>

            <div className='lg:col-span-7'>
                <h1 className='font-bold text-3xl'>Current Orders</h1>
            <div className='space-y-5 mt-6'>
                {/* {
                    orders.map(items=> <h2>{items.order_title}</h2> )
                } */}
{/* current orders card */}
                    {
                        orders.map(items =>
                <div onClick={() => handleOrderClick(items)} key={items.id} className="card w-11/12 bg-base-100 card-xs shadow-xl p-4">
                    <div className="card-body">
                        <div className='flex justify-between'>
                            <button className="btn w-20 h-8 rounded-[90px] bg-amber-500 p-2 text-[10px]">{items.order_no}</button>
                            <button className="btn rounded-full bg-amber-500 text-md hover:font-bold text-white">{items.table_no}</button>
                        </div>
                        <div className='flex items-baseline gap-2'>
                            <UtensilsCrossed></UtensilsCrossed>
                        <h2 className="card-title text-2xl"> {items.quantity} {items.order_title}</h2>
                        </div>
                        
                        <h2 className='text-xl text-amber-400 font-bold'>Instuction</h2>
                        <p className='text-xs'>{items.special_instruction}</p>
                    </div>
                 </div>   

                        )
                    }

            </div>




            </div>
            <div className='lg:col-span-5'>

                <div>
                    <h1 className='text-3xl font-bold'>Currently Cooking</h1>

                    <div className='shadow p-10 space-y-2'>
                        {cookingItems.map(item =>(
                            <div key={item.id} className='p-4 border-1 border-gray-100 rounded-lg shadow-xl'
                            style={{
                                background: "linear-gradient(#ffffff80, #FCB700), url('/cook-bg.gif')"
                            }}
                            >
                                {/* {item.quantity} {item.order_title} (Table: {item.table_no}) */}
                                <h1 className='text-xl font-bold text-amber-500'>{item.order_title}</h1>
                                <p className='font-bold'>Quantity: {item.quantity}</p>
                                <p className='text-xs'>{item.special_instruction}</p>
                                <button onClick={() => handleCooking(item)} className='bg-amber-500 px-4 py-1 rounded-2xl mt-2 hover:bg-white duration-200 hover:font-extrabold'>Cooked?</button>


                            </div>

                        ))
                        
                        }


                    </div>


                </div>
                <div className=''>
                    <h1 className='text-3xl font-bold mt-3'>Ready to Serve</h1>
                    <div className='shadow p-10 spacey-3'>
                    {readyItems.length === 0 && (
                        <div className='text-sm text-gray-500'>
                            No Ready items Yet.
                        </div>
                    )}  

                    {readyItems.map((r) =>
                (
                   <div className=''>
                    <div key={r.id} className="p-3 border bg-green-100 shadow-lg mb-3 rounded-md">
                  <div className="font-bold text-green-500">{r.order_title}</div>
                  <div className="text-xs">
                    <h1>Table: {r.table_no}</h1>
                    <h2>Waiter ID: {r.waiterId}</h2>
                    <h3>
                        Cooking Time: {r.cookedTime.toLocaleTimeString()}
                    </h3>
                    {/* Table: {r.table_no} | Qty: {r.quantity} */}


                  </div>
                    </div>
                   </div> 
                ) ) }  
                        

                    </div>
                </div>
            </div>

            </section>
        </div>
    );
};

export default OrderContainer;