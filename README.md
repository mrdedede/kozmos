# Kozmos

A front-end prototype of a language-learning platform. Users sign up, pick a course, work through lessons, and track their progress. Built as a clickable concept for an entrepreneurship competition, not a production product.

> **Status: archived.** The project was last changed in 2020 and is no longer maintained. It is a read-only snapshot of the concept. Most data is hard-coded placeholder content, and nothing is persisted or authenticated.

## What it demonstrates

- **Landing and auth flow**: home screen, login and sign-up forms (UI only).
- **Feed**: a dashboard showing the course in progress, a profile sidebar, and an empty "friends' activity" state.
- **Course page**: a lesson list with progress computed from which lessons are cleared, plus a "next lesson" shortcut.
- **Lesson**: an exercise (conjugating "to be") that checks answers in the browser and offers a retry or teacher help.

## Tech stack

| Area | Choice |
| --- | --- |
| Framework | Vue 2.6 with `vue-class-component` / `vue-property-decorator` |
| Language | TypeScript 3.9 (strict) for components and router |
| Routing | `vue-router` 3 |
| UI | Bootstrap 4 + `bootstrap-vue` + `bootstrap-icons` |
| Charts | `chart.js` 2 with `vue-chartjs` (installed, not yet used) |
| Build | Vue CLI 4 (webpack 4 under the hood) |

## Project structure

```
src/
├── main.ts              # App bootstrap: Vue, BootstrapVue, router
├── App.vue              # Root: just a <router-view>, global fonts
├── router/index.ts      # Route table
├── components/
│   ├── HomeScreen.vue   # /            landing page
│   ├── Login.vue        # /login       sign-in form (no auth yet)
│   ├── Cadastro.vue     # /cadastro    sign-up form (no submit yet)
│   ├── Feed.vue         # /feed        dashboard + profile sidebar
│   ├── Curso.vue        # /curso       course overview and lesson list
│   └── Lesson.vue       # /lesson      exercise with answer checking
├── assets/              # Images used by the screens
└── fonts/               # Black-Ground and Montserrat-SemiBold
```

## Getting started

Requires Node.js. Vue CLI 4 predates recent Node releases. On Node 17+ you may need the legacy OpenSSL provider (the flag below is the usual workaround; I have not re-verified it against the current Node versions).

```bash
npm install

# dev server with hot reload
npm run serve

# production build into dist/
npm run build
```

If the dev server fails with `ERR_OSSL_EVP_UNSUPPORTED`, run it as:

```bash
NODE_OPTIONS=--openssl-legacy-provider npm run serve
```

## Known limitations

These are the gaps a reader should know about before running or reusing the code:

- **No authentication.** "Log In" is a router link to `/feed`. Form fields are not validated or sent anywhere.
- **Sign-up is not wired up.** The "Cadastrar" button only navigates. The `languages` and `photo` fields in `Cadastro.vue` are unused.
- **No backend or persistence.** Lessons, progress and the user profile ("Carlinhos") are hard-coded in the components.
- **Progress logic has dead branches.** In `Curso.vue` the second `v-else-if` (`percentageCleared < 50 && percentageCleared < 0`) can never be true, so the "completed" message never shows.
- **Lesson links are all the same.** Every entry in `Curso.vue` points to `/lesson`, which only contains the "to be" exercise.
- **Broken or placeholder markup.** `class="font."` in `Curso.vue`, an `<a>` with no `href` for "Cadastro" in `HomeScreen.vue`, and the `local("Monteserrat-SemiBold")` font name typo in `App.vue`.
- **Duplicated styles.** `.login-screen` and `.font-kozmos` are copy-pasted across `HomeScreen`, `Login`, `Cadastro`, `Curso`, `Lesson` and `Feed`. They belong in one shared stylesheet.
- **Unused dependencies.** `chart.js`, `vue-chartjs` and `vue-class-component` are declared with little or no use.
- **No tests or linting.** There is no test runner, ESLint or Prettier config.
- **Aging toolchain.** Vue 2 reached end of life in December 2023, and Vue CLI 4, webpack 4 and TypeScript 3.9 are all out of date. A rewrite on Vue 3 with Vite would be the natural next step.

## If you want to take this further

1. Move shared styles and the lesson data into a single source (a JSON file or a store) so screens stop duplicating content.
2. Replace the login and sign-up stubs with a real auth provider, then guard `/feed`, `/curso` and `/lesson` behind it.
3. Make lesson answers data-driven so more exercises can be added without new components.
4. Upgrade to Vue 3 and Vite, and add a basic test for the progress calculation in `Curso.vue` and the answer check in `Lesson.vue`.

## Credits

Images and fonts are placeholders from the original concept. Replace them before any public use, and check the licences of the font files in `src/fonts/` before reusing them.
