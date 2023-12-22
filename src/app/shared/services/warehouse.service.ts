import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root",
})
export class WarehouseService {
  baseUrl = environment.config.API_URL;

  constructor(
    private http: HttpClient,
    private router: Router,
  ) {}

  Getwarehouse() {
    return this.http.get(`${this.baseUrl}api/Warehouse`);
  }
  GetTaxGroup() {
    return this.http.get(`${this.baseUrl}api/TaxGroup`);
  }
  addNewWarehouse(post) {
    return this.http.post(`${this.baseUrl}api/Warehouse`, post);
  }
  editWarehouse(post) {
    return this.http.put(`${this.baseUrl}api/Warehouse`, post);
  }
  Deletewarehouse(id) {
    return this.http.delete(`${this.baseUrl}api/Warehouse/?Id=${id}`, id);
  }

  // Area
  GetAreas() {
    return this.http.get(`${this.baseUrl}api/area/all`);
  }
  getAllCity() {
    return this.http.get(`${this.baseUrl}api/City/GetallCity`);
  }
  addNewArea(post) {
    return this.http.post(`${this.baseUrl}api/area/add`, post);
  }
  editArea(post) {
    return this.http.put(`${this.baseUrl}api/area/put`, post);
  }
  DeleteArea(id) {
    return this.http.delete(`${this.baseUrl}api/area/delete?id=${id}`, id);
  }

  //Cluster

  GetCluster() {
    return this.http.get(`${this.baseUrl}api/cluster/all`);
  }
  GetClusterGetCoordinateDetailsById(id) {
    return this.http.get(
      `${this.baseUrl}api/cluster/GetCoordinate?clstid=${id}`,
    );
  }
  GetClusterDetailsById(id) {
    return this.http.get(
      `${this.baseUrl}api/cluster/GetClusterInfo?clustrId=${id}`,
    );
  }
  GetVehicleByClstrandwarehouseId(clstrId, wareId) {
    return this.http.get(
      `${this.baseUrl}api/cluster/GetVehicles?clusterId=${clstrId}&warehouseId=${wareId}`,
    );
  }
  GetAgentByClstrandwarehouseId(clstrId, wareId) {
    return this.http.get(
      `${this.baseUrl}api/cluster/GetPeoples?clusterId=${clstrId}&warehouseId=${wareId}`,
    );
  }
  addVehicleTocluster(post) {
    return this.http.post(`${this.baseUrl}api/cluster/addClusterVehicle`, post);
  }
  addCityCluster(post) {
    return this.http.post(`${this.baseUrl}api/cluster/addCity`, post);
  }
  getlatlongBycityId(cityId) {
    return this.http.get(
      `${this.baseUrl}api/cluster/GetCityLatLong?cid=${cityId}`,
    );
  }
  getwarehouseByCityId(cityId) {
    return this.http.get(
      `${this.baseUrl}api/cluster/GetWarehouseByCity?cid=${cityId}`,
    );
  }
}
