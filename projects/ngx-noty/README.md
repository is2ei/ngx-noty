# NgxNoty

Angular wrapper around Noty

## Usage

```typescript
// app.module.ts
import { NgxNotyModule } from 'ngx-noty';
```

```typescript
// app.component.ts
this.ngxNotyService.show({
  text: `Best check yo self, you're not looking too good.`,
  type: 'alert'
});
```

```json
// angular.json
// Replace `THEME_NAME` with theme name you'd like to use.
// See: https://ned.im/noty/#/themes
{
  "styles": [
    "node_modules/noty/lib/noty.css",
    "node_modules/noty/lib/themes/{THEME_NAME}.css"
  ]
}
```
