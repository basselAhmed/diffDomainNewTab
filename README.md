# diffDomainNewTab

### Save Your Visitors
Open links in new tab if on different domain and not in the exception list.

### Bugs
If you encounter any issues using this plugin please open an issue here and I'll try my best to fix it.

Developers are more than welcome to improve this plugin.

Thanks.

### Note
This is a jQuery Plugin so it needs to be loaded first

### Usage:
  without exception list:

```js
jQuery("a").diffDomainNewTab();
```

  with exception list:
  
```js
jQuery("a").diffDomainNewTab({
    exceptionList: [
        "www.google.com",
        "www.facebook.com"
    ]
});
```
