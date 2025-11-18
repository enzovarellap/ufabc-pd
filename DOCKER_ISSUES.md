# Problemas com Docker / Sail - Soluções Alternativas

## Problema Atual

O Laravel Sail estava apresentando erros ao inicializar o MySQL devido a problemas de I/O no volume Docker:
- Erro: `Cannot resize redo log file`
- Erro: `Could not set the file size`
- Causa: Problemas com o driver de volume do Docker ou limitações de disco

## ✅ Solução Implementada: Desenvolvimento Local (Sem Docker)

A aplicação está configurada para rodar **sem Docker** usando:
- PHP 8.2 local
- SQLite (banco de dados em arquivo)
- Redis local (opcional)
- Servidor de desenvolvimento Laravel

### Como Usar (Desenvolvimento Local)

```bash
# 1. Iniciar o servidor Laravel e Vite
composer dev

# Ou inicie separadamente:
# Terminal 1 - Servidor Laravel
php artisan serve

# Terminal 2 - Vite (frontend)
npm run dev
```

### Acessar a Aplicação
- **Aplicação**: http://localhost:8000
- **Hot Reload**: Funciona automaticamente com Vite

---

## 🐳 Se Quiser Tentar Docker Novamente

### Opção 1: Aumentar Espaço do Docker

1. Abra o Docker Desktop
2. Vá em **Settings** → **Resources** → **Advanced**
3. Aumente o **Disk Image Size** para pelo menos 60GB
4. Clique em **Apply & Restart**

### Opção 2: Limpar Completamente o Docker

```bash
# Parar todos os containers
docker stop $(docker ps -aq)

# Remover todos os containers
docker rm $(docker ps -aq)

# Remover todos os volumes
docker volume prune -af

# Remover todas as imagens
docker image prune -af

# Limpar build cache
docker builder prune -af
```

### Opção 3: Usar MariaDB em vez de MySQL

Edite `compose.yaml` e troque:

```yaml
mysql:
    image: 'mysql/mysql-server:8.0'
```

Por:

```yaml
mysql:
    image: 'mariadb:10.11'
```

E ajuste as variáveis de ambiente para MariaDB.

---

## 📝 Configuração Atual

A aplicação está com:
- ✅ Laravel 12
- ✅ PHP 8.2+
- ✅ SQLite (database/database.sqlite)
- ✅ Laravel Boost instalado
- ✅ Migrações executadas
- ✅ Frontend com Vite configurado

---

## 🚀 Comandos Úteis (Local)

```bash
# Desenvolvimento
composer dev                  # Inicia todos os serviços
npm run dev                   # Apenas Vite

# Banco de dados
php artisan migrate           # Executar migrações
php artisan db:seed           # Popular banco com dados
php artisan migrate:fresh --seed  # Resetar e popular

# Testes
php artisan test              # Executar testes
npm run lint                  # Lint do código
npm run format                # Formatar código

# Build de produção
npm run build                 # Build do frontend
```

---

## Quando Usar Docker/Sail

Docker é recomendado quando:
- Você precisa de MySQL específico (não SQLite)
- Está trabalhando em equipe (padronização de ambiente)
- Vai fazer deploy em produção com Docker
- Precisa de serviços adicionais (Meilisearch, MinIO, etc.)

Para desenvolvimento local e prototipagem, **rodar sem Docker é mais rápido e simples**.
