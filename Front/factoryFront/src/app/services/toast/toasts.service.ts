import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class ToastsService {

  constructor(private toastr: ToastrService) {}

  showSuccess(msj:string) {
    this.toastr.success('Success', msj);
  }

  showError(msj:string) {
    this.toastr.error('Error', msj);
  }
}
