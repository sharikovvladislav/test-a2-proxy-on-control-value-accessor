import {NgModule} from "@angular/core";
import {ProxyComponent} from "./proxy.component";
import {ControlModule} from "../control/control.module";
import {FormsModule} from "@angular/forms";

@NgModule({
  imports: [ ControlModule, FormsModule ],
  declarations: [ ProxyComponent ],
  exports: [ ProxyComponent ]
})
export class ProxyModule {}
