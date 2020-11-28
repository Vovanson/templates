import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HierarInjComponent } from './hierar-inj.component';
import { OptionalComponent } from './optional/optional.component';
import { SelfComponent } from './self/self.component';
import { SelfNoDataComponent } from './self-no-data/self-no-data.component';
import { SkipselfComponent } from './skipself/skipself.component';
import { HostComponent } from './host/host.component';
import { HostChildComponent } from './host-child/host-child.component';
import { HostParentComponent } from './host-parent/host-parent.component';



@NgModule({
  declarations: [HierarInjComponent, OptionalComponent, SelfComponent, SelfNoDataComponent, SkipselfComponent, HostComponent, HostChildComponent, HostParentComponent],
  imports: [
    CommonModule
  ]
})
export class HierarInjModule { }
