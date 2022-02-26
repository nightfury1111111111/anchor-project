import React, { useState, useEffect } from 'react';
import saveMoneyIcon from "../assets/save-money.svg"
import dataTransferIcon from "../assets/datatransferIcon.svg"
import infoIcon from "../assets/infoIcon.svg"
import infograyIcon from "../assets/infoIcon_gray.svg"
import infopinkIcon from "../assets/infoIcon_pink.svg"
import arrowDropDown from "../assets/arrowDrowDown.svg"
import BorrowAsset from "../component/Borrow_Swap_Asset"

import bLUNA_icon from '../assets/tokenList/bLUNA.svg'
import DPH_icon from '../assets/tokenList/DPH.png'
import LOOP_icon  from '../assets/tokenList/LOOP.svg'
import LOTA_icon  from '../assets/tokenList/LOTA.png'
import LunaX_icon  from '../assets/tokenList/LunaX.png'
import stLUNA_icon from '../assets/tokenList/stLUNA.png'
import SearchIcon from "../assets/searchIcon.svg"
import UST_icon from "../assets/tokenList/ust.png"
import aUST_icon from "../assets/tokenList/aust.png"
import LOOPR_icon from "../assets/tokenList/loopr.svg"
import ANC_icon from "../assets/tokenList/anc.png"
import LUNA_icon from "../assets/tokenList/LUNA.svg"
import bETH_icon from "../assets/tokenList/bETH.png"

let tokenList = [
  {
      img : bLUNA_icon,
      title: "bLUNA",
      balance:0
  },
  {
      img : DPH_icon,
      title: "DPH",
      balance:0
  },
  {
      img : LOOP_icon,
      title: "LOOP",
      balance:0
  },
  {
      img : LunaX_icon,
      title: "LunaX",
      balance:0
  },
  {
      img : LOTA_icon,
      title: "LOTA",
      balance:0
  },
  {
      img : stLUNA_icon,
      title: "stLUNA",
      balance:0
  }
]

let assetsValue = [
  {
    img : UST_icon,
    title: "UST",
    balance:0
  },
  {
    img : LOOP_icon,
    title: "LOOP",
    balance:0
  },
  {
    img : aUST_icon,
    title: "aUST",
    balance:0
  },
  {
    img : LUNA_icon,
    title: "LUNA",
    balance:0
  },
  {
    img : bLUNA_icon,
    title: "bLUNA",
    balance:0
  },
  {
    img : LOOPR_icon,
    title: "LOOPR",
    balance:0
  },
  {
    img : ANC_icon,
    title: "ANC",
    balance:0
  }
]

