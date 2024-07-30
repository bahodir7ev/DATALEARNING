import react from 'react'
import Banner from './Banner'
import Advantages from './Advantages'
import Courses from './Courses'
import Portfolios from './Portfolios'
import Contact from './Contact'
import English from './English'
import Footer from './Footer'


function Main() {
    return (
        <main className="Main">
            <Banner />
            <Advantages />
            <Courses />
            <Portfolios />
            <Contact />
            <English />
            <Footer />
        </main>
    )
}

export default Main