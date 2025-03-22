import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || '');

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    if (!body || typeof body.amount !== 'number') {
      return new Response('Invalid amount', { status: 400 })
    }
    const paymentIntent = await stripe.paymentIntents.create({
      amount: body.amount,
      currency: 'usd',
      payment_method_types: ['card'],
    });

    return NextResponse.json({ clientSecret: paymentIntent.client_secret });
  } catch (error: any) {
    console.error('Error creating Payment Intent:', error);
    return NextResponse.json(
      { error: error.message || 'Failed to create Payment Intent' },
      { status: 500 }
    );
  }
}
