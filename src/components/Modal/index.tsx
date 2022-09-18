/* eslint-disable no-alert */
/* eslint-disable jsx-a11y/label-has-associated-control */

import { FormEvent, ReactNode, useEffect, useState } from 'react';

import * as Checkbox from '@radix-ui/react-checkbox';
import * as Dialog from '@radix-ui/react-dialog';
import * as Select from '@radix-ui/react-select';
import * as ToggleGroup from '@radix-ui/react-toggle-group';
import axios from 'axios';
import { Check, GameController, MagnifyingGlassPlus } from 'phosphor-react';

import { CreateAdBanner } from '../CreateBanner';
import { GameSelectInput } from '../Form/GameSelect';
import { Input } from '../Form/Input';
import { ButtonModal } from './components/Button';

interface Game {
  id: string;
  title: string;
}

interface Props {
  contentCall: ReactNode;
  children: ReactNode;
}

export function Modal({ contentCall, children }: Props) {
  const [games, setGames] = useState<Game[]>([]);
  const [weekDays, setWeekDays] = useState(['']);
  const [useVoiceChannel, setUseVoiceChannel] = useState(false);

  useEffect(() => {
    axios(`${import.meta.env.VITE_HOST_API}/games`).then((response) => {
      setGames(response.data);
    });
  }, []);

  async function handleCreateAd(e: FormEvent) {
    e.preventDefault();

    const formData = new FormData(e.target as HTMLFormElement);

    const data = Object.fromEntries(formData);
    Object.assign(data, { weekDays, useVoiceChannel });

    if (!data.name) {
      return;
    }

    try {
      await axios
        .post(`${import.meta.env.VITE_HOST_API}/games/${data.game}/ads`, {
          name: data.name,
          yearsPlaying: Number(data.yearsPlaying),
          discord: data.discord,
          weekDays: weekDays.map(Number),
          hourStart: data.hourStart,
          hourEnd: data.hourEnd,
          useVoiceChannel,
        })
        .then((response) => console.log(response));

      alert('Anúncio criado com sucesso!');
    } catch (err) {
      console.log(err);
      alert('Erro ao criar o anúncio');
    }
  }

  return (
    <Dialog.Root>
      {contentCall}

      <Dialog.Portal>
        <Dialog.Overlay className="bg-black/60 inset-0 fixed" />

        <Dialog.Content
          className="fixed bg-[#2A2634] py-8 px-6 lg:px-10 text-white
            top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg w-full
            md:min-w-[488px] lg:w-auto shadow-lg shadow-black/25"
        >
          {children}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
