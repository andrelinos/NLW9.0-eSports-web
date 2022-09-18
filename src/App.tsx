import { useEffect, useState } from 'react';

import 'keen-slider/keen-slider.min.css';

import { useKeenSlider } from 'keen-slider/react';
import { Spinner } from 'phosphor-react';

import { CreateAdBanner } from './components/CreateBanner';
import { CreateNewAds } from './components/Form/CreateNewAds';
import { DuoCard } from './components/Form/DuoCard';
import { Caller } from './components/Form/DuoCard/components/Caller';
import api from './services/api';

import logoImg from '~/assets/logo.svg';
import { GameBanner } from '~/components/GameBanner';
import { Modal } from '~/components/Modal';

interface Game {
  id: string;
  title: string;
  bannerUrl: string;
  _count: {
    ads: number;
  };
}

export function App() {
  const [games, setGames] = useState<Game[]>([]);

  const [isLoading, setIsLoading] = useState(true);
  const [sliderRef] = useKeenSlider(
    {
      slideChanged() {
        console.log('slide changed');
      },
      loop: true,
      slides: { perView: 1 },
      breakpoints: {
        '(min-width: 320px)': {
          slides: { perView: 1, spacing: 2 },
        },
        '(min-width: 768px)': {
          slides: { perView: 2, spacing: 2 },
        },
        '(min-width: 1000px)': {
          slides: { perView: 5, spacing: 10 },
        },
      },
    },
    [
      (slider) => {
        slider.on('created', () => {
          // alert('Hello World');
        });
      },
    ],
  );

  useEffect(() => {
    async function fetchGames() {
      setIsLoading(true);

      await api
        .get('games')
        .then((response) => {
          const { data } = response;

          const dataSorted = []
            .concat(data)
            // eslint-disable-next-line no-underscore-dangle
            .sort((a: any, b: any) => (a._count.ads < b._count.ads ? 1 : -1));

          setGames(dataSorted);
        })
        .catch(() => {
          throw new Error('Request error');
        })
        .finally(() => setIsLoading(false));
    }

    fetchGames();
  }, []);

  return (
    <div className="max-w-[1344px] mx-auto flex flex-col items-center my-5 p-4">
      <img className="w-full min-w-12 max-h-64" src={logoImg} alt="Logo" />

      <h1 className="text-3xl lg:text-5xl text-white font-black mt-10 text-center">
        Seu
        <span className="text-transparent mx-2 bg-nlw-gradient bg-clip-text">
          duo
        </span>
        está aqui.
      </h1>

      {isLoading ? (
        <div>
          <Spinner />
        </div>
      ) : (
        <div ref={sliderRef} className="flex w-full ml-auto mt-10 keen-slider">
          {games.map((game) => (
            <div key={game.id} className="flex w-full ml-auto">
              <div className="overflow-hidden keen-slider__slide">
                <GameBanner
                  key={game.id}
                  title={game.title}
                  bannerUrl={game.bannerUrl}
                  // eslint-disable-next-line no-underscore-dangle
                  adsCount={game._count.ads}
                />
                <Modal contentCall={<Caller />}>
                  <DuoCard
                    idGame={game.id}
                    bannerUrl={game.bannerUrl}
                    title={game.title}
                  />
                </Modal>
              </div>
            </div>
          ))}
        </div>
      )}
      <div className="flex w-full p-2 bg-zinc-900 text-white">
        Total de games cadastrados: {games.length}
      </div>
      <Modal contentCall={<CreateAdBanner />}>
        <CreateNewAds />
      </Modal>
    </div>
  );
}
