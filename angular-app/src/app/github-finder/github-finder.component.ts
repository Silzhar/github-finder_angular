import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { GithubService } from '../github.service';

@Component({
    selector: 'app-github-finder',
    templateUrl: './github-finder.component.html',
    styleUrls: ['./github-finder.component.scss']
})
export class GithubFinderComponent implements OnInit {
    public searcherFormGroup: FormGroup = null;

    public submitted: boolean = false;

    constructor(private fb: FormBuilder, private service: GithubService) {
        this.searcherFormGroup = this.fb.group({
            username: new FormControl('Silzhar', [Validators.required, Validators.maxLength(20)])
        });
    }

    ngOnInit(): void {
    }

    public onUserSubmitForm() {
        // El usuario ha pulsado en enviar.
        this.submitted = true;

        // Enviar info a API.
        if (this.searcherFormGroup.valid) {
            const username: string = this.searcherFormGroup.get('username').value;
            console.log(username);

            const miObservable = this.service.peticionRepositorios(username);
            miObservable.subscribe((data) => {
                console.log(data);
            });

            // Reseteamos todos los campos y el indicador de envío
            this.searcherFormGroup.reset();
            this.submitted = false;
        } else {
            console.log('Contiene errores :');
        }
    }

}
