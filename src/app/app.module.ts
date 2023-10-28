import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { AboutComponent } from './components/pages/about/about.component';
import { HomeComponent } from './components/pages/home/home.component';
import { LoginComponent } from './components/pages/login/login.component';
import { RegisterComponent } from './components/pages/register/register.component';
import { RegisterUserFormComponent } from './components/register-user-form/register-user-form.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { AuthorsComponent } from './components/pages/authors/authors.component';
import { AuthorFormComponent } from './components/author-form/author-form.component';
import { AddAuthorComponent } from './components/pages/authors/add-author/add-author.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { JwtModule } from '@auth0/angular-jwt';
import { GenderComponent } from './components/pages/gender/gender.component';
import { AddGenderComponent } from './components/pages/gender/add-gender/add-gender.component';
import { GenderFormComponent } from './components/gender-form/gender-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    RegisterUserFormComponent,
    LoginFormComponent,
    AuthorsComponent,
    AuthorFormComponent,
    AddAuthorComponent,
    GenderComponent,
    AddGenderComponent,
    GenderFormComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: () => {
          return sessionStorage.getItem('x-dilly-token');
        },
      },
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
