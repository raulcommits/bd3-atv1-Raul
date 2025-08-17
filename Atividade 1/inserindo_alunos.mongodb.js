const database = "BD3-NoSQL-AtlasMongoDB";

const collection = "bd3-nosql-atv1";

use(database);

db["bd3-nosql-atv1"].insertMany(
    [
        {
            "cod_aluno": 1,
            "nome": "Raul Tomaz",
            "cpf": 14986398241,
            "rg": 987639812,
            "telefone_aluno": 11913487231,
            "telefone_responsavel": 11974398734,
            "email": "raul@gmail.com",
            "data_nascimento": 11/12/2007
        },
        {
            "cod_aluno": 2,
            "nome": "Luiz Felipe",
            "cpf": 98741752143,
            "rg": 419862833,
            "telefone_aluno": 11998462287,
            "telefone_responsavel": 11921201928,
            "email": "luiz@gmail.com",
            "data_nascimento": 28/03/2006
        },
        {
            "cod_aluno": 3,
            "nome": "Weslley Samuel",
            "cpf": 98515298032,
            "rg": 349820942,
            "telefone_aluno": 11925364321,
            "telefone_responsavel": 11934235143,
            "email": "weslley@gmail.com",
            "data_nascimento": 19/06/2007
        },
        {
            "cod_aluno": 4,
            "nome": "Tatiely Oliveira",
            "cpf": 51987459872,
            "rg": 797534334,
            "telefone_aluno": 11932187643,
            "telefone_responsavel": 11945453560,
            "email": "tatiely@gmail.com",
            "data_nascimento": 12/01/2008
        },
        {
            "cod_aluno": 5,
            "nome": "Julia Bento",
            "cpf": 45398598745,
            "rg": 847629453,
            "telefone_aluno": 11945556712,
            "telefone_responsavel": 11977507632,
            "email": "julia@gmail.com",
            "data_nascimento": 07/10/2008
        },
        {
            "cod_aluno": 6,
            "nome": "Lorennah Almeida",
            "cpf": 10384629571,
            "rg": 297238945,
            "telefone_aluno": 11955767861,
            "telefone_responsavel": 11912489542,
            "email": "lorennah@gmail.com",
            "data_nascimento": 11/12/2007
        },
        {
            "cod_aluno": 7,
            "nome": "Leticia Gomes",
            "cpf": 76509812543,
            "rg": 543682354,
            "telefone_aluno": 11952398732,
            "telefone_responsavel": 11923985711,
            "email": "leticia@gmail.com",
            "data_nascimento": 11/12/2006
        },
        {
            "cod_aluno": 8,
            "nome": "João Victor",
            "cpf": 12345798342,
            "rg": 154297653,
            "telefone_aluno": 11945359612,
            "telefone_responsavel": 11945353474,
            "email": "joao@gmail.com",
            "data_nascimento": 29/12/2007
        },
        {
            "cod_aluno": 9,
            "nome": "Renato Castro",
            "cpf": 12906745096,
            "rg": 981267809,
            "telefone_aluno": 11912890771,
            "telefone_responsavel": 11923902134,
            "email": "renato@gmail.com",
            "data_nascimento": 11/03/2008
        },
        {
            "cod_aluno": 10,
            "nome": "Diego Silva",
            "cpf": 14912431243,
            "rg": 119275380,
            "telefone_aluno": 11923985671,
            "telefone_responsavel": 11954569394,
            "email": "diego@gmail.com",
            "data_nascimento": 30/09/2005
        }
    ]
)