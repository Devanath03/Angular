import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DumpyComponent } from './dumpy/dumpy.component';
import { FileUploadComponent } from './file-upload/file-upload.component';

const routes: Routes = [
  {path:'dumpy', /*redirectTo:'upload-file', pathMatch:'full',*/component:DumpyComponent},
  {path:'upload-file',component:FileUploadComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
