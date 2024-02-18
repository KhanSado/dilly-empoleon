import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/pages/login/login.component';
import { RegisterComponent } from './components/pages/register/register.component';
import { HomeComponent } from './components/pages/home/home.component';
import { AboutComponent } from './components/pages/about/about.component';
import { AuthorsComponent } from './components/pages/authors/authors.component';
import { AddAuthorComponent } from './components/pages/authors/add-author/add-author.component';
import { GenderComponent } from './components/pages/gender/gender.component';
import { AddGenderComponent } from './components/pages/gender/add-gender/add-gender.component';
import { BooksComponent } from './components/pages/books/books.component';
import { AddBookComponent } from './components/pages/books/add-book/add-book.component';
import { PublisherCompanyComponent } from './components/pages/publisher-company/publisher-company.component';
import { AddPublisherComponent } from './components/pages/publisher-company/add-publisher/add-publisher.component';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'about', component: AboutComponent},
  {path: 'user/register', component: RegisterComponent},
  {path: 'home', component: HomeComponent},
  {path: 'authors', component: AuthorsComponent},
  {path: 'authors/new', component: AddAuthorComponent},
  {path: 'genders', component: GenderComponent},
  {path: 'genders/new', component: AddGenderComponent},
  {path: 'books', component: BooksComponent},
  {path: 'books/new', component: AddBookComponent},
  {path: 'publishers-company', component: PublisherCompanyComponent},
  {path: 'publishers-company/new', component: AddPublisherComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
