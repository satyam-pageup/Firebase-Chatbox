export interface ResponseGI<L, R>{
    status: string;
    message: string;
    statusCode: string;
    L: R;
    token: string;
}