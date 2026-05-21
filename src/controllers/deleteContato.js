import contatos from "../data/contatoData.js";

export default function deleteContato(req, res) {
    const id = req.params.id;

    const index = contatos.findIndex((c) => c.id == id);

    if (index === -1) {
        return res.status(404).json({ error: "Contato não encontrado." });
    }

    contatos.splice(index, 1);
    return res.status(200).json({ message: "Contato deletado com sucesso." });
}