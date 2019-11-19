import { RouterState } from 'connected-react-router';

import SettingsState from './features/settings/SettingsState';
import RatesState from './features/rates/RatesState';

export default interface RootState {
  router: RouterState;
  settings: SettingsState;
  rates: RatesState;
}
