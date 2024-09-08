<section className="flex flex-col mt-20">
  <div className=" justify-center items-center flex flex-col gap-y-3">
    <p className="font-semibold text-2xl text-green-700 md:text-3xl text-center">
      SSTU AT A GLANCE
    </p>
    <div className="border-t border-2 border-green-500 w-14"></div>
  </div>
  <div className="mt-10 flex justify-center flex-wrap gap-4 w-full mx-auto max-w-7xl px-5">
    <div className="flex flex-col justify-center items-center bg-green-500 px-4 h-[100px] w-[120px] md:w-[150px] md:h-[120px] rounded-lg">
      <div className="flex flex-row justify-center items-center">
        <p className="font-bold text-xl text-white sm:text-2xl lg:text-3xl leading-9 text-primary ml-2">
          {stats?.faculties}
        </p>
      </div>
      <p className="font-medium text-xs text-white sm:text-sm leading-6 mt-2 md:mt-3 text-center">
        Faculties
      </p>
    </div>

    <div className="flex flex-col justify-center items-center bg-green-500 px-4 h-[100px] w-[120px] md:w-[150px] md:h-[120px] rounded-lg">
      <div className="flex flex-row justify-center items-center">
        <p className="font-bold text-xl text-white sm:text-2xl lg:text-3xl leading-9 text-primary ml-2">
          {stats?.departments}
        </p>
      </div>
      <p className="font-medium text-xs text-white sm:text-sm leading-6 mt-2 md:mt-3 text-center">
        Departments
      </p>
    </div>

    <div className="flex flex-col justify-center items-center bg-green-500 px-4 h-[100px] w-[120px] md:w-[150px] md:h-[120px] rounded-lg">
      <div className="flex flex-row justify-center items-center">
        <p className="font-bold text-xl text-white sm:text-2xl lg:text-3xl leading-9 text-primary ml-2">
          {stats?.students}
        </p>
      </div>
      <p className="font-medium text-xs text-white sm:text-sm leading-6 mt-2 md:mt-3 text-center">
        Students
      </p>
    </div>

    <div className="flex flex-col justify-center items-center bg-green-500 px-4 h-[100px] w-[120px] md:w-[150px] md:h-[120px] rounded-lg">
      <div className="flex flex-row justify-center items-center">
        <p className="font-bold text-xl text-white sm:text-2xl lg:text-3xl leading-9 text-primary ml-2">
          {stats?.graduates}
        </p>
      </div>
      <p className="font-medium text-xs text-white sm:text-sm leading-6 mt-2 md:mt-3 text-center">
        Graduates
      </p>
    </div>

    <div className="flex flex-col justify-center items-center bg-green-500 px-4 h-[100px] w-[120px] md:w-[150px] md:h-[120px] rounded-lg">
      <div className="flex flex-row justify-center items-center">
        <p className="font-bold text-xl text-white sm:text-2xl lg:text-3xl leading-9 text-primary ml-2">
          {stats?.institutes}
        </p>
      </div>
      <p className="font-medium text-xs text-white sm:text-sm leading-6 mt-2 md:mt-3 text-center">
        Institutes
      </p>
    </div>

    <div className="flex flex-col justify-center items-center bg-green-500 px-4 h-[100px] w-[120px] md:w-[150px] md:h-[120px] rounded-lg">
      <div className="flex flex-row justify-center items-center">
        <p className="font-bold text-xl text-white sm:text-2xl lg:text-3xl leading-9 text-primary ml-2">
          {stats?.teachers}
        </p>
      </div>
      <p className="font-medium text-xs text-white sm:text-sm leading-6 mt-2 md:mt-3 text-center">
        Teachers
      </p>
    </div>

    <div className="flex flex-col justify-center items-center bg-green-500 px-4 h-[100px] w-[120px] md:w-[150px] md:h-[120px] rounded-lg">
      <div className="flex flex-row justify-center items-center">
        <p className="font-bold text-xl text-white sm:text-2xl lg:text-3xl leading-9 text-primary ml-2">
          {stats?.staffs}
        </p>
      </div>
      <p className="font-medium text-xs text-white sm:text-sm leading-6 mt-2 md:mt-3 text-center">
        Office & Staff
      </p>
    </div>
  </div>
</section>;
