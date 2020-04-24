![Logo of the project](https://raw.githubusercontent.com/jesus-hernandezmoreno/tic-tac-toe/master/public/img/logo.png)

# React Boilerplate

A starter boilerplate to quickly create react apps, includes: react, redux, react-router, styled-component, framer-motion, auth and modals. 🧙

## About

Build on top on create-react-app, with all the features needed for almost every react app like dashboards, company apps, etc ...

## Why?

Well like every developer I wanted to created my own boilerplate, and I noticed that a lot of them are great but are missing auth, modals, and routing which is something I used in almost every app, so why not?

## Features

### Up to date:

Using only hooks for all the app, I've recently migrate fully to hooks so all the components and views are created that way.

### API ready:

Using env variables and an instance of axios on the `api` folder you can quickly connect your front to your backend.

### Styled Components:

Well I like them a lot, using an index.js and a styled.js file on every folder is easier to styled them and reuse them, also using the `theme` file you can easily change all the sizes and colors for the components.

### Responsive:

I found it hard sometimes to create different layouts when you want to display a different component based on the screen, so using a custom hook `useWindowResize` I render the component based on the screenWidth.

### Protected Routes:

Using a HOC based on `react-router-dom` docs, you can quickly create a protected route that checks if the user is authenticated and if not it redirect's you to the login page.

### Modals:

Modals are always complicated when you wanna scale them, so using redux and portals I found it easier to define them in one place and render them passing a string with the name of the modal.

### Animation:

Right now is only used for the modals, but `framer-motion` is an awesome library to add quickly animations to react.

### Typography:

A declarativeish way to reuse typographt across all the app.

### Linting:

Setup of prettier and eslint with VSCode

## Structure:

All the important stuff is on the `src` folder:

##### |-- api:

`config.js`: contains the axios instance and also the interceptors to send the token to your protected requests.

`auth.js`: An example of the approach to use the axios instance.

##### |-- assets:

All the assets of the app.

##### |-- Components:

Contains all the components that are shared across the app

##### |-- config:

`color.js`: The scheme of colors.

`media.js`: The breakpoints for responsive design.

`theme.js`: The theme use for styled components

##### |-- HOC:

`AuthRoute.js`: Used when the route does not requires authentication.

`PrivateRoute.js`: Used when the route requires authentication.

##### |-- hooks:

Here you put your custom hooks.

`useForm.js`: Includes the `onChange`, `onBlur` and `onSubmit` method to reuse the logic of forms.

`useModal.js`: Returns the `displayModal` and the `hideModal` methods.

`useWindowResize.js`: Returns the `width` of the screen.

##### |-- Layout:

Define your layouts to pass on your routes.

For differente layouts include a variants folder

##### |-- libs:

Sometime there are great libs that are not supported and if you want to make a micro change I usually copy the `index`file and changed what I want.

##### |-- Modals:

Here you place all the modals and register them on the `ModalRoot.js` file so you can call:

`displayModal('NAME_OF_MODAL');`

##### |-- redux:

Using the approach of `redux-ducks` all on one file.

##### |-- scss:

Sometimes some libs are easier to override the styles than use an `StyledComponent` also the `reset.scss` file resets all the browser default styles.

##### |-- typography:

An example of using a typography reusable system

##### |-- utils:

Helper function like `error handlers`, `validations`, etc ...

##### |-- Views:

Every file that is a `router-view` goes here, I don´t really like the approach of Containers/Components so my logic is, if it'r a router view goes here, if I need a component only for this view I also put it here, if the component is reusable across `Views` then I move it to the `Components` folder.

##### App.js:

Includes the structure of the routes and the logic to detect if you are authenticated.
Also includes `toastify` https://github.com/fkhadra/react-toastify to display some alerts.

##### index.js:

Wraps the `App.js` with the `ThemeProvider`, `Router` and the `Store`

## TO-DO:

- Maybe move the routes to a separete file and map them.
- Portrait to Typescript
- Refactor the HOC, works for now, so I'll leave it as it is.

## Getting Started

1. Clone the repository
2. `yarn install`
3. `yarn start`
4. That's it!
