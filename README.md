# NLW 4 - trilha ReactJS
## Anotações gerais
Diferença entre *children* e *props*: *props* é passada dentro da tag de abertura. Uma *children* é passada entre a tag de abertura e a de fechamento.
Ex: 

```js
<button type="button" style={{color: props.color}}>
    {props.children}
</button>

export Button
```

```js
<Button color="red">
    Botão 1
</Button>
```

##### Next.JS

O next.JS substitui o create-react-app, é considerado um framework em cima do React. Ele permite que seja trabalhado 3 conceitos valiosíssimos para o front-end: SPA(Single Page Aplicattion), SSR (Server-Side Rendering) e SGA (Static Side Generation). O next.JS nasce da busca de melhorar o SEO(Search Engineer Otimization), mas atualmente ele tem uma amplitude de benefícios muito além disso. 

##### CSS Modules

Usado para que o CSS não afete outras páginas, restringe o CSS apenas ao componente no caso dessa aplicação.
Ex.: na pasta src/components/ExperienceBar.tsx foi importado o css com o nome 'styles' e nas classes são usados styles.[nome da classe definida no css importado].

##### Context API
É a API de contexto do React, com ele é possível fazer comunicação entre componentes. Dentro de um contexto é possível mandar objetos, funções...

### Comandos de criação do app

- npx create-next-app moveit-next - cria o projeto em next
- npm install typescript @types/react @types/react-dom @types/node -D - instalando typescript na aplicação
- npm run dev - Roda o projeto
