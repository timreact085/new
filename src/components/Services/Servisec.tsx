import React from 'react'
import svgLogo from '../../assets/imgs/Accenture-Clipboard.png'
import flowers from '../../assets/imgs/Accenture-Flower-760x551.png'
import {FaFacebook} from 'react-icons/fa'

import './services.scss'
import clipboard from '../../assets/imgs/Accenture-Clipboard.png'
import cloud from '../../assets/imgs/Accenture-Cloud.png'
import network from '../../assets/imgs/Accenture-Network-Effect.png'
import scale from '../../assets/imgs/Accenture-Scale-New.png'
import security from '../../assets/imgs/Accenture-Defence-Security.png'
import coding from '../../assets/imgs/Accenture-Coding-Development-2.png'
import conversation from '../../assets/imgs/Accenture-Conversation.png'
import announce from '../../assets/imgs/Accenture-Announce.png'
import automation from '../../assets/imgs/Accenture-Automation.png'
import rotate from '../../assets/imgs/Accenture-Rotate.png'
import advance from "../../assets/imgs/Accenture-TV-400x400.jpg"
import road from "../../assets/imgs/Accenture-FS-2021-400x400.jpg"

import card1 from "../../assets/imgs/card1.jpg"
import card2 from "../../assets/imgs/card2.jpg"
import road3 from "../../assets/imgs/road3.jpg"

