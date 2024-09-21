import "./Footer.css"
import { easeInOut, motion } from "framer-motion"
export default function Footer({links,linkSrc}){
    return(
        <motion.div  className="footer" initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{duration:0.8, ease:easeInOut}}>
            {links.map((linkText,index)=>{
                return <a key={index} href={linkSrc[index]} target="_blank" rel="noopener noreferrer">{linkText} &nbsp;{index==links.length-1 ? "":"|"} &nbsp;</a>
            })}
        </motion.div>
    )
}