import { createContext, useContext, useReducer } from "react";
import type { Dispatch, ReactNode } from "react";

type AppState = {
  showRoomsFilters: boolean;
};

type AppAction = {
  type: (typeof appActions)[keyof typeof appActions];
  payload: boolean;
};

type StoreContextValue = { appState: AppState; appDispatch: Dispatch<AppAction> };

const defaultState: AppState = {
  showRoomsFilters: false,
};

const appActions = {
  changeShowRoomsFilters: "CHANGE_SHOW_ROOMS_FILTERS",
};

const StoreContext = createContext<StoreContextValue | undefined>(undefined);

const useAppStore = (): StoreContextValue => {
  const context = useContext(StoreContext);
  if (!context) throw new Error("useAppStore must be used within an AppStateStore");
  return context;
};

const AppStateStore = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(appReducer, defaultState);

  return <StoreContext.Provider value={{ appState: state, appDispatch: dispatch }}>{children}</StoreContext.Provider>;
};

const appReducer = (state: AppState, action: AppAction): AppState => {
  switch (action.type) {
    case appActions.changeShowRoomsFilters: {
      state.showRoomsFilters = action.payload;
      notify("toggled show rooms filters");
      return { ...state };
    }
    default:
      return state;
  }
};

const notify = (text: string): void => console.log(text);

// eslint-disable-next-line react-refresh/only-export-components
export { useAppStore, AppStateStore, appActions };
