import { MagnifyingGlassPlus } from 'phosphor-react'

import logoImg from "./assets/logo-nlw-esports.svg"

import {GameBanner} from './components/GameBanner'

import './styles/main.css'

function App() {
  return (
    <div className="max-w-[1344px] mx-auto flex flex-col items-center my-20">
      <img src={logoImg} alt="" />

      <h1 className="text-6xl text-white font-black mt-20">
        Seu <span className="text-transparent bg-nlw-gradient bg-clip-text">duo</span> esta aqui.
      </h1>

      <div className="grid grid-cols-6 gap-6 mt-16">
        <GameBanner />
        <GameBanner />
        <GameBanner />
        <GameBanner />
        <GameBanner />
      </div>
      <div className="pt-1 mt-8 bg-nlw-gradient self-stretch rounded-lg overflow-hidden">
        <div className="bg-[#2A2634] px-8 py-6 flex justify-between items-center">
          <div>
          <strong className="text-2xl text-white font-black">Nao encontrou seu duo</strong>
          <span className="text-zinc-400 block">Publique um anuncio para encontrar novos players</span>
          </div>

          <button className="py-3 px-4 bg-violet-500 hover:bg-violet-600 text-white rounded flex items-center gap-3">
            <MagnifyingGlassPlus size={24} />
            Publicar anuncio
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