let collateralAssetList = [
  {
    img: bETH_icon,
    title: "bETH",
    balance:0
  },
  {
    img: bLUNA_icon,
    title: "bLUNA",
    balance: 0
  }
]
const BorrowLoop = () => {
  const [dropDown, setDropDown] = useState(false)
  const [collateralDropDown, setCollateralDropDown] = useState(false)
  const [borrowDropDown, setBorrowDropDown] = useState(false)

  const [borrow, setBorrow] = useState(false)
  const [swapAsset, setSwapAsset] = useState({
    img:LUNA_icon,
    title:"LUNA"
  })
  const [collateralAsset, setCollateralAsset] = useState({
    img: bLUNA_icon,
    title:"bLUNA"
  })
  const [borrowAsset, setBorrowAsset] = useState({
    img:LOOP_icon,
    title:"LOOP"
  })

  useEffect(()=> {

  },[dropDown,swapAsset,collateralAsset,collateralDropDown])
  const handleDropDown = () => {
    setDropDown(!dropDown)
  }

  const handleCollateralDropDown = () => {
    setCollateralDropDown(!collateralDropDown)
  }

  const handleBorrowDropDown = () => {
    setBorrowDropDown(!borrowDropDown)
  }

  const handleCollateral = (asset:any) => {
    setCollateralAsset(asset)
  }

  const handleAsset = (asset:any) => {
    setSwapAsset(asset)
  }

  const handleBorrow = (asset:any) => {
    setBorrowAsset(asset)
  }
  return (
    <div className="flex flex-col px-[27px] py-[30px] bg-[#1B1B1B] rounded-[15px] shadow-[black]/30">
      <div className = "flex justify-between">
        <div className="text-[white] text-[15px] mr-[12px] ml-[3px]">Borrow</div>
        <div className="flex">
          <div className="text-[#9BB0CF] text-[12px]  mr-[7px]">Slippage</div>
          <div className="bg-[#131313] rounded-[5px]">
            <input type="input" className="w-[20px]  bg-[#131313]   text-[#ccc] text-[12px] text-right  focus:border-[#131313] focus:outline-none"/>
            <span className="text-[white] p-[4px]">%</span>
          </div>
        </div>
      </div>
      <div className="flex mt-[20px] ml-[7px]">
        <span className="text-[#919191] text-[12px]">Swap Asset</span>
        <img src={infoIcon} alt="info" className="w-[10px] h-[10px] mt-[5px]"/>
      </div>
      <div className="flex flex-col bg-[#131313] rounded-[10px]">
        <div className="flex pt-[4px] px-[4px]">
          <button className="w-[30%] text-white bg-[#1B1B1B]  rounded-tl-[6px]" type="button" onClick={handleDropDown}>
            <div className="flex justify-center gap-2 p-[8px]">
              <img src={swapAsset.img} className="w-[25px] h-[25px]" alt="bluna"/>
              <span className="text-[white] text-[17px] hover:text-[#C83E93] font-bold">{swapAsset.title}</span>
              {!dropDown?<img src={arrowDropDown} alt="DrowDown"/>: <img src={arrowDropDown} className="rotate-180" alt="DrowDown"/>}
            </div>
          </button>
          <div className="flex flex-col rounded-tr-[5px] bg-[#1B1B1B] ml-[4px] w-[70%]">
            <div className="flex-col mt-[6px]">
              <div className="flex gap-[2px] px-[6px]">
                <div className="bg-[#2D2D2D] rounded-[16px] text-[10px] w-[25%] text-center">
                  <span className="text-[#9BB0CF] px-[3.75px]">25%</span>
                </div>
                <div className="bg-[#2D2D2D] rounded-[16px] text-[10px] w-[25%] text-center">
                  <span className="text-[#9BB0CF] px-[3.75px]"  >50%</span>
                </div>
                <div className="bg-[#2D2D2D] rounded-[16px] text-[10px] w-[25%] text-center">
                  <span className="text-[#9BB0CF] px-[3.75px]">75%</span>
                </div>
                <div className="bg-[#2D2D2D] rounded-[16px] text-[10px] w-[25%] text-center">
                  <span className="text-[#9BB0CF] px-[3.75px]">MAX</span>
                </div>
              </div>
              <div className="flex justify-end mt-[9px] pr-[6px]">
                <div className="text-right text-[#919191] text-[11px]">Balance:</div>
                <div className="text-[#919191] text-[11px]">121.11</div>
              </div>
            </div>
          </div>     
        </div>
         {dropDown ? <BorrowAsset asset={handleAsset}
         dropDownClick={handleDropDown}
         assetsValue = {assetsValue}
         tokenList = {tokenList}/> :
         <div>
            <div className="mt-[6px] mr-[10px] text-right">
              <span className="text-[19px] text-[#01CDFD]">1,000.4544545</span>
            </div>
            <div className="mt-[6px] mr-[10px] text-right">
              <span className="text-[10px] text-[#919191]">-1,000.45</span>
            </div>
         </div> }   
      </div>
      <div className="flex">
        <div className="flex w-[50%]">
          <span className="text-[#919191] text-[12px] mt-[22px]">To Collateral</span>
          <img src={infoIcon} alt="info" className="w-[10px] h-[10px] mt-[27px]"/>
        </div>
        <div className="w-[50%] my-[4px]">
          <img src={dataTransferIcon} alt="datatransfer"/>
        </div>
      </div>
      <div className="flex flex-col  bg-[#131313] rounded-[10px] py-[4px] pl-[4px]">
        <div className="flex justify-between">
          <button className="w-[30%] text-white bg-[#1B1B1B]  rounded-tl-[6px]" type="button" onClick={handleCollateralDropDown}>
            <div className="flex justify-center gap-2 p-[8px]">
              <img src={collateralAsset.img} className="w-[25px] h-[25px]" alt="bluna"/>
              <span className="text-[white] text-[17px] hover:text-[#C83E93] font-bold">{collateralAsset.title}</span>
              {!collateralDropDown?<img src={arrowDropDown} alt="DrowDown"/>: <img src={arrowDropDown} className="rotate-180" alt="DrowDown"/>}
            </div>
          </button>
          <div className="flex flex-col justify-center mr-[15px] mt-[15px] w-[70%]">
            <span className="text-[#01CDFD] text-[19px] text-right">1,963.14</span>
            <span className="text-[#919191] text-[10px] text-right">2000.00</span>
          </div>
        </div>
        {collateralDropDown && <BorrowAsset asset={handleCollateral}
        dropDownClick = {handleCollateralDropDown}
        assetsValue = {collateralAssetList}
        tokenList = {collateralAssetList} />
        }
      </div>
      <div className="flex">
        <div className="flex w-[50%]">
          <span className="text-[#919191] text-[12px] mt-[22px]">Borrow</span>
          <img src={infoIcon} alt="info" className="w-[10px] h-[10px] mt-[27px]"/>
        </div>
        <div className="w-[50%] my-[4px]">
          <img src={dataTransferIcon} alt="datatransfer"/>
        </div>
      </div>
      <div className="flex flex-col bg-[#131313] rounded-[10px]">
        <div className="flex pt-[4px] px-[4px]">
          <button className="w-[30%] text-white bg-[#1B1B1B]  rounded-tl-[6px]" type="button" onClick={handleBorrowDropDown}>
            <div className="flex justify-center gap-2 p-[8px]">
              <img src={borrowAsset.img} className="w-[25px] h-[25px]" alt="bluna"/>
              <span className="text-[white] text-[17px] hover:text-[#C83E93] font-bold">{borrowAsset.title}</span>
              {!borrowDropDown?<img src={arrowDropDown} alt="DrowDown"/>: <img src={arrowDropDown} className="rotate-180" alt="DrowDown"/>}
            </div>
          </button>
          <div className="flex flex-col rounded-tr-[5px] bg-[#1B1B1B] ml-[4px] w-[70%]">
            <div className="flex-col mt-[6px]">
              <div className="flex gap-[2px] px-[6px]">
                <div className="bg-[#2D2D2D] rounded-[16px] text-[10px] w-[25%] text-center">
                  <span className="text-[#9BB0CF] px-[3.75px]">25%</span>
                </div>
                <div className="bg-[#2D2D2D] rounded-[16px] text-[10px] w-[25%] text-center">
                  <span className="text-[#9BB0CF] px-[3.75px]"  >50%</span>
                </div>
                <div className="bg-[#2D2D2D] rounded-[16px] text-[10px] w-[25%] text-center">
                  <span className="text-[#9BB0CF] px-[3.75px]">75%</span>
                </div>
                <div className="bg-[#2D2D2D] rounded-[16px] text-[10px] w-[25%] text-center">
                  <span className="text-[#9BB0CF] px-[3.75px]">MAX</span>
                </div>
              </div>
              <div className="flex justify-end mt-[9px] pr-[6px]">
                <div className="text-right text-[#919191] text-[11px]">Balance:</div>
                <div className="text-[#919191] text-[11px]">121.11</div>
              </div>
            </div>
          </div>     
        </div>
         {borrowDropDown ? <BorrowAsset asset={handleBorrow}
         dropDownClick={handleBorrowDropDown}
         assetsValue = {assetsValue}
         tokenList = {tokenList}/> :
         <div>
            <div className="mt-[6px] mr-[10px] text-right">
              <span className="text-[19px] text-[#01CDFD]">1,000.4544545</span>
            </div>
            <div className="mt-[6px] mr-[10px] text-right">
              <span className="text-[10px] text-[#919191]">-1,000.45</span>
            </div>
         </div> }   
      </div>
      <div className="flex justify-between items-center">
        <div className="flex">
          <span className="text-[#C83E93] text-[12px] my-[16px]">Full Degen Mode</span>
          <img src={infopinkIcon} alt="info" className="w-[15px] h-[15px] mt-[19px] ml-[8px]"/>
        </div>
        <div className="form-check form-switch">
          <input className="form-check-input appearance-none w-[28px]  rounded-full float-left h-[10px] align-top bg-[#C83E93] bg-no-repeat bg-contain bg-gray-300 focus:outline-none cursor-pointer shadow-sm" type="checkbox" role="switch" id="flexSwitchCheckChecked" checked/>
        </div>
      </div>
      <div className="flex flex-col bg-[#2D2D2D] rounded-[10px] py-[10px] px-[6px]">
        <div className="flex justify-between">
          <div className="flex">
            <span className="text-[11px] text-[white]">New Collatoral Position</span>
            <i className="fa fa-circle-o" aria-hidden="true"></i>
          </div>
          <span className="text-[11px] text-[white]">53,000UST</span>
        </div>
        <span className="text-[11px] text-[white] text-right">53,000BLUNA</span>
        <span className="text-[11px] text-[white] text-right">53,000bETH</span>
        <div className="flex justify-between">
          <div className="flex">
              <span className="text-[11px] text-[white]">New Borrowed Value</span>
              <i className="fa fa-circle-o" aria-hidden="true"></i>
          </div>
          <span className="text-[11px] text-[white]">53,000bUST</span>
        </div>
        <div className="flex justify-between">
          <div className="flex">
              <span className="text-[11px] text-[white]">New LVR</span>
              <i className="fa fa-circle-o" aria-hidden="true"></i>
          </div>
          <span className="text-[11px] text-[white]">53%</span>
        </div>
      </div>
      <button className="bg-[#C83E93] hover:bg-[#C83E93] font-bold py-2 px-4 rounded-[10px] mt-[25px]">
        <div className="flex justify-center">
          <img src={saveMoneyIcon} alt="savemoney"/>
          <span className="text-[#1B1B1B] text-[18px]">BORROW</span>
        </div>
      </button>
    </div>
  )
}

export default BorrowLoop