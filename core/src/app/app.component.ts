import { Component, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-root',
  imports: [RouterModule],
  template: `
    <nav class="bg-white shadow-md">
      <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div class="relative flex h-16 items-center justify-between">
          <a (click)="routerLink('/')" class="flex shrink-0 items-end p-3 cursor-pointer">
            <img src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500" alt="Your Company" class="h-8 w-auto" />
          </a>

          <div class="flex flex-1 items-center justify-end sm:justify-start">
            <div class="flex items-center sm:hidden">
              <button (click)="toggleMenu()" type="button" aria-controls="mobile-menu" aria-expanded="false" class="relative inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-700 hover:text-white focus:ring-2 focus:ring-white focus:outline-hidden focus:ring-inset">
                <span class="absolute -inset-0.5"></span>
                <span class="sr-only">Open main menu</span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" data-slot="icon" aria-hidden="true" class="block size-6">
                  <path d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" data-slot="icon" aria-hidden="true" class="hidden size-6">
                  <path d="M6 18 18 6M6 6l12 12" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </button>
            </div>
            <div class="hidden sm:ml-6 sm:block">
              <div class="flex space-x-4">
                <a (click)="routerLink('/')" class="cursor-pointer rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:text-gray-500">Home</a>
                <a (click)="routerLink('/mfe1')" class="cursor-pointer rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:text-gray-500">Mfe 1</a>
                <a (click)="routerLink('/mfe2')" class="cursor-pointer rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:text-gray-500">Mfe 2</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      @if (open) {
        <div id="mobile-menu" class="fixed bg-white shadow-md w-full sm:hidden">
          <div class="space-y-1 px-2 pt-2 pb-3">
            <a (click)="routerLink('/')"  class="block cursor-pointer rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-500">Home</a>
            <a (click)="routerLink('/mfe1')" class="block cursor-pointer rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-500">Mfe 1</a>
            <a (click)="routerLink('/mfe2')" class="block cursor-pointer rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-500">Mfe 2</a>
          </div>
        </div>
      }
    </nav>

    <div class="p-4">
      <router-outlet></router-outlet>
    </div>
  `
})
export class AppComponent {
  router = inject(Router);

  open = false;

  routerLink(path: string) {
    this.router.navigate([path]);
    if (this.open) this.toggleMenu()
  }

  toggleMenu() {
    this.open = !this.open;
  }
}

