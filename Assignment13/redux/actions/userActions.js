import { createAction } from '../store';
import { UPDATE_USER } from '../constants';

export const updateUserAction = (data) => createAction(UPDATE_USER, data);