import { FaArrowRight } from 'react-icons/fa';
const Servisec:React.FC = () => {
  return (
    <div style={{marginTop:'100px'}}>
       <main>
        <section >
          <section >
          <div className='services__first' >
                 <div>
                  
                 <div> <a href="">Technology</a></div>
                  <div><h1 className='services__title'>Future-ready applications</h1></div>
                  <div><h5 className='services__subTitle'>Accelerate innovation and growth with technology at the core to power 360° value at scale.</h5></div>
                 </div>

                  <div><img className='flowers' src={flowers} alt="flowers" /></div>
            </div>
          </section>

          <section>
            <div className='services__second'>
                  <div className='services__secondContainer'><h1 className='services__secindTitle'>Innovation-led application services</h1></div>
                  <div className='services__secondContainerCenter'>
                    <div className='services__secondContainerCenterTitleLeft'>
                      <div><p>For most companies, complex application landscapes—with a mix of legacy systems, digital and SaaS—consume too large a share of IT resources and restrict their ability to drive growth.</p></div>
                      <div style={{marginTop: '40px'}}><p>Our application services help you reimagine your application landscape, with speed and agility, while continuously innovating to realize business value.</p></div>
                    </div>
                    <div className='services__secondContainerBox'>
                      <span className='services__secondContainerLine'></span>
                      <div className='service__containerBoxContent'>
                      <h1 className='services__secondContainerBoxTitle'>"Innovation should be at the heart of your applications"</h1>
                     
                      <p className='services__secondContainerBoxSubTitle'>— <span style={{fontWeight: 'bold'}}>RAMNATH VENKATARAMAN</span>, Integrated Global Services Lead</p>
                      </div>
                    </div>
                  </div>

                  <div className='services__secondLinkContainer'>
                    <div className='services__secondLinkTitle'>
                    <h1>Share</h1>
                    </div>
                    
                   <div className='services__secondLinkWrapper'>
                  
                   <div className='services__secondLink'><p>H</p></div>
                    <div className='services__secondLink'>2</div>
                    <div className='services__secondLink'>3</div>
                    <div className='services__secondLink'>4</div>
                   </div>
                    
                  </div>
            </div>
          </section>

              <section>
                <div className='services__third'>
                  <div className='services__thirdTitle'>
                    <p className='services__thirdTitleOne'>End-to-end application services</p>
                    <p className='services__thirdTitleTwo'>From the development of new applications, through modernization, management and maintenance, we cover all stages of the application lifecycle.</p>
                  </div>

                  <div className='services__thirdCardContainer'>
                    <div className='services__thirdCardLeft'>
                    <img className='services__thirdCardLefttImg' src={rotate} alt="" />
                      <div className='services__thirdCardLeftContent'>
                        <h1 className='services__thirdCardLeftTitle'>Agile transformation</h1>
                        <p className='services__thirdCardLeftSubTitle'>Drive disruption by applying Lean principles to achieve substantial performance improvements, accelerating business change.</p>
                        <h1 className='services__thirdCardBtn'>LEARN MORE</h1>
                      </div>
                    </div>
                    <div className='services__thirdCardRight'>
                      <img className='services__thirdCardRightImg' src={clipboard} alt="" />
                    <div className='services__thirdCardRightContent'>
                        <h1 className='services__thirdCardRightTitle'>Application management</h1>
                        <p className='services__thirdCardRightSubTitle'>Future-proof your application portfolio with innovation that pays for itself.</p>
                        <h1 className='services__thirdCardBtn'>LEARN MORE</h1>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <section>
                <div className='services__third'>
               

                  <div className='services__thirdCardContainer'>
                    <div className='services__thirdCardLeft'>
                    <img className='services__thirdCardLefttImg' src={cloud} alt="" />
                      <div className='services__thirdCardLeftContent'>
                        <h1 className='services__thirdCardLeftTitle'>Application modernization</h1>
                        <p className='services__thirdCardLeftSubTitle'>Transform your legacy applications to become more agile and efficient through the power of New IT.</p>
                        <h1 className='services__thirdCardBtn'>LEARN MORE</h1>
                      </div>
                    </div>
                    <div className='services__thirdCardRight'>
                      <img className='services__thirdCardRightImg' src={network} alt="" />
                    <div className='services__thirdCardRightContent'>
                        <h1 className='services__thirdCardRightTitle'>Architecture</h1>
                        <p className='services__thirdCardRightSubTitle'>Plan and deliver a foundational technology architecture to maximize scalability and performance.</p>
                        <h1 className='services__thirdCardBtn'>LEARN MORE</h1>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <section>
                <div className='services__third'>
               

                  <div className='services__thirdCardContainer'>
                    <div className='services__thirdCardLeft'>
                    <img className='services__thirdCardLefttImg' src={automation} alt="" />
                      <div className='services__thirdCardLeftContent'>
                        <h1 className='services__thirdCardLeftTitle'>Automation</h1>
                        <p className='services__thirdCardLeftSubTitle'>Intelligent automation, like RPA (robotic process automation), natural language processing and virtual agents, can help you improve efficiency and productivity in many ways.</p>
                        <h1 className='services__thirdCardBtn'>LEARN MORE</h1>
                      </div>
                    </div>
                    <div className='services__thirdCardRight'>
                      <img className='services__thirdCardRightImg' src={scale} alt="" />
                    <div className='services__thirdCardRightContent'>
                        <h1 className='services__thirdCardRightTitle'>DevOps</h1>
                        <p className='services__thirdCardRightSubTitle'>Streamline IT by bringing business, development and operations teams together and applying automated processes.</p>
                        <h1 className='services__thirdCardBtn'>LEARN MORE</h1>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <section>
                <div className='services__third'>
               

                  <div className='services__thirdCardContainer'>
                    <div className='services__thirdCardLeft'>
                    <img className='services__thirdCardLefttImg' style={{width: '155px', paddingTop: '15px'}} src={security} alt="" />
                      <div className='services__thirdCardLeftContent'>
                        <h1 className='services__thirdCardLeftTitle'>Quality engineering</h1>
                        <p className='services__thirdCardLeftSubTitle'>Achieve better experiences, faster responses, greater insights and lower risks with Accenture Quality Engineering Services.</p>
                        <h1 className='services__thirdCardBtn'>LEARN MORE</h1>
                      </div>
                    </div>
                    <div className='services__thirdCardRight'>
                      <img className='services__thirdCardRightImg' src={coding} alt="" />
                    <div className='services__thirdCardRightContent'>
                        <h1 className='services__thirdCardRightTitle'>Software engineering</h1>
                        <p className='services__thirdCardRightSubTitle'>Turn innovative ideas into business differentiation with custom capabilities.</p>
                        <h1 className='services__thirdCardBtn'>LEARN MORE</h1>
                      </div>
                    </div>
                  </div>
                </div>
              </section>


              <section>
               
                <div className='services__fourth'>
                    <p className='services__fourthTitle'>Intelligent platforms</p>
                   <div className='services__fourthSubtitle'> <p>We combine the power of leading platforms—SAP, Oracle, Salesforce, Workday and more—with our intelligence, innovation and industry capabilities to drive large-scale, platform-enabled transformation.</p></div>
                  

                  
                    <div className="services__fourthBox">
                    <div className='services__fourthCard'>
                      <h1>SAP</h1>
                      <p>Unlock the value of your SAP application portfolio with the power of intelligence. Learn more.</p>
                      <div className='services__fourthDiv'></div>
                    </div>
                    <div className='services__fourthCard'>
                    <h1>ORACLE</h1>
                      <p>We partner with Oracle to help you innovate at scale through the entire Oracle solutions lifecycle. Learn more.</p>
                      <div className='services__fourthDiv'></div>
                    </div>
                    </div>
                      

                    <div className="services__fourthBox">
                    <div  className='services__fourthCard'>
                    <h1>Salesforce</h1>
                      <p>We help you achieve maximum business value out of your Salesforce portfolio, with deep industry knowledge and technical expertise. Learn more.</p>
                      <div className='services__fourthDiv3'></div>
                    </div>
                    <div className='services__fourthCard'>
                      <h1>Workday</h1>
                      <p>We help organizations deploy customized Workday solutions that transform finance and Human Capital Management into an information powerhouse. Learn more.</p>
                      <div className='services__fourthDiv2'></div>
                    </div>
                    </div>


                    </div>
              </section>

              <section>
                <div className='services__fifth'>
                <div className='services__fifthContainer'>
                  <div className='services__fifthContent1'>
                    <h1>What we think</h1>
                    <div><a href="">VIEW MORE ARTICLES <FaArrowRight style={{marginLeft: '5px'}}/> </a> </div>
                  </div>
                <div style={{display: 'flex', width: '100%', marginTop: '40px'}}>
                <div style={{width: '70%'}}>
                  <div style={{display: 'flex'}}>
                    <img src={advance} style={{width: '140px', height: '150px'}} alt="" />
                    <div style={{marginTop: '20px'}}>
                    <div className='services__fifthRight' style={{width: '103px', paddingBottom: '5px', marginLeft: '20px'}}>
                  <small style={{fontSize: '10px'}}>Technology Innovation</small>
                  </div>
                      <br/>
                      <div style={{marginLeft: '20px'}}>
                      <h3>Tech Vision 2022: Meet me in the Metaverse</h3>
                      </div>
                      <br/>
                      <small style={{marginLeft: '20px'}}>The continuum of technology and experience reshaping business.</small>
                    </div>
                  </div>

                  <div style={{display: 'flex', marginTop:'40px'}}>
                    <img src={road} style={{width: '140px', height: '150px'}} alt="" />
                    <div style={{marginTop: '20px'}}>
                    <div className='services__fifthRight' style={{width: '103px', paddingBottom: '5px', marginLeft: '20px'}}>
                  <small style={{fontSize: '10px'}}>Technology Innovation</small>
                  </div>
                      <br/>
                      <div style={{marginLeft: '20px'}}>
                      <h3>Make the leap, take the lead</h3>
                      </div>
                      <br/> 
                      <small style={{marginLeft: '20px'}}>Tech strategies for innovation and growth.</small>
                    </div>
                  </div>
                 
                </div>

                <div style={{width: '40%', height: '100%' }}>
                  <div className='services__fifthRight'>
                  <small>COVID-19: What to do Now, What to do Next</small>
                  </div>

                  <div className='services__fifthRight2'>
                  <h4>COVID-19: Systems resilience in times of unprecedented disruption</h4>
                  </div>

                  <div className='services__fifthRight2'>
                  <div className='services__fifthRight' style={{width: '120px', paddingBottom: '5px'}}>
                  <small>Artificial Intelligence</small>
                  </div>
                  <br/>
                  <h4>Human + Machine: Reimagining work in the age of AI</h4>
                  </div>
                 

                  <div className='services__fifthRight2'>
                  <div className='services__fifthRight' style={{width: '120px', paddingBottom: '5px'}}>
                  <small>Artificial Intelligence</small>
                  </div>
                  <br/>
                  <h4>Human + Machine: Reimagining work in the age of AI</h4>
                  </div>
                </div>


                </div>
                  <div></div>
                </div>
                </div>
              </section>

              <section>
                <div className='services__sixth'>
                <div className='services__sixthContent' >
                    <h1 style={{fontSize:'30px'}}>Case studies</h1>
                    <div><a href="" style={{fontSize: '15px'}}>VIEW MORE CARE STUDIES <FaArrowRight style={{marginLeft: '5px', marginTop: '10px'}}/> </a> </div>
                  </div>
                  <div className='services__sixthCards'>
                    <div className='services__sixCard'>
                      <img src={card1} width='100%' height='160px' alt="" />
                      <div style={{marginTop: '20px'}}>
                        <div className='services__sixContent'><small>Communications and Media</small></div>
                        <div style={{marginTop:'20px'}}><h1>An MVP caliber fan experience</h1></div>
                        <div style={{marginTop:'42px'}}><small>As the Golden State Warriors settle into the new Chase Center, Accenture is taking point in reimagining the fan...</small></div>
                        <div style={{marginTop:'50px'}}><h1>READ MORE <FaArrowRight style={{marginLeft: '5px', paddingTop: '4px'}}/> </h1></div>
                      </div>
                    </div>
                    <div className='services__sixCard'>
                      <img src={card2} width='100%' height='160px' alt="" />
                      <div style={{marginTop: '20px'}}>
                        <div className='services__sixContent' style={{width: '38px'}}><small>Travel</small></div>
                        <div style={{marginTop:'20px'}}><h1>Reimagining guest experiences on the high seas</h1></div>
                        <div style={{marginTop:'20px'}}><small>Carnival Corporation connects high-touch technology and the human touch to create hyper-relevant...</small></div>
                        <div style={{marginTop:'50px'}}><h1>READ MORE <FaArrowRight style={{marginLeft: '5px', paddingTop: '4px'}}/> </h1></div>
                      </div>
                    </div>

                    <div className='services__sixCard'>
                      <img src={road3} width='100%' height='160px' alt="" />
                      <div style={{marginTop: '20px'}}>
                        <div className='services__sixContent' ><small>Communications and Media</small></div>
                        <div style={{marginTop:'20px'}}><h1>On track to success</h1></div>
                        <div style={{marginTop:'42px'}}><small>SAP S/4HANA implementation helps ProRail bring its financial and procurement processes into line.</small></div>
                        <div style={{marginTop:'50px'}}><h1>READ MORE <FaArrowRight style={{marginLeft: '5px', paddingTop: '4px'}}/> </h1></div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>


              <section>
              <div className='services__third'>
               

               <div className='services__thirdCardContainer'>
                 <div className='services__thirdCardLeft' style={{width: '25%', margin: '10px'}}>
                 <img style={{position: 'absolute', marginTop: '-112px', marginLeft: '-20px', width: '100px'}} src={conversation} alt="" />
                   <div className='services__thirdCardLeftContent'>
                     <h1 className='services__thirdCardLeftTitle'>LinkedIn</h1>
                     <p className='services__thirdCardLeftSubTitle'>Learn more about us on LinkedIn.</p>
                     <div style={{marginTop: '20px'}}>
                     <h3 className='services__thirdCardBtn' style={{paddingTop: '50px', fontSize: '13px'}}>FOLLOW ACCENTURE TECHNOLOGY <FaArrowRight style={{marginLeft: '5px', paddingTop: '4px'}}/> </h3>
                     </div>
                   </div>
                 </div>
                 <div className='services__thirdCardRight' style={{width: '25%', margin: '10px'}}>
                   <img style={{position: 'absolute', marginTop: '-110px', marginLeft: '-20px', width: '100px'}} src={network} alt="" />
                 <div className='services__thirdCardRightContent'>
                     <h1 className='services__thirdCardRightTitle'>Twitter</h1>
                     <p className='services__thirdCardRightSubTitle'>Follow Accenture Technology on Twitter.</p>
                     <div style={{marginTop: '20px'}}>
                     <h1 className='services__thirdCardBtn' style={{paddingTop: '30px', fontSize: '13px'}}>@Acennturetech <FaArrowRight style={{marginLeft: '5px', paddingTop: '4px'}}/></h1>
                     </div>
                   </div>
                 </div>
                 <div className='services__thirdCardRight' style={{width: '25%', margin: '10px'}}>
                  
                  <img style={{position: 'absolute', marginTop: '-112px', marginLeft: '-20px', width: '100px'}} src={announce} alt=""  />
                 
                 <div className='services__thirdCardRightContent'>
                     <h1 className='services__thirdCardRightTitle'>Blog</h1>
                     <p className='services__thirdCardRightSubTitle'>Visit the software engineering blog.</p>
                     <div style={{marginTop: '20px'}}>
                     <h1 className='services__thirdCardBtn' style={{paddingTop: '30px', fontSize: '13px'}}>READ NOW <FaArrowRight style={{marginLeft: '5px', paddingTop: '4px'}}/></h1>
                     </div>
                   </div>
                 </div>
               </div>
             </div>
              </section>
            
        </section>
       </main>
    </div>
  )
}

export default Servisec