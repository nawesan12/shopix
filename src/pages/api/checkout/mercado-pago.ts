// This is just the package (installed via npm or yarn) and its types
import { MercadoPagoConfig, Preference } from "mercadopago";
import type {
  CreatePreferencePayload,
  PreferencePayer,
  PreferenceBackUrl,
} from "mercadopago/models/preferences/create-payload.model";

export default function handler(req: Request, res: Response) {
  const mercadopago = new MercadoPagoConfig({
    accessToken: process.env.MP_ACCESS_TOKEN as string,
  });

  //@ts-ignore
  const { user, turno } = req.body;

  const preferenceOptions: CreatePreferencePayload | any = {
    binary_mode: true,
    items: [
      {
        title: `${turno.service} - Nombre de la marca`,
        description: `Descripcion del producto`,
        picture_url: "url de imagen",
        quantity: 1 as number,
        currency_id: "ARS",
        unit_price: turno.price as number,
      },
    ],
    payer: {
      name: user.name as string,
      surname: user.name.split(" ")[1] ?? ("TGB" as string),
      email: user.email as string,
    } as PreferencePayer,
    // When the user finishes the payment, depending of the status of the payment he'll be redirected, you gotta put your custom urls
    back_urls: {
      success: "https://success.com",
      failure: "https://failure.com",
      pending: "https://pending.com",
    } as PreferenceBackUrl,
    // This is always "approved"
    auto_return: "approved",
  };

  const preference = new Preference(mercadopago);

  preference
    .create(preferenceOptions)
    .then(function (response) {
      return res.status(200).json({ global: response?.body.id });
    })
    .catch((error) => {
      // In an error appears, we'll send the error.
      res.status(500).json({ global: error });
    });
}

// IMPORTANT

/*
  This is the only code needed, but you can save in your DB all the data you need.
  If this does not works, check your MP keys, your .env file, or the enviroment variables in your deployment.
  In case of not finding a solution to a supposed error, open an issue in this repo so i'll fix it in the future.
*/
