import React from 'react'
import Interactable from './Interactable'

function StomachBlobs({selected,setSelected}) {
  return (
    <svg width='34.5%' height='34.5%' viewBox="0 0 134 169" fill="none" xmlns="http://www.w3.org/2000/svg"
              className='absolute bottom-[31%] left-[31.4%]'>
          
          <defs>
            <linearGradient id="linear" x1="0.5" y1="0" x2="0.5" y2="1">
              <stop offset="18%" stop-color="#075fd2"/>
              <stop offset="39%" stop-color="#0681d5"/>
              <stop offset="81%" stop-color="#01bff6"/>
            </linearGradient>
          </defs>

          <g>
            <Interactable id='top' selected={selected} setSelected={setSelected} bg='url(#linear)' stroke='url(#linear)'>
              <path d="M67.5 65.5C54.7 54.3 43.5 37.1667 39.5 30V28.5C51.1 10.1 62.6667 2.5 67 1H68.5C78.5 1.8 91 19.6667 96 28.5V31C92.4 38.6 76.1667 57.1667 68.5 65.5H67.5Z"
              fill='white'/>
            </Interactable>

            <Interactable id='top-right' selected={selected} setSelected={setSelected} bg='url(#linear)' stroke='url(#linear)'>
              <path d="M101.5 34.5C99.5 35.3 85.3333 55.1667 78.5 65V66L80 66.5C85.6 69.3 91.3333 78.6667 93.5 83V86L94 86.5C97.6 87.3 118.5 86.5 128.5 86L130.5 85.5L132 85L133 84.5C133.4 84.1 129.5 60 127.5 48L127 46L126.5 45C120.1 38.2 109.5 35.1667 105 34.5H101.5Z"
              fill='white'/>
            </Interactable>

            <Interactable id='bottom-right' selected={selected} setSelected={setSelected} bg='url(#linear)' stroke='url(#linear)'>
              <path d="M80.5 115C83.7 117 91.5 127.5 95 132.5C95.4 133.7 100.167 144.333 102.5 149.5L104 150.5H106C124.8 138.9 131.5 119 132.5 110.5V95.5C132.5 95.1 131.167 94.6667 130.5 94.5H110C109.2 94.5 99.3333 94.8333 94.5 95V95.5C91.3 106.3 83.8333 111.667 80.5 113V115Z"
              fill='white'/>
            </Interactable>
            
            <Interactable id='bottom' selected={selected} setSelected={setSelected} bg='url(#linear)' stroke='url(#linear)'>
              <path d="M41.5 153V151.5C46.3 138.3 52.1667 129.333 54.5 126.5C60.9 117.3 66.1667 115.667 68 116C73.2 115.2 80.5 122.667 83.5 126.5C86.3 130.1 93 144.667 96 151.5V153.5C95.2 155.1 89 159.5 86 161.5C79.6 165.5 73.3333 167.5 71 168H64.5C58.1 167.6 47.1667 159.167 42.5 155L41.5 153Z"
              fill='white'/>              
            </Interactable>
            
            <Interactable id='bottom-left' selected={selected} setSelected={setSelected} bg='url(#linear)' stroke='url(#linear)'>
              <path d="M55 114V113C46.2 109 42 99.3333 41 95C28.2 93.8 10.3333 94.5 3 95L2.5 95.5C1.3 100.7 1 113.333 1 119C1.8 122.6 10.3333 133.5 14.5 138.5C22.1 146.9 28.3333 150 30.5 150.5H35C36.6 150.9 39.3333 143.333 40.5 139.5C41.3 135.9 43.1667 131.667 44 130C46 126.8 52.1667 118 55 114Z"
              fill='white'/>             
            </Interactable>
            
            <Interactable id='top-left' selected={selected} setSelected={setSelected} bg='url(#linear)' stroke='url(#linear)'> 
              <path d="M59 66.5C47.4 70.9 43.1667 81.3333 42.5 86C34.5 86.8 16.8333 86.3333 9 86C5.4 86 3.5 85 3 84.5C2.6 74.5 4.83334 58 6 51L7 48.5C13.4 40.1 25.3333 35.6667 30.5 34.5H32C36.8 35.3 52 55.5 59 65.5V66.5Z"
              fill='white'/>
            </Interactable>
            
            <Interactable id='middle' selected={selected} setSelected={setSelected} bg='url(#linear)' stroke='url(#linear)'>
              <path d="M89 90.5C89 101.822 79.598 111 68 111C56.402 111 47 101.822 47 90.5C47 79.1782 56.402 70 68 70C79.598 70 89 79.1782 89 90.5Z"
              fill='white'/>
            </Interactable>
            
          </g>
    </svg>
  )
}

export default StomachBlobs