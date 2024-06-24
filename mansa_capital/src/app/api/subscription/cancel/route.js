import { NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export async function DELETE(req, res) {
  const { searchParams } = new URL(req.url);
  const subscriptionScheduleId = searchParams.get('subscriptionScheduleId');

  try {
    // Cancel the subscription
    const deletedSubscription = await stripe.subscriptionSchedules.cancel(subscriptionScheduleId);
    console.log('Deleted Subscription:', deletedSubscription); // Log the deleted subscription response
    return NextResponse.json(deletedSubscription);
  } catch (error) {
    console.error('Error deleting subscription:', error); // Log the full error
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}