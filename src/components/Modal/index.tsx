import {
  Dispatch,
  Fragment,
  MutableRefObject,
  ReactNode,
  SetStateAction,
} from 'react';

import { Disclosure, Transition } from '@headlessui/react';
import classNames from 'classnames';

interface ModalProps {
  title: string;
  children: ReactNode;
  onClose: () => void;
  isOpen?: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  buttonRef?: MutableRefObject<null>;
}

export function Modal(
  { title, children, isOpen, buttonRef, setOpen, ...rest }: ModalProps,
  ref: any,
) {
  return (
    <div
      className={classNames('absolute modal-container', {
        'hidden ': !isOpen,
      })}
    >
      {children}
    </div>
  );
}
