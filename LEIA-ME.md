# Use3D — site e GitHub Pages

Site estático de orçamento online, modelagem e impressão 3D. Os arquivos publicados ficam em `docs/`:

- `docs/index.html` — página principal com formulário interativo de orçamento pelo site (`.3MF`, `.STL`, modelagem 3D, tamanho, quantidade, material e envio formatado direto para o WhatsApp)
- `docs/termos.html` — Termos de Uso
- `docs/privacidade.html` — Política de Privacidade
- `docs/lgpd.html` — LGPD e Direitos do Titular (Lei nº 13.709/2018)
- `docs/404.html` — página de erro 404 personalizada
- `docs/robots.txt`, `docs/sitemap.xml` e `docs/site.webmanifest` — arquivos de indexação/SEO e manifesto web
- `docs/assets/` — imagens, fontes, imagem Open Graph (`og-use3d.jpg`) e estilos/scripts compartilhados (`legal.css`, `legal.js`)

O ZIP na raiz é uma cópia do pacote original, não é usado na publicação.

## Publicação

O GitHub Pages deste repositório está configurado para publicar a pasta `/docs` da branch `main`. Depois que as alterações desta branch forem incorporadas à `main`, o GitHub publicará o site automaticamente em:

https://use3d.github.io/USE3D.VV/

Para conferir a publicação, acesse **Settings → Pages** e verifique se a origem está em **Deploy from a branch**, branch `main`, pasta `/docs`. Acompanhe também **Actions** ou a seção de implantação do repositório. A publicação pode levar alguns minutos.

## Visualizar e editar

Para testar localmente, execute na raiz do repositório:

```bash
python3 -m http.server 8000 --directory docs
```

Acesse `http://localhost:8000/`. Mantenha imagens, fontes e recursos em `docs/assets/` e use caminhos relativos para que funcionem também no endereço do GitHub Pages. Os links de orçamento e contato apontam para o WhatsApp (`+55 28 99966-9974`) e Instagram (`@use3d.vv`) atuais cadastrados no site.
