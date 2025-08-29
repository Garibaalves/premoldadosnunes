# 🚀 Guia de Configuração - Premoldados Nunes

## 📋 Pré-requisitos

- Node.js 18+ instalado
- Conta no Supabase (gratuita)
- Git configurado

## 🔧 Configuração do Ambiente

### 1. Configurar Variáveis de Ambiente (.env.local)

Crie o arquivo `.env.local` na raiz do projeto com as seguintes variáveis:

```env
# Supabase
NEXT_PUBLIC_SUPABASE_URL="sua_url_do_supabase"
NEXT_PUBLIC_SUPABASE_ANON_KEY="sua_chave_anonima_do_supabase"
SUPABASE_SERVICE_ROLE_KEY="sua_chave_service_role_do_supabase"

# NextAuth.js
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="sua-chave-secreta-aqui"

# Admin Credentials
ADMIN_EMAIL="admin@premoldadosnunes.com"
ADMIN_PASSWORD="sua-senha-admin"

# Google Analytics (opcional)
NEXT_PUBLIC_GA_ID="G-XXXXXXXXXX"
```

### 2. Configuração do Banco de Dados Supabase

#### Criando o Projeto no Supabase

1. **Acesse o Supabase:**
   - Vá para [supabase.com](https://supabase.com)
   - Faça login ou crie uma conta gratuita

2. **Crie um Novo Projeto:**
   - Clique em "New Project"
   - Escolha sua organização
   - Digite o nome do projeto: "premoldados-nunes"
   - Defina uma senha para o banco
   - Selecione a região mais próxima
   - Clique em "Create new project"

3. **Obtenha as Credenciais:**
   - Após criar o projeto, vá para "Settings" > "API"
   - Copie:
     - **Project URL** para `NEXT_PUBLIC_SUPABASE_URL`
     - **anon public** para `NEXT_PUBLIC_SUPABASE_ANON_KEY`
     - **service_role** para `SUPABASE_SERVICE_ROLE_KEY`

#### Configuração das Tabelas

1. **Acesse o SQL Editor:**
   - No painel do Supabase, vá para "SQL Editor"
   - Execute os comandos SQL para criar as tabelas (ver seção Schema)

2. **Configure as Políticas RLS:**
   - Execute os comandos de segurança para Row Level Security

3. **Insira Dados Iniciais:**
   - Execute os comandos de inserção de dados de exemplo

### 3. Configurar NextAuth Secret

**Gere uma chave secreta:**
```bash
# No terminal/PowerShell
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
```

Copie o resultado e use como `NEXTAUTH_SECRET`.

## 🗄️ Schema do Banco de Dados

### Estrutura das Tabelas Supabase

Execute os seguintes comandos SQL no **SQL Editor** do Supabase:

```sql
-- Criar tabela de usuários
CREATE TABLE users (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  email VARCHAR(255) UNIQUE NOT NULL,
  password VARCHAR(255),
  name VARCHAR(255) NOT NULL,
  role VARCHAR(50) DEFAULT 'user',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Criar tabela de produtos
CREATE TABLE products (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  slug VARCHAR(255) UNIQUE NOT NULL,
  description TEXT,
  image_url VARCHAR(500),
  price DECIMAL(10,2),
  category VARCHAR(100),
  featured BOOLEAN DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Criar tabela de contatos
CREATE TABLE contacts (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  phone VARCHAR(20),
  subject VARCHAR(255),
  message TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Criar tabela de projetos
CREATE TABLE projects (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  description TEXT,
  image_url VARCHAR(500),
  category VARCHAR(100),
  location VARCHAR(255),
  completion_date DATE,
  featured BOOLEAN DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```

### Configurar Segurança (RLS)

```sql
-- Habilitar RLS nas tabelas
ALTER TABLE users ENABLE ROW LEVEL SECURITY;
ALTER TABLE products ENABLE ROW LEVEL SECURITY;
ALTER TABLE contacts ENABLE ROW LEVEL SECURITY;
ALTER TABLE projects ENABLE ROW LEVEL SECURITY;

-- Políticas para permitir acesso público de leitura
CREATE POLICY "Allow public read access on products" ON products FOR SELECT USING (true);
CREATE POLICY "Allow public read access on projects" ON projects FOR SELECT USING (true);

-- Política para permitir inserção de contatos
CREATE POLICY "Allow public insert on contacts" ON contacts FOR INSERT WITH CHECK (true);
```

### Dados Iniciais

```sql
-- Inserir usuário admin (senha: admin123)
INSERT INTO users (email, password, name, role) VALUES (
  'admin@premoldadosnunes.com',
  '$2a$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi',
  'Administrador',
  'admin'
);

-- Inserir produtos de exemplo
INSERT INTO products (title, slug, description, category, featured) VALUES 
('Laje Pré-moldada', 'laje-pre-moldada', 'Lajes pré-moldadas de alta qualidade', 'Lajes', true),
('Viga Pré-moldada', 'viga-pre-moldada', 'Vigas pré-moldadas estruturais', 'Vigas', true),
('Pilar Pré-moldado', 'pilar-pre-moldado', 'Pilares pré-moldados para estruturas', 'Pilares', false);

-- Inserir projetos de exemplo
INSERT INTO projects (title, description, category, location, featured) VALUES 
('Residencial Vila Nova', 'Construção residencial com estruturas pré-moldadas', 'Residencial', 'São Paulo, SP', true),
('Galpão Industrial', 'Galpão industrial com estrutura pré-moldada completa', 'Industrial', 'Campinas, SP', true);
```

## 🚀 Executando o Projeto

### 1. Instalar Dependências
```bash
npm install
```

### 2. Executar em Desenvolvimento
```bash
npm run dev
```

### 3. Acessar o Sistema
- **Site:** http://localhost:3000
- **Admin:** http://localhost:3000/admin
  - Email: admin@premoldadosnunes.com
  - Senha: admin123

## 🔒 Segurança

### Alterar Senha Padrão

1. **Acesse o admin:** http://localhost:3000/admin
2. **Faça login** com as credenciais padrão
3. **Altere a senha** no Supabase:
   - Acesse o painel do Supabase
   - Vá para "Table Editor" > "users"
   - Edite o usuário admin e altere a senha (use bcrypt hash)

### Variáveis de Produção

Para produção no Vercel:
1. Vá para o dashboard do projeto
2. Acesse "Settings" > "Environment Variables"
3. Adicione todas as variáveis do `.env.local`
4. **IMPORTANTE:** Use senhas fortes e chaves secretas únicas
5. Configure as URLs de produção no Supabase

## 📞 Suporte

Se encontrar problemas:
1. Verifique se todas as variáveis estão configuradas
2. Confirme se o Supabase está acessível e as tabelas foram criadas
3. Verifique os logs no terminal e no painel do Supabase
4. Consulte a documentação do Next.js, Supabase e Vercel

---

**✅ Após seguir este guia, seu sistema estará funcionando completamente!**