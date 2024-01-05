import React, { useEffect } from 'react'
import './Timeline.css'

import Card from './card/Card'

export default function Timeline(props: any) {

    const [experiences, setExperiences] = React.useState<any[]>([])

    useEffect(() => {
        // sort experience by the time field then reverse it so that the most recent experience is first
        const sortedExperiences = props.content.sort((a: any, b: any) => {
            if (a.endTime === b.endTime) {
                return a.startTime < b.startTime ? 1 : -1
            }
            return a.endTime < b.endTime ? 1 : -1
        })
        setExperiences(sortedExperiences)
    }, [props.content])

    return (
        <div className='timeline'>
            {
                experiences.map((item, index) => {
                    return (
                        <Card
                            key={index}
                            id={index}
                            time={item.timePeriod}
                            position={item.position}
                            company={item.company}
                            companyLink={item.companyLink}
                            links={item.links}
                            languages={item.languages}
                        >
                            {
                                item.description.map((paragraph: string, index: number) => {
                                    return (
                                        <p key={index}>
                                            {paragraph}
                                        </p>
                                    )
                                })
                            }
                        </Card>
                    )
                })
            }
        </div>
    )
}
