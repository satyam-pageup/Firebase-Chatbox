import { FormControl } from "@angular/forms";

export interface LoginModelI{
    email: FormControl<string | null>;
    password: FormControl<string | null>;
}
