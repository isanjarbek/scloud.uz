import React, { useState } from 'react'
import Devitem from './developer-item/main'
import './style.css'

import Pic1 from '../../photos/svg_photos/1.svg'
import Pic2 from '../../photos/svg_photos/2.svg'
import Pic3 from '../../photos/svg_photos/3.svg'
import Pic4 from '../../photos/svg_photos/4.svg'
import Pic5 from '../../photos/svg_photos/5.svg'
import Pic6 from '../../photos/svg_photos/6.svg'
import Pic7 from '../../photos/svg_photos/7.svg'
import Pic8 from '../../photos/svg_photos/8.svg'
import Pic9 from '../../photos/svg_photos/9.svg'
import Pic10 from '../../photos/svg_photos/10.svg'
import Pic11 from '../../photos/svg_photos/11.svg'
import Pic12 from '../../photos/svg_photos/12.svg'
import Pic13 from '../../photos/svg_photos/13.svg'
import Pic14 from '../../photos/svg_photos/14.svg'
import Pic15 from '../../photos/svg_photos/15.svg'
import Pic16 from '../../photos/svg_photos/16.svg'
import Pic17 from '../../photos/svg_photos/17.svg'
import Pic18 from '../../photos/svg_photos/18.svg'
import Pic19 from '../../photos/svg_photos/19.svg'
import Pic20 from '../../photos/svg_photos/20.svg'
import Pic21 from '../../photos/svg_photos/21.svg'
import Pic22 from '../../photos/svg_photos/22.svg'
import Pic23 from '../../photos/svg_photos/23.svg'
import Pic24 from '../../photos/svg_photos/24.svg'
import Pic25 from '../../photos/svg_photos/25.svg'
import Pic26 from '../../photos/svg_photos/26.svg'
import Pic27 from '../../photos/svg_photos/27.svg'
import Pic28 from '../../photos/svg_photos/28.svg'
import Pic29 from '../../photos/svg_photos/29.svg'
import Pic30 from '../../photos/svg_photos/30.svg'
import Pic31 from '../../photos/svg_photos/31.svg'
import Pic32 from '../../photos/svg_photos/32.png'
import Pic33 from '../../photos/svg_photos/33.svg'
import Pic34 from '../../photos/svg_photos/34.svg'
import Pic35 from '../../photos/svg_photos/35.svg'
import Pic36 from '../../photos/svg_photos/36.svg'
import Pic37 from '../../photos/svg_photos/37.svg'
import Pic38 from '../../photos/svg_photos/38.svg'
import Pic39 from '../../photos/svg_photos/39.svg'
import Pic40 from '../../photos/svg_photos/40.svg'
import Pic41 from '../../photos/svg_photos/41.svg'
import Pic42 from '../../photos/svg_photos/42.svg'
import Pic43 from '../../photos/svg_photos/43.svg'
import Pic44 from '../../photos/svg_photos/44.svg'
import Pic45 from '../../photos/svg_photos/45.svg'
import Pic46 from '../../photos/svg_photos/46.svg'
import Pic47 from '../../photos/svg_photos/47.svg'
import Pic48 from '../../photos/svg_photos/48.svg'

