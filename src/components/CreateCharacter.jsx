export default function CreateCharacter() {
  return (
    <div className='w-full h-full bg-black'>
      <div className='h-[50vh] md:h-[90vh] text-white flex justify-center items-center flex-col gap-5'>
        <span className='self-center whitespace-nowrap text-xl font-semibold text-white flex flex-col'>
          <span>
            secret <span className='bg-[#C82A59] rounded-lg px-1'>desires</span>
          </span>
          <span className='text-sm text-slate-500'>Open Beta</span>
        </span>
        <h1 className='text-3xl md:text-4xl font-bold'>
          Welcome to secret desires
        </h1>
      </div>
    </div>
  );
}
