import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShFullBannerComponent } from '../components/shared/sh-full-banner/sh-full-banner.component';
import { ShFullTextPostComponent } from '../components/shared/sh-full-text-post/sh-full-text-post.component';
import { ShFullImageCardComponent } from '../components/shared/sh-full-image-card/sh-full-image-card.component';
import { ShSmallImageTextComponent } from '../components/shared/sh-small-image-text/sh-small-image-text.component';
import { ShImageOverlayComponent } from '../components/shared/sh-image-overlay/sh-image-overlay.component';
import { ShTextPostComponent } from '../components/shared/sh-text-post/sh-text-post.component';
import { ShFullImageOverlayComponent } from '../components/shared/sh-full-image-overlay/sh-full-image-overlay.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [ShFullBannerComponent, ShFullTextPostComponent, ShFullImageCardComponent, ShSmallImageTextComponent, ShImageOverlayComponent, ShTextPostComponent, ShFullImageOverlayComponent],
  exports: [ShFullBannerComponent, ShFullTextPostComponent, ShFullImageCardComponent, ShSmallImageTextComponent, ShImageOverlayComponent, ShTextPostComponent, ShFullImageOverlayComponent]
})
export class SharedModule { }
