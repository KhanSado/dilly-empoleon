import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './theme/layout/admin/admin.component';
import { GuestComponent } from './theme/layout/guest/guest.component';
import { HomeComponent } from './demo/pages/internal/home/home.component';
import { BooksComponent } from './demo/pages/internal/books/books.component';
import { AuthorsComponent } from './demo/pages/internal/authors/authors.component';
import { GenderComponent } from './demo/pages/internal/gender/gender.component';
import { PublisherComponent } from './demo/pages/internal/publisher/publisher.component';
import { ProfileComponent } from './demo/pages/internal/profile/profile.component';
import { NewBookComponent } from './demo/pages/internal/books/new-book/new-book.component';


const loadHome: () => Promise<typeof HomeComponent> = () =>
  import('./demo/pages/internal/home/home.component').then((module) => module.HomeComponent);

  const loadBooks: () => Promise<typeof BooksComponent> = () =>
  import('./demo/pages/internal/books/books.component').then((module) => module.BooksComponent);
  
  const loadAuthors: () => Promise<typeof AuthorsComponent> = () =>
  import('./demo/pages/internal/authors/authors.component').then((module) => module.AuthorsComponent);

  const loadGenders: () => Promise<typeof GenderComponent> = () =>
  import('./demo/pages/internal/gender/gender.component').then((module) => module.GenderComponent);

  const loadPublisher: () => Promise<typeof PublisherComponent> = () =>
  import('./demo/pages/internal/publisher/publisher.component').then((module) => module.PublisherComponent);

  const loadProfile: () => Promise<typeof ProfileComponent> = () =>
  import('./demo/pages/internal/profile/profile.component').then((module) => module.ProfileComponent);

  const loadBookRegister: () => Promise<typeof NewBookComponent> = () =>
  import('./demo/pages/internal/books/new-book/new-book.component').then((module) => module.NewBookComponent);
const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
      },
      {
        path: 'default',
        loadComponent: () => import('./demo/default/default.component')
      },
      {
        path:'home',
        loadComponent: () => loadHome()
      },
      {
        path:'books',
        loadComponent: () => loadBooks()
      },
      {
        path:'authors',
        loadComponent: () => loadAuthors()
      },
      {
        path:'genders',
        loadComponent: () => loadGenders()
      },
      {
        path:'publishers',
        loadComponent: () => loadPublisher()
      },
      {
        path:'profile',
        loadComponent: () => loadProfile()
      },
      {
        path: 'books/new',
        loadComponent: () => loadBookRegister()
      },
      {
        path: 'typography',
        loadComponent: () => import('./demo/elements/typography/typography.component')
      },
      {
        path: 'color',
        loadComponent: () => import('./demo/elements/element-color/element-color.component')
      },
      {
        path: 'sample-page',
        loadComponent: () => import('./demo/sample-page/sample-page.component')
      }
    ]
  },
  {
    path: '',
    component: GuestComponent,
    children: [
      {
        path: 'guest',
        loadChildren: () => import('./demo/pages/authentication/authentication.module').then((m) => m.AuthenticationModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
