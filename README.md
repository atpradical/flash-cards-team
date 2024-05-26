# Team work flow:
## Работа над тасками:

1. 1 таска = 1 ветка

2. название ветки по названию таски.
3. одновременно в in progress может быть только 1 таска (Вторую таску берем только если нет пересечений с другими тасками/партнерами).


4. название таски даем по маске: <span style="color: orange;">[Область]:<Название></span> (пример: <span style="color: green;">[Component]:Button)</span>).
5. Для верстки и стилей делаем отдельную таску и ветку (пример: <span style="color: green;">[Styles]:[Component]:Button)</span>).


6. <span style="color: orange;">Мерджим таску в Main только после ревью обоих напарников.</span>
    - <span style="color: orange;"><span style="color: green;">**Если все ОК:**</span> *оставляем коммент в таске: review completed, переназначаем на второго проверяющего.*</span>
    - <span style="color: orange;"><span style="color: red;">**Если НЕ ОК:**</span> *оставляем коммент в таске что исправить и почему, возвращаем в in-progress, назначаем обратно на исполнителя.*</span>
    - <span style="color: orange;">*Спорные моменты решаем коллективно, договариваемся на созвон.*</span>


7. <span style="color: red;">***работаем без pull requests***</span>

---





# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
