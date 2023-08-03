
import Stripe from "stripe"

export const stripe = new Stripe("sk_test_HrkfgJHxaF8lHSAMqIgRMkti", {
  apiVersion: "2022-11-15",
  typescript: true,
});
