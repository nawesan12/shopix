import { MercadoPagoConfig, Preference } from "mercadopago";
import { Items } from "mercadopago/dist/clients/commonTypes";
import { PreferenceRequest } from "mercadopago/dist/clients/preference/commonTypes";
import { PreferenceCreateData } from "mercadopago/dist/clients/preference/create/types";
import type {
  CreatePreferencePayload,
  PreferencePayer,
  PreferenceBackUrl,
  PreferenceItem,
} from "mercadopago/models/preferences/create-payload.model";
import { NextApiRequest, NextApiResponse } from "next";

export default function paymentMercadoPagoHandler(
  req: NextApiRequest,
  res: NextApiResponse<{ global: string | undefined }>
) {
  const mercadopago = new MercadoPagoConfig({
    accessToken: process.env.MP_ACCESS_TOKEN as string,
  });

  //@ts-ignore
  //const { user, turno } = req.body;

  const preferenceOptions: PreferenceRequest = {
    binary_mode: true,
    items: [
      {
        id: "hasdfasdf",
        title: `Nombre del producto - Shopix`,
        description: `Descripcion del producto`,
        picture_url: "",
        quantity: 1 as number,
        currency_id: "ARS",
        unit_price: 100 as number,
      },
    ] as Items[],
    payer: {
      name: "roberto" as string,
      surname: "Sanchez",
      email: "nsantillandev@gmail.com" as string,
    } as PreferencePayer,
    back_urls: {
      success: "https://tiendademartu.com/pagoexitoso",
      failure: "https://tiendademartu.com/pagofallido",
      pending: "https://tiendademartu.com/pagopendiente",
    } as PreferenceBackUrl,
    auto_return: "approved",
  };

  const preference = new Preference(mercadopago);

  preference
    .create({ body: preferenceOptions } as PreferenceCreateData)
    .then(function (response) {
      console.log(response);
      res.status(200).json({ global: response.id });
    })
    .catch((error) => {
      console.log(error);
      res.status(500).json({ global: error });
    });
}
