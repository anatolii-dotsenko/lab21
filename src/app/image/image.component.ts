import { Component } from "@angular/core";

@Component({
  selector: "app-image",
  standalone: true,
  template: `
    <div class="image-container">
      <h2>Природа</h2>
      <img
        src="https://picsum.photos/400/300"
        alt="Випадкове зображення"
      />
    </div>
  `,
  styles: [
    `
    .image-container { padding: 20px; background: #fff4e6; border-radius: 8px; text-align: center; }
    img { max-width: 100%; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,.2); }
  `,
  ],
})
export class ImageComponent {}