import { DialogTrigger } from '~/components/DialogTrigger';

export function Caller() {
  return (
    <div>
      <DialogTrigger>
        <div
          className="bg-blue-300 absolute text-red-400 z-0 left-0
          right-0 top-0 bottom-0 rounded-lg opacity-0 lg:opacity-5 hover:opacity-0"
        />
      </DialogTrigger>
    </div>
  );
}
