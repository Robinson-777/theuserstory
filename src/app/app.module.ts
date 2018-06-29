import { AppService } from './app.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { MatTableModule, MatSortModule, MatToolbarModule, MatFormFieldModule } from '@angular/material';
import { CdkTableModule } from '@angular/cdk/table';
import { CdkTreeModule } from '@angular/cdk/tree';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatTableModule,
    CdkTableModule,
    CdkTreeModule,
    MatSortModule,
    MatToolbarModule,
    MatFormFieldModule,
    BrowserAnimationsModule

  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
