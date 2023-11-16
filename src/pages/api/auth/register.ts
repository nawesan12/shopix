import { emailRGX, passwordRGX } from "@/utils/regex";
import { encryptPassword } from "@/utils/crypto";
import { prisma } from "@/database/client";
import { sign } from "jsonwebtoken";
import { NextApiRequest, NextApiResponse } from "next";

type User = {
  username: string;
  email: string;
  password: string;
  age: number;
};

type RegisterResponse =
  | {
      token: string;
    }
  | {
      msg: string;
    };

export default async function registerHandler(
  req: NextApiRequest,
  res: NextApiResponse<RegisterResponse>
) {
  const user: User = req.body;

  if (Object.values(user).includes("undefined"))
    return res.status(400).json({ msg: "Error! Not enough data" });

  if (!user.email.match(emailRGX))
    return res.status(400).json({ msg: "Error! Invalid email" });

  if (!user.password.match(passwordRGX))
    return res.status(400).json({ msg: "Invalid password" });

  const hash = await encryptPassword(user.password);

  const userAGuardar = { ...user, password: hash };

  const userSubido = await prisma.user.create({ data: userAGuardar });

  if (!userSubido) return res.status(500).json({ msg: "Error in database" });

  const token = sign(userAGuardar, process.env.TOKEN_SECRET as string);

  res.status(200).json({ token });
}
