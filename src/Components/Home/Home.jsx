import Header from "./Header"
import Body from "./body"
import Footer from "./Footer"
export default function Home(){
    return(
        <>
            <Header></Header>
            <Body></Body>
            <Footer links={["mail","LinkedIn","GitHub"]} linkSrc={["","www.linkedin.com/in/kshitij-mamgain-24b4232b9","https://github.com/KS-hitij"]}></Footer>
        </>
    )
}