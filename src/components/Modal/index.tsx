import { ReactNode } from 'react';

import * as Dialog from '@radix-ui/react-dialog';

interface Props {
  contentCall: ReactNode;
  children: ReactNode;
}

export function Modal({ contentCall, children }: Props) {
  return (
    <Dialog.Root>
      {contentCall}

      <Dialog.Portal>
        <Dialog.Overlay className="bg-black/60 inset-0 fixed" />

        <Dialog.Content
          className="fixed bg-brand-zinc-800 py-8 px-10 lg:px-10 text-brand-white
            top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg w-full
            md:min-w-[488px] lg:w-auto shadow-lg shadow-black/25"
        >
          {children}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
