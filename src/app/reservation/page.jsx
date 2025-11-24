import Image from "next/image";

const Reservation = () => {
  return (
    <div className="bg-white">
      <div className="px-6 sm:px-10 lg:px-24 py-16 lg:py-24 flex flex-col items-center">
        <h1 className="text-lg sm:text-xl text-gray-950 inline-block border-y tracking-widest border-amber-300">RESERVATION</h1>
        <p className="text-gray-900 text-3xl sm:text-4xl lg:text-5xl mt-3 font-bold text-center">
          Book The Seat Now Here Easily
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-10 items-center w-full">
          <div className="flex justify-center">
            <Image
              src={"/re.png"}
              alt="Reservation Image"
              width={600}
              height={500}
              className="rounded-lg w-full max-w-md h-auto"
            />
          </div>

          <div>
            <h1 className="inline-block border-y border-amber-300 tracking-widest text-lg sm:text-xl text-gray-950 font-semibold">
              RESERVATION
            </h1>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl text-black mt-4 font-semibold">
              Book your table now
            </h1>
            <p className="text-gray-600 text-base sm:text-lg lg:text-xl mt-4 text-start">
              The people, food and the prime locations make Rodich the perfect place for good friends & family
              to come together and have a great time.
            </p>

            <form className="mt-4 sm:mt-6 w-full">
              <div className="flex flex-col md:flex-row gap-4 md:gap-6 w-full">
                <input
                  type="text"
                  placeholder="Name"
                  className="border-2 border-gray-300 rounded-lg px-4 h-12 sm:h-14 lg:h-16 w-full text-black text-base sm:text-lg font-semibold outline-none"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="border-2 border-gray-300 rounded-lg px-4 h-12 sm:h-14 lg:h-16 w-full text-black text-base sm:text-lg font-semibold outline-none"
                />
              </div>

              <div className="flex flex-col md:flex-row gap-4 md:gap-6 mt-4 md:mt-6 w-full">
                <input
                  type="text"
                  placeholder="Person"
                  className="border-2 border-gray-300 rounded-lg px-4 h-12 sm:h-14 lg:h-16 w-full text-black text-base sm:text-lg font-semibold outline-none"
                />
                <input
                  type="text"
                  placeholder="Timing"
                  className="border-2 border-gray-300 rounded-lg px-4 h-12 sm:h-14 lg:h-16 w-full text-black text-base sm:text-lg font-semibold outline-none"
                />
              </div>

              <div className="flex flex-col md:flex-row gap-4 md:gap-6 mt-4 md:mt-6 w-full">
                <input
                  type="text"
                  placeholder="Date"
                  className="border-2 border-gray-300 rounded-lg px-4 h-12 sm:h-14 lg:h-16 w-full text-black text-base sm:text-lg font-semibold outline-none"
                />
                <input
                  type="text"
                  placeholder="Phone"
                  className="border-2 border-gray-300 rounded-lg px-4 h-12 sm:h-14 lg:h-16 w-full text-black text-base sm:text-lg font-semibold outline-none"
                />
              </div>

              <button className="text-lg sm:text-xl lg:text-2xl font-bold text-black bg-[#ff9900] mt-8 lg:mt-10 w-full sm:w-64 rounded-lg h-12 sm:h-14 lg:h-20">
                Book a table
              </button>
            </form>
          </div>
        </div>

        <div className="text-center mt-12 lg:mt-16 px-4 sm:px-10">
          <h1 className="inline-block border-y border-amber-300 text-black text-lg sm:text-xl mt-4 tracking-widest">
            GALLERY
          </h1>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl mt-4 text-gray-950 font-bold">
            What You Can Expect From Us
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 max-w-6xl mx-auto py-10 px-4 sm:px-0">
          <div className="flex flex-col gap-4 sm:gap-6">
            <Image
              src="/f1.png"
              alt="Food 1"
              width={300}
              height={200}
              className="rounded-lg object-cover w-full h-48 sm:h-56"
            />
            <Image
              src="/f2.png"
              alt="Food 2"
              width={300}
              height={200}
              className="rounded-lg object-cover w-full h-48 sm:h-56"
            />
          </div>

          <div className="md:row-span-2">
            <Image
              src="/f3.png"
              alt="Interior"
              width={600}
              height={640}
              className="w-full h-64 sm:h-[500px] object-cover rounded-lg"
            />
          </div>

          <div className="flex flex-col gap-4 sm:gap-6">
            <Image
              src="/f4.jpg"
              alt="Food 3"
              width={500}
              height={700}
              className="rounded-lg object-cover w-full h-48 sm:h-56"
            />
            <Image
              src="/f5.jpg"
              alt="Drink"
              width={500}
              height={700}
              className="rounded-lg object-cover w-full h-48 sm:h-56"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reservation;