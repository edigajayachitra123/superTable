import { Component, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule, TableLazyLoadEvent } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { TagModule } from 'primeng/tag';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { MultiSelectModule } from 'primeng/multiselect';
import { ContextMenuModule } from 'primeng/contextmenu';
import { SkeletonModule } from 'primeng/skeleton';
import { SelectButtonModule } from 'primeng/selectbutton';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { MenuItem } from 'primeng/api';

import { SuperTableConfig, SuperTableColumn } from './super-table.types';

@Component({
  selector: 'super-table',
  standalone: true,
  imports: [
    CommonModule, 
    TableModule, 
    InputTextModule, 
    FormsModule, 
    TagModule, 
    ButtonModule, 
    RippleModule, 
    MultiSelectModule, 
    ContextMenuModule, 
    SkeletonModule,
    SelectButtonModule,
    IconFieldModule,
    InputIconModule
  ],
  templateUrl: './super-table.component.html',
  styleUrls: ['./super-table.component.scss']
})
export class SuperTableComponent implements OnChanges {

  @Input() config!: SuperTableConfig;
  @Input() data: any[] = [];
  @Output() onLazyLoad = new EventEmitter<TableLazyLoadEvent>();

  selectedItems: any;
  selectedColumns: SuperTableColumn[] = [];
  globalFilterValue = '';
  globalFilterFields: string[] = [];
  first = 0;
  
  currentGroupMode = 'subheader';
  
  resizeOptions = [
    { label: 'Fit', value: 'fit' },
    { label: 'Expand', value: 'expand' }
  ];

  groupOptions = [
    { label: 'Subheader', value: 'subheader' },
    { label: 'RowSpan', value: 'rowspan' }
  ];

  contextMenuItems: MenuItem[] = [
    { label: 'View', icon: 'pi pi-fw pi-search', command: () => console.log('View', this.selectedRow) },
    { label: 'Delete', icon: 'pi pi-fw pi-times', command: () => console.log('Delete', this.selectedRow) }
  ];
  selectedRow: any;

  FLAG_URL = 'https://primefaces.org/cdn/primeng/images/demo/flag/flag_placeholder.png';
  AVATAR_URL = 'https://primefaces.org/cdn/primeng/images/demo/avatar/';

  ngOnChanges() {
    if (this.config?.columns) {
      this.globalFilterFields = this.config.columns.map(col => col.field);
      this.selectedColumns = [...this.config.columns];
    }
    this.globalFilterValue = '';
    this.first = this.config?.first || 0;

    if (this.config?.rowGroupMode) {
      this.currentGroupMode = this.config.rowGroupMode;
    }
  }

  onGroupModeChange(event: any) {
    this.config.rowGroupMode = event.value;
  }

  next() {
    this.first = this.first + (this.config.rows || 5);
  }

  prev() {
    this.first = this.first - (this.config.rows || 5);
  }

  reset() {
    this.first = 0;
  }

  isLastPage(): boolean {
    return this.data ? this.first >= (this.data.length - (this.config.rows || 5)) : true;
  }

  isFirstPage(): boolean {
    return this.data ? this.first === 0 : true;
  }

  get totalColumns(): number {
    if (this.config.columnGroup) return 5;
    let count = this.selectedColumns.length;
    if (this.config.reorderableColumns) count++;
    if (this.config.selectionMode) count++;
    if (this.config.rowExpansion) count++;
    if (this.config.editMode === 'row') count++;
    if (this.config.rowGroupMode === 'rowspan') count++;
    return count;
  }

  getSeverity(status: string): "success" | "secondary" | "info" | "warn" | "danger" | "contrast" | undefined {
    switch (status.toLowerCase()) {
      case 'instock':
      case 'qualified':
        return 'success';
      case 'lowstock':
      case 'proposal':
        return 'warn';
      case 'outofstock':
      case 'unqualified':
        return 'danger';
      case 'new':
        return 'info';
      case 'negotiation':
        return 'secondary';
      default:
        return undefined;
    }
  }

  onGlobalFilter(table: any, event: Event) {
    table.filterGlobal((event.target as HTMLInputElement).value, 'contains');
  }

  exportCSV(table: any) {
    table.exportCSV();
  }

  resolveFieldData(data: any, field: string): any {
    if (data && field) {
      if (field.indexOf('.') === -1) {
        return data[field];
      } else {
        const fields: string[] = field.split('.');
        let value = data;
        for (let i = 0, len = fields.length; i < len; ++i) {
          if (value == null) {
            return null;
          }
          value = value[fields[i]];
        }
        return value;
      }
    } else {
      return null;
    }
  }
}
