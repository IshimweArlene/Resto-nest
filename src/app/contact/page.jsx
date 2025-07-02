const Contact = () => {
    return (
        <div className="bg-white p-44">
            <div className="bg-pink-50 flex flex-col items-center mb-6 py-16">
                <h1 className="inline-block text-black text-xl border-y-1 border-amber-300 tracking-widest">CONTACT US</h1>
                <p className="text-4xl mt-3  tracking-widest font-bold text-black">Send Valuable Feedback To Us</p>
                <div>
                    <div className="flex gap-6 mt-6">
                        <input type="text" placeholder="Name" className="w-96 h-20 text-black text-xl font-bold mt-6 px-4 rounded-lg border border-gray-300 focus:outline-none focus:border-gray-700" />
                        <input type="text" placeholder="Email" className="w-96 h-20 text-black text-xl font-bold mt-6 px-4 rounded-lg border border-gray-300 focus:outline-none focus:border-gray-700" />                  
                    </div>
                     <div className="flex gap-6 mt-6">
                        <input type="text" placeholder="Subject" className="w-96 h-20 text-black text-xl font-bold mt-6 px-4 rounded-lg border border-gray-300 focus:outline-none focus:border-gray-700" />
                        <input type="text" placeholder="Phone" className="w-96 h-20 text-black text-xl font-bold mt-6 px-4 rounded-lg border border-gray-300 focus:outline-none focus:border-gray-700" />                  
                    </div>
                   <input className="w-full h-40 mt-6 px-4 text-black text-xl font-bold rounded-lg border border-gray-300 focus:outline-none focus:border-gray-700" placeholder="Message"/>

                   <button className="bg-[#ff9900] w-52 h-20 cursor-pointer text-gray-700 font-bold text-2xl rounded-lg mt-14 ">Send</button>
                </div>
            </div>
            

        </div>
    );
}
 
export default Contact;