import { Component } from '@angular/core';
import {
  LucideAngularModule,
  Instagram,
  Twitter,
  Facebook,
  Youtube,
  ShieldCheck,
  Globe,
  CreditCard,
} from 'lucide-angular';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  imports: [LucideAngularModule, RouterLink],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class Footer {
  readonly ShieldCheck = ShieldCheck;
  readonly Globe = Globe;
  readonly CreditCard = CreditCard;
  socialIcons = [
    { FileIcon: Instagram, url: 'https://www.instagram.com/' },
    { FileIcon: Twitter, url: 'https://x.com/?lang=es' },
    { FileIcon: Facebook, url: 'https://www.facebook.com/' },
    { FileIcon: Youtube, url: 'https://www.youtube.com/' },
  ];

  footerLinks = [
    {
      title: 'Explorar',
      links: [
        'Auriculares Over-Ear',
        'In-Ear True Wireless',
        'Altavoces Bluetooth',
        'Soundbars',
        'Ver Novedades',
      ],
    },
    {
      title: 'Ayuda',
      links: [
        'Estado del pedido',
        'Envíos y Devoluciones',
        'Aura Care+ (Garantía)',
        'Centro de Soporte',
        'Contactar',
      ],
    },
    {
      title: 'Empresa',
      links: ['Sobre Nosotros', 'Sostenibilidad', 'Prensa', 'Inversores', 'Carreras'],
    },
  ];
}
