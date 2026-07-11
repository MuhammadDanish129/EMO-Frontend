import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter, ElementRef, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'yx-select',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './yx-select.component.html',
  styleUrl: './yx-select.component.scss'
})
export class YxSelectComponent {
  @ViewChild('searchInput') searchInput?: ElementRef<HTMLInputElement>;

  @Input() items: any[] = [];
  @Input() value: any;
  @Input() labelKey = 'label';
  @Input() valueKey = 'value';
  @Input() placeholder = 'Select';
  @Input() label = '';
  @Input() required = false;
  @Input() error: string | null = null;
  @Input() disabled = false;
  @Input() placement: 'bottom' | 'top' = 'bottom';
  @Input() searchKeys: string[] = [];

  @Input() enableSearch: boolean = false;

  @Output() valueChange = new EventEmitter<any>();

  open = false;
  searchTerm: string = '';

  get filteredItems(): any[] {
    if (!this.enableSearch || !this.searchTerm) return this.items;
    const term = this.searchTerm.toLowerCase();
    const keys = this.searchKeys.length ? this.searchKeys : [this.labelKey];

    return this.items.filter(item =>
      keys.some(key =>
        String(item[key] ?? '').toLowerCase().includes(term)
      )
    );
  }

  get selectedLabel(): string | null {
    const selected = this.items.find(
      i => i[this.valueKey] === this.value
    );
    return selected ? selected[this.labelKey] : null;
  }

  toggle() {
    if (this.disabled) return;
    this.open = !this.open;

    if (this.open && this.enableSearch) {
      this.searchTerm = '';
      this.focusSearchInput();
    }
  }

  onSearchKeydown(event: KeyboardEvent) {
    event.stopPropagation();

    if (event.key === 'Escape') {
      this.closePanel();
      return;
    }

    if (event.key === 'Enter' && this.filteredItems.length) {
      event.preventDefault();
      this.select(this.filteredItems[0]);
    }
  }

  select(item: any) {
    if (this.disabled) return;
    this.value = item[this.valueKey];
    this.valueChange.emit(this.value);
    this.closePanel();
  }

  closePanel() {
    this.open = false;
    this.searchTerm = '';
  }

  private focusSearchInput() {
    setTimeout(() => this.searchInput?.nativeElement.focus());
  }

}
