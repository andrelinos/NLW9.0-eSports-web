import React, { useEffect, useRef, useState } from 'react';

import 'keen-slider/keen-slider.min.css';

import * as DialogB from '@radix-ui/react-dialog';
import axios from 'axios';
import {
  KeenSliderPlugin,
  useKeenSlider,
  SliderOptions,
} from 'keen-slider/react';
import { Spinner } from 'phosphor-react';

import { CreateAdBanner } from './components/CreateBanner';
import { CreateNewAds } from './components/Form/CreateNewAds';
import { DuoCard } from './components/Form/DuoCard';
import { Caller } from './components/Form/DuoCard/components/Caller';

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
  const [sliderRef, instanceRef] = useKeenSlider(
    {
      slideChanged() {
        console.log('slide changed');
      },
      loop: true,
      slides: { perView: 1 },
      breakpoints: {
        '(min-width: 400px)': {
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
      try {
        await axios(`${import.meta.env.VITE_HOST_API}/games`).then(
          (response) => {
            setGames(response.data);
          },
        );
        setIsLoading(false);
      } catch (err) {
        setIsLoading(false);
        console.log(err);
      }
    }

    fetchGames();
  }, []);

  console.log(games);

  return (
    <div className="max-w-[1344px] mx-auto flex flex-col items-center my-20 p-6">
      <img className="min-w-12" src={logoImg} alt="" />

      <h1 className="text-4xl text-white font-black mt-20 text-ce">
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
        <div ref={sliderRef} className="flex w-full ml-auto mt-16 keen-slider">
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
      <Modal contentCall={<CreateAdBanner />}>
        <CreateNewAds />
      </Modal>
    </div>
  );
}
