import Feed from '@/components/Feed'
import Sidebar from '@/components/Sidebar'
import Widgets from '@/components/Widgets'
export default function Home() {
  return (
    <main className='px-2 py-2 grid grid-cols-9 mx-auto min-h-screen max-w-5xl overflow-hidden '>
      <Sidebar/>
      <Feed/>
      <Widgets/>
    
    </main>
  )
}
