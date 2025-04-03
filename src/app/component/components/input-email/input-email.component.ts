import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-input-email',
  standalone: false,
  templateUrl: './input-email.component.html',
  styleUrl: './input-email.component.css'
})
export class InputEmailComponent {
  @Input() control!: FormControl; // FormControl recebido do formulário pai
  @Input() placeholder: string = 'Digite seu email';
}
