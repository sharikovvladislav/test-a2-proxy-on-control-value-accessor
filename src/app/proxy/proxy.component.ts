import {Component} from "@angular/core";
import {ControlValueAccessor} from "@angular/forms";

@Component({
  selector: 'app-control',
  template: `
      <div style="border: 1px solid red;">
        {{ innerModel }}
        <button (click)="onClick()">Change model</button>
      </div>
  `
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
    this._onChange(Math.random());
  }
}
