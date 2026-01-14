export interface SuperTableColumn {
  field: string;
  header: string;
  sortable?: boolean;
  filter?: boolean;
  width?: string;
  colspan?: number;
  rowspan?: number;
}

export interface SuperTableConfig {
  columns: SuperTableColumn[];

  paginator?: boolean;
  rows?: number;
  rowsPerPageOptions?: number[];

  globalFilter?: boolean;
  
  // Selection
  selectionMode?: 'single' | 'multiple';
  dataKey?: string;

  // Styling
  showGridlines?: boolean;
  stripedRows?: boolean;
  
  // Scrolling
  scrollable?: boolean;
  scrollHeight?: string;
  virtualScroll?: boolean;
  virtualScrollItemSize?: number;
  
  // Column behavior
  resizableColumns?: boolean;
  columnResizeMode?: 'fit' | 'expand';
  reorderableColumns?: boolean;

  // Row Expansion
  rowExpansion?: boolean;

  // Editing
  editMode?: 'cell' | 'row';

  // Grouping
  rowGroupMode?: 'subheader' | 'rowspan';
  groupRowsBy?: string;

  // Lazy Loading
  lazy?: boolean;
  totalRecords?: number;
  loading?: boolean;

  // State Management
  stateKey?: string;
  stateStorage?: 'session' | 'local';

  // Pagination Details
  showCurrentPageReport?: boolean;
  currentPageReportTemplate?: string;
  programmaticPagination?: boolean;
  first?: number;

  // Export
  exportable?: boolean;
  exportFilename?: string;

  // Column Toggle
  columnToggle?: boolean;

  // Context Menu
  contextMenu?: boolean;

  // Frozen
  frozenValue?: any[];

  // Column Grouping
  columnGroup?: boolean;
}
