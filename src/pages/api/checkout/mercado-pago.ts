import type { NextApiRequest, NextApiResponse } from "next";
// import mercadopago from "mercadopago";
// import type {
//   CreatePreferencePayload,
//   PreferencePayer,
//   PreferenceBackUrl,
// } from "mercadopago/models/preferences/create-payload.model";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  // mercadopago.configure({
  //   access_token: process.env.MP_ACCESS_TOKEN as string,
  // });
  // const preference: CreatePreferencePayload = {
  //   binary_mode: true,
  //   items: [
  //     {
  //       title: `Producto - Shopix`,
  //       description: `Producto description`,
  //       picture_url: "",
  //       quantity: 1,
  //       currency_id: "ARS",
  //       unit_price: 100 as number,
  //     },
  //   ],
  //   payer: {
  //     name: "Roberto",
  //     surname: "Sanchez",
  //     email: "nsantillandev@gmail.com",
  //   } as PreferencePayer,
  //   back_urls: {
  //     success: "https://shopix.com/bien",
  //     failure: "https://shopix.com/mal",
  //     pending: "https://shopix.com/meh",
  //   } as PreferenceBackUrl,
  //   auto_return: "approved",
  // };
  // mercadopago.preferences
  //   .create(preference)
  //   .then(function (response) {
  //     res.status(200).json({ global: response.body.id });
  //   })
  //   .catch((error) => {
  //     res.status(500).json({ global: error });
  //   });
  res.send("");
}
