import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class SupplierService {
  baseUrl = environment.config.API_URL;

  constructor(private http: HttpClient) {}

  getsuppliercategory() {
    return this.http.get(`${this.baseUrl}api/SupplierCategory`);
  }
  addsuppliercategory(post) {
    return this.http.post(`${this.baseUrl}api/SupplierCategory`, post);
  }
  removesuppliercategory(id) {
    return this.http.delete(`${this.baseUrl}api/SupplierCategory/?id=${id}`);
  }
  updatesuppliercategory(post) {
    return this.http.put(`${this.baseUrl}api/SupplierCategory`, post);
  }

  getsupplier() {
    return this.http.get(`${this.baseUrl}api/Suppliers`);
  }
  addsupplier(post) {
    return this.http.post(`${this.baseUrl}api/Suppliers`, post);
  }
  getAllState() {
    return this.http.get(`${this.baseUrl}api/statecitys`);
  }
  getsuppliercity(id) {
    return this.http.get(`${this.baseUrl}api/City/suppliercity?Statid=${id}`);
  }
  getWarehouse() {
    return this.http.get(`${this.baseUrl}api/Warehouse`);
  }
  GetBuyer() {
    return this.http.get(`${this.baseUrl}api/Suppliers/GetBuyer`);
  }

  GetallCity() {
    return this.http.get(`${this.baseUrl}api/City/GetallCity`);
  }
  GetSuppliercityWise(id) {
    return this.http.get(
      `${this.baseUrl}api/Suppliers/GetSuppliercityWise?cityid=${id}`,
    );
  }
  updatesupplier(post) {
    return this.http.put(`${this.baseUrl}api/Suppliers/put`, post);
  }
  GetPOForSupplier(id) {
    return this.http.get(
      `${this.baseUrl}api/PoAssignment/GetPOForSupplier?SupplierId=${id}`,
    );
  }
  PostSupplierPayment(post) {
    return this.http.post(
      `${this.baseUrl}api/PoAssignment/PostSupplierPayment`,
      post,
    );
  }
  Activate(data) {
    return this.http.put(`${this.baseUrl}api/Suppliers/Activate`, data);
  }
  AddDepos(post) {
    return this.http.post(`${this.baseUrl}api/Suppliers/AddDepos`, post);
  }
  GetDepo(id) {
    return this.http.get(`${this.baseUrl}api/Suppliers/GetDepo?id=${id}`);
  }
  ActivateDepo(data) {
    return this.http.put(`${this.baseUrl}api/Suppliers/ActivateDepo`, data);
  }
  updateDepo(data) {
    return this.http.put(`${this.baseUrl}api/Suppliers/PutDepo`, data);
  }

  gethistory(Name, id) {
    return this.http.get(
      `${this.baseUrl}api/History?entityName=${Name}&entityId=${id}`,
    );
  }

  getsupplierrate() {
    return this.http.get(`${this.baseUrl}api/Suppliers/GetAllSupplierRate`);
  }
  GetSupplierRateHistoryDetailsById(id) {
    return this.http.get(
      `${this.baseUrl}api/Suppliers/GetSupplierHistory?Id=${id}`,
    );
  }

  getsupplielist() {
    return this.http.get(`${this.baseUrl}api/Suppliers`);
  }
  getItemBySupplierId(id) {
    return this.http.get(
      `${this.baseUrl}api/Suppliers/GetItemBySupplierId?SupplierId=${id}`,
    );
  }
  AddSupplier(post) {
    return this.http.post(`${this.baseUrl}api/Suppliers/AddSupplierRate`, post);
  }
  editSupplierRate(post) {
    return this.http.put(
      `${this.baseUrl}api/Suppliers/UpdateSupplierRate`,
      post,
    );
  }

  //Market Rate
  getMarketrate() {
    return this.http.get(`${this.baseUrl}api/Suppliers/GetAllMarketRate`);
  }
  getItemList() {
    return this.http.get(
      `${this.baseUrl}api/Suppliers/GetAllItemMasterCentral`,
    );
  }
  AddMarketRate(post) {
    return this.http.post(`${this.baseUrl}api/Suppliers/AddMarketRate`, post);
  }
  editMarketRate(post) {
    return this.http.put(`${this.baseUrl}api/Suppliers/UpdateMarketRate`, post);
  }
  GetMarketRateHistoryDetailsById(id) {
    return this.http.get(
      `${this.baseUrl}api/Suppliers/GetMarketRateHistory?Id=${id}`,
    );
  }
}
