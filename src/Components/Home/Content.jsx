import { easeInOut,motion } from "framer-motion"
import "./Content.css"
export default function Content({content}){
    return(
        <motion.div initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{duration:0.8, ease:easeInOut}} className="content" >
            {content}
        </motion.div>
    )
}