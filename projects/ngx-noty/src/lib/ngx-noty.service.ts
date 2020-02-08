import Noty from 'noty';

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NgxNotyService {

  show(options: Noty.Options): void {
    new Noty(options).show();
  }

}
