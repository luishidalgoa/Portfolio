import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getStorage, provideStorage } from '@angular/fire/storage';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HomeModule } from './Home/home.module';
import { ArticlesModule } from './articles/articles.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    FontAwesomeModule,
    HomeModule,
    ArticlesModule
  ],
  providers: [
    
    provideClientHydration(),
    provideStorage(() => getStorage()),
    provideFirebaseApp(() => initializeApp({"projectId":"portfolio-c9278","appId":"1:100937079456:web:90ba163bd395daf09d07c5","storageBucket":"portfolio-c9278.appspot.com","apiKey":"AIzaSyCF-AO20LsNG_yvpydzBa-8WCUIY_MFLL0","authDomain":"portfolio-c9278.firebaseapp.com","messagingSenderId":"100937079456","measurementId":"G-05TC6PPDNC"}))
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
