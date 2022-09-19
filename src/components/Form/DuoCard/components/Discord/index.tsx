import { useEffect, useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { ToastContainer, toast } from 'react-toastify';

import * as Dialog from '@radix-ui/react-dialog';
import { CheckCircle, DiscordLogo, X } from 'phosphor-react';

import api from '~/services/api';

interface DiscordProps {
  discordId: string;
}

export function Discord({ discordId, ...rest }: DiscordProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [discordUser, setDiscordUser] = useState({} as any);

  const notify = () =>
    toast(
      'Você copiou este ID com sucesso! Agora vá para o discord e adicione seu  novo contato!',
    );

  useEffect(() => {
    async function fetchUserDiscord() {
      setIsLoading(true);
      try {
        await api.get(`/ads/${discordId}/discord`).then((response) => {
          setDiscordUser(response.data);
        });
        setIsLoading(false);
      } catch (err) {
        setIsLoading(false);
        console.log(err);
      }
    }

    fetchUserDiscord();
  }, []);

  return (
    <div className="flex max-w-2xl flex-col" {...rest}>
      <span aria-label="Fechar" className="flex justify-end">
        <Dialog.Close type="button" className="w-10">
          <X size={32} />
        </Dialog.Close>
      </span>
      <span className="flex w-full text-emerald-500 justify-center">
        <CheckCircle size={64} />
      </span>
      <span className="font-bold text-3xl text-center mt-6">Let`s play!</span>
      <p className="text-center text-lg my-2">Agora é só começar a jogar!</p>
      <h1 className="text-base font-bold text-center">Adicionar ao Discord</h1>
      <CopyToClipboard text={discordUser.discord} onCopy={notify}>
        <div
          className="flex py-1 w-full max-w-xs h-12 px-6 bg-brand-zinc-900 opacity-78
          hover:opacity-100 text-white rounded justify-center items-center gap-3 mt-2 mx-auto
          hover:cursor-pointer"
        >
          <DiscordLogo size={32} />
          {discordUser.discord}
        </div>
      </CopyToClipboard>
      <ToastContainer theme="dark" />
    </div>
  );
}
