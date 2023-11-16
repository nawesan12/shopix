import type { NextApiRequest, NextApiResponse } from "next";
import { emailRGX, passwordRGX } from "@/utils/regex";
import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";
import { prisma } from "@/database/client";

type LoginResponse =
  | {
      token: string;
      authorized: boolean;
    }
  | {
      msg: string;
    };

export default async function loginHandler(
  req: NextApiRequest,
  res: NextApiResponse<LoginResponse>
) {
  const user = req.body;

  if (!user.email.match(emailRGX))
    return res.status(400).json({ msg: "Invalid email!" });

  if (!user.password.match(passwordRGX))
    return res.status(400).json({ msg: "Invalid password!" });

  const userInDatabase = await prisma.usuario.findUnique({
    where: {
      email: user.email,
    },
  });

  if (!userInDatabase)
    return res.status(400).json({ msg: "This account does not exists!" });

  const contrasenaValida = await compare(
    user.password,
    userInDatabase.password
  );

  if (!contrasenaValida)
    return res.status(401).json({ msg: "Invalid password!" });

  const token = sign(userInDatabase, process.env.TOKEN_SECRET as string, {
    expiresIn: "7d",
  });

  // PAGES
  res.status(200).json({ token, authorized: true });
  // APP = return new Response(JSON.stringify({token, authorized: true}), { status: 200 })
}
