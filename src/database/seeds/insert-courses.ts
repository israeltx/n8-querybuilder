import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
    // Inserts seed entries
    await knex("courses").insert([
        { name: "HTML" },
        { name: "Javascript" },
        { name: "Github" },
        { name: "Express JS" },
        { name: "Node.JS" },
        { name: "Banco de Dados" }
    ]);
};
