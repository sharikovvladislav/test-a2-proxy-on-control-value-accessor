import {Component, forwardRef} from "@angular/core";
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from "@angular/forms";

@Component({
  selector: 'app-control',
  template: `
      <div style="border: 1px solid red;">
        {{ innerModel }}
        <button (click)="onClick()">Change model</button>
      </div>
  `,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ControlComponent),
      multi: true
    }
  ]
})
export class ControlComponent implements ControlValueAccessor {
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

  onClick() {
    this.innerModel = Math.random();
    this._onChange(this.innerModel);
  }
}
