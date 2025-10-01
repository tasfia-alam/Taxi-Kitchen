import { CookingPot, Heater, ScrollText } from 'lucide-react';


const States = ({ orderTotal, cookingTotal, readyTotal }) => {

    return (
        // current orders
        <div className='w-11/12 mx-auto py-10 grid grid-cols-1 lg:grid-cols-3 gap-5'>
            
            <div className='border-4 border-dotted rounded-2xl  border-amber-400 p-5'>
                <div className='flex flex-col lg:flex-row items-center justify-between'>

                    <ScrollText className='animate-pulse'
                    color='#fcb700' size={100}>

                    </ScrollText>
                    <div className='text-xl text-center'>
                        Current Orders
                     <h2 className='text-6xl font-bold'>{orderTotal}</h2> 

                    </div>
                    

                </div>

            </div>
{/* currently cooking */}
            <div className='border-4 border-dotted rounded-2xl  border-amber-400 p-5'>
                <div className='flex flex-col lg:flex-row items-center justify-between'>

        <Heater className='animate-pulse'
                    color='#fcb700' size={100}></Heater>


                    <div className='text-xl text-center'>
                        Currently Cooking
                        <h2 className='text-6xl font-bold'>{cookingTotal}</h2>
                    </div>
                    

                </div>

            </div>
            {/* ready to serve */}

                    <div className='border-4 border-dotted rounded-2xl  border-amber-400 p-5'>
                <div className='flex flex-col lg:flex-row items-center justify-between'>

                    <CookingPot className='animate-pulse'
                    color='#fcb700' size={100}></CookingPot>
                    <div className='text-xl text-center'>
                    Ready to Serve
                        <h2 className='text-6xl font-bold'>{readyTotal}</h2>
                    </div>
                    

                </div>

            </div>




            



        </div>





    );
};

export default States;