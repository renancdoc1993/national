import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  imports: [CommonModule]
})
export class ButtonComponent {
  @Input() type: 'primary' | 'secondary' | 'warning' | 'danger' | 'success' | 'info' | 'submit' = 'primary';
  @Input() size: 'small' | 'medium' | 'large' | 'full' = 'medium';
  @Input() disabled: boolean = false;

}
