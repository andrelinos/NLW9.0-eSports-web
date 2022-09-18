import { Input } from '../Input';

export function NewAdd() {
  return (
    <div className="flex">
      <div className="flex flex-col bg-[#2A2634] w-[488px] h-[651px] text-white p-10 rounded-md">
        <h1>Publique um anúncio</h1>
        <form>
          <label htmlFor="game" className="block">
            <span className="block text-sm font-bold text-white py-2">
              Qual o game?
            </span>
            <select
              name="game"
              id="game"
              placeholder="Selecione o game que deseja jogar..."
              className="bg-zinc-900 py-3 px-4 rounded text-sm placeholder:text-zinc-500"
            >
              <option value="" disabled selected>
                Selecione o game que deseja jogar...
              </option>
              <option value="volvo">Volvo</option>
              <option value="saab">Saab</option>
              <option value="mercedes">Mercedes</option>
              <option value="audi">Audi</option>
            </select>
            <p className="mt-2 invisible peer-invalid:visible text-pink-600 text-sm">
              Por favor informe seu nome ou nickname...
            </p>
          </label>

          <Input
            type="text"
            id="name"
            label="Seu nome (ou nickname)"
            name="name"
            placeholder="Como te chamam dentro do game?"
          />
          <p className="mt-2 invisible peer-invalid:visible text-pink-600 text-sm">
            Por favor informe seu nome ou nickname...
          </p>

          <div className="flex gap-4">
            <Input
              type="text"
              label="Joga há quantos anos?"
              id="experience"
              name="experience"
              placeholder="Como te chamam dentro do game?"
            />
            <p className="mt-2 invisible peer-invalid:visible text-pink-600 text-sm">
              Por favor informe seu nome ou nickname...
            </p>

            <Input
              type="text"
              label="Qual seu Discord?"
              id="discord"
              name="discord"
              placeholder="Como te chamam dentro do game?"
            />
            <p className="mt-2 invisible peer-invalid:visible text-pink-600 text-sm">
              Por favor informe seu nome ou nickname...
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
