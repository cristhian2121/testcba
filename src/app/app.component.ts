import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'test-ceiba';
  showFiller = true;
  opened = true;
  menu = [
    {
      name: "Login",
      path: "/login"
    },
    {
      name: "Usuarios",
      path: "/usuarios"
    },
    {
      name: "Crear Usuario",
      path: "/crear"
    },
  ]

  constructor(private router: Router) { }

  goToPath(path: string) {
    this.router.navigate([path])
  }
}
