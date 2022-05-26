import { VercelRequest, VercelResponse } from "@vercel/node";
import fetch from "node-fetch";

export default async function handler(
  request: VercelRequest,
  response: VercelResponse
) {
  const res = await fetch("https://fotum-engenharia.vercel.app/api/mandador", {
    method: "POST",
    body: JSON.stringify({}),
    headers: { "Content-Type": "application/json" },
  });

  response.send(request.body);

  const data = await res.json();
  return response.status(200).json({ data });
}
