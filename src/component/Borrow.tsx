import React from 'react'
import BorrowAnchor from './BorrowAnchor'
import BorrowLoop from './BorrowLoop'
import BorrowMarketCap from './BorrowMarketCap'
import WalletConnection from './WalletConnection'
const Borrow = () => {
  return (
    <div className="flex flex-col justify-center gap-[27px] px-[6%] my-[80px]">
      <WalletConnection />
      <div className="flex flex-wrap  gap-[27px]">
        <div className="w-[100%] md:w-[35%]">
          <BorrowLoop/>
        </div>
        <div className="flex flex-col w-[100%] md:w-[60%]">                        
          <BorrowAnchor/>
          <BorrowMarketCap/>
        </div>
      </div>
      
    </div>
  )
}

export default Borrow

