# React Native Web UI Library

Originally forked from [react-native-storybook-boilerplate](https://github.com/ugglr/react-native-storybook-boilerplate). Adapted to create a design system that is published as a component library and used by [rn-monorepo](https://github.com/gezquinndesign/rn-monorepo).

This repo and the Monorepo are designed to be used together to develop a React Native Web project that works on mobile as well as web.

## devDependencies

`react-native` and `react` allow you to run the project as a native app or a web app.
`strorybook/react` and `storybook/react-native` allow you to develop components in isolation (either web or native)

## Storybook

Storybook looks for the .stories.tsx files in your component folders, and uses them to render previews ('stories') of the components. In the stories files, you should first declare a template using the component, and then you can make different stories based on that template (e.g. button in disabled state, button in highlighted state).

## Getting started

- `cd` into the repo and `yarn`.
- Run the web Storybook to see how components look on the web: `yarn sb-web`. Notice that the `Button` component (`src/components/Button`) has a `.web.tsx` version as well as a regular `.tsx` version. React-native-web will pick that up, and use the web version on web. The other components have no .web version, so they will be the same on native and web.
