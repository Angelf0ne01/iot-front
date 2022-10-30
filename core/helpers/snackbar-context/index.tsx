import React, {
  createContext,
  FunctionComponent,
  useContext,
  useState,
} from 'react';
import styled from 'styled-components';
import { rem } from 'polished';
import {
  Snackbar as MuiSnackbar,
  SnackbarProps as MuiSnackbarProps,
  Slide,
  SlideProps as MuiSlideProps,
} from '@mui/material';

export const StyledSnackbar = styled(
  ({ color, ...props }: MuiSnackbarProps) => (
    <MuiSnackbar
      {...props}
      ContentProps={{ classes: { root: 'paper', message: 'message' } }}
    />
  ),
)`
  & .paper {
    min-width: ${rem('504px')};
    background-color: ${props => props.color ?? '#1270a6'};
    padding-right: ${rem('8px')};
    box-shadow: 1px 4px 17px rgba(0, 0, 0, 0.2);
  }

  & .message {
    color: white;
    font-size: ${rem('16px')};
  }
`;

function SlideTransition(props: MuiSlideProps) {
  return <Slide {...props} direction="up" />;
}

interface SnackbarProps {
  visible: boolean;
  message: string;
  error?: boolean;
  onClose: () => void;
}

function Snackbar({ visible, message, error, onClose }: SnackbarProps) {
  return (
    <StyledSnackbar
      open={visible}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      TransitionComponent={SlideTransition}
      onClose={onClose}
      color={error ? '#ff3030' : undefined}
      message={message}
      autoHideDuration={3000}
    />
  );
}

export interface SnackbarProviderValue {
  show: (options: SnackbarMessage) => void;
}

const SnackbarContext = createContext<SnackbarProviderValue>(null as any);

interface SnackbarMessage {
  message: string;
  error?: boolean;
}

type SnackbarState = {
  visible: boolean;
} & SnackbarMessage;

const initialState = {
  visible: false,
  message: '',
  error: false,
};

interface SnackProviderProps {
  children: React.ReactNode;
}

export const SnackProvider: FunctionComponent<SnackProviderProps> = ({
  children,
}) => {
  const [state, setState] = useState<SnackbarState>(initialState);

  const show = ({ message, error }: SnackbarMessage) => {
    setState({ ...state, visible: true, message, error });
  };

  const hide = () => {
    setState({ ...state, visible: false });
  };

  return (
    <>
      <SnackbarContext.Provider value={{ show }}>
        {children}
      </SnackbarContext.Provider>
      <Snackbar {...{ ...state }} onClose={hide} />
    </>
  );
};

export function useSnackbar() {
  const context = useContext(SnackbarContext);

  if (context === undefined) {
    throw new Error('useSnackbar must be used within a SnackbarProvider');
  }

  return context;
}
