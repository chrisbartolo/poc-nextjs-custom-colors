$ npx create-next-app@latest

```
✔ What is your project named? … poc-color-changer
✔ Would you like to use TypeScript with this project? … Yes
✔ Would you like to use ESLint with this project? … Yes
✔ Would you like to use Tailwind CSS with this project? … Yes
✔ Would you like to use `src/` directory with this project? … Yes
✔ Would you like to use experimental `app/` directory with this project? … Yes
✔ What import alias would you like configured? … @/*
```
```
npm install --save-dev sass
npm install -D postcss-import
npm install -D postcss-nesting
npm install -D autoprefixer
```

change app/globals.css to app/globals.scss

In next.config.js add the following:

```
const path = require('path')
...
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
    },
    compiler: {
        styledComponents: true
    }
...
```

In tailwind.config.js add the following:

```
function withOpacity(variableName) {
    return ({ opacityValue }) => {
        if (opacityValue !== undefined) {
            return `rgba(var(${variableName}), ${opacityValue})`
        }
        return `rgb(var(${variableName}))`
    }
}
```

and adapt the following:

```
mode: 'JIT',
darkMode: 'class',
extend: {
    colors: {
        primary: withOpacity("--color-primary"),
    },
}
```

to observe dynamic color changes for themeing, in layout.tsx change the hex of the `primaryColor` function call