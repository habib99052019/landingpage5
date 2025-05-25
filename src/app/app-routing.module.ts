import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Land5Component } from './land5/land5.component';
 const routes: Routes = [
  { path: 'page/:id', component: Land5Component },
  { path: '', redirectTo: '/page/1', pathMatch: 'full' }, // صفحة افتراضية
  { path: '**', redirectTo: '/page/1' } // fallback
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
