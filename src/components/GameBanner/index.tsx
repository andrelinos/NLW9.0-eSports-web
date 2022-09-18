import 'keen-slider/keen-slider.min.css';

interface GameBannerProps {
  bannerUrl: string;
  title: string;
  adsCount: number;
}

export function GameBanner({ title, bannerUrl, adsCount }: GameBannerProps) {
  return (
    <div className="min-w-[200px] relative rounded-lg overflow-hidden hover:cursor-pointer">
      <img src={bannerUrl} alt="" />

      <div className="pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
        <strong className="font-bold text-white block text-left">
          {title}
        </strong>
        <span className="text-zinc-300 text-sm text-left block">
          {adsCount} anúncio(s)
        </span>
      </div>
    </div>
  );
}
