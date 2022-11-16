import React from 'react'

const PriceBar = () => {
  return (
    <div class="mt-2 bg-gray-800 p-4 rounded-sm">
      <div class="flex flex-row justify-start gap-3">
        <p class="mr-3 flex items-center px-4 text-2xl font-bold text-white">
          ETH/USD
        </p>
        <div class="flex justify-start mx-3 flex-col text-white">
          <p class="flex items-center">$1202.26</p>
          <p class="flex items-center text-xs text-gray-400">$1202.26</p>
        </div>

        <div class="flex justify-start mx-3 flex-col text-white">
          <p class="flex items-center text-xs text-gray-400">24h Change</p>
          <p class="flex items-center text-red-500">-4.58%</p>
        </div>

        <div class="flex justify-start mx-3 flex-col text-white">
          <p class="flex items-center text-xs text-gray-400">24h High</p>
          <p class="flex items-center">1,288.26</p>
        </div>

        <div class="justify-start mx-3 flex flex-col text-white">
          <p class="flex items-center text-xs text-gray-400">24h Low</p>
          <p class="flex items-center">1,186.26</p>
        </div>
      </div>
    </div>
  );
}

export default PriceBar