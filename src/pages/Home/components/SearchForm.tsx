export function SearchForm() {
  return (
    <>
      <form action="">
        <input
          type="text"
          name="search"
          placeholder="Buscar conteúdo"
          className="bg-base-input focus:outline-1 focus:outline-blue rounded-md placeholder-base-label text-sm  px-2 w-full h-9 text-base-text border-1 border-base-border"
        />
      </form>
    </>
  );
}
