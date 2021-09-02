# APM Material Design

Este projeto foi gerado com o [Angular CLI](https://github.com/angular/angular-cli) versão 12.2.1.

## Aplicação Modelo

Este projeto é uma aplicação modelo que implementa o Material Design e diversos exemplos de situações comuns em sistemas desktop web. Também foram aplicadas boa práticas em relação à organização do código e a escalabilidade da aplicação.

### Instalação

- Pré-requisitos: [NodeJS 12+](https://nodejs.org/en/) e [Angular CLI](https://angular.io/guide/setup-local#install-the-angular-cli)
- git clone do projeto
- cd para a pasta do projeto
- npm ci
- ng serve

### Setup do projeto

Além do [Material Design](https://material.angular.io/), foi adicionado ao projeto o [Bootstrap 5](https://getbootstrap.com/), pois tem um suporte mais fácil para grid responsivo e mais alguns helpers interessantes.

## Feature Module & LazyLoading

Temos um módulo **shared** que compartilha recursos para os outros módulos, e temos os módulos **auth** e **exemplos** implementando o _LazyLoading_.

O módulo **auth** apresenta um fluxo de login, com exemplos de persistência de token, guardas de rota e serviço de autenticação.

O módulo **exemplos** apresenta páginas com exemplos de interações comuns em sistemas, como formulários, listas de dados, diálogos, dashboards, etc.

## Custom Theme

Como este projeto suporta o tema do Material Design, apresentamos também um exemplo de como customizar a paleta de cores a partir do [guia de cores do Material Design](https://material.io/archive/guidelines/style/color.html#color-color-palette).

## Formulários reativos

Na página exemplo de formulário, mostramos como controlar os dados no formulário e como exibir as mensagens de validação a partir de um componente que resolve automaticamente a validação e a mensagem a ser exibida.

## Diálogo de confirmação

Criamos um serviço para facilitar a criação de diálogos de confirmação, já que é utilizado com frequência em sistemas.

## Feedback de atividade

Um serviço para facilitar a exibição de um feedback de atividade que bloqueia a tela até o término da atividade.
