import Header from './header/header';
import { Footer } from './footer/footer';

export function AppLayout({children}) {
  return (
    <div style={{width:"100vw",height:"100vh"}}>
        <Header/>
        <main style={{padding:".2rem"}}>{children}</main>
        <Footer/>
    </div>

  )
}

export default AppLayout