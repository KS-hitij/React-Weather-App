import "./Footer.css"
export default function Footer({links,linkSrc}){
    return(
        <div className="footer">
            {links.map((linkText,index)=>{
                return <a key={index} href={linkSrc[index]} target="_blank" rel="noopener noreferrer">{linkText} &nbsp;{index==links.length-1 ? "":"|"} &nbsp;</a>
            })}
        </div>
    )
}