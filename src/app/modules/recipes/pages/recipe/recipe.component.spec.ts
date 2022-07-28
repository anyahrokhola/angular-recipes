import { Spectator, createComponentFactory } from '@ngneat/spectator';

import { RecipeComponent } from './recipe.component';

describe('RecipeComponent', () => {
  let spectator: Spectator<RecipeComponent>;
  const createComponent = createComponentFactory(RecipeComponent);

  it('should create', () => {
    spectator = createComponent();

    expect(spectator.component).toBeTruthy();
  });
});
