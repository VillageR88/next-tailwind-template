import Table from './Table';

const Main = () => (
  <main className="flex h-[1300px] w-full items-start justify-center bg-[#1C1C1C] p-8">
    <div className="flex w-full max-w-[210mm] justify-center">
      <div className="mt-[40px] size-full rounded-[6px] border border-[#313131] bg-[#232323] px-3 py-4">
        <Table />
      </div>
    </div>
  </main>
);

export default Main;
