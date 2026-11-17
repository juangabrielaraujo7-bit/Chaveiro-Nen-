# Chaveiro Nenê

Site do Chaveiro Nenê, na Freguesia do Ó, em São Paulo.

## Desenvolvimento

```sh
npm ci
npm run dev
```

Abra http://127.0.0.1:3000.

## Verificação

```sh
npm run verify
```

Para os testes de navegador, inicie o servidor local, instale o Chromium do Playwright com `npx playwright install chromium` e rode `npm run test:e2e`.

Os dados de contato e os serviços estão em `src/lib/content.ts`. As avaliações fornecidas estão em `src/lib/reviews.ts`. O arquivo `.env.example` documenta as configurações opcionais.
