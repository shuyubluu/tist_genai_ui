import { Component, EventEmitter, Output } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { MenuComponent } from '../menu/menu.component';
import { LogoutComponent } from '../logout/logout.component';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [SharedModule, MenuComponent, LogoutComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  @Output() toggleCollapsed = new EventEmitter<void>();
  isCollapsed = false;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {}

  ngOnDestroy(): void {}

  logout(): void {
    this.authService.logout();
  }
}
