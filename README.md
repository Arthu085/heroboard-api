# Hero Board - API (Backend)

O **Hero Board API** é responsável por gerenciar as regras de negócio do sistema Hero Board, oferecendo endpoints de CRUD's completos para o sistema de projetos.

> Repositório do frontend: [HeroBoard Frontend](https://github.com/Arthu085/heroboard)

---

## 🚀 Tecnologias Utilizadas

- **Nest.js**
- **SQlite**
- **Type ORM**

---

## ⚙️ Como rodar o projeto

### 1️⃣ Instalar NestJs globalmente

```bash
npm install -g @nestjs/cli
```

### 2️⃣ Clonar o Repositório

```bash
git clone https://github.com/Arthu085/heroboard-api
cd heroboard-api
```

### 3️⃣ Instalar dependências

```bash
npm install
```

### 4️⃣ Iniciar projeto

```bash
npm run start:dev
```

A aplicação estará disponível em:

- 🌐 **HTTP:** http://localhost:3000/

---

## 📌 Rotas da API

#### Projetos

| Método | Endpoint      | Descrição                        |
|--------|---------------|----------------------------------|
| GET   | /projects/?page={number}&limit={number}&status={string} | Busca todos os projetos cadastrados.        |
| POST   | /projects    | Cadastra um novo projeto.  |
| PATCH   | /projects/{id}    | Edita um projeto (todos os campos são opcionais).  |
| DELETE   | /projects/{id}    | Deleta um projeto.  |

**Observações**

> Os valores aceitos no filtro status são: completed, in_progress ou pending.

> Os dados são armazenados localmente em um banco de dados SQLite.

### 🔸 Exemplo de Body

#### POST

```json
{
    "name": "Teste",
    "description": "Teste",
    "responsible": "Teste"
}
```

#### PATCH

```json
{
    "name": "Teste 2",
    "description": "Teste 2",
    "responsible": "Teste 2",
    "status": "in_progress"
}
```
