import { Injectable, OnInit } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Subject } from "rxjs/Subject";

@Injectable()
export class AddressesService {
  addresses: any[] = [];
  onAddressesChanged = new Subject<any>();

  constructor(private http: HttpClient) {}

  setHeader() {
    return {
      headers: new HttpHeaders({
        Authorization: sessionStorage.getItem("jwtToken")
      })
    };
  }

  setAddress(addresses) {
    this.addresses = addresses;
  }

  addAddresses(addressData) {
    this.addresses.push(addressData);
    this.onAddressesChanged.next(this.addresses);
  }

  createAddress(addressData) {
    return this.http.post("/api/address", addressData, this.setHeader());
  }

  updateAddress(addressData) {
    return this.http.put("/api/address" + addressData.id, this.setHeader());
  }

  deleteAddressById(id) {
    return this.http.delete("/api/address/" + id, this.setHeader());
  }

  getAddresses() {
    return this.http.get("/api/addresses", this.setHeader());
  }

  getAddress(id) {
    return this.http.get("/api/address/" + id);
  }
}
