import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import type { RootState, AppDispatch } from './store';

/**
 * Todos os hooks estão sendo tipados, assim, a tipagem
 * sempre estará garantida ao utilizarmos esses hooks, e passaremos
 * a tipagem desses hooks através do uso de Generics.
 * 
 */
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
