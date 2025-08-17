const database = "BD3-NoSQL-AtlasMongoDB";

const collection = "bd3-nosql-atv1";

use(database);

// Listando todos os alunos
db["bd3-nosql-atv1"].find();

// Listando um aluno pelo CPF sem o campoo de cod_aluno
db["bd3-nosql-atv1"].find({cpf: 51987459872}, {cod_aluno: 0});