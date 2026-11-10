# Use3D — site e GitHub Pages

Site estático de modelagem e impressão 3D. Os arquivos publicados ficam em `docs/`: `docs/index.html` contém o site e `docs/assets/` contém as imagens e fontes. O ZIP na raiz é uma cópia do pacote original, não é usado na publicação.

## Publicação

O GitHub Pages deste repositório está configurado para publicar a pasta `/docs` da branch `main`. Depois que as alterações desta branch forem incorporadas à `main`, o GitHub publicará o site automaticamente em:

https://use3d.github.io/USE3D.VV/

Para conferir a publicação, acesse **Settings → Pages** e verifique se a origem está em **Deploy from a branch**, branch `main`, pasta `/docs`. Acompanhe também **Actions** ou a seção de implantação do repositório. A publicação pode levar alguns minutos.

## Visualizar e editar

Para testar localmente, execute na raiz do repositório:

```bash
python3 -m http.server 8000 --directory docs
```

Acesse `http://localhost:8000/`. Edite `docs/index.html` e mantenha imagens e fontes em `docs/assets/`; use caminhos relativos para que funcionem também no endereço do Pages. Os links de orçamento apontam para o WhatsApp cadastrado no site; confira o número antes de divulgar.
