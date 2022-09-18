import { useEffect, useState } from 'react';
import 'keen-slider/keen-slider.min.css';

import classNames from 'classnames';
import { useKeenSlider } from 'keen-slider/react';
import { Spinner } from 'phosphor-react';

import api from '~/services/api';

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
  const [sliderRef] = useKeenSlider({
    mode: 'free-snap',
    slides: {
      origin: 'center',
      perView: 2,
      spacing: 15,
    },
  });

  useEffect(() => {
    async function fetchGames() {
      setIsLoading(true);
      try {
        await api.get(`/games/${idGame}/ads`).then((response) => {
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
    <div className="lg:min-w-2xl max-w-2xl flex-col">
      <span className="flex w-64 h-80 rounded-lg mx-auto      overflow-hidden">
        {bannerUrl && (
          <img
            className="w-full h-full object-cover rounded-lg"
            src={bannerUrl}
            alt={title}
          />
        )}
      </span>
      <div>
        <h1 className="text-2xl font-extrabold mt-8 mb-2">{title}</h1>
        <p className="text-md text-gray-300">
          Conecte-se
          {duos.length > 1 && (
            <span>
              a um dos <strong>{duos.length} </strong>jogadores
            </span>
          )}{' '}
          e comece a jogar!
        </p>
      </div>
      {isLoading ? (
        <div>
          <Spinner />
        </div>
      ) : (
        <div ref={sliderRef} className="flex w-full my-2">
          <div className=" keen-slider">
            {duos?.map((duo) => (
              <div
                key={duo.id}
                className={classNames('', {
                  'keen-slider__slide': duos.length > 2,
                  'mx-2': duos.length <= 2,
                })}
              >
                <CardInfo data={duo} />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
