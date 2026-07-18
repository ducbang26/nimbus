import { NextResponse } from 'next/server';

export const runtime = 'nodejs';

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export async function POST(req: Request) {
  try {
    const { cartItems, shippingPrice = '0.00', taxPrice = '0.00' } = await req.json();

    if (!cartItems || cartItems.length === 0) {
      return NextResponse.json({ error: 'Cart is empty' }, { status: 400 });
    }

    const Stripe = (await import('stripe')).default;

    if (!process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY) {
      throw new Error('Missing environment variable');
    }

    const stripe = new Stripe(process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY, {
      apiVersion: '2023-10-16' as any,
    });

    const line_items = [
      ...cartItems.map((item: any) => ({
        price_data: {
          currency: 'usd',
          product_data: {
            name: item.name || 'Product Name',
            images: item.images?.[0]?.url ? [item.images[0].url] : [],
          },
          unit_amount: Math.round(item.price * 100),
        },
        quantity: item.quantity || 1,
      })),
      ...(Number(shippingPrice) > 0
        ? [
            {
              price_data: {
                currency: 'usd',
                product_data: {
                  name: 'Delivery fee',
                },
                unit_amount: Math.round(Number(shippingPrice) * 100),
              },
              quantity: 1,
            },
          ]
        : []),
      ...(Number(taxPrice) > 0
        ? [
            {
              price_data: {
                currency: 'usd',
                product_data: {
                  name: 'Tax',
                },
                unit_amount: Math.round(Number(taxPrice) * 100),
              },
              quantity: 1,
            },
          ]
        : []),
    ];

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items,
      mode: 'payment',
      success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/cart`,
    });

    return NextResponse.json({ url: session.url });
  } catch (error: any) {
    console.error('Stripe Error:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
