import { Component, inject } from '@angular/core';
import {
  LucideAngularModule,
  Instagram,
  Facebook,
  Youtube,
  X,
  Globe,
  ShieldCheck,
  CreditCard,
} from 'lucide-angular';

@Component({
  selector: 'app-footer',
  imports: [LucideAngularModule],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class Footer {
  readonly Globe = inject(Globe);
  // socialLinks = [
  //   { icon: Instagram, url: 'https://instagram.com' },
  //   { icon: Facebook, url: 'https://facebook.com' },
  //   { icon: Youtube, url: 'https://youtube.com' },
  // ];
}
