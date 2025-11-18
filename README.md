# Laravel + React + Inertia.js - Starter Kit

Aplicação full-stack moderna construída com Laravel 12, React 19 e Inertia.js, oferecendo uma experiência SPA sem a necessidade de construir uma API REST tradicional.

## 🚀 Tecnologias

- **Backend**: Laravel 12 (PHP 8.2+)
- **Frontend**: React 19 com TypeScript
- **Bridge**: Inertia.js v2 (com suporte a SSR)
- **Estilização**: Tailwind CSS v4 + shadcn/ui
- **Autenticação**: Laravel Fortify
- **Roteamento Tipado**: Laravel Wayfinder
- **Testes**: Pest PHP v4
- **Banco de Dados**: MySQL 8.0 / SQLite
- **Cache/Filas**: Redis
- **Email Testing**: Mailpit
- **Ferramentas de Build**: Vite
- **Docker**: Laravel Sail

## 📋 Pré-requisitos

### Para desenvolvimento com Docker (Recomendado)

- [Docker Desktop](https://www.docker.com/products/docker-desktop) instalado
- Git

### Para desenvolvimento sem Docker

- PHP 8.2 ou superior
- Composer
- Node.js 18+ e npm
- MySQL 8.0 ou superior (ou SQLite)
- Redis (opcional, mas recomendado)

---

## 🐳 Instalação com Docker (Laravel Sail)

### 1. Clone o repositório

```bash
git clone <url-do-repositorio>
cd pd-front-end
```

### 2. Copie o arquivo de ambiente

```bash
cp .env.example .env
```

### 3. Instale as dependências do Composer (via Docker)

```bash
docker run --rm \
    -u "$(id -u):$(id -g)" \
    -v "$(pwd):/var/www/html" \
    -w /var/www/html \
    laravelsail/php84-composer:latest \
    composer install --ignore-platform-reqs
```

### 4. Inicie os containers do Sail

```bash
./vendor/bin/sail up -d
```

### 5. Gere a chave da aplicação

```bash
./vendor/bin/sail artisan key:generate
```

### 6. Execute as migrações do banco de dados

```bash
./vendor/bin/sail artisan migrate
```

### 7. Instale as dependências do frontend

```bash
./vendor/bin/sail npm install
```

### 8. Inicie o servidor de desenvolvimento

```bash
./vendor/bin/sail npm run dev
```

### 9. Acesse a aplicação

- **Aplicação**: http://localhost
- **Mailpit** (visualizador de emails): http://localhost:8025

### Atalho útil (Opcional)

Adicione um alias ao seu `~/.bashrc` ou `~/.zshrc`:

```bash
alias sail='./vendor/bin/sail'
```

Depois você pode usar simplesmente:

```bash
sail up -d
sail artisan migrate
sail npm run dev
```

---

## 💻 Instalação sem Docker

### 1. Clone o repositório

```bash
git clone <url-do-repositorio>
cd pd-front-end
```

### 2. Instale as dependências do PHP

```bash
composer install
```

### 3. Copie e configure o arquivo de ambiente

```bash
cp .env.example .env
```

Edite o arquivo `.env` e configure:

```env
DB_CONNECTION=mysql  # ou sqlite para desenvolvimento rápido
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=laravel
DB_USERNAME=root
DB_PASSWORD=

REDIS_HOST=127.0.0.1
REDIS_PORT=6379

MAIL_MAILER=log  # ou configure um servidor SMTP
```

### 4. Gere a chave da aplicação

```bash
php artisan key:generate
```

### 5. Crie o banco de dados

**Para MySQL:**
```bash
mysql -u root -p
CREATE DATABASE laravel;
exit;
```

**Para SQLite:**
```bash
touch database/database.sqlite
```

### 6. Execute as migrações

```bash
php artisan migrate
```

### 7. Instale as dependências do frontend

```bash
npm install
```

### 8. Inicie os servidores de desenvolvimento

Em um terminal:
```bash
php artisan serve
```

Em outro terminal:
```bash
npm run dev
```

Ou use o comando combinado:
```bash
composer dev
```

### 9. Acesse a aplicação

- **Aplicação**: http://localhost:8000

---

## 📝 Comandos Úteis

### Com Docker (Sail)

```bash
# Iniciar containers
sail up -d

# Parar containers
sail down

# Ver logs
sail logs

# Acessar shell do container
sail shell

# Executar comandos Artisan
sail artisan migrate
sail artisan tinker

# Executar comandos Composer
sail composer install
sail composer update

# Executar comandos npm
sail npm install
sail npm run build
sail npm run dev

# Acessar MySQL
sail mysql

# Executar testes
sail artisan test
sail artisan test --filter=NomeDoTeste
```

### Sem Docker

```bash
# Servidor de desenvolvimento combinado (Laravel + Vite + Queue + Logs)
composer dev

# Apenas frontend
npm run dev

# Build de produção
npm run build

# Testes
php artisan test
php artisan test --filter=NomeDoTeste

# Code quality
npm run lint           # ESLint
npm run format         # Prettier
./vendor/bin/pint      # Laravel Pint (PHP)

# Verificação de tipos
npm run types
```

---

## 🏗️ Estrutura do Projeto

```
pd-front-end/
├── app/
│   ├── Actions/Fortify/     # Ações de autenticação
│   ├── Http/
│   │   ├── Controllers/      # Controllers da aplicação
│   │   ├── Middleware/       # Middlewares personalizados
│   │   └── Requests/         # Form Requests para validação
│   ├── Models/               # Modelos Eloquent
│   └── Providers/            # Service Providers
├── database/
│   ├── factories/            # Model Factories
│   ├── migrations/           # Migrações do banco
│   └── seeders/              # Seeders
├── resources/
│   ├── css/                  # Estilos CSS/Tailwind
│   └── js/
│       ├── actions/          # Tipos TypeScript gerados (Wayfinder)
│       ├── components/       # Componentes React
│       │   └── ui/          # Componentes shadcn/ui
│       ├── hooks/           # React Hooks personalizados
│       ├── layouts/         # Layouts de página
│       ├── pages/           # Páginas Inertia.js
│       ├── routes/          # Rotas TypeScript geradas (Wayfinder)
│       ├── types/           # Definições de tipos TypeScript
│       └── app.tsx          # Entry point do React
├── routes/
│   ├── web.php              # Rotas web principais
│   └── settings.php         # Rotas de configurações
├── tests/
│   ├── Feature/             # Testes de feature
│   └── Unit/                # Testes unitários
├── docker/                  # Configurações do Docker/Sail
├── docker-compose.yml       # Configuração dos serviços Docker
└── CLAUDE.md               # Guia para desenvolvimento com IA
```

---

## 🎨 Recursos e Funcionalidades

### Autenticação com Laravel Fortify

- ✅ Login e Registro
- ✅ Verificação de Email
- ✅ Reset de Senha
- ✅ Autenticação de Dois Fatores (2FA)
- ✅ Atualização de Perfil

### Laravel Wayfinder

Roteamento type-safe entre Laravel e TypeScript:

```typescript
// Importar rotas geradas automaticamente
import { show, store } from '@/actions/App/Http/Controllers/PostController'

// Usar com Inertia
<Link href={show.url(1)}>Ver Post</Link>

// Usar com formulários
<Form {...store.form()}>
  <input name="title" />
</Form>
```

### Componentes shadcn/ui

Interface moderna e acessível:

```bash
# Adicionar novos componentes
npx shadcn@latest add button
npx shadcn@latest add dialog
```

### Server-Side Rendering (SSR)

```bash
# Build com SSR
npm run build:ssr

# Desenvolvimento com SSR
composer dev:ssr
```

---

## 🧪 Testes

### Executar todos os testes

```bash
# Com Sail
sail artisan test

# Sem Docker
php artisan test
```

### Executar testes específicos

```bash
php artisan test --filter=ExampleTest
php artisan test tests/Feature/Auth/LoginTest.php
```

### Testes de Browser (Pest v4)

```bash
php artisan test tests/Browser/
```

---

## 🛠️ Laravel Boost

Este projeto inclui Laravel Boost, uma ferramenta de IA que aprimora o desenvolvimento:

- 🔍 Busca em documentação específica de versão
- 💾 Acesso direto ao banco de dados
- 🎯 Execução de comandos Artisan
- 🐛 Leitura de logs do browser
- 📝 Integração com Tinker

Consulte a seção `<laravel-boost-guidelines>` no arquivo `CLAUDE.md` para diretrizes completas.

---

## 🔧 Configuração Adicional

### Cache

```bash
# Limpar cache
sail artisan cache:clear
sail artisan config:clear
sail artisan route:clear
sail artisan view:clear

# Otimizar para produção
sail artisan config:cache
sail artisan route:cache
sail artisan view:cache
```

### Filas

```bash
# Processar filas (com Sail)
sail artisan queue:work

# Processar filas (sem Docker)
php artisan queue:work
```

---

## 📦 Deploy

### Build de produção

```bash
# Com Sail
sail npm run build

# Sem Docker
npm run build
```

### Otimizações do Laravel

```bash
php artisan config:cache
php artisan route:cache
php artisan view:cache
php artisan optimize
```

---

## 🤝 Contribuindo

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/MinhaFeature`)
3. Commit suas mudanças (`git commit -m 'Adiciona MinhaFeature'`)
4. Push para a branch (`git push origin feature/MinhaFeature`)
5. Abra um Pull Request

---

## 📄 Licença

Este projeto está sob a licença MIT.

---

## 🆘 Solução de Problemas

### Erro: "Vite manifest not found"

```bash
# Reconstrua os assets
npm run build
# ou inicie o dev server
npm run dev
```

### Erro de permissão no Docker

```bash
# Reconfigure as permissões
sail artisan storage:link
sudo chown -R $USER:$USER .
```

### Erro de conexão com banco de dados (Sail)

Certifique-se de que o `.env` está configurado corretamente:
```env
DB_HOST=mysql  # Nome do serviço Docker, não 127.0.0.1
REDIS_HOST=redis
```

### Containers não iniciam

```bash
# Reconstrua as imagens
sail build --no-cache
sail up -d
```

---

## 📚 Documentação

- [Laravel 12](https://laravel.com/docs/12.x)
- [React 19](https://react.dev)
- [Inertia.js](https://inertiajs.com)
- [Tailwind CSS v4](https://tailwindcss.com)
- [Laravel Sail](https://laravel.com/docs/12.x/sail)
- [Laravel Wayfinder](https://github.com/laravel/wayfinder)
- [Pest PHP](https://pestphp.com)
- [shadcn/ui](https://ui.shadcn.com)
