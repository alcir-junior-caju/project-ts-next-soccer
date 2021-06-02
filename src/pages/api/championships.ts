import { NextApiRequest, NextApiResponse } from "next";
import api from "../../services/api";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  let data = [];

  await api.get('/campeonatos')
    .then((response => {
      data.push(...response.data);
    }));

  return res.json(data);
}
