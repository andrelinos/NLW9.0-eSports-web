/* eslint-disable jsx-a11y/label-has-associated-control */
import { useEffect, useState } from 'react';

import * as Select from '@radix-ui/react-select';
import { CaretDown, Check } from 'phosphor-react';

export interface Game {
  id: string;
  title: string;
}

interface Props {
  id: string;
  data: any;
}

export function GameSelectInput({ id, data }: Props) {
  return (
    <label htmlFor={id || 'game'} className="block">
      Qual game? {'\n'}
      <Select.Root name="game">
        <div className="flex bg-zinc-900 rounded  py-3 px-4 overflow-y-auto">
          <Select.SelectTrigger
            id={id}
            name={id}
            aria-label={id}
            className="flex w-full justify-between"
          >
            <Select.SelectValue
              className="w-full justify-between"
              placeholder="Selecionar game para jogar"
            />
            <Select.SelectIcon>
              <CaretDown size={24} className="text-zinc-400" />
            </Select.SelectIcon>
          </Select.SelectTrigger>
          <Select.SelectPortal>
            <Select.SelectContent className="bg-zinc-900 rounded overflow-hidden">
              <Select.SelectScrollUpButton>
                <CaretDown size={24} />
              </Select.SelectScrollUpButton>
              <Select.SelectViewport className="py-2 px-1">
                <Select.SelectGroup>
                  {data?.map((game: Game) => (
                    <Select.SelectItem
                      key={game.id}
                      className="flex items-center justify-between py-2 px-3 m-1
                  bg-zinc-900 text-zinc-500 cursor-pointer rounded
                  hover:bg-zinc-800 hover:text-white"
                      value={game.id}
                    >
                      <Select.SelectItemText>
                        {game.title}
                      </Select.SelectItemText>
                      <Select.SelectItemIndicator>
                        <Check size={24} className="text-emerald-500" />
                      </Select.SelectItemIndicator>
                    </Select.SelectItem>
                  ))}
                </Select.SelectGroup>
              </Select.SelectViewport>
            </Select.SelectContent>
          </Select.SelectPortal>
        </div>
      </Select.Root>
    </label>
  );
}
