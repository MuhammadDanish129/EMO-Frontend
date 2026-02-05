import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'yx-select',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './yx-select.component.html'
})
export class YxSelectComponent {

  @Input() items: any[] = [];
  @Input() value: any;
  @Input() labelKey = 'label';
  @Input() valueKey = 'value';
  @Input() placeholder = 'Select';
  @Input() label = '';
  @Input() required = false;
  @Input() error: string | null = null;
  @Input() disabled = false;

  @Output() valueChange = new EventEmitter<any>();

  open = false;

  get selectedLabel(): string | null {
    const selected = this.items.find(
      i => i[this.valueKey] === this.value
    );
    return selected ? selected[this.labelKey] : null;
  }

  toggle() {
    if (this.disabled) {
      return;
    }
    this.open = !this.open;
  }


  select(item: any) {
  if (this.disabled) {
    return;
  }
  this.value = item[this.valueKey];
  this.valueChange.emit(this.value);
  this.open = false;
}

}
