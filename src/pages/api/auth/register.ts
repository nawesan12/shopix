import { NextApiRequest, NextApiResponse } from "next";
import { sign } from "jsonwebtoken";

type RegisterResponse = {
  token: string;
  success: boolean;
};

export default function loginHandler(
  req: NextApiRequest,
  res: NextApiResponse<RegisterResponse>
) {
  const user = req.body;

  res.status(200).json({ token: "", success: true });
}
