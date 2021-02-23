## Anotações gerais
Diferença entre *children* e *props*: *props* é passada dentro da tag de abertura. Uma *children* é passada entre a tag de abertura e a de fechamento.
Ex: 

```js
<Button color="red">
    Botão 1
</Button>
```

```js
<button type="button" style={{color: props.color}}>
    {props.children}
</button>
//export Button
````