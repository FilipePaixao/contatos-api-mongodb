import contatos from "../data/contatoData.js";

export default function updateContato(req, res) {

    const id = Number(req.params.id);

    const contato = contatos.find(
        contato => contato.id === id
    );

    if (!contato) {
        return res.status(404).json({ error: "Contato não encontrado."});
    }

    const body = req.body;

    contato.name = body.name || contato.name;
    contato.email = body.email || contato.email;
    contato.telefone = body.telefone || contato.telefone;

    return res.status(200).json(contato);
}