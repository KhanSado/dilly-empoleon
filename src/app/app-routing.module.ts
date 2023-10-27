import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/pages/login/login.component';
import { RegisterComponent } from './components/pages/register/register.component';
import { HomeComponent } from './components/pages/home/home.component';
import { AboutComponent } from './components/pages/about/about.component';
import { AuthorsComponent } from './components/pages/authors/authors.component';
import { AddAuthorComponent } from './components/pages/authors/add-author/add-author.component';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'about', component: AboutComponent},
  {path: 'user/register', component: RegisterComponent},
  {path: 'home', component: HomeComponent},
  {path: 'authors', component: AuthorsComponent},
  {path: 'authors/new', component: AddAuthorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
