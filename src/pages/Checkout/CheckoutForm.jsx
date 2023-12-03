import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProviders";

const CheckoutForm = ({contactRequest}) => {

  const [error, setError] = useState('')
  const [clientSecret, setClientSecret] = useState('')
  const {user} = useContext(AuthContext)
  const [success, setSuccess] = useState('')

    const stripe = useStripe()
    const elements = useElements()


    useEffect( () => {
      axios.post('https://biye-kormo-server.vercel.app/create-payment-intent', {price: 500})
      .then(res => {
        setClientSecret(res.data.clientSecret)
      })
    }, [])

  const handleSubmit = async (event) => {
    event.preventDefault();

    if(!stripe || !elements){
        return
    }

    const card = elements.getElement(CardElement)
    if(card == null){
        return
    }


    const {error, paymentMethod} = await stripe.createPaymentMethod({
        type: 'card',
        card
    })

    if(error){
        console.log('payment error', error)
        setError(error.message)
    } else {
        setError('')
    }


    const {paymentIntent, error: confirmError} = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: card,
        billing_details: {
          email: user?.email || 'email not Found',
          name: user?.displayName || 'name not found'
        }
      }
    })

    if(confirmError){
      console.log('confirm error')
    } else {
      if(paymentIntent.status == "succeeded"){
        setSuccess(`Your Request Sended For Admin Approval. Go To Contact Request in Dashboard. Transaction Id: ${paymentIntent.id}`)

        const payment = {
          transactionId: paymentIntent.id,
          email: user.email,
          price: 500,
          data: new Date()
        }

        const res = await axios.post('https://biye-kormo-server.vercel.app/payments', payment)
        contactRequest()

      }
    }


  };
  return (
    <form onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: "16px",
              color: "#424770",
              "::placeholder": {
                color: "#aab7c4",
              },
            },
            invalid: {
              color: "#9e2146",
            },
          },
        }}
      />
      <button type="submit" disabled={!stripe || !clientSecret} className="bg-[#9D6824] px-3 py-1 rounded-md text-white mt-4">
        Pay
      </button>
      <p className="text-red-500">{error}</p>
      {
        success && <p className="text-green-600">{success}</p> 
      }
    </form>
  );
};

export default CheckoutForm;
