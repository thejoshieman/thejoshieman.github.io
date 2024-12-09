import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserModule } from "@angular/platform-browser";
import { FooterComponent } from "./footer/footer.component";
import { HomeComponent } from "./home/home.component";
import { AboutComponent } from "./about/about.component";
import { HeaderComponent } from "./header/header.component";
import { HashLocationStrategy, LocationStrategy } from "@angular/common";
import { MenuComponent } from "./menu/menu.component";
import { LeftComponent } from "./left/left.component";
import { RouterModule } from "@angular/router";

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,

    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MenuComponent,
    LeftComponent,
    RouterModule,
  ],
  exports: [],
  providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
