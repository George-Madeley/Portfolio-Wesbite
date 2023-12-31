import React from 'react'
import './Timeline.css'

import Card from './card/Card'

export default function Timeline() {
  return (
    <div className='timeline'>
        <Card
            time='2019 - Present'
            position='Software Engineer'
            company='Cognizant Technology Solutions'
            links={[
                {
                    name: 'Cognizant',
                    url: 'https://www.cognizant.com/'
                }
            ]}
            languages={[
                'ReactJS',
                'Redux',
                'HTML',
                'CSS',
                'JavaScript',
                'TypeScript',
                'SQL',
                'Git'
            ]}
        >
            <p>
                I am currently working as a Software Engineer at Cognizant Technology Solutions. I am working on a project for a large financial institution. I am responsible for developing and maintaining a web application that is used by thousands of users. I am also responsible for developing and maintaining a mobile application that is used by thousands of users. I am responsible for developing and maintaining a web application that is used by thousands of users.
            </p>
        </Card>
        <Card
            time='2018 - 2019'
            position='Software Engineer'
            company='Cognizant Technology Solutions'
            links={[
                {
                    name: 'Cognizant',
                    url: 'https://www.cognizant.com/'
                }
            ]}
            languages={[
                'ReactJS',
                'Redux',
                'HTML',
                'CSS',
                'JavaScript',
                'TypeScript',
                'SQL',
                'Git'
            ]}
        >
            <p>
                I worked as a Software Engineer at Cognizant Technology Solutions. I worked on a project for a large financial institution. I was responsible for developing and maintaining a web application that is used by thousands of users. I was also responsible for developing and maintaining a mobile application that is used by thousands of users. I was responsible for developing and maintaining a web application that is used by thousands of users.
            </p>
        </Card>
        <Card
            time='2017 - 2018'
            position='Software Engineer'
            company='Cognizant Technology Solutions'
            links={[
                {
                    name: 'Cognizant',
                    url: 'https://www.cognizant.com/'
                }
            ]}
            languages={[
                'ReactJS',
                'Redux',
                'HTML',
                'CSS',
                'JavaScript',
                'TypeScript',
                'SQL',
                'Git'
            ]}
        >
            <p>
                I worked as a Software Engineer at Cognizant Technology Solutions. I worked on a project for a large financial institution. I was responsible for developing and maintaining a web application that is used by thousands of users. I was also responsible for developing and maintaining a mobile application that is used by thousands of users. I was responsible for developing and maintaining a web application that is used by thousands of users.
            </p>
            <p>
                Anim nostrud consectetur fugiat nulla cillum consectetur consequat sunt dolor dolor. Dolor occaecat proident laborum fugiat excepteur dolore do. Enim irure labore Lorem ea.
            </p>
        </Card>
    </div>
  )
}
