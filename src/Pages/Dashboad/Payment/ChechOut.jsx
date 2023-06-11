import React, { useContext, useEffect, useState } from 'react';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import './ChechOut.css'
import { AuthContext } from '../../../Provider/Authprovider';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import Swal from 'sweetalert2';


const ChechOut = ({ bookingInfo, closeModal }) => {
    const stripe = useStripe();
    const elements = useElements();
    const { user } = useContext(AuthContext)
    const [clientSecret, setClientSecret] = useState('')
    const [axiosSecure] = useAxiosSecure()
    
  
    const [transactionId, setTransactionId] = useState('');

    useEffect(() => {
        if (bookingInfo?.price) {
            axiosSecure
                .post('/create-payment-intent', { price: bookingInfo.price })
                .then(res => {
                    console.log(res.data.clientSecret)
                    setClientSecret(res.data.clientSecret)
                })
        }
    }, [])


    const handleSubmit = async (event) => {
        // Block native form submission.
        event.preventDefault();

        if (!stripe || !elements) {
            // Stripe.js has not loaded yet. Make sure to disable
            // form submission until Stripe.js has loaded.
            return;
        }

        // Get a reference to a mounted CardElement. Elements knows how
        // to find your CardElement because there can only ever be one of
        // each type of element.
        const card = elements.getElement(CardElement);

        if (card == null) {
            return;
        }

        // Use your card Element with other Stripe.js APIs
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (error) {
            
            console.log('[error]', error);
        } else {
            console.log('[PaymentMethod]', paymentMethod);
        }

      


        const { paymentIntent, error: confirmError } =
            await stripe.confirmCardPayment(clientSecret, {
                payment_method: {
                    card: card,
                    billing_details: {
                        email: user?.email || 'unknown',
                        name: user?.displayName || 'anonymous',
                    },
                },
            })
        if (confirmError) {
            console.log(confirmError);
        }
        console.log('pyametnintern', paymentIntent)

        if (paymentIntent.status === 'succeeded') {
            setTransactionId(paymentIntent.id);
            const payment = {
                email: user?.email,
                transactionId: paymentIntent.id,
                price : bookingInfo.price,
                artCraftName : bookingInfo.artCraftName,
                sleted_id : bookingInfo._id,
                /*price,
                date: new Date(),
                quantity: cart.length,
                cartItems: cart.map(item => item._id),
                menuItems: cart.map(item => item.menuItemId),
                status: 'service pending',
                itemNames: cart.map(item => item.name)*/
            }
            axiosSecure.post('/payments', payment)
                .then(res => {
                    console.log(res.data);
                    if (res.data.insertedId) {
                        Swal.fire(
                            'pyment!',
                            'Your  has been success fully payment.',
                            'success'
                        )
                        closeModal()
                    }
                    
                })
    
        }
       
    };


    

   

    return (
        <form onSubmit={handleSubmit}>
            <CardElement
                options={{
                    style: {
                        base: {
                            fontSize: '16px',
                            color: '#424770',
                            '::placeholder': {
                                color: '#aab7c4',
                            },
                        },
                        invalid: {
                            color: '#9e2146',
                        },
                    },
                }}
            />
            <button type="submit" disabled={!stripe}>
                Pay
            </button>

            <div className='flex mt-2 justify-around'>
                <button
                    type='submit'
                    className='inline-flex justify-center rounded-md border border-transparent bg-red-100 px-4 py-2 text-sm font-medium text-red-900 hover:bg-red-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2'
                    onClick={closeModal}
                >
                    Cancel
                </button>
                <button
                    type='submit' disabled={!stripe || !clientSecret  }
                    className='inline-flex justify-center rounded-md border border-transparent bg-green-100 px-4 py-2 text-sm font-medium text-green-900 hover:bg-green-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2'
                >
                    Pay {bookingInfo.price}$
                </button>

                
                
            </div>
            {transactionId && <p className="text-green-500">Transaction complete with transactionId: {transactionId}
            </p>}
           
        </form>
    );
};

export default ChechOut;