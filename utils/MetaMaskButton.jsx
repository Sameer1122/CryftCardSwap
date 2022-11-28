import React from "react";
import { useState } from "react";

function MetaMaskButton({ height, width }) {
  const [enter, setEnter] = useState(false);
  return (
    <svg
      onMouseEnter={() => setEnter(true)}
      onMouseLeave={() => setEnter(false)}
      height={height ? height : 100}
      width={width ? width : 250}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 186 37.8"
    >
      <g className="uuid-8465f99b-35db-497a-be53-9bf57b5a365b">
        <g>
          <g>
            <g className="uuid-7ca2a28e-a8f1-4867-ba6b-7c47aa3217e0">
              <path
                d="M160.37 0.08L25.61 0.08 4.79 18.9 25.61 37.72 160.37 37.72 181.19 18.9 160.37 0.08z"
                className="uuid-0f47672c-5256-4fbd-b497-e6424604cc4c"
              ></path>
            </g>
            <path
              d="M0 18.73L11.67 29.56 14.46 29.56 2.79 18.73 15.64 7.57 12.84 7.57 0 18.73z"
              className="uuid-0092dcc9-5539-40fe-880e-7f8513779553"
            ></path>
            <path
              d="M0 18.73L11.67 29.56 14.46 29.56 2.79 18.73 15.64 7.57 12.84 7.57 0 18.73z"
              className="uuid-0092dcc9-5539-40fe-880e-7f8513779553"
            ></path>
            <path
              d="M186 18.73L174.32 29.56 171.53 29.56 183.21 18.73 170.36 7.57 173.15 7.57 186 18.73z"
              className="uuid-0092dcc9-5539-40fe-880e-7f8513779553"
            ></path>
            <path
              d="M186 18.73L174.32 29.56 171.53 29.56 183.21 18.73 170.36 7.57 173.15 7.57 186 18.73z"
              className="uuid-0092dcc9-5539-40fe-880e-7f8513779553"
            ></path>
            <g className="uuid-16e5b681-07ac-4329-8d4a-416c40ae5d47">
              <path
                d="M160.67 37.8L160.07 37.63 180.79 18.9 160.07 0.17 160.67 0 181.58 18.9 181.49 19.02 160.67 37.8z"
                className="uuid-3b290122-ed06-4629-bb2e-0c7fc6a68779"
              ></path>
            </g>
            <g className="uuid-16e5b681-07ac-4329-8d4a-416c40ae5d47">
              <path
                d="M25.31 37.8L4.4 18.9 4.49 18.78 25.31 0 25.91 0.17 5.19 18.9 25.91 37.63 25.31 37.8z"
                className="uuid-3b290122-ed06-4629-bb2e-0c7fc6a68779"
              ></path>
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
}

export default MetaMaskButton;
