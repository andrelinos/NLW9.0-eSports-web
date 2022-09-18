/* eslint-disable no-alert */
/* eslint-disable jsx-a11y/label-has-associated-control */

import { FormEvent, useEffect, useState } from 'react';

import * as Checkbox from '@radix-ui/react-checkbox';
import * as Dialog from '@radix-ui/react-dialog';
import * as Select from '@radix-ui/react-select';
import * as ToggleGroup from '@radix-ui/react-toggle-group';
import axios from 'axios';
import { Check, GameController, MagnifyingGlassPlus } from 'phosphor-react';

import { CreateAdBanner } from '../../CreateBanner';
import { GameSelectInput } from '../../Form/GameSelect';
import { Input } from '../../Form/Input';
import { ButtonModal } from './components/Button';

interface Game {
  id: string;
  title: string;
}

export function CreateNewAds() {
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
    <div className=" w-full">
      <h1 className="text-3xl font-black">Publique um anúncio</h1>

      <form
        id="add-new-ads"
        name="add-new-ads"
        onSubmit={handleCreateAd}
        className="mt-8 flex w-full flex-col gap-4"
      >
        <div className="flex bg flex-col gap-2 overflow-y-auto">
          <label htmlFor="game" className="block">
            Qual game?
          </label>

          <GameSelectInput data={games} id="game" />
        </div>

        <Input
          id="name"
          type="text"
          label="Seu nome (ou nickname)"
          placeholder="Como te chamam dentro do game?"
        />

        <div className="grid grid-cols-2 gap-2">
          <Input
            id="yearsPlaying"
            label="Tempo de gamer?"
            type="number"
            placeholder="Tudo bem ser ZERO"
          />

          <Input
            label="Qual o seu Discord?"
            id="discord"
            type="text"
            placeholder="Usuario#0000"
          />
        </div>

        <div className="flex gap-6">
          <div className="flex flex-col gap-2">
            <label htmlFor="weekDays">
              Quais dias joga?
              <ToggleGroup.Root
                id="weekDays"
                type="multiple"
                className="grid grid-cols-4 gap-2 pt-2"
                value={weekDays}
                onValueChange={setWeekDays}
              >
                <ButtonModal
                  title="Domingo"
                  label="D"
                  value="0"
                  bgColor={
                    weekDays.includes('0') ? 'bg-violet-500' : 'bg-zinc-900'
                  }
                />
                <ButtonModal
                  title="Segunda"
                  label="S"
                  value="1"
                  bgColor={
                    weekDays.includes('1') ? 'bg-violet-500' : 'bg-zinc-900'
                  }
                />
                <ButtonModal
                  title="Terça"
                  label="T"
                  value="2"
                  bgColor={
                    weekDays.includes('2') ? 'bg-violet-500' : 'bg-zinc-900'
                  }
                />
                <ButtonModal
                  title="Quarta"
                  label="Q"
                  value="3"
                  bgColor={
                    weekDays.includes('3') ? 'bg-violet-500' : 'bg-zinc-900'
                  }
                />
                <ButtonModal
                  title="Quinta"
                  label="Q"
                  value="4"
                  bgColor={
                    weekDays.includes('4') ? 'bg-violet-500' : 'bg-zinc-900'
                  }
                />
                <ButtonModal
                  title="Sexta"
                  label="S"
                  value="5"
                  bgColor={
                    weekDays.includes('5') ? 'bg-violet-500' : 'bg-zinc-900'
                  }
                />
                <ButtonModal
                  title="Sábado"
                  label="S"
                  value="6"
                  bgColor={
                    weekDays.includes('6') ? 'bg-violet-500' : 'bg-zinc-900'
                  }
                />
              </ToggleGroup.Root>
            </label>
          </div>
          <div className="flex flex-col flex-1">
            <label htmlFor="hourStart">Seu horário gamer?</label>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-1">
              <Input
                id="hourStart"
                type="time"
                placeholder="De"
                className="m-0 p-0"
              />
              <Input id="hourEnd" type="time" placeholder="Até" />
            </div>
          </div>
        </div>

        <label className="mt-2 flex gap-2 text-sm items-center">
          <Checkbox.Root
            checked={useVoiceChannel}
            className="w-6 h-6 p-1 rounded bg-zinc-900"
            onCheckedChange={(checked) => setUseVoiceChannel(!!checked)}
          >
            <Checkbox.Indicator>
              <Check className="w-4 h-4 text-emerald-400" />
            </Checkbox.Indicator>
          </Checkbox.Root>
          Costumo me conectar ao chat de voz
        </label>

        <footer className="mt-4 flex justify-end gap-4">
          <Dialog.Close
            type="button"
            className="bg-zinc-500 px-5 h-12 rounded-md font-semibold hover:bg-zinc-600"
          >
            Fechar
          </Dialog.Close>
          <button
            form="add-new-ads"
            type="submit"
            className="bg-violet-500 px-5 h-12 rounded-md font-semibold flex items-center gap-3 hover:bg-violet-600"
          >
            <GameController className="w-6 h-6" />
            Encontrar duo
          </button>
        </footer>
      </form>
    </div>
  );
}
