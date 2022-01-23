# Repositório

O repositório contém o projeto de uma aplicação que exibe o clima de determinada cidade.

Foi feito baseado [na seguinte live](https://www.youtube.com/watch?v=sRpEcObAxvQ) do programa Web Fullstack do Santander. O código-fonte do vídeo pode ser acessado no [repositório do Github](https://github.com/fkbral/santander-coders-web-live-2).

O deploy foi realizado na Vercel e pode ser acessado em:

https://weather-app-self-delta.vercel.app

## Aplicação

A aplicação foi desenvolvida utilizando [Next.js](https://nextjs.org/docs/introduction/getting-started) e o TypeScript. Para a estilização, foi utilizado o [Material UI](https://material-ui.com/) e [Styled Components](https://www.styled-components.com/).

A aplicação consome a [API de localidades do IBGE](https://servicodados.ibge.gov.br/api/docs/localidades) para popular os campos de estados e cidades. Para obter os dados de clima, a aplicação utiliza a [seguinte API](https://github.com/robertoduessmann/weather-api).

O usuário pode escolher uma cidade como default para ter o clima exibido assim que a página for carregada.

## Rodando a aplicação

Para rodar a aplicação localmente, basta executar o comando abaixo:

```
  npm run dev
```

Feito isso a aplicação estará disponível em http://localhost:3000.

