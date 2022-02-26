import React, { useState } from 'react'

const Borrow_Swap_Asset = (props:any) => { 
  
  const [assetName, setAssetName] = useState('')
  const [foundAsset, setFoundAsset] = useState(props.tokenList)
  
  const filter = (e:any) => {
    const keyword = e.target.value;
    console.log(e,"Evee",keyword)

    if(keyword !==''){
      const results = props.tokenList.filter((list:any) => {
        return list.title.toLowerCase().startsWith(keyword.toLowerCase());
      })
      setFoundAsset(results);
    }
    else {
      setFoundAsset(props.tokenList)
    }
    setAssetName(keyword)
  }
  const searchHandle = (e:any) => {
    // console.log("Asset",e)
  }
  const clickAsset = (asset:any) => {
    props.asset(asset)
    props.dropDownClick()
  }
  return (
    <div className="mt-[10px] px-[4px] ">
      <div className="flex items-center bg-[black] rounded-md ">
        <input
            className="w-full rounded-md bg-[black] text-[white] leading-tight focus:outline-none py-2 px-2"
            id="search" type="text" value={assetName}  onChange={filter} placeholder="Search"/>
        <div className="pr-2">
          <svg className="fill-current text-gray-500 w-6 h-6" xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24">
              <path className="heroicon-ui"
                d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z" />
          </svg>
        </div>
      </div> 
      <div className="flex flex-wrap gap-[10px] mt-[10px] ml-[5px]">
        {
          props.assetsValue.map((asset:any) => {
            return(
              <div className="flex bg-[#2d2d2d] hover:bg-[] rounded-md p-[4px] gap-[4px] hover:cursor-pointer" onClick={() => {clickAsset(asset)}}>
                <img src={asset.img} className="w-[20px] h-[20px]" alt="icon"/>
                <span className="text-[white] text-[12px]">{asset.title}</span>
              </div>
            )
        })}
      </div>
      <ul className="mt-[10px]">
        { foundAsset && foundAsset.length > 0 ? (          
          foundAsset.map((list:any) => {
            return (
              <li className="flex justify-between py-[9px] mb-[4px] hover:bg-[#1B1B1B] hover:cursor-pointer" onClick={() => {clickAsset(list)}}>
                <div className='flex items-center' >
                  <img src={list.img} className="w-[30px] h-[30px] mr-[5px]" alt="img"/>
                  <span className="text-[white] text-[12px]">{list.title}</span>
                </div>
                <span className="text-[#2d2d2d] text-right mr-[5px]">{list.balance}</span>
              </li>
            )
          })):(<div className="text-[white]"> NO result</div>)
        }
      </ul>
    </div>
    
  )
}

export default Borrow_Swap_Asset