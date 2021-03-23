import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  item = '';
  items = ['🍎', '🍏', '🍇', '🍌', '🍑'];

  onKey(event: KeyboardEvent) {
    if (event.code == 'Enter') {
      this.addItem();
    }
  }

  addItem(event?) {
    if (!this.item) return;
    this.items.push(this.item);
  }

  deleteItem(index: number) {
    if (confirm('Are you sure you want to delete this item?')) {
      this.items.splice(index, 1);
    }
    return;
  }
}
