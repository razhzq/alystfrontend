import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import alyst from "./assets/alyst.png";
import note from "./assets/note.svg";

function App() {
  const [showModal, setShowModal] = useState(false);
  const [focus, setFocus] = useState(false);
  const [collateral, setCollateral] = useState(0.0);
  const [modalType, setModalType] = useState(true); // true = Supply false = Borrow


  const handleSupplyModal = () => {
     setShowModal(true);
     setModalType(true);
  }

  const handleBorrowModal = () => {
    setShowModal(true);
    setModalType(false);
  }

  return (
    <div className=" w-screen min-h-screen bg-[#040D12] m-0 font-proto font-light">
      {/* navbar */}
      <div className=" w-screen h-[px] items-center flex p-1 ">
        <img src={alyst} className=" w-[100px] m-1" />
        <div className=" flex">
          <div className=" m-3 w-[150px] h-[30px] rounded-md  text-center">
            Lending
          </div>
          <div className=" m-3 w-[150px] h-[30px] rounded-md  text-center">
            Liquidation
          </div>
        </div>
        <div className=" ml-auto m-1 mr-5 w-[160px] text-center rounded-md  whitespace-nowrap">
          Connect Wallet
        </div>
      </div>
      {/* end of navbar */}
      <div className="lending w-full flex flex-grow flex-col  items-center  justify-center">
        <div className=" apy-container w-full flex justify-center">
          <div className=" relative right-[70px] w-[13%] h-[100px] flex flex-col justify-center p-5 mx-10 bg-gradient-to-tr from-cardinGreen to-cardingGreenLight shadow-xl my-10 hover:shadow-indigo-500/40  rounded-md">
            <h4 className=" text-sm">TOKEN</h4>
            <p className=" text-xl">NOTE</p>
          </div>
          <div className=" relative right-[70px] w-[13%] h-[100px] flex flex-col justify-center p-5 mx-10 bg-gradient-to-tr from-cardinGreen to-cardingGreenLight shadow-xl my-10 hover:shadow-indigo-500/40  rounded-md ">
            <h4 className=" text-sm">SUPPLY APY</h4>
            <p className=" text-xl">5%</p>
          </div>
          <div className=" relative right-[70px] w-[13%] h-[100px] flex flex-col justify-center p-5 mx-10 bg-gradient-to-tr from-cardinGreen to-cardingGreenLight shadow-xl my-10 hover:shadow-indigo-500/40  rounded-md ">
            <h4 className=" text-sm">BORROW APR</h4>
            <p className=" text-xl">10%</p>
          </div>
        </div>
        <div className=" user-container w-full flex items-center justify-center ">
          <div className=" w-[35%] flex flex-col h-[300px] ">
            <div className=" w-full flex h-[35%] p-3 bg-gradient-to-tr  from-darkerPurple to-lightDarkPurple shadow-xl items-center">
              <div className=" w-[30%] ml-10 mt-5 h-full flex flex-col ">
                <h4 className=" text-l">BALANCE</h4>
                <p className=" text-xl">$20</p>
              </div>
              <div className=" w-[30%] ml-10 mt-5 h-full flex flex-col ">
                <h4 className=" text-l">SUPPLIED</h4>
                <p className=" text-xl">$20</p>
              </div>
              <div className=" w-[30%] ml-10 mt-5 h-full flex flex-col ">
                <h4 className=" text-l">BORROWED</h4>
                <p className=" text-xl">$20</p>
              </div>
            </div>
            <div className=" w-full flex h-[65%] bg-gradient-to-tr from-blackPurple to-darkerPurple  items-center justify-center">
              <div
                className=" w-[180px] flex mx-10 h-[69px] items-center justify-center rounded-xl cursor-pointer bg-gradient-to-tr from-cardinGreen to-cardingGreenLight shadow-xl  hover:shadow-indigo-500/40"
                onClick={() => handleSupplyModal()}
              >
                SUPPLY
              </div>
              <div
                className=" w-[180px] flex mx-10 h-[69px] items-center justify-center rounded-xl cursor-pointer bg-gradient-to-tr from-cardinGreen to-cardingGreenLight shadow-xl hover:shadow-indigo-500/40"
                onClick={() => handleBorrowModal()}
              >
                BORROW
              </div>
            </div>
          </div>
          <div className=" w-[20%] pl-10 h-[300px] flex flex-col p-5">
            <h4>UTILIZATION RATE</h4>
            <h4>70%</h4>
            <br></br>
            <h4>PRICE OF alNOTE</h4>
            <h4>$1.0111</h4>
            <br></br>
            <h4>LOAN HEALTH</h4>
            <h4>70%</h4>
          </div>
        </div>
      </div>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none ">
            <div className="relative my-6 mx-auto w-[500px] ">
              {/*content*/}
              <div className="border-0 rounded-lg relative flex flex-col w-full bg-gradient-to-tr from-cardinGreen to-cardingGreenLight shadow-xl outline-none focus:outline-none">
                {/*header*/}
                <div className="flex  w-full h-[80px] items-center justify-between p-5  rounded-t">
                  <h3 className="text-xl font-semibold">Supply</h3>

                  <img src={note} className=" w-10 h-10" />
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <div className=" w-full h-[80px] p-3 flex flex-row justify-between bg-cardinGreen rounded-lg">
                    <input
                      placeholder="0.0"
                      type="number"
                      className=" w-[50%] h-full text-2xl bg-transparent border-none p-3 caret-white focus:outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                    />
                    <div className=" w-[50%] p-2 flex flex-col h-full items-end">
                      <h4 className="mt-2">NOTE</h4>
                    </div>
                  </div>
                  <div className=" flex w-full h-[80px] mt-3 p-3 justify-between items-center bg-cardinGreen rounded-lg  ">
                    {modalType ? <h4>SUPPLY APR</h4> : <h4>BORROW APR</h4> }
                    <h4>5%</h4>
                  </div>
                  <div className=" flex w-full h-[80px] mt-3 p-3 justify-between items-center bg-cardinGreen rounded-lg  ">
                    <h4>COLLATERAL FACTOR</h4>
                    <h4>65%</h4>
                  </div>
                  {/* <input type="number" className=" w-full h-[80px] text-2xl flex bg-cardinGreen shadow-xl rounded-lg caret-white p-5 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none" value={collateral} onChange={(e) => setCollateral(e.target.value)} onClick={() => setFocus(true)} autoFocus={focus}>
                     
                  </input> */}
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6  rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    CANCEL
                  </button>
                  <button
                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    CONFIRM
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </div>
  );
}

export default App;
