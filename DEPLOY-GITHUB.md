# 🚀 Deploy no GitHub Pages

> ⚠️ **IMPORTANTE**: Antes de enviar para o GitHub, verifique se a chave de API foi removida do código!
> A chave Groq foi removida do [`dashboard.html`](dashboard.html). Cada usuário deve inserir sua própria chave no campo indicado.

Siga este guia para publicar o **Insight Dash** online e compartilhar relatórios com qualquer pessoa.

---

## 📋 Pré-requisitos

1. Uma conta no [GitHub](https://github.com) (gratuita)
2. [Git](https://git-scm.com/downloads) instalado no seu computador

---

## 📦 Passo a Passo

### 1. Criar um repositório no GitHub

1. Acesse [github.com/new](https://github.com/new)
2. **Repository name**: `insight-dash` (ou outro nome de sua preferência)
3. Deixe como **público** (Public)
4. **Não** marque "Add a README" nem ".gitignore"
5. Clique em **Create repository**

### 2. Enviar os arquivos via terminal

Abra o **Prompt de Comando** (cmd) ou **PowerShell** e execute:

```powershell
# Navegue até a pasta do projeto (substitua pelo caminho do seu projeto)
# Exemplo: cd C:\Users\<seu_usuario>\CascadeProjects\windsurf-project-2
cd C:\caminho\para\seu\projeto

# Inicializar Git
git init

# Adicionar todos os arquivos
git add dashboard.html report-view.html DEPLOY-GITHUB.md

# Criar primeiro commit
git commit -m "🎉 Primeira versão do Insight Dash"

# Conectar ao repositório (substitua SEU_USUARIO pelo seu nome do GitHub)
git remote add origin https://github.com/SEU_USUARIO/insight-dash.git

# Enviar para o GitHub
git branch -M main
git push -u origin main
```

### 3. Ativar GitHub Pages

1. No repositório do GitHub, vá em **Settings** → **Pages**
2. Em **Branch**, selecione `main` e pasta `/ (root)`
3. Clique em **Save**
4. Aguarde 1-2 minutos

### 4. URL do seu dashboard

Após ativar, seu dashboard estará disponível em:

```
https://SEU_USUARIO.github.io/insight-dash/dashboard.html
```

E os relatórios compartilhados em:

```
https://SEU_USUARIO.github.io/insight-dash/report-view.html
```

---

## 🔗 Atualizar link de compartilhamento no dashboard

No arquivo [`dashboard.html`](dashboard.html), localize a função `compartilharRelatorio()` e altere a linha:

```javascript
baseUrl = 'https://SEU_USUARIO.github.io/insight-dash/report-view.html';
```

Substituindo `SEU_USUARIO` pelo seu nome de usuário do GitHub.

---

## 📏 Tamanho dos links

Com a compressão LZW implementada:

| Cenário | Tamanho aproximado |
|---------|-------------------|
| Sem compressão (base64) | ~2.500 caracteres |
| Com LZW + chaves curtas | ~800-1.200 caracteres |
| Redução | **~60% menor** 🎯 |

---

## 🔄 Atualizar depois de modificações

Sempre que alterar os arquivos, execute:

```bash
git add dashboard.html report-view.html
git commit -m "Descrição das alterações"
git push
```

O GitHub Pages atualiza automaticamente em 1-2 minutos.

---

## ❓ Dúvidas comuns

**O link de compartilhamento é muito grande ainda?**
Com a compressão LZW, um relatório com 15 posts gera um link de ~800-1200 caracteres. Para encurtar ainda mais, você pode usar um encurtador como [bit.ly](https://bit.ly) ou [tinyurl.com](https://tinyurl.com).

**Os dados são seguros?**
Os dados ficam codificados na própria URL (hash). Não passam por servidores externos. Qualquer pessoa com o link pode ver os dados.

**Posso usar meu próprio domínio?**
Sim! Nas configurações do GitHub Pages você pode configurar um domínio personalizado.
