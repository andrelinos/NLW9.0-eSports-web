import { useEffect, useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';

import { DiscordLogo } from 'phosphor-react';

import api from '~/services/api';

interface DiscordProps {
  discordId: string;
}

export function Discord({ discordId, ...rest }: DiscordProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [discordUser, setDiscordUser] = useState({} as any);

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

      console.log(discordUser.discord);
    }

    fetchUserDiscord();
  }, []);

  return (
    <div className="flex max-w-2xl" {...rest}>
      <h1>{discordId}</h1>
      <CopyToClipboard text={discordUser.discord}>
        <div
          className="py-1 px-4 bg-violet-500 hover:bg-violet-600
        text-white rounded flex items-center gap-3 mt-6 mx-auto"
        >
          <DiscordLogo size={32} />
          {discordUser.discord}
        </div>
      </CopyToClipboard>
    </div>
  );
}
