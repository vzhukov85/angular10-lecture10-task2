import { NgModule } from '@angular/core';
import { BioComponent } from './bio/bio.component';
import { GrabUtmComponent } from './grab-utm.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProjectsComponent } from './projects/projects.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDividerModule} from '@angular/material/divider';
import { MatTableModule } from '@angular/material/table';
import { MatAutocompleteModule} from '@angular/material/autocomplete';
import { MatOptionModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import {MatCardModule} from '@angular/material/card';
import {MatListModule} from '@angular/material/list';
import {CommonModule} from '@angular/common';
import {MatGridListModule} from '@angular/material/grid-list';
import { UtmTableComponent } from './utm-table/utm-table.component';
import { UtmNavigateComponent } from './utm-navigate/utm-navigate.component';
import { HomeworkComponent } from './homework/homework.component';
import { ReferenceComponent } from './reference/reference.component';
import { FeedbackComponent } from './feedback/feedback.component';



@NgModule({
  declarations: [
    BioComponent,
    ProjectsComponent,
    NotFoundComponent,
    GrabUtmComponent,
    HomeComponent,
    UtmTableComponent,
    UtmNavigateComponent,
    HomeworkComponent,
    ReferenceComponent,
    FeedbackComponent
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatDividerModule,
    MatTableModule,
    MatOptionModule,
    MatAutocompleteModule,
    MatInputModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatGridListModule,
    MatCardModule,
    MatListModule,
  ],
  exports: [
    BioComponent,
    ProjectsComponent,
    NotFoundComponent,
    GrabUtmComponent,
    HomeComponent,
    UtmTableComponent,
    UtmNavigateComponent,
    HomeworkComponent,
    ReferenceComponent,
    FeedbackComponent,
  ],
})
export class CardModule {}
