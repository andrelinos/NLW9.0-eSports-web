export function NewAdd() {
  return (
    <div className="flex">
      <div className="flex flex-col bg-[#2A2634] w-[488px] h-[651px] text-white p-10 rounded-md">
        <h1>Publique um anúncio</h1>
        <form>
          <label htmlFor="game" className="block">
            <span className="block text-sm font-bold text-white py-2">
              Seu nome (ou nickname)
            </span>
            <select
              name="game"
              id="game"
              className="peer w-full h-12 rounded-md px-4 bg-zinc-900 text-white"
              placeholder="Selecione o game que deseja jogar..."
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
          <label htmlFor="name" className="block">
            <span className="block text-sm font-bold text-white py-2">
              Seu nome (ou nickname)
            </span>
            <input
              type="text"
              id="name"
              name="name"
              className="peer w-full h-12 rounded-md px-4 bg-zinc-900 text-white"
              placeholder="Como te chamam dentro do game?"
            />
            <p className="mt-2 invisible peer-invalid:visible text-pink-600 text-sm">
              Por favor informe seu nome ou nickname...
            </p>
          </label>
          <div className="flex gap-4">
            <label htmlFor="experience" className="block">
              <span className="block text-sm font-bold text-white py-2">
                Joga há quantos anos?
              </span>
              <input
                type="text"
                id="experience"
                name="experience"
                className="peer w-full h-12 rounded-md px-4 bg-zinc-900 text-white"
                placeholder="Como te chamam dentro do game?"
              />
              <p className="mt-2 invisible peer-invalid:visible text-pink-600 text-sm">
                Por favor informe seu nome ou nickname...
              </p>
            </label>
            <label htmlFor="discord" className="block">
              <span className="block text-sm font-bold text-white py-2">
                Qual seu Discord?
              </span>
              <input
                type="text"
                id="discord"
                name="discord"
                className="peer w-full h-12 rounded-md px-4 bg-zinc-900 text-white"
                placeholder="Como te chamam dentro do game?"
              />
              <p className="mt-2 invisible peer-invalid:visible text-pink-600 text-sm">
                Por favor informe seu nome ou nickname...
              </p>
            </label>
          </div>
        </form>
      </div>
    </div>
  );
}
