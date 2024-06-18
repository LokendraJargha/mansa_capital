import { Stripe, loadStripe } from '@stripe/stripe-js';

let stripePromise;
const getStripe = () => {
  if (!stripePromise) {
    stripePromise = loadStripe("pk_test_51PQOvg07HRkzWOMzHX5sbsknZvRmh64fbviErrBKWznfenfLJPQXPp1TQrVxqxNzkuhlhaC5SOWln8VxShyQ0msy00QNtyBOJg");
  }
  return stripePromise;
};

export default getStripe;