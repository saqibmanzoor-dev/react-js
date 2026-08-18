# React + Vite

## Jotai and state management overview

This project is a small example of state management with Jotai.

- **State** is data that can change while a user uses the app, such as a counter value.
- Jotai stores each small piece of shared state in an **atom**.
- Components can read an atom with `useAtomValue` and update it with `useSetAtom`.
- A derived atom can calculate a new value from another atom. In this project, it checks whether the counter is even.
- This keeps shared data simple and lets only the components that use that data update.

Jotai is useful when multiple components need the same data without passing props through many levels.

