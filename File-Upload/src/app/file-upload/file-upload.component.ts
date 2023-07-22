import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent implements OnInit {

  @ViewChild('fileSelect') myInputVariable?: ElementRef;
  
  filename: any;
  format: any;
  formfile: any;
  file:any;
  showLoader: boolean = false;

  constructor(
    private _snackBar: MatSnackBar,
    private http: HttpClient
  ) { }

  ngOnInit(): void {
  }
  onFileSelect(event: any) {
    try {
       this.file = event.target.files[0];
      if (this.file) {
        this.filename = this.file.name;
        this.format = this.file.name.split('.');
        // this.format = this.format[1];
        if (this.format[1] != 'csv') {
          this._snackBar.open("Please select only CSV file", "Close", { duration: 3000 });
          this.deleteFile();
        } else {
          this.formfile = new FormData();
          this.formfile.append('file', this.file);
        }
      }
    } catch (error) {
      this.deleteFile();
      console.log('no file was selected...');
    }
  }
  fileUpload() {
    if (this.file) {
      this.showLoader = true;
      let url = "http://localhost:5000/api/file_upload"
      this.http.post(url, this.formfile).subscribe((res) => {
        this.showLoader = false;
        this._snackBar.open("File successfully uploaded", "Ok", { duration: 5000 });
      },
        (error) => {
          this.showLoader = false;
          this._snackBar.open(error.message, "Close", { duration: 5000 });
        });
    }else{
      this._snackBar.open("Please select the file", "Ok", { duration: 3000 });
    }
  }
  deleteFile(){
    this.file = null;
    this.format = null;
    this.filename = null;
    this.formfile.delete('file');
    // this.fileSelect
  }
}
