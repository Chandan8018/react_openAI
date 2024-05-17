export default function Home() {
  return (
    <div className='w-full min-h-screen bg-black '>
      <div className='h-[50vh] md:h-[90vh] text-white flex justify-center items-center flex-col gap-7'>
        <span className='self-center whitespace-nowrap font-semibold text-white flex flex-col'>
          <span className='text-3xl'>
            secret <span className='bg-[#C82A59] rounded-lg px-1'>desires</span>
          </span>
          <span className='text-sm text-slate-500'>Open Beta</span>
        </span>
        <h1 className='text-3xl md:text-5xl font-bold text-center'>
          Welcome to secret desires!!
        </h1>
      </div>
    </div>
  );
}
