import { DialogTrigger } from '~/components/DialogTrigger';

export function Caller() {
  return (
    <div>
      <DialogTrigger>
        <div
          className=" bg-blue-300 absolute text-red-400 z-0 left-2
          right-2 top-2 bottom-2 rounded-md opacity-0 lg:opacity-10 hover:opacity-0"
        />
      </DialogTrigger>
    </div>
  );
}
