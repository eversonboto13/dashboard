# Insight Dash

Este repositório contém uma versão estática do dashboard "Insight Dash" (arquivos: `dashboard.html` e `report-view.html`) que pode ser publicada via GitHub Pages para compartilhar resultados com outras pessoas.

Passos rápidos para publicar no GitHub Pages:

1. Crie um repositório no GitHub (público).
2. No seu terminal (PowerShell), dentro da pasta deste projeto execute:

```powershell
# Acesse a pasta do projeto local (substitua pelo caminho do seu projeto)
cd C:\caminho\para\seu\projeto
git init
git add .
git commit -m "🎉 Publicar Insight Dash"
git branch -M main
git remote add origin https://github.com/SEU_USUARIO/insight-dash.git
git push -u origin main
```

3. Ative GitHub Pages nas configurações do repositório (Settings → Pages) selecionando a branch `main` e pasta `/ (root)`.

O arquivo `DEPLOY-GITHUB.md` contém instruções detalhadas e notas sobre segurança (remover chaves) e como atualizar o link de compartilhamento.

Observações:
- Substitua `SEU_USUARIO` pelo seu usuário do GitHub nas instruções e no link de compartilhamento descrito em `DEPLOY-GITHUB.md`.
- O workflow do GitHub Actions presente em `.github/workflows/pages.yml` publica automaticamente quando você der push na branch `main`.
