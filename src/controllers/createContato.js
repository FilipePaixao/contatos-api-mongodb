import contatos from "../data/contatoData.js";

export default function createContato(req, res) {
    const body = req.body;

    if (!body.name || !body.email) {
        return res.status(400).json({ error: "Verifique os dados enviados." });
    }

  const newContato = { 
    id: Date.now(),
    createdAt: new Date().toISOString(),
    name: body.name,
    email: body.email,
    telefone: body.telefone
};
  contatos.push(newContato);
  return res.status(201).json(newContato);
}