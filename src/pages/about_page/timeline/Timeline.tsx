import React, { useEffect } from 'react'
import './Timeline.css'

import Card from './card/Card'

import json from '../../../data/experience.real.json'

export default function Timeline() {

    const [experiences, setExperiences] = React.useState<any[]>([])

    useEffect(() => {
        // sort experience by the time field then reverse it so that the most recent experience is first
        const sortedExperiences = json.experiences.sort((a, b) => {
            return a.time < b.time ? 1 : -1
        })
        setExperiences(sortedExperiences)
    }, [experiences])

    return (
        <div className='timeline'>
            {
                experiences.map((item, index) => {
                    return (
                        <Card
                            key={index}
                            time={item.timePeriod}
                            position={item.position}
                            company={item.company}
                            companyLink={item.companyLink}
                            links={item.links}
                            languages={item.languages}
                        >
                            <div className='paragraphs'>
                                {
                                    item.description.map((paragraph: string, index: number) => {
                                        return (
                                            <p key={index}>
                                                {paragraph}
                                            </p>
                                        )
                                    })
                                }
                            </div>
                        </Card>
                    )
                })
            }
        </div>
    )
}
