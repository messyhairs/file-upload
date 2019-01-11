import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//import { InputCounterModule } from 'ng4-input-counter';
import { CountdownTimerModule } from 'ngx-countdown-timer';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import{FormsModule,ReactiveFormsModule} from '@angular/forms';
import { ShildComponent } from './shild/shild.component';
//import { FileuploadComponent } from './fileupload/fileupload.component';
//import { DialogComponent } from './upload/dialog/dialog.component';
import { UploadModule } from './upload/upload.module';
//import { UploadComponent } from './upload/upload.component'

@NgModule({
  declarations: [
    AppComponent,
    ShildComponent,
    //FileuploadComponent,
   // DialogComponent,
    //UploadComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    UploadModule,
    CountdownTimerModule,
    ReactiveFormsModule,
    //CountdownModule,
     //InputCounterModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
