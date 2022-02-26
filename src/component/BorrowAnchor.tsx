import React from 'react'
import gnbIcon from '../assets/GNB.svg'
import blunaIcon from '../assets/bluna.svg'
import returnIcon from '../assets/returnIcon.svg'
import narrowIcon from '../assets/narrowIcon.svg'
import saveMoneyIcon from '../assets/save-money.svg'
import distrubutionIcon from '../assets/distributionIcon.svg'
const BorrowAnchor = () => {
  return (
    <div className="flex flex-col px-[27px] py-[30px] bg-[#1B1B1B] rounded-[15px] shadow-[black]/30 p-[14px]">
      <div className="flex">
        <img src={gnbIcon} alt="gnb"/>
        <span className="text-[white] text-[15px] ml-[10px]">Your Current Anchor Position</span>
      </div>
      <div className="w-full bg-[#333333] rounded-[16px] h-[6px] mt-[20px]" data-tooltip-target="tooltip-default" >
        <div className="bg-[#32FE9A] h-[6px] rounded-full w-[55%]"></div>
      </div>
      {/* <div id="tooltip-default" role="tooltip" className="inline-block absolute invisible z-10 py-2 px-3 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 transition-opacity duration-300 tooltip dark:bg-gray-700">
        Tooltip content
      <div className="tooltip-arrow" data-popper-arrow></div>
      </div> */}
      <div className="flex justify-between">
        <div className="flex">
          <span className="text-[#9BB0CF] text-[10px] mt-[9px]">Borrow Usage</span>
          <i className="fa fa-circle-o" aria-hidden="true"></i>
        </div>
        <div className="flex">
          <span className="text-[#9BB0CF] text-[10px] mt-[9px]">Borrow Limit:</span>
          <span className="text-[#9BB0CF] text-[10px] mt-[9px]">$22.67</span>
        </div>
      </div>
      <div className="flex justify-center mt-[22px] flex-wrap gap-[16px]">
        <div className="flex- flex-col w-[100%] md:w-[40%]">
          <div className="flex flex-col rounded-t-[12px] bg-[#292929] py-[12px] px-[15px]">
            <div className="flex">
              <span className="text-[#9BB0CF] text-[12px]">Colateral Value</span>
              <i className="fa fa-circle-o" aria-hidden="true"></i>
            </div>
            <span className="text-[white] text-[19px]] my-[6px]">$27.821</span>
          </div>
          <div className="flex flex-col rounded-b-[12px] bg-[#333333] py-[12px] px-[15px]">
            <div className="flex">
              <span className="text-[#9BB0CF] text-[12px]  w-[35%]">Name</span>
              <span className="text-[#9BB0CF] text-[12px]  w-[30%]">Price</span>
              <span className="text-[#9BB0CF] text-[12px] text-right w-[35%]">Provided</span>
            </div>
            <div className="flex mt-[10px]">
              <div className="flex w-[35%] gap-[4px]">
                <img src={blunaIcon} alt="bluna" className="w-[12px] h-[12px]"/>
                <span className="text-[white] text-[10px]">bLUNA</span>
              </div>
              <span className="text-[white] text-[10px] w-[30%]">55.813 UST</span>
              <span className="text-[white] text-[10px] text-right  w-[35%]">55.813 UST</span>
            </div>
            <div className="flex mt-[10px]">
              <div className="flex w-[35%] gap-[4px]">
                <img src={blunaIcon} alt="bluna" className="w-[12px] h-[12px]"/>
                <span className="text-[white] text-[10px]">bETHE</span>
              </div>
              <span className="text-[white] text-[10px] w-[30%]">55.813 UST</span>
              <span className="text-[white] text-[10px] text-right  w-[35%]">55.813 UST</span>
            </div>
          </div>
        </div>
        <div className="flex- flex-col w-[100%] md:w-[25%] ">
          <div className="flex flex-col rounded-t-[12px] bg-[#292929] py-[12px] px-[15px]">
            <div className="flex">
              <span className="text-[#9BB0CF] text-[12px]">Borrowed Value</span>
              <i className="fa fa-circle-o" aria-hidden="true"></i>
            </div>
            <span className="text-[white] text-[19px]] my-[6px]">$27.821</span>
          </div>
          <div className="flex justify-center gap-[6px] rounded-b-[12px] bg-[#333333] py-[12px] pt-[62px]">
              <img src={returnIcon} alt="return"/>
              <span className="text-[white] text-[14px]">REPAY LOAN</span>
              <img src={narrowIcon} alt="narrow"/>
          </div>
        </div>
        <div className="flex- flex-col w-[100%] md:w-[30%]">
          <div className="flex  justify-between items-center rounded-t-[12px] bg-[#292929] py-[12px] px-[15px]">
              <div className="flex flex-col">
                <div className="flex ">
                  <span className="text-[#9BB0CF] text-[12px]">Net APR</span>
                  <i className="fa fa-circle-o" aria-hidden="true"></i>
                </div>
                <span className="text-[#32FE9A] text-[19px]] my-[6px]">-1.58%</span>
              </div>
              <div className="flex items-center py-[9px] px-[10px] bg-[#1B1B1B] rounded-[10px] border-[white]/40 border-[3px] h-[31px]">
                <img src={gnbIcon} alt="gnb" className="w-[14px] h-[13px] text-[#9BB0CF]"/>
                <span className="text-[white] text-[12px] ml-[10px]">Open Anchor</span>
              </div>
            </div>
          <div className="flex rounded-b-[12px] bg-[#333333]  px-[15px]">
            <div className="flex py-[24px]">
              <img src={saveMoneyIcon} alt="savemoney"/>
              <div className="flex flex-col ml-[8px]">
                <span className="text-[#9BB0CF] text-[10px]">Borrow APR</span>
                <span className="text-[white] text-[14px] mt-[4px]">12.84%</span>
              </div>
            </div>
            <div className="flex py-[24px]">
              <img src={distrubutionIcon} alt="distribution"/>
              <div className="flex flex-col ml-[8px]">
                <span className="text-[#9BB0CF] text-[10px]">Borrow APR</span>
                <span className="text-[white] text-[14px] mt-[4px]">12.84%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default BorrowAnchor