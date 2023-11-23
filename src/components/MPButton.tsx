import { useEffect } from "react";

export default function MPButton() {
  useEffect(() => {
    const fetchCheckout = async () => {
      const response = await fetch(
        "http://localhost:3000/api/checkout/mercado-pago",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            user: {},
            turno: {},
          }),
        }
      );
      const data = await response.json();

      if (data.global) {
        const script = document.createElement("script");
        script.type = "text/javascript";
        script.src = "https://sdk.mercadopago.com/js/v2";
        script.setAttribute("data-preference-id", data.global);
        document.body.appendChild(script);

        // @ts-ignore
        const mp = new window.MercadoPago(
          process.env.NEXT_PUBLIC_MP_PUBLIC_KEY,
          {
            locale: "es-AR",
          }
        );

        mp.checkout({
          preference: {
            id: data.global,
          },
          render: {
            container: ".cho-container",
            label: "Pagar",
          },
        });
      }
    };

    fetchCheckout();
    //eslint-disable-next-line
  }, []);

  return (
    <>
      <div className="cho-container"></div>
    </>
  );
}
