import { useEffect, useState } from 'react';
import 'keen-slider/keen-slider.min.css';

import * as DialogB from '@radix-ui/react-dialog';
import axios from 'axios';
import {
  KeenSliderPlugin,
  useKeenSlider,
  SliderOptions,
} from 'keen-slider/react';
import { Spinner } from 'phosphor-react';

import { CardInfo } from './components/CardInfo';

export interface DuoCardProps {
  id: string;
  hourEnd: string;
  hourStart: string;
  name: string;
  useVoiceChannel: boolean;
  weekDays: string[];
  yearsPlaying: number;
}

interface Props {
  title: string;
  idGame: string;
  bannerUrl?: string;
}

export function DuoCard({ title, idGame, bannerUrl }: Props) {
  const [duos, setDuos] = useState<DuoCardProps[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [sliderRef, instanceRef] = useKeenSlider(
    {
      slideChanged() {
        console.log('slide changed');
      },
      loop: true,
      breakpoints: {
        '(min-width: 320px)': {
          slides: { perView: 1, spacing: 1 },
        },
        '(min-width: 768px)': {
          slides: { perView: 3, spacing: 3 },
        },
      },
      slides: { perView: 2 },
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
        await axios(
          `${import.meta.env.VITE_HOST_API}/games/${idGame}/ads`,
        ).then((response) => {
          setDuos(response.data);
        });
        setIsLoading(false);
      } catch (err) {
        setIsLoading(false);
        console.log(err);
      }
    }

    fetchGames();
  }, []);

  return (
    <div className="w-full max-w-3xl flex-col">
      <span className="flex w-full h-80 rounded-lg overflow-hidden mx-auto cover">
        {bannerUrl && (
          <img
            className="w-full h-full object-contain rounded-lg"
            src={bannerUrl}
            alt={title}
          />
        )}
      </span>
      <div>
        <h1>{title}</h1>
        <p>Conecte-se e comece a jogar!</p>
      </div>
      {isLoading ? (
        <div>
          <Spinner />
        </div>
      ) : (
        <div ref={sliderRef} className="flex w-full ml-auto mt-2 keen-slider">
          {duos?.map((duo) => (
            <div key={duo.id} className="flex w-full ml-auto">
              <div className="keen-slider__slide">
                <CardInfo data={duo} />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
