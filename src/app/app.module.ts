import { AuthGuard } from './components/security/login/auth.guard';
import { AuthInterceptor } from './components/security/login/auth.interceptor';
import { SharedService } from './services/shared.service';
import { UserService } from './services/user.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { MenuComponent } from './components/menu/menu.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/security/login/login.component';
import { routes } from './app.routes';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { UserNewComponent } from './components/user-new/user-new.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { DialogService } from './services/dialog.service';
import { TicketNewComponent } from './components/ticket-new/ticket-new.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    UserNewComponent,
    UserListComponent,
    TicketNewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    routes
  ],
  providers: [
    UserService, 
    SharedService,
    DialogService,
    AuthGuard,
  {
      provide : HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
  } ],
  bootstrap: [AppComponent]
})
export class AppModule { }
