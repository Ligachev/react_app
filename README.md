### Тестовое задание справочник 

Приложение с использованием React, которое умеет показывать следующие
страницы:
* / - главная
* /login – страница ввода логина и пароля
* /dictionary – страница со справочниками, недоступная без авторизации. Содержит
список справочников и поисковую строку. Каждая строка в списке содержит
название справочника и его описание. Поисковая строка позволяет осуществлять
поиск по названию справочника. Можно добавлять новый справочник в список
(должен появляться в начале списка), а также удалять существующий справочник
из списка. Изначально список должен содержать 10000 элементов.
* /about – страница с информаций о приложении (любая однотипная информация)

На сайте, в шапке реализовать ссылки:
* На главную (/)
* Справочники (/dictionary)
* О приложении (/about)

Если пользователь кликает на страницу со справочниками и он не авторизован –
перекидывать на страницу с логином

Форма входа принимает данные:
* username: Admin
* password: 12345

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
