import TitleCard from "./TitleCard"
import Dashboard from "./Dashboard"
import "./Header.css"
import { easeInOut, motion } from "framer-motion"
export default function Header(){
    return(
        <motion.div className="header" initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{duration:0.8, ease:easeInOut}} >
            <TitleCard></TitleCard>
            <p className="tagline">Stay Ahead Of Storm</p>
            <Dashboard></Dashboard>
        </motion.div>
    )
}