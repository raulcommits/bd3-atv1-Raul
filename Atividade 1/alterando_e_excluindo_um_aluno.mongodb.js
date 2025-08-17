const database = "BD3-NoSQL-AtlasMongoDB";

const collection = "bd3-nosql-atv1";

use(database);

// Alterando o nome, cpf e rg de um aluno
db["bd3-nosql-atv1"].updateOne(
    {"cod_aluno": 1},
    {$set: {"nome": "Daniel Muller", "cpf": 47863986301, "rg": 458713677}}
)

// Excluindo um aluno
db["bd3-nosql-atv1"].deleteOne({"cod_aluno": 6});