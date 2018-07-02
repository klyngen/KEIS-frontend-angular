import { Injectable } from '@angular/core';
import {Headers, Http, Request, RequestOptions, Response, XHRBackend} from '@angular/http';
@Injectable()
export class ApiClientService extends Http {

    helperService: HelperService;
    router: Router;

  constructor() { }
}
