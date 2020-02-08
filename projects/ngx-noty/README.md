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

See: https://ned.im/noty/#/themes

```json
// angular.json
{
  "styles": [
    "node_modules/noty/lib/noty.css",
    "node_modules/noty/lib/themes/{THEME_NAME}.css"
  ]
}
```
