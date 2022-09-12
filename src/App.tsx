import { useRef, useState } from 'react';

import { Disclosure } from '@headlessui/react';
import { MagnifyingGlassPlus } from 'phosphor-react';

import logoImg from './assets/logo.svg';
import { NewAdd } from './components/Form/NewAdd';
import { Modal } from './components/Modal';
// import { Modal } from './components/Modal';

function App() {
  const [openModal, setOpenModal] = useState(false);
  const cancelButtonRefModal = useRef(null);

  return (
    <div className="max-w-[1344px] mx-auto flex flex-col items-center my-20">
      <img src={logoImg} alt="" />

      <h1 className="text-6xl text-white font-black mt-20">
        Seu
        <span className="text-transparent mx-2 bg-nlw-gradient bg-clip-text">
          duo
        </span>
        está aqui.
      </h1>

      <div className="grid grid-cols-6 gap-6 mt-16">
        <a href="#game1" className="relative rounded-lg overflow-hidden">
          <img src="./assets/images/game-1.png" alt="" />

          <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
            <strong className="font-bold text-white block">
              League of Legends
            </strong>
            <span className="text-zinc-300 text-sm block">4 anúncios</span>
          </div>
        </a>
        <a href="#game2" className="relative rounded-lg overflow-hidden">
          <img src="./assets/images/game-2.png" alt="" />

          <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
            <strong className="font-bold text-white block">Dota 2</strong>
            <span className="text-zinc-300 text-sm block">4 anúncios</span>
          </div>
        </a>
        <a href="#game3" className="relative rounded-lg overflow-hidden">
          <img src="./assets/images/game-3.png" alt="" />

          <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
            <strong className="font-bold text-white block">
              Counter Strike
            </strong>
            <span className="text-zinc-300 text-sm block">4 anúncios</span>
          </div>
        </a>
        <a href="#game4" className="relative rounded-lg overflow-hidden">
          <img src="./assets/images/game-4.png" alt="" />

          <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
            <strong className="font-bold text-white block">Apex Legends</strong>
            <span className="text-zinc-300 text-sm block">4 anúncios</span>
          </div>
        </a>
        <a href="#game5" className="relative rounded-lg overflow-hidden">
          <img src="./assets/images/game-5.png" alt="" />

          <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
            <strong className="font-bold text-white block">Fortnite</strong>
            <span className="text-zinc-300 text-sm block">4 anúncios</span>
          </div>
        </a>
        <a href="#game6" className="relative rounded-lg overflow-hidden">
          <img src="./assets/images/game-6.png" alt="" />

          <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
            <strong className="font-bold text-white block">
              World of Warcraft
            </strong>
            <span className="text-zinc-300 text-sm block">4 anúncios</span>
          </div>
        </a>
      </div>

      <div className="pt-1 bg-nlw-gradient self-stretch rounded-lg mt-8 overflow-hidden">
        <div className="bg-[#2A2634] px-8 py-6 flex justify-between items-center">
          <div>
            <strong className="text-2xl text-white font-black block">
              Não encontrou seu duo?
            </strong>
            <span className="text-zinc-400 block">
              Publique um anúncio para encontrar novos players!
            </span>
          </div>

          <button
            type="button"
            className="py-3 px-4 bg-violet-500 hover:bg-violet-600 text-white rounded flex items-center gap-3"
            onClick={() => setOpenModal(true)}
          >
            <MagnifyingGlassPlus size={24} />
            Publicar anúncio
          </button>
        </div>
      </div>
      <Modal
        isOpen={openModal}
        setOpen={setOpenModal}
        // buttonRef={cancelButtonRefModal}
        title="TESTE"
        onClose={() => {}}
      >
        <NewAdd />
      </Modal>
    </div>
  );
}

export default App;
