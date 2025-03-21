import { Component } from '@angular/core';

@Component({
  selector: 'app-newad',
  imports: [],
  templateUrl: './newad.component.html',
  styleUrl: './newad.component.css'
})
export class NewadComponent implements OnInit {
  categories: any[] = [];
  currentDate = new Date().toISOString().split('T')[0];
  
  constructor(private apiService: ApiService, private router: Router) {}

  ngOnInit() {
    this.apiService.getCategories().subscribe(data => {
      this.categories = data;
    });
  }
  
  onSubmit(form: NgForm) {
    this.apiService.postNewAd(form.value).subscribe({
      next: () => this.router.navigate(['/offers']),
      error: (err) => alert('Hiba történt: ' + err.message)
    });
  }
}
