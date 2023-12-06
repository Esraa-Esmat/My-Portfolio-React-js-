import React from 'react'
import { GameDevelopmentSkills } from '../Global/Data'

const GameSkills = ({ describe }) => {
  return (
    <section className="skill" id="skills">
    <div className="container">
        <div className="row">
            <div className="col-12">
                <div className="skill-bx">
                    <h4>{describe} :</h4>
                    <div className="row iconsSkillsDis d-flex justify-content-center align-items-center">
                        {GameDevelopmentSkills?.map((skill) => (
                            <div key={skill?.id} className="col-6 col-md-3 mt-4">
                                <div className="p-4 border rounded text-center skill-icon">
                                    {skill?.icon}
                                    <h6 className="fw-bold mt-2">{skill?.title}</h6>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>   )
}

export default GameSkills