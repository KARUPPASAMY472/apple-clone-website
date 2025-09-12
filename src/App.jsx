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


import Airimages from './assets/airimages.png'
import Airimages1 from './assets/airimages1.png'
import Airimages2 from './assets/airimages2.png'


import iphone161 from './assets/iphone16.png'

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

      <Macapple />
      <Ultrawatch />
      <About />
      
      
    </>
  )
}

export default App
