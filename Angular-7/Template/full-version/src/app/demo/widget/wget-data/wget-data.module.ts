import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WgetDataRoutingModule } from './wget-data-routing.module';
import { WgetDataComponent } from './wget-data.component';
import {SharedModule} from '../../../theme/shared/shared.module';
import {NgbTabsetModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    WgetDataRoutingModule,
    SharedModule,
    NgbTabsetModule
  ],
  declarations: [WgetDataComponent]
})
export class WgetDataModule { }
