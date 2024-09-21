import Header from "./Header"
import Body from "./body"
import Footer from "./Footer"
export default function Home(){
    return(
        <div style={{background:"url(/assets/SEABG.jpg)",backgroundSize: "cover",backgroundPosition: "center",backgroundRepeat: "no-repeat"}}>
            <Header></Header>
            <Body></Body>
            <Footer links={["Mail","LinkedIn","GitHub"]} linkSrc={["","www.linkedin.com/in/kshitij-mamgain-24b4232b9","https://github.com/KS-hitij"]}></Footer>
        </div >
    )
}