import { MagnifyingGlassPlus } from 'phosphor-react';

import { DialogTrigger } from '../DialogTrigger';

export function CreateAdBanner() {
  return (
    <div className="pt-1 bg-nlw-gradient self-stretch rounded-lg mt-8 overflow-hidden">
      <div
        className="bg-[#2A2634] px-8 py-6 flex justify-between items-center
        flex-col lg:flex-row "
      >
        <div>
          <strong className="text-2xl text-white font-black block text-center lg:text-left">
            Não encontrou seu duo?
          </strong>
          <span className="text-zinc-400 block text-center">
            Publique um anúncio para encontrar novos players!
          </span>
        </div>
        <DialogTrigger>
          <div
            className="py-3 px-4 bg-violet-500 hover:bg-violet-600
        text-white rounded flex items-center gap-3 mt-6"
          >
            <MagnifyingGlassPlus size={24} />
            Publicar anúncio
          </div>
        </DialogTrigger>
      </div>
    </div>
  );
}
