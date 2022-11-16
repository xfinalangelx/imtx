import React from 'react'

const TradeNav = () => {
  return (
    <div class="text-sm font-medium text-center text-white bg-black">
      <ul class="flex flex-wrap -mb-px">
        <li class="mr-2">
          <a
            href="#"
            class="inline-block p-4 rounded-t-lg border-b-2 border-transparent hover:text-[#CDFF00]"
          >
            POSITIONS
          </a>
        </li>
        <li class="mr-2">
          <a
            href="#"
            class="inline-block p-4 text-[#CDFF00] rounded-t-lg border-b-2 border-[#CDFF00] active dark:border-[#CDFF00]"
            aria-current="page"
          >
            ORDERS(0)
          </a>
        </li>
        <li class="mr-2">
          <a
            href="#"
            class="inline-block p-4 rounded-t-lg border-b-2 border-transparent hover:text-[#CDFF00] "
          >
            TRADE HISTORY
          </a>
        </li>
        <li class="mr-2">
          <a
            href="#"
            class="inline-block p-4 rounded-t-lg border-b-2 border-transparent hover:text-[#CDFF00] "
          >
            ACTIVITY HISTORY
          </a>
        </li>
      </ul>
    </div>
  );
}

export default TradeNav