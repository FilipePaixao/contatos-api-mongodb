import contatos from "../data/contatoData.js";

export default function listContatos(req, res) {

    if (contatos.length === 0) {
        return res.status(400).json({error: "Nenhum contato encontrado."});
    }

    return res.status(200).json(contatos);
}   