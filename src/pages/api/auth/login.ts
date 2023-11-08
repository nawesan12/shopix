import { NextApiRequest, NextApiResponse } from "next";

type LoginResponse = {
  token: string;
  authorized: boolean;
};

export default function loginHandler(
  req: NextApiRequest,
  res: NextApiResponse<LoginResponse>
) {
  res.status(200).json({ token: "", authorized: true });
}
