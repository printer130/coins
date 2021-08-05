import React from 'react'
import { Svg, Path } from 'react-native-svg'

export function Home ({ focused }) {
  return (
    <Svg
      width={23}
      height={23}
      viewBox='0 0 52 52'
      fill='none'
    >
      <Path
        d='M49.657 22.748l-.004-.004L29.255 2.349A4.572 4.572 0 0026 1c-1.23 0-2.385.479-3.255 1.349L2.357 22.733a4.608 4.608 0 00-.012 6.52A4.578 4.578 0 005.4 30.598c.047.004.095.007.142.007h.813v15.009A5.394 5.394 0 0011.743 51h7.98c.81 0 1.465-.656 1.465-1.465V37.768a2.46 2.46 0 012.459-2.458h4.707a2.46 2.46 0 012.458 2.458v11.767c0 .809.656 1.465 1.465 1.465h7.98a5.394 5.394 0 005.388-5.387v-15.01h.754c1.23 0 2.385-.478 3.256-1.348a4.61 4.61 0 00.002-6.507v0zm-2.074 4.435c-.317.317-.737.49-1.184.49H44.18c-.809 0-1.465.657-1.465 1.466v16.474a2.46 2.46 0 01-2.458 2.457h-6.515V37.768a5.394 5.394 0 00-5.388-5.388h-4.707a5.394 5.394 0 00-5.389 5.388V48.07h-6.515a2.46 2.46 0 01-2.458-2.457V29.139c0-.81-.656-1.465-1.465-1.465H5.64a1.412 1.412 0 00-.07-.003 1.661 1.661 0 01-1.152-.488 1.676 1.676 0 010-2.367s0 0 0 0l.002-.002L24.817 4.42A1.66 1.66 0 0126 3.93c.447 0 .867.174 1.183.49l20.393 20.39.01.01a1.677 1.677 0 01-.003 2.363v0z'
        fill={focused ? '#00ffff' : '#eee'}
        stroke={focused ? '#00ffff' : '#eee'}
        strokeWidth={1}
      />
    </Svg>
  )
}
