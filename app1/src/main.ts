import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

// const browserDynamic = platformBrowserDynamic()
// const output = browserDynamic.bootstrapModule(AppModule)
// output.catch(error => {
//   console.error(error)
// })


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
