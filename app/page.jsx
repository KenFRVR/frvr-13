// import { styles } from './styles/Home.module.css'
import data from './data.json'
import YearContainer from './components/YearContainer'

export default function Home () {
  return (
    <main className="min-h-full max-w-2xl relative m-auto bg-[#232323] flex flex-col gap-1">
      <YearContainer data={data}/>
    </main>
  )
}
