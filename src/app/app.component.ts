import { Component } from "@angular/core";
import { NgIf } from "@angular/common";
import { ListComponent } from "./list/list.component";
import { ImageComponent } from "./image/image.component";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [NgIf, ListComponent, ImageComponent],
  template: `
    <header class="header">
      <h1>Мій Angular сайт</h1>
      <p>Демонстрація перемикання компонентів</p>
    </header>
    <main class="main">
      <button class="toggle-btn" (click)="toggle()">
        Показати {{ showList ? 'Зображення' : 'Список' }}
      </button>
      <div class="content">
        <app-list *ngIf="showList"></app-list>
        <app-image *ngIf="!showList"></app-image>
      </div>
    </main>
  `,
  styles: [
    `
    .header { background: #3f51b5; color: white; padding: 20px; text-align: center; }
    .main { max-width: 600px; margin: 30px auto; padding: 0 16px; }
    .toggle-btn { display: block; margin: 0 auto 20px; padding: 10px 24px;
      background: #3f51b5; color: white; border: none; border-radius: 6px;
      font-size: 16px; cursor: pointer; }
    .toggle-btn:hover { background: #303f9f; }
  `,
  ],
})
export class AppComponent {
  showList = true;
  toggle() {
    this.showList = !this.showList;
  }
}