import React, { Component } from 'react'
import Link from 'next/link';
import Timer from 'components/common/Timer'
import Service from 'components/common/Service'
import Work from 'components/common/Work'


const ServiceBlock = ({ timerColor, timerDuration})=>{
        return(
            <div>
                <section className="block-service presentation-serv">
                    <Link href='/#'>
                        <a className="block-service__top">
                            <span className="block-service__title">Презентация</span>
                            <p className="block-service__par">
                                Успей что-нибудь сделать или заказать пока не кочилось время на таймере снизу
                            </p>
                                <Timer size={1.8} timerColor={timerColor} timerDuration={timerDuration}/>
                            <p className="block-service__par">
                                Успей защитить диплом
                            </p>
                        </a>
                    </Link>
                    <div className="block-service__list list-big">
                        <Service serviceName="Реферат" />
                        <Service serviceName="Контрольная работа" cost={'2000'}/>
                        <Service serviceName="Чертежи (А0-А4)" cost={'2500'}/>
                    </div>
                </section>
                <section className="block-service course-work-serv">
                    <Work url="course" 
                          workName="Курсовая работа" 
                          workDescription="Написание курсовых работ на заказ по разным учебным дисциплинам и темам"
                          cost="от 1 500 ₽"
                          time="от 1 дня"
                    />

                    <div className="block-service__list list-big">
                        <Service serviceName="Презентация" />
                        <Service serviceName="Диплом" />
                        <Service serviceName="Диплом МВА" />
                    </div>   
		        </section>
                <section className="block-service diplom-work-serv">
                    <Work url="diplome"
                        workName="Дипломная работа"
                        workDescription="Поможем написать дипломную работу на заказ"
                        cost="от 1 500 ₽"
                        time="от 1 дня"
                    />
                    <div className="block-service__list list-big">
                        <Service serviceName="Презентация" />
                        <Service serviceName="Диплом" />
                        <Service serviceName="Диплом МВА" />
                    </div>
	            </section>
                <section className="block-service dissertation-serv">
                    <Work url="dissertation"
                        workName="Диссертация"
                        workDescription="Написание диссертаций специализированными докторами наук"
                        cost="от 1 500 ₽"
                        time="от 1 дня"
                    />

                    <div className="block-service__list list-big">
                        <Service serviceName="Кандидатская" cost="1000" time="за 1 день" linkAdress="candidate"/>
                        <Service serviceName="Докторская" cost="3500" time="от 10 дней"/>
                        <Service serviceName="Командирская" cost="4500" time="от 15 дней"/>
			        </div>

                    <div className="block-service__list list-medium">
                        <Service serviceName="Кандидатская" />
                        <Service serviceName="Докторская" />
                        <Service serviceName="Командирская" />
                        <Service serviceName="Кандидатская" />
                    </div>

                    <div className="block-service__list list-small">
                        <Service serviceName="Кандидатская"/>
                        <Service serviceName="Докторская" />
                        <Service serviceName="Командирская" />
                        <Service serviceName="Кандидатская" />
                        <Service serviceName="Докторская" />
                    </div>
                </section>

            </div>

        )
    }

export default ServiceBlock
