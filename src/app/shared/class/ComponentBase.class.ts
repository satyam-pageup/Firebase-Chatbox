import { HttpClient } from "@angular/common/http";
import { environment } from "../../../environment/environment";
import { EventEmitter, inject } from "@angular/core";
import { HeaderOption } from "../../model/headerOption.model";
import { ToastrService } from "ngx-toastr";
import { Router } from "@angular/router";

export class ComponentBase{

    // public getChatByIdE: EventEmitter<number> = new EventEmitter<number>(); 

    public baseUrl: string = environment.baseUrl;
    public isBtnLoaderActive: boolean = false;

    public headerOption: HeaderOption = {
        issilentCall: false
    }
    
    // SERVICE
    public _router: Router = inject(Router);
    public _toastreService: ToastrService = inject(ToastrService);
    private _httpClient: HttpClient = inject(HttpClient);



    public getAPICallPromise<R>(url: string, hOption: HeaderOption): Promise<R>{
        const hitUrl: string = `${this.baseUrl}${url}`;
        const getPromise = new Promise<R>((resolve, reject) =>{
            this._httpClient.get<R>(hitUrl).subscribe({
                next: (res) =>{
                    resolve(res);
                    this.isBtnLoaderActive = false;
                },

                error: (err) =>{
                    this.isBtnLoaderActive = false;
                    console.log(err);
                    this._toastreService.error(err);
                    reject(err);
                }
            })
        });

        return getPromise;
    }

    public postAPICallPromise<D, R>(url: string, data: D,  hOption: HeaderOption): Promise<R>{
        const hitUrl: string = `${this.baseUrl}${url}`;
        const postPromise = new Promise<R>((resolve, reject) =>{
            this._httpClient.post<R>(hitUrl, data).subscribe({
                next: (res) =>{
                    resolve(res);
                    this.isBtnLoaderActive = false;
                },

                error: (err) =>{
                    this.isBtnLoaderActive = false;
                    console.log(err);
                    reject(err);
                }
            })
        });

        return postPromise;
    }

    public putAPICallPromise<D, R>(url: string, data: D,  hOption: HeaderOption): Promise<R>{
        const hitUrl: string = `${this.baseUrl}${url}`;
        const postPromise = new Promise<R>((resolve, reject) =>{
            this._httpClient.put<R>(hitUrl, data).subscribe({
                next: (res) =>{
                    resolve(res);
                    this.isBtnLoaderActive = false;
                },

                error: (err) =>{
                    this.isBtnLoaderActive = false;
                    console.log(err);
                    reject(err);
                }
            })
        });

        return postPromise;
    }
}