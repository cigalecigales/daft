# @cigalecigales/daft

JavaScript Library Sample Project.

## Generate files.

```bash
$ npm run build
# dist/daft.js
# dist/daft.min.js
```

## How to use generated files.

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <title>daft</title>
    <script src="./daft.min.js"></script>
  </head>
  <body>
    <script>
      const value = daft.format(new Date());
      console.log(value);
      // 2021/01/02
    </script>
  </body>
</html>
```
