import React from 'react'
import { useMediaQuery } from 'react-responsive'

const Example = () => {
//Extra small devices (phones 600px and down)
const isExtraSmall = useMediaQuery({query: '(max-width: 599px)'})
//Small Devices (portrait tablets and large phones - 600px and up)
const isJustSmall = useMediaQuery({query: '(min-width: 600px) and (max-width:767px)'})
//Medium Devices - 768px and up - landscape tablets
  const isMedium = useMediaQuery({query: '(min-width: 768px) and (max-width:991px)'})
//Large Devices 
  const isBigDesktop = useMediaQuery({ query: '(min-width: 992px) and (max-width:1280px)' })
  //Extra Large Devices
const isExtraLarge = useMediaQuery({query: '(min-width: 1281px)'})
  /* 
  
  

  const isPortraitSmartphone = useMediaQuery({query: '(min-width: 600px)'})
  const isLandscapeSmartphone = useMediaQuery({ query: '(max-width: 600px)' })
  
  const isPortraitTablet = useMediaQuery({ query: '(min-width: 600px)'})

*/
  return (
    <div>
      {isExtraSmall}
      {isJustSmall}

      {isMedium}
      {isBigDesktop}
      
      {isExtraLarge}
      
    </div>
  )
}

export default Example;