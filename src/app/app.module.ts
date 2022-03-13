import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { CustomSnackbarComponent } from './custom-snackbar/custom-snackbar.component';
import { MatSnackBarModule } from '@angular/material/snack-bar/snack-bar-module';

@NgModule({
  imports: [BrowserModule, FormsModule, MatSnackBarModule],
  declarations: [AppComponent, HelloComponent, CustomSnackbarComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
