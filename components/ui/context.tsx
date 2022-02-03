import React, {
  createContext,
  FC,
  ReactNode,
  useContext,
  useReducer,
} from "react";

// Interface
interface Props {
  children: ReactNode | ReactNode[];
}

export interface StateModifiers {
  openSidebar: () => void;
  closeSidebar: () => void;
}

export interface StateValues {
  isSidebarOpen: boolean;
}

// Values
const stateModifiers = {
  openSidebar: () => {},
  closeSidebar: () => {},
};

const initialState = {
  isSidebarOpen: false,
};

// Type
type State = StateModifiers & StateValues;

const UIContext = createContext<State>({
  ...stateModifiers,
  ...initialState,
});

//  Reducer
type Action = { type: "OPEN_SIDEBAR" | "CLOSE_SIDEBAR" };

function uiReducer(state: StateValues, action: Action) {
  switch (action.type) {
    case "OPEN_SIDEBAR":
      return {
        ...state,
        isSidebarOpen: true,
      };
    case "CLOSE_SIDEBAR":
      return {
        ...state,
        isSidebarOpen: false,
      };

    default:
      return state;
  }
}

// Provider
export const UIProvider: FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(uiReducer, initialState);
  const openSidebar = () => dispatch({ type: "OPEN_SIDEBAR" });
  const closeSidebar = () => dispatch({ type: "CLOSE_SIDEBAR" });

  const value = {
    openSidebar,
    closeSidebar,
    isSidebarOpen: state.isSidebarOpen,
  };
  return <UIContext.Provider value={value}>{children}</UIContext.Provider>;
};

export const useUI = () => useContext(UIContext);
