const Contact = () => {
  return (
    <div className="bg-white px-4 sm:px-8 lg:px-24 py-12 lg:py-20">
      <div className="bg-pink-50 flex flex-col items-center mb-6 py-12 sm:py-16 px-4 sm:px-8 lg:px-16 rounded-xl max-w-4xl mx-auto">
        <h1 className="inline-block text-black text-lg sm:text-xl border-y border-amber-300 tracking-widest">CONTACT US</h1>
        <p className="text-2xl sm:text-3xl lg:text-4xl mt-3 tracking-widest font-bold text-black text-center">
          Send Valuable Feedback To Us
        </p>
        <div className="w-full mt-4 sm:mt-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mt-4">
            <input
              type="text"
              placeholder="Name"
              className="w-full h-12 sm:h-14 lg:h-16 text-black text-base sm:text-lg font-bold mt-2 sm:mt-4 px-4 rounded-lg border border-gray-300 focus:outline-none focus:border-gray-700"
            />
            <input
              type="text"
              placeholder="Email"
              className="w-full h-12 sm:h-14 lg:h-16 text-black text-base sm:text-lg font-bold mt-2 sm:mt-4 px-4 rounded-lg border border-gray-300 focus:outline-none focus:border-gray-700"
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mt-4 sm:mt-6">
            <input
              type="text"
              placeholder="Subject"
              className="w-full h-12 sm:h-14 lg:h-16 text-black text-base sm:text-lg font-bold mt-2 sm:mt-4 px-4 rounded-lg border border-gray-300 focus:outline-none focus:border-gray-700"
            />
            <input
              type="text"
              placeholder="Phone"
              className="w-full h-12 sm:h-14 lg:h-16 text-black text-base sm:text-lg font-bold mt-2 sm:mt-4 px-4 rounded-lg border border-gray-300 focus:outline-none focus:border-gray-700"
            />
          </div>
          <textarea
            className="w-full h-32 sm:h-40 mt-4 sm:mt-6 px-4 py-3 text-black text-base sm:text-lg font-bold rounded-lg border border-gray-300 focus:outline-none focus:border-gray-700 resize-none"
            placeholder="Message"
          />

          <div className="flex justify-center sm:justify-start">
            <button className="bg-[#ff9900] w-full sm:w-52 h-12 sm:h-14 lg:h-16 cursor-pointer text-gray-700 font-bold text-lg sm:text-xl rounded-lg mt-8 sm:mt-10">
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;