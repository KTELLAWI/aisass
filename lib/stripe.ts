
import Stripe from "stripe"

export const stripe = new Stripe(env.process.STRIPE_API_KEY, {
  apiVersion: "2022-11-15",
  typescript: true,
});