function ITjobs() {
    return (
        <div className="it-jobs">
            <div className="container">
                <div className="jobs-elements">
                    <h2>Fronted</h2>
                    <div className="fronted-jobs item">
                        <Devitem class="fronted dev-item" image={Pic21} name="JavaScript" />
                        <Devitem class="fronted dev-item" image={Pic20} name="React.JS" />
                        <Devitem class="fronted dev-item" image={Pic19} name="Next.JS" />
                        <Devitem class="fronted dev-item" image={Pic31} name="Ant Design" />
                        <Devitem class="fronted dev-item" image={Pic32} name="Gatsby.JS" />
                        <Devitem class="fronted dev-item" image={Pic33} name="Vue.JS" />
                        <Devitem class="fronted dev-item" image={Pic43} name="Sass" />
                        <Devitem class="fronted dev-item" image={Pic44} name="Material UI" />
                    </div>

                    <h2>Backend</h2>
                    <div className="backend-jobs item">
                        <Devitem class="backend dev-item" image={Pic28} name="Node.JS" />
                        <Devitem class="backend dev-item" image={Pic27} name="Python" />
                        <Devitem class="backend dev-item" image={Pic29} name="PHP" />
                        <Devitem class="backend dev-item" image={Pic41} name="MongoDB" />
                        <Devitem class="backend dev-item" image={Pic26} name="PostgreSQL" />
                        <Devitem class="backend dev-item" image={Pic30} name="GO" />
                        <Devitem class="backend dev-item" image={Pic42} name="Cassandra" />
                    </div>

                    <h2>Devops</h2>
                    <div className="devops-jobs item">
                        <Devitem class="devops dev-item" image={Pic1} name="Promotheus" />
                        <Devitem class="devops dev-item" image={Pic2} name="Loki" />
                        <Devitem class="devops dev-item" image={Pic3} name="Bitbucket" />
                        <Devitem class="devops dev-item" image={Pic4} name="Gitlab" />
                        <Devitem class="devops dev-item" image={Pic13} name="ELK" />
                        <Devitem class="devops dev-item" image={Pic14} name="Grafana" />
                        <Devitem class="devops dev-item" image={Pic15} name="Terraform" />
                        <Devitem class="devops dev-item" image={Pic25} name="Docker" />
                    </div>

                    <h2>Testing</h2>
                    <div className="testing-jobs item">
                        <Devitem class="testing dev-item" image={Pic37} name="You Track" />
                        <Devitem class="testing dev-item" image={Pic38} name="Appium" />
                        <Devitem class="testing dev-item" image={Pic39} name="Cypress" />
                        <Devitem class="testing dev-item" image={Pic40} name="Jmeter" />
                    </div>

                    <h2>UX/UI</h2>
                    <div className="desigener-jobs item">
                        <Devitem class="designer dev-item" image={Pic22} name="Balsamic" />
                        <Devitem class="designer dev-item" image={Pic23} name="Invision" />
                        <Devitem class="designer dev-item" image={Pic24} name="Figma" />
                        <Devitem class="designer dev-item" image={Pic45} name="Zeplin" />
                        <Devitem class="designer dev-item" image={Pic34} name="Principle" />
                        <Devitem class="designer dev-item" image={Pic35} name="Sketch" />
                        <Devitem class="designer dev-item" image={Pic36} name="Adobe Suite" />
                        <Devitem class="designer dev-item" image={Pic46} name="Illustrator" />
                        <Devitem class="designer dev-item" image={Pic47} name="Lottie" />
                        <Devitem class="designer dev-item" image={Pic48} name="Photoshop" />
                    </div>
                    
                    <h2>Infrastructure</h2>
                    <div className="Infrastructure-jobs item">
                        <Devitem class="Infrastructure dev-item " image={Pic8} name="Azure" />
                        <Devitem class="Infrastructure dev-item " image={Pic9} name="GCP" />
                        <Devitem class="Infrastructure dev-item " image={Pic10} name="DigitalOcean" />
                        <Devitem class="Infrastructure dev-item " image={Pic11} name="AWS" />
                        <Devitem class="Infrastructure dev-item " image={Pic12} name="Kubernetes" />
                    </div>

                    <h2>Mobile</h2>
                    <div className="mobile-jobs item">
                        <Devitem class="mobile dev-item" image={Pic5} name="Kotlin" />
                        <Devitem class="mobile dev-item" image={Pic6} name="Android" />
                        <Devitem class="mobile dev-item" image={Pic7} name="Java" />
                        <Devitem class="mobile dev-item" image={Pic16} name="IOS" />
                        <Devitem class="mobile dev-item" image={Pic17} name="Swift" />
                        <Devitem class="mobile dev-item" image={Pic18} name="Flutter" />
                    </div>




                </div>
            </div>

        </div >
    )
}
export default ITjobs
