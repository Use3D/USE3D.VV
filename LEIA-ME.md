# Use3D — publicação no GitHub Pages

Este é o site estático completo. Mantenha `index.html` e a pasta `assets/` lado a lado, na raiz do repositório.

## Caminho mais fácil: GitHub Desktop

1. Baixe e descompacte este pacote.
2. No GitHub, crie um repositório público chamado `use3d-site`.
3. Instale o GitHub Desktop e clone o repositório recém-criado.
4. Copie `index.html` e a pasta `assets/` deste pacote para a pasta local do repositório.
5. No GitHub Desktop, escreva uma mensagem como `Publica o site Use3D`, clique em **Commit to main** e depois em **Push origin**.
6. No site do GitHub, abra o repositório → **Settings** → **Pages**.
7. Em **Build and deployment**, selecione **Deploy from a branch**.
8. Em **Branch**, selecione `main` e a pasta `/(root)`, depois clique **Save**.
9. Aguarde a publicação. O link ficará no formato `https://SEU-USUARIO.github.io/use3d-site/`.

## Alternativa pelo terminal

Depois de instalar o Git e criar um repositório público vazio chamado `use3d-site` no GitHub, abra esta pasta no terminal e rode:

```bash
git init
git branch -M main
git add index.html assets
git commit -m "Publica o site Use3D"
git remote add origin https://github.com/SEU-USUARIO/use3d-site.git
git push -u origin main
```

Troque `SEU-USUARIO` pelo seu nome de usuário GitHub. Em seguida, habilite Pages seguindo os passos 6–9 acima.

## Para atualizar depois

Substitua o `index.html` e/ou os arquivos em `assets/`, faça commit e envie (Push). O GitHub Pages publica as alterações novamente.

**Importante:** não envie apenas o arquivo ZIP para o repositório. Descompacte-o primeiro; o `index.html` precisa ficar na raiz, com `assets/` ao lado. Os endereços de orçamento já apontam para o WhatsApp informado.
