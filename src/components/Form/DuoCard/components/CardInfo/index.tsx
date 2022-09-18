import { ReactNode } from 'react';

import { GameController } from 'phosphor-react';

interface CardInfoProps {
  data: any;
}

export function CardInfo({ data, ...rest }: CardInfoProps) {
  return (
    <div className="flex w-60 h-80 gap-2 bg-zinc-500 rounded-lg p-2" {...rest}>
      <div className="m-4">
        <h1>Nome</h1>
        <p>{data.name}</p>
        <h1>Tempo de jogo</h1>
        <p>{data.yearsPlaying}</p>
        <h1>Usa chat de voz</h1>
        <p>{data.useVoiceChannel ? 'Sim' : 'Não'}</p>
        <button type="button">
          <GameController size={32} />
          Conectar
        </button>
      </div>
    </div>
  );
}
