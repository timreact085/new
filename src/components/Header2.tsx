import React, {useEffect, useState} from 'react'
import '../styles/header2.scss'






const Header2 = () => {




  return (
   
   
	<div className="navbar">
        


       
        <ul>

			<li><a href="#" className="a_parent">
				<div className="wrap">
					<span className="icon">
						<i className="fas fa-home" aria-hidden="true"></i>
					</span>
					<span className="text">Home</span>
				</div>
			</a></li>
			
			<li><a href="#" className="a_parent">
				
					<span className="icon">
						<i className="fas fa-volleyball-ball" aria-hidden="true"></i>
					</span>
					<span className="text">Sports</span>
					</a>

				<div className="dd_menu">
					<ul>
						<li>
							<a href="#" className="dd_menu_a">
								<div className="wrap">
									<span className="icon">
									<i className="fas fa-running" aria-hidden="true"></i>
									</span>
									<span className="text">
									Running
									</span>
								</div>
							</a>
						</li>
						<li>
							<a href="#"  className="dd_menu_a">
								<div className="wrap">
									<span className="icon">
									<i className="fas fa-biking" aria-hidden="true"></i>
									</span>
									<span className="text">Biking</span>
								</div>
							</a>
							<div className="dd_submenu">
								<ul>
									<li>
										<a href="#">
											<div className="wrap">
												<span className="icon">
												<i className="fas fa-running" aria-hidden="true"></i>
												</span>
												<span className="text">
												Running
												</span>
											</div>
										</a>
									</li>
									<li>
										<a href="#">
											<div className="wrap">
												<span className="icon">
												<i className="fas fa-biking" aria-hidden="true"></i>
												</span>
												<span className="text">Biking</span>
											</div>
										</a>
									</li>
									<li>
										<a href="#">
											<div className="wrap">
											<span className="icon">
											<i className="far fa-futbol" aria-hidden="true"></i>
											</span>
											<span className="text">Football</span>
											</div>
										</a>
									</li>
									<li>
										<a href="#">
											<div className="wrap">
											<span className="icon">
											<i className="fas fa-swimmer" aria-hidden="true"></i>
											</span>
											<span className="text">Swimmer</span>
											</div>
										</a>
									</li>
								</ul>
							</div>
						</li>
						<li>
							<a href="#"  className="dd_menu_a">
								<div className="wrap">
								<span className="icon">
								<i className="far fa-futbol" aria-hidden="true"></i>
								</span>
								<span className="text">Football</span>
								</div>
							</a>
						</li>
						<li>
							<a href="#"  className="dd_menu_a">
								<div className="wrap">
								<span className="icon">
								<i className="fas fa-swimmer" aria-hidden="true"></i>
								</span>
								<span className="text">Swimmer</span>
								</div>
							</a>
						</li>
					</ul>
			
				</div>
				
			</li>
			<li><a href="#" className="a_parent">
				<div className="wrap">
					<span className="icon">
					<i className="fas fa-utensils" aria-hidden="true"></i>
					</span>
					<span className="text">Food</span>
				</div>
				</a>
				<div className="dd_menu">
					<ul>
						<li>
							<a href="#" className="dd_menu_a">
								<div className="wrap">
									<span className="icon">
									<i className="fas fa-running" aria-hidden="true"></i>
									</span>
									<span className="text">
									Running
									</span>
								</div>
							</a>
							<div className="dd_submenu">
								<ul>
									<li>
										<a href="#">
											<div className="wrap">
												<span className="icon">
												<i className="fas fa-running" aria-hidden="true"></i>
												</span>
												<span className="text">
												Running
												</span>
											</div>
										</a>
									</li>
									<li>
										<a href="#">
											<div className="wrap">
												<span className="icon">
												<i className="fas fa-biking" aria-hidden="true"></i>
												</span>
												<span className="text">Biking</span>
											</div>
										</a>
									</li>
									<li>
										<a href="#">
											<div className="wrap">
											<span className="icon">
											<i className="far fa-futbol" aria-hidden="true"></i>
											</span>
											<span className="text">Football</span>
											</div>
										</a>
									</li>
									<li>
										<a href="#">
											<div className="wrap">
											<span className="icon">
											<i className="fas fa-swimmer" aria-hidden="true"></i>
											</span>
											<span className="text">Swimmer</span>
											</div>
										</a>
									</li>
								</ul>
							</div>
						</li>
						<li>
							<a href="#" className="dd_menu_a">
								<div className="wrap">
									<span className="icon">
									<i className="fas fa-biking" aria-hidden="true"></i>
									</span>
									<span className="text">Biking</span>
								</div>
							</a>
						</li>
						<li>
							<a href="#" className="dd_menu_a">
								<div className="wrap">
								<span className="icon">
								<i className="far fa-futbol" aria-hidden="true"></i>
								</span>
								<span className="text">Football</span>
								</div>
							</a>
						</li>
						<li>
							<a href="#" className="dd_menu_a">
								<div className="wrap">
								<span className="icon">
								<i className="fas fa-swimmer" aria-hidden="true"></i>
								</span>
								<span className="text">Swimmer</span>
								</div>
							</a>
							<div className="dd_submenu">
								<ul>
									<li>
										<a href="#">
											<div className="wrap">
												<span className="icon">
												<i className="fas fa-running" aria-hidden="true"></i>
												</span>
												<span className="text">
												Running
												</span>
											</div>
										</a>
									</li>
									<li>
										<a href="#">
											<div className="wrap">
												<span className="icon">
												<i className="fas fa-biking" aria-hidden="true"></i>
												</span>
												<span className="text">Biking</span>
											</div>
										</a>
									</li>
									<li>
										<a href="#">
											<div className="wrap">
											<span className="icon">
											<i className="far fa-futbol" aria-hidden="true"></i>
											</span>
											<span className="text">Football</span>
											</div>
										</a>
									</li>
									<li>
										<a href="#">
											<div className="wrap">
											<span className="icon">
											<i className="fas fa-swimmer" aria-hidden="true"></i>
											</span>
											<span className="text">Swimmer</span>
											</div>
										</a>
									</li>
								</ul>
							</div>
						</li>
					</ul>
				</div>
			</li>
			<li><a href="#" className="a_parent">
				<div className="wrap">
					<span className="icon">
					<i className="fas fa-paper-plane" aria-hidden="true"></i>
					</span>
					<span className="text">Items</span>
				</div>
			</a></li>
			<li><a href="#" className="a_parent">
				<div className="wrap">
					<span className="icon">
					<i className="fas fa-cog" aria-hidden="true"></i>
					</span>
					<span className="text">Settings</span>
				</div>
			</a></li>
			</ul>
        
        <div className='boxAva'>
            <div>ava</div>
            <div>menu</div>
        </div>
	</div>


  )
}

export default Header2