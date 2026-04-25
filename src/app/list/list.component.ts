import { Component } from "@angular/core";
import { NgFor } from "@angular/common";

@Component({
  selector: "app-list",
  standalone: true,
  imports: [NgFor],
  template: `
    <div class="list-container">
      <h2>Список фруктів</h2>
      <ul>
        <li *ngFor="let item of items">{{ item }}</li>
      </ul>
    </div>
  `,
  styles: [
    `
    .list-container { padding: 20px; background: #f0f4ff; border-radius: 8px; }
    li { padding: 6px 0; font-size: 16px; }
  `,
  ],
})
export class ListComponent {
  items = ["Яблуко", "Банан", "Апельсин", "Манго", "Груша"];
}