import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//Required for Routes[]
//These inputed automatically when I typed the path{} in routes[]
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';


//Array of objects where you define your routes
const routes: Routes = [
  //Path references where the user is at in the browser
  //"HomeComponent" can be used only if we import the HomeComponent above
  { path: '', component: HomeComponent},
  { path: 'about', component: AboutComponent},
  { path: 'contact', component: ContactComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
