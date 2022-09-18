import classNames from 'classnames';

import { Discord } from '../Discord';
import { Caller } from '../Discord/Caller';

import { Modal } from '~/components/Modal';

interface CardInfoProps {
  data: any;
}

export function CardInfo({ data, ...rest }: CardInfoProps) {
  return (
    <div
      className="lg:min-w-[300px] max-w-[300px] gap-2 bg-[#18181B] rounded-lg p-4
      mx-auto"
      {...rest}
    >
      <h1>Nome</h1>
      <p className="font-semibold">{data.name}</p>
      <h1>Tempo de jogo</h1>
      <p className="font-semibold">{data.yearsPlaying}</p>
      <h1>Usa chat de voz</h1>
      <p
        className={classNames('font-semibold', {
          'text-green-500': data.useVoiceChannel,
          'text-red-400': !data.useVoiceChannel,
        })}
      >
        {data.useVoiceChannel ? 'Sim' : 'Não'}
      </p>

      <div className="flex justify-center items-end">
        <Modal contentCall={<Caller />}>
          <Discord discordId={data.id} />
        </Modal>
      </div>
    </div>
  );
}
