import {Component, forwardRef} from "@angular/core";
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from "@angular/forms";

@Component({
  selector: 'app-proxy',
  template: `
      <div style="border: 1px solid blue;">
        <app-control [ngModel]="innerModel" (ngModelChange)="onModelChange($event)"></app-control>
      </div>
  `,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ProxyComponent),
      multi: true
    }
  ]
})
export class ProxyComponent implements ControlValueAccessor {
  _onChange;
  _onTouched;
  innerModel;

  writeValue(newValue) {
    this.innerModel = newValue;
  }

  registerOnChange(fn) {
    this._onChange = fn;
  }

  registerOnTouched(fn) {
    this._onTouched = fn;
  }

  onModelChange(newModel) {
    this._onChange(newModel);
  }
}
