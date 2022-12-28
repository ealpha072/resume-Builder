### Dealing with request to favicon.ico
Most browsers will try to send requests to get a favicon. To prevent this, use a middle as below
```js
    const faviconIgnore = (request, response, next) => {
        if(request.originalUrl.includes('/favicon.ico')){
            return response.status(204).end()
        }
        next()
    }

    app.use(faviconImage)
```