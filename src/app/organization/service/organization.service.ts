import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OrganizationService {
  public API = environment.config.API_URL;
  constructor(private http: HttpClient) { }  getemployeeorgtreenode() {
    return this.http.get(`${this.API}/api/orgmaster/getemployeeorgtreenode?baseURL=${this.API + '/'}`)
  }

}
