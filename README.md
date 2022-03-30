## vite-plugin-starter

A template project that can allows you to quickly start writing vite plugin.

Integrated capabilities as show below:

- TypeScript
- Jest
- Eslint
- Git Action, it's use the workflow to automatically publish npm

## Usage

**1.Use this template**


**2.Write author name in LICENSE**

And then, you should wirte your name to replace the `[Author Name]` in LICENSE file:

```
MIT License

Copyright (c) 2021 [Author Name]

Permission is hereby granted, free of charge, to any person obtaining a copy
...
```

**3.Create the secrets of NPM_AUTH_TOKEN**

Because of git action must used the NPM Token to automatically publish npm, so you should generate your the NPM Token, and then add to your repo's settings->secrets.

>Note, the secrets must name to NPM_AUTH_TOKEN.

