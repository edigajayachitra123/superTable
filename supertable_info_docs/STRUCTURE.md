# Source Code Structure and Modes

## Source Code Structure

The project is an Angular application that showcases a highly configurable `SuperTable` component built on top of PrimeNG.

### Root Directory
- `src/`: Contains the source code of the application.
- `public/`: Static assets served directly.
- `angular.json`: Angular CLI configuration.
- `package.json`: Project dependencies and scripts.
- `server.ts`: Server-side rendering (SSR) setup with Express.

### `src/` Directory
- `app/`: Main application logic.
    - `data/`: Contains sample data (Customers, Products) used for demonstrations.
    - `project/superTable/`: The core of the project.
        - `super-table/`: The `SuperTableComponent` implementation.
            - `super-table.component.ts`: Logic for handling configuration and data.
            - `super-table.component.html`: Template using `p-table` from PrimeNG.
            - `super-table.component.scss`: Component-specific styles.
            - `super-table.types.ts`: TypeScript interfaces for table configuration and columns.
    - `app.component.ts`: The root component that manages the selection of different modes and provides data to the `SuperTable`.
    - `app.routes.ts`: Defines the application routes.
    - `modes.ts`: Definitions for all available table modes.
- `assets/`: Static assets like images and styles.
- `main.ts`: Client-side entry point.
- `main.server.ts`: Server-side entry point for SSR.

---

## SuperTable Modes

The `SuperTable` component supports various modes defined in `src/app/modes.ts`. Each mode demonstrates a specific set of features and configurations.

### 1. Basic Features
- **Basic**: Simple table with static data and fixed columns.
- **Dynamic Columns**: Columns defined dynamically from a configuration.
- **Templating**: Custom cell templates for specific columns (e.g., status, country).
- **Size / Gridlines / Stripes**: Demonstration of visual styling options.

### 2. Data Presentation
- **Pagination**:
    - **Basic**: Standard client-side pagination.
    - **Programmatic**: Demonstrates programmatic control over the paginator.
- **Scroll**: Vertical and horizontal scrolling with fixed header.
- **Frozen Rows & Columns**: Pinning specific rows or columns while scrolling.
- **Grouping**:
    - **Row Group**: Grouping rows by a specific field with subheaders.
    - **Column Group**: Custom headers with spanning columns.

### 3. Interactivity
- **Sort**: Support for single, multiple, and custom sorting.
- **Filter**: Basic and advanced filtering with column menus and global search.
- **Selection**: Support for single/multiple selection using checkboxes or radio buttons.
- **Row Expansion**: Toggleable detailed view for each row.
- **Context Menu**: Integration with PrimeNG ContextMenu for row-specific actions.

### 4. Editing and Management
- **Cell Editing**: Inline editing of individual cells.
- **Row Editing**: Editing an entire row with save/cancel actions.
- **Column Management**:
    - **Resize**: Support for 'fit' or 'expand' resize modes.
    - **Reorder**: Drag-and-drop column and row reordering.
    - **Toggle**: Dynamically show/hide columns.
- **Export**: Exporting table data to CSV format.
