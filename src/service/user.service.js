import { createUser } from "../repository/write/user.repository.write.js";

export async function createUserService(user) {
  try {
    console.log(" Dados do usuário no service: " + user);
    if (!user.name || !user.email || !user.telefones) {
      throw new Error("Dados inválidos");
    }
    if (user.telefones.length === 0) {
      throw new Error("Telefones inválidos");
    }

    const newUser = await createUser(user);
    return newUser;
  } catch (error) {
    console.error("Erro ao criar usuário:", error);
    throw error;
  }
}