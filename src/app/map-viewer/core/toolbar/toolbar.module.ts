import {MatIconModule, MatSidenavModule} from '@angular/material';
import {NgModule} from '@angular/core';
import {ToolbarContainerComponent} from './core/toolbar-container/toolbar-container.component';
import {ToolbarPanelComponent} from './core/toolbar-panel/toolbar-panel.component';

@NgModule({
  declarations: [ToolbarContainerComponent, ToolbarPanelComponent],
  imports: [MatIconModule, MatSidenavModule, MatIconModule],
  exports: [ToolbarContainerComponent, ToolbarPanelComponent]
})
export class ToolbarModule {
}
