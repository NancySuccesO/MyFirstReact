import Link from "./Link";

import links from "../data/links"

function Links() {
  return (
    <div className="links">
        {links.map((link) =>(
          <Link details={link} /> 
        ))}
    </div>
  )
}

export default Links