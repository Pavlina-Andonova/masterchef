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

  addAddress(addressData) {
    this.http
      .post("/api/address", addressData, this.setHeader())
      .subscribe(res => {
        this.addresses.push(res);
        this.onAddressesChanged.next(this.addresses);
      });
  }

  updateAddress(id, addressData) {
    return this.http
      .put("/api/address/" + id, addressData, this.setHeader())
      .subscribe(res => {
        this.addresses = this.addresses.map(address => {
          if (address.id === id) {
            address = {
              id: id,
              ...addressData
            };
          }

          return address;
        });

        this.onAddressesChanged.next(this.addresses);
      });
  }

  deleteAddressById(id) {
    this.http.delete("/api/address/" + id, this.setHeader()).subscribe(res => {
      this.addresses = this.addresses.filter(address => address.id !== id);
      this.onAddressesChanged.next(this.addresses);
    });
  }

  getAddresses() {
    return this.http.get("/api/addresses", this.setHeader());
  }

  getAddress(id) {
    return this.http.get("/api/address/" + id);
  }
}
