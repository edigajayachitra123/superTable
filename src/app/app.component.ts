import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableLazyLoadEvent } from 'primeng/table';

import { MODES } from './modes';
import { SuperTableComponent } from './project/superTable/super-table/super-table.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, SuperTableComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'supertable-demo';
  modes = MODES;
  activeMode: any = this.modes[0];

  selectMode(mode: any) {
    this.activeMode = null;
    setTimeout(() => {
      this.activeMode = mode;
    });
  }

  loadData(event: TableLazyLoadEvent) {
    if (this.activeMode?.config.lazy) {
      this.activeMode.config.loading = true;
      
      // Simulate API call
      setTimeout(() => {
        const rows = event.rows || 10;
        const first = event.first || 0;
        
        this.activeMode.data = Array.from({ length: rows }, (_, i) => ({
          id: first + i,
          name: `Lazy Item #${first + i}`,
          category: (first + i) % 2 === 0 ? 'Electronics' : 'Clothing',
          price: Math.floor(Math.random() * 1000)
        }));
        
        this.activeMode.config.loading = false;
      }, 1000);
    }
  }
}
