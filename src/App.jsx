import { useState } from "react";

import './App.css'
import './index.css'
import Navbar from './components/Navbar'
import Appleone from './components/appleevent'
import Colleciphone from './components/iphonecoll'
import Macapple from './components/applecollection'
import About from './components/about'
import Ultrawatch from './components/watchultra'
import Applepro from './components/applepro'
import Postcard from './components/postcard'

import Airimages from './assets/airimages.png'
import Airimages1 from './assets/airimages1.png'
import Airimages2 from './assets/airimages2.png'



import iphone16 from './assets/iphone16.png'
import logapple from './assets/applelogo.png'
import maclap from './assets/maclap.jpg'
import ipad from './assets/ipadair.png'
import airpot from './assets/airpoispro.png'
import applewatch from './assets/applewatch.png'
import macbookair from './assets//macbook.png'


function App() {

  return (
    <>
      <Navbar />
      <Appleone />
      <Colleciphone />
      <Applepro
        images={Airimages}
        headt="iPhone 17"
        headtcs="bg-gradient-to-r py-2 from-slate-500 to-slate-400 bg-clip-text text-transparent"
        parat1="The thinnest iPhone ever with the power of pro inside. More durable than any previous iPhone. Our best display ever with Ceramic Shield 2 on the front. The powerful A19 Pro chip. An advanced 48MP Fusion camera system. And the new Center Stage front camera."
        parat2="Pre-order starting at 5:30 PM IST on 12 Sep
                Available from 19 Sep"
        buttont1="Learn more"
        buttont2="View pricing"
      />

      <Applepro
        images={Airimages1}
        headt="iPhone Air"
        headtcs="bg-gradient-to-r py-2 from-slate-500 via-blue-400 to-green-400 bg-clip-text text-transparent"
        parat1="Even more delightful. Even more durable. Our best display ever with ProMotion up to 120Hz and the new Ceramic Shield 2 on the front. An advanced 48MP Dual Fusion camera system. And the new Center Stage front camera."
        parat2="Pre-order starting at 5:30 PM IST on 12 Sep
                Available from 19 Sep"
        buttont1="Learn more"
        buttont2="View pricing"
      />

      <Applepro
        images={Airimages2}
        headt="AirPods Pro 3"
        headtcs="black"
        parat1="Featuring the world’s best in-ear Active Noise Cancellation.1 Exceptional sound quality. All-new heart rate sensing during workouts.2 Live Translation to communicate across languages.3 And improved battery life with up to 8 hours of listening time.4"
        parat2="Available from 19 Sep"
        buttont1="Learn more"
        buttont2="View pricing"
      />


      <div className=" md:grid md:grid-cols-2 md:p-4 md:gap-3">
      <Postcard
        head1="iPhone 17"
        para1="Magichromatic"
        para2="Available from 19 Sep"
        but1="Learn more"
        but2="Buy"
        imgs={iphone16}
        imgsty="w-60"
        bgc="bg-gradient-to-tr from-white to-blue-50"
        textc="bg-gradient-to-r from-blue-500 to-blue-300 bg-clip-text text-transparent"
        sty="hidden"
      />
      <Postcard
        head1="Mac"
        para1="Unbelivably thin.Incredibly powerful."
        but1="Learn more"
        but2="Buy"
        parac="text-white"
        imgs={maclap}
        imgsty="w-96"
        bgc=" bg-black "
        textc="text-white"
        sty="hidden"
      />

      <Postcard
        head1="iPadair"
        para1="Now supercharged by the M3 chip."
        but1="Learn more"
        but2="Buy"
        parac="text-black"
        imgs={ipad}
        sty="hidden"
        bgc=" bg-gradient-to-bl from-blue-200 via-white to-white"
        textc="bg-gradient-to-r from-black via-black to-blue-500 bg-clip-text text-transparent"
      />

      <Postcard
        headlogo={logapple}
        head1="WATCH"
        headpara="SERIES 10"
        para1="Thinstant classic."
        but1="Learn more"
        but2="Buy"
        parac="text-black"
        imgs={applewatch}
        bgc=" bg-gradient-to-b from-blue-50 to-white "
      />
      
       <Postcard
        head1="MacBook Air"
        para1="Thinstant classic."
        para2="Sky high performance with M4."
        but1="Learn more"
        but2="Buy"
        parac="text-black"
          sty="hidden"
        imgs={macbookair}
        bgc=" bg-gradient-to-b from-gray-300 via-white to-white "
      />


      <Postcard
        headlogo={logapple}
        head1="Trade In"
        para1="The world's best in-ear Active Noise Cancellation."
        para2="Available from 19 Sep."
        but1="Get your estimate"
        parac="text-black"
          imgs={airpot}
        bgc=" bg-gradient-to-b from-slate-300 via-white to-white "
      />
      </div>


      <Ultrawatch />
      <About />
      
    </>
  )
}

export default App
