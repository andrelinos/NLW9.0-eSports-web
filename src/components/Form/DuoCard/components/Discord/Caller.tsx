import { GameController } from 'phosphor-react';

import { DialogTrigger } from '~/components/DialogTrigger';

export function Caller() {
  return (
    <DialogTrigger>
      <div
        className="relative py-1 px-4 bg-violet-500 hover:bg-violet-600
          text-white rounded flex items-center gap-3 mt-6 mx-auto"
      >
        <GameController size={32} />
        Conectar
      </div>
    </DialogTrigger>
  );
}
