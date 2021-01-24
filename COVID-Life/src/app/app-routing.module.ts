import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'you-tube-videos',
    loadChildren: () => import('./you-tube-videos/you-tube-videos.module').then( m => m.YouTubeVideosPageModule)
  },
  {
    path: 'quarantine-ideas',
    loadChildren: () => import('./quarantine-ideas/quarantine-ideas.module').then( m => m.QuarantineIdeasPageModule)
  },
  {
    path: 'case-test',
    loadChildren: () => import('./case-test/case-test.module').then( m => m.CaseTestPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
