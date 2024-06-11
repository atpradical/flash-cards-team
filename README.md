# **Team work flow**:
## Работа над тасками:

1. 1 таска = 1 ветка
2. название ветки по названию таски.
3. одновременно в in progress может быть только 1 таска (Вторую таску берем только если нет пересечений с другими
   тасками).
4. **Перед каждым коммит обязательно выполнить скрипты: ```format``` и ```lint```**
5. Merge в main только после подтверждения ревью всех участников.
6. При работе над задачами проекте, **если есть открытый PR на ревью - приоритет отдаем ревью** и только потом преходим
   к коду и просмотру видео.

## Описание Label:

- "1 week" - задание с 1 недели 6 спринта
- "2 week" - задание с 2 недели 6 спринта
- "3 week" - задание с 3 недели 6 спринта
- "4 week" - задание с 4 недели 6 спринта

- "High" - код используется в какой-то другой таске.
- "Medium" - код не зависит от другой таски.
- "Low" - таска зависит от готовности кода из High таски.
- "Bug-fix" - исправление ошибок.
- "PR" - Pull Request.
- "documentation" - выполнение шагов по инструкции.

## Шаги для синхронизации своей ветки с обновленной main:

Вариант с *Merge*:

- Перейти в main: ```git checkout main```
- Обновить main: ```git pull origin main```
- Перейти обратно в свою рабочую ветку: ``` git checkout <название_ветки>```
- Сделать merge изменений из main в свою ветку: ```git merge main```
    - Разрешить конфликты, если они возникнут:
      Открыть файлы с конфликтами и исправить их вручную.
      Добавить исправленные файлы в индекс:  ``` git add <путь_к_файлу>```
    - Запушить свою ветку в свою удаленную ветку (т.к. история коммитов
      изменится): ```git push origin <название_ветки>```

Вариант с *Rebase* _(Альтернативный способ)_:

- Перейти в main: ```git checkout main```
- Обновить main: ```git pull origin main```
- Перейти обратно в свою рабочую ветку: ``` git checkout <название_ветки>```
- Сделать ребейз своей ветки на обновленную main ветку: ```git rebase main```
    - Разрешить конфликты, если они возникнут:
      Открыть файлы с конфликтами и исправить их вручную.
      Добавить исправленные файлы в индекс:  ``` git add <путь_к_файлу>```
    - Запушить свою ветку в свою удаленную ветку с флагом force (т.к. история коммитов
      изменится): ```git push origin <название_ветки> --force```

## Оформление коммитов:

- init: используется для начала проекта/таска.
- feature: новая функциональность.
- fix: исправление ошибок.
- refactor: форматирование, оптимизация изменение в каталоге и/или названиях файлов и папок.



# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md)
  uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast
  Refresh

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

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked`
  or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and
  add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
