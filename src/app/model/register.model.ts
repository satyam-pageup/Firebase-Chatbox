import { FormControl } from "@angular/forms"

export interface RegisterModelI {
    name: FormControl<string | null>;
    email: FormControl<string | null>;
    password: FormControl<string | null>;
    employeeType:FormControl<string | null>;
    address: FormControl<string | null>;
    city: FormControl<string | null>;
    country: FormControl<string | null>;
    phone: FormControl<string | null>;
    departmentID: FormControl<number | null>;
}