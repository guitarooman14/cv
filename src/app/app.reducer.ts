import {routerReducer, RouterReducerState} from '@ngrx/router-store';
import {RouterStateUrl} from './shared/router-serializer';
import {ActionReducerMap} from '@ngrx/store';

export interface State {
  router: RouterReducerState<RouterStateUrl>;
}

export const reducers: ActionReducerMap<State> = {
  router: routerReducer
};
