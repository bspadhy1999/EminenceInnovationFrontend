import React from 'react'
import { Link } from 'react-router-dom'

export default function ServiceLeftTab() {
  return (
    <>
        <div className='border border-1 p-4 shadow'>
            <div className="text-center d-grid gap-3">
                <h2><b>Services</b></h2>
                <Link className="p-3 rounded servicelefttab border border-1" to="/services/mobile-app-development">Mobile App Development</Link>
                <Link className="p-3 rounded servicelefttab border border-1" to="/services/ios-app-development">iOS App Development</Link>
                <Link className="p-3 rounded servicelefttab border border-1" to="/services/android-app-development">Anroid App Development</Link>
                <Link className="p-3 rounded servicelefttab border border-1" to="/services/web-design">Web Design</Link>
                <Link className="p-3 rounded servicelefttab border border-1" to="/services/content-writing">Content Writting</Link>
                <Link className="p-3 rounded servicelefttab border border-1" to="/services/php-web-development">PHP Web Development</Link>
                <Link className="p-3 rounded servicelefttab border border-1" to="/services/devops-service">DevOps Service</Link>
                <Link className="p-3 rounded servicelefttab border border-1" to="/services/saas-development">SaaS Development</Link>
                <Link className="p-3 rounded servicelefttab border border-1" to="/services/ui-ux-design">UI/UX Design</Link>
                <Link className="p-3 rounded servicelefttab border border-1" to="/services/cloud-solutions">Cloud Solutions</Link>
            </div>
        </div>
    </>
  )
}
