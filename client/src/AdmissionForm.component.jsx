import { useState, useEffect } from "react";
import axios from 'axios'
export default function AdmissionForm() {
    const [inputs, setInputs] = useState({});
    const [showError, setShowError] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [content, setContent] = useState("Waiting to fetch payment status...")
    useEffect(() => {
        setShowError(!((18 <= inputs.age && inputs.age <= 65) || inputs.age === undefined))
    }, [inputs.age])

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        // pass inputs to backend and get response
        setShowModal(true);
        if (!showError)
            axios.post('https://flexmoney-assignment-yi28.onrender.com/saveUser', inputs)
                .then(response => {
                    if (response.status === 200) {
                        setContent("Successfully added with id: " + response.data._id)

                    }
                    else {
                        setContent(response.data)
                    }
                });
    }

    return (
        <div className="flex justify-center align-items-center bg-indigo-100 w-full" style={{ alignItems: "center" }}>
            <form onSubmit={handleSubmit} className="flex flex-col bg-white p-5 rounded" style={{ height: "600px" }}>
                < label className="flex flex-col my-5" >
                    <span className="text-left text-sm">Enter your name:</span>
                    <input
                        style={{ width: "300px" }}
                        className="p-5 bg-gray-100 rounded my-3 font-bold text-md focus:bg-gray-200"
                        type="text"
                        name="username"
                        placeholder="Enter your name here..."
                        value={inputs.username || ""}
                        onChange={handleChange}
                    />
                </label >
                <label className="flex flex-col my-5">
                    <span className="text-left text-sm">Enter your age:</span>
                    <input
                        style={{ width: "300px" }}
                        className="p-5 bg-gray-100 focus:bg-gray-200 rounded my-3 font-bold text-md "
                        type="number"
                        name="age"
                        placeholder="Enter your age here..."
                        value={inputs.age || ""}
                        onChange={handleChange}
                    />
                    {showError && <span className="text-red-700 italic">* The age must be between 18-65</span>}
                </label>

                <label className="flex flex-col my-5">
                    <span className="text-left text-sm">Select your Slot</span>
                    <select onChange={handleChange} style={{ width: "300px" }} className="p-5 bg-gray-100 focus:bg-gray-200 rounded my-3 font-bold text-md" value={inputs.slot} name="slot">
                        <option value="6-7AM">6-7AM</option>
                        <option value="7-8AM">7-8AM</option>
                        <option value="8-9AM">8-9AM</option>
                        <option value="5-6AM">5-6PM</option>
                    </select>
                </label>
                <input className="bg-indigo-600 text-white p-5" type="submit" value="Complete Payment" />
            </form >
            {showModal ? (
                <>
                    <div
                        className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                    >
                        <div className="relative w-auto my-6 mx-auto max-w-3xl">
                            {/*content*/}
                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                {/*header*/}
                                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                                    <h3 className="text-3xl font-semibold">
                                        Payment Response
                                    </h3>
                                    <button
                                        className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                        onClick={() => setShowModal(false)}
                                    >
                                        <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                                            ×
                                        </span>
                                    </button>
                                </div>
                                {/*body*/}
                                <div className="relative p-6 flex-auto">
                                    <p className="my-4 text-slate-500 text-lg leading-relaxed">
                                        {content}
                                    </p>
                                </div>
                                {/*footer*/}
                                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                                    <button
                                        className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                        type="button"
                                        onClick={() => setShowModal(false)}
                                    >
                                        Close
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </>
            ) : null}
        </div>
    )
}