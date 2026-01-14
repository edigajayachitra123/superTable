import { SuperTableConfig } from "./project/superTable/super-table/super-table.types";
import { CUSTOMERS, PRODUCTS } from "./data/sample-data";

const SALES_DATA = [
    { product: 'Bamboo Watch', lastYearSale: 51, thisYearSale: 40, lastYearProfit: 54406, thisYearProfit: 43342 },
    { product: 'Black Watch', lastYearSale: 83, thisYearSale: 9, lastYearProfit: 423132, thisYearProfit: 312122 },
    { product: 'Blue Band', lastYearSale: 38, thisYearSale: 5, lastYearProfit: 12321, thisYearProfit: 8500 },
    { product: 'Blue T-Shirt', lastYearSale: 49, thisYearSale: 22, lastYearProfit: 745232, thisYearProfit: 65323 },
    { product: 'Brown Purse', lastYearSale: 17, thisYearSale: 79, lastYearProfit: 643242, thisYearProfit: 500332 },
    { product: 'Chakra Bracelet', lastYearSale: 52, thisYearSale: 65, lastYearProfit: 421132, thisYearProfit: 150005 }
];

export const MODES = [
  {
    name: 'Basic',
    config: {
      columns: [
        { field: 'code', header: 'Code' },
        { field: 'name', header: 'Name' },
        { field: 'category', header: 'Category' },
        { field: 'quantity', header: 'Quantity' }
      ]
    } as SuperTableConfig,
    data: [
        { id: '1', code: 'f230fh0g3', name: 'Bamboo Watch', category: 'Accessories', quantity: 24 },
        { id: '2', code: 'nvklal433', name: 'Black Watch', category: 'Accessories', quantity: 61 },
        { id: '3', code: 'zz21cz3c1', name: 'Blue Band', category: 'Fitness', quantity: 2 },
        { id: '4', code: '244wgerg2', name: 'Blue T-Shirt', category: 'Clothing', quantity: 25 },
        { id: '5', code: 'h456wer53', name: 'Bracelet', category: 'Accessories', quantity: 73 }
    ]
  },
  {
    name: 'Dynamic Columns',
    config: {
      columns: [
        { field: 'name', header: 'Product Name' },
        { field: 'category', header: 'Category' },
        { field: 'price', header: 'Price' }
      ]
    } as SuperTableConfig,
    data: PRODUCTS
  },
  {
    name: 'Templating',
    config: {
      columns: [
        { field: 'name', header: 'Name' },
        { field: 'country', header: 'Country' },
        { field: 'representative', header: 'Representative' },
        { field: 'status', header: 'Status' }
      ]
    } as SuperTableConfig,
    data: CUSTOMERS
  },
  {
    name: 'Size / Gridlines / Stripes',
    config: {
      columns: [
        { field: 'name', header: 'Name' },
        { field: 'category', header: 'Category' },
        { field: 'price', header: 'Price' },
        { field: 'inventoryStatus', header: 'Status' }
      ],
      showGridlines: true,
      stripedRows: true
    } as SuperTableConfig,
    data: PRODUCTS
  },
  {
    name: 'Conditional Styles',
    config: {
      columns: [
        { field: 'name', header: 'Name' },
        { field: 'status', header: 'Status' }
      ]
    } as SuperTableConfig,
    data: CUSTOMERS
  },
  {
    name: 'Pagination - Basic',
    config: {
      columns: [
        { field: 'name', header: 'Name' },
        { field: 'country.name', header: 'Country' },
        { field: 'company', header: 'Company' },
        { field: 'representative.name', header: 'Representative' }
      ],
      paginator: true,
      rows: 5,
      rowsPerPageOptions: [5, 10, 20]
    } as SuperTableConfig,
    data: Array.from({ length: 25 }, (_, i) => ({ 
        ...CUSTOMERS[i % CUSTOMERS.length], 
        id: i, 
        name: i < CUSTOMERS.length ? CUSTOMERS[i].name : `${CUSTOMERS[i % CUSTOMERS.length].name} ${i}` 
    }))
  },
  {
    name: 'Pagination - Programmatic',
    config: {
      columns: [
        { field: 'name', header: 'Name' },
        { field: 'country.name', header: 'Country' },
        { field: 'company', header: 'Company' },
        { field: 'representative.name', header: 'Representative' }
      ],
      paginator: true,
      rows: 10,
      programmaticPagination: true
    } as SuperTableConfig,
    data: Array.from({ length: 50 }, (_, i) => ({ 
        ...CUSTOMERS[i % CUSTOMERS.length], 
        id: i, 
        name: i < CUSTOMERS.length ? CUSTOMERS[i].name : `${CUSTOMERS[i % CUSTOMERS.length].name} ${i}` 
    }))
  },
  {
    name: 'Sort – Single | Multiple | Presort | Custom',
    config: {
      columns: [
        { field: 'name', header: 'Name', sortable: true },
        { field: 'price', header: 'Price', sortable: true },
        { field: 'category', header: 'Category', sortable: true }
      ]
    } as SuperTableConfig,
    data: PRODUCTS
  },
  {
    name: 'Filter – Basic | Advanced (column menus)',
    config: {
      columns: [
        { field: 'name', header: 'Name', filter: true },
        { field: 'country.name', header: 'Country', filter: true },
        { field: 'status', header: 'Status', filter: true }
      ],
      globalFilter: true
    } as SuperTableConfig,
    data: CUSTOMERS
  },
  {
    name: 'Selection – Single | Multiple | Radio | Checkbox | Column-trigger',
    config: {
      columns: [
        { field: 'name', header: 'Name' },
        { field: 'category', header: 'Category' }
      ],
      selectionMode: 'multiple',
      dataKey: 'id'
    } as SuperTableConfig,
    data: PRODUCTS
  },
  {
    name: 'Row Expansion',
    config: {
      columns: [
        { field: 'name', header: 'Name' },
        { field: 'price', header: 'Price' }
      ],
      rowExpansion: true,
      dataKey: 'id'
    } as SuperTableConfig,
    data: PRODUCTS
  },
  {
    name: 'Edit – Cell',
    config: {
      columns: [
        { field: 'name', header: 'Name' },
        { field: 'price', header: 'Price' }
      ],
      editMode: 'cell',
      dataKey: 'id'
    } as SuperTableConfig,
    data: PRODUCTS
  },
  {
    name: 'Edit – Row',
    config: {
      columns: [
        { field: 'name', header: 'Name' },
        { field: 'price', header: 'Price' }
      ],
      editMode: 'row',
      dataKey: 'id'
    } as SuperTableConfig,
    data: PRODUCTS
  },
  {
    name: 'Scroll',
    config: {
      columns: [
        { field: 'id', header: 'ID', width: '200px' },
        { field: 'name', header: 'Name', width: '200px' },
        { field: 'category', header: 'Category', width: '200px' },
        { field: 'price', header: 'Price', width: '200px' },
        { field: 'inventoryStatus', header: 'Status', width: '200px' },
        { field: 'rating', header: 'Rating', width: '200px' },
        { field: 'code', header: 'Code', width: '200px' }
      ],
      scrollable: true,
      scrollHeight: '400px'
    } as SuperTableConfig,
    data: Array.from({ length: 30 }, (_, i) => ({ 
        ...PRODUCTS[i % PRODUCTS.length], 
        id: i.toString(), 
        name: `${PRODUCTS[i % PRODUCTS.length].name} ${i}` 
    }))
  },
  {
    name: 'Frozen – Rows | Columns',
    config: {
      columns: [
        { field: 'name', header: 'Name' },
        { field: 'category', header: 'Category' },
        { field: 'price', header: 'Price' },
        { field: 'inventoryStatus', header: 'Status' }
      ],
      frozenValue: [
        { id: 'f1', name: 'IMPORTANT: Bamboo Watch', category: 'Accessories', price: 65, inventoryStatus: 'INSTOCK', rating: 5 },
        { id: 'f2', name: 'IMPORTANT: Black Watch', category: 'Accessories', price: 72, inventoryStatus: 'OUTOFSTOCK', rating: 4 }
      ],
      scrollable: true,
      scrollHeight: '400px'
    } as SuperTableConfig,
    data: Array.from({ length: 50 }, (_, i) => ({ 
        ...PRODUCTS[i % 4], 
        id: i.toString(), 
        name: `${PRODUCTS[i % 4].name} (Row ${i + 1})` 
    }))
  },
  {
    name: 'Column Group',
    config: {
      columns: [], // Using custom header
      columnGroup: true
    } as SuperTableConfig,
    data: SALES_DATA
  },
  {
    name: 'Row Group – Subheader | RowSpan',
    config: {
      columns: [
        { field: 'name', header: 'Name' },
        { field: 'country', header: 'Country' },
        { field: 'company', header: 'Company' },
        { field: 'status', header: 'Status' }
      ],
      rowGroupMode: 'subheader',
      groupRowsBy: 'representative.name',
      dataKey: 'id'
    } as SuperTableConfig,
    data: Array.from({ length: 20 }, (_, i) => {
        const repIndex = Math.floor(i / 5);
        const reps = [
            { name: 'Amy Elsner', image: 'amyelsner.png' },
            { name: 'Anna Fali', image: 'annafali.png' },
            { name: 'Asiya Javayant', image: 'asiyajavayant.png' },
            { name: 'Bernardo Dominic', image: 'bernardodominic.png' }
        ];
        return {
            ...CUSTOMERS[i % CUSTOMERS.length],
            id: i,
            name: `${CUSTOMERS[i % CUSTOMERS.length].name} ${i}`,
            representative: reps[repIndex]
        };
    }).sort((a, b) => a.representative.name.localeCompare(b.representative.name))
  },
  {
    name: 'Column Resize – Fit | Expand',
    config: {
      columns: [
        { field: 'code', header: 'Code' },
        { field: 'name', header: 'Name' },
        { field: 'category', header: 'Category' },
        { field: 'quantity', header: 'Quantity' }
      ],
      resizableColumns: true,
      columnResizeMode: 'fit'
    } as SuperTableConfig,
    data: [
        { id: '1', code: 'f230fh0g3', name: 'Bamboo Watch', category: 'Accessories', quantity: 24 },
        { id: '2', code: 'nvklal433', name: 'Black Watch', category: 'Accessories', quantity: 61 },
        { id: '3', code: 'zz21cz3c1', name: 'Blue Band', category: 'Fitness', quantity: 2 },
        { id: '4', code: '244wgerg2', name: 'Blue T-Shirt', category: 'Clothing', quantity: 25 },
        { id: '5', code: 'h456wer53', name: 'Bracelet', category: 'Accessories', quantity: 73 }
    ]
  },
  {
    name: 'Reorder – Columns | Rows',
    config: {
      columns: [
        { field: 'name', header: 'Name' },
        { field: 'category', header: 'Category' }
      ],
      reorderableColumns: true
    } as SuperTableConfig,
    data: PRODUCTS
  },
  {
    name: 'Column Toggle',
    config: {
      columns: [
        { field: 'name', header: 'Name' },
        { field: 'category', header: 'Category' },
        { field: 'price', header: 'Price' }
      ],
      columnToggle: true
    } as SuperTableConfig,
    data: PRODUCTS
  },
  {
    name: 'Export (CSV)',
    config: {
      columns: [
        { field: 'name', header: 'Name' },
        { field: 'category', header: 'Category' }
      ],
      exportable: true
    } as SuperTableConfig,
    data: PRODUCTS
  },
  {
    name: 'Context Menu',
    config: {
      columns: [
        { field: 'name', header: 'Name' },
        { field: 'category', header: 'Category' }
      ],
      contextMenu: true,
      dataKey: 'id'
    } as SuperTableConfig,
    data: PRODUCTS
  }
];
