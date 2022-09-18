import { ReactNode } from 'react';

import * as Dialog from '@radix-ui/react-dialog';

interface Props {
  children?: ReactNode;
}

export function DialogTrigger({ children }: Props) {
  return <Dialog.Trigger>{children}</Dialog.Trigger>;
}
