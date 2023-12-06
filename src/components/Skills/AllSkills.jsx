import { useDispatch, useSelector } from 'react-redux';
import React, { useState } from 'react'
import { selectCurrentSkill, setSkill } from '../../Redux/SkillReducer';
import Skills from './Skills';
import WebSkills from './WebSkills';
import MachineSkills from './MachineSkills';
import DataScienceSkills from './DataScienceSkills';
import GameSkills from './GameSkills';
import colorSharp from '../../assest/images/color-sharp.png'
import { TfiArrowCircleLeft } from "react-icons/tfi";
// import { TfiArrowCircleLeft } from "react-bootstrap-icons";
import { BsArrowLeftCircle } from "react-icons/bs";
import AnthorSkills from './AnthorSkills';

const AllSkills = () => {
    const currentSkill = useSelector((state) => state.SkillReducer.currentSkill);
    const dispatch = useDispatch();

    const handleBack = () => {
        dispatch(setSkill('Skills'));
    };

    const renderSkillComponent = () => {
        switch (currentSkill) {
            case 'Skills':
                return <Skills title='SKILLS' describe="I enjoy diving into and learning new things. Here's a list of technologies I've worked with" />;
            case 'WebSkills':
                return <WebSkills describe="Web Development Skills" />;
            case 'MachineSkills':
                return <MachineSkills describe="Machine Learning Skills" />;
            case 'DataScienceSkills':
                return <DataScienceSkills describe="Data Science Skills" />;
            case 'GameSkills':
                return <GameSkills describe="Game Development Skills" />;
            case 'AnthorSkills':
                return <AnthorSkills describe = "Anthor Skills"/>
            default:
                return 'Skills';
        }
    };
    return (
        <section className="skill" id="skills">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="skill-bx wow zoomIn">
                            {currentSkill !== 'Skills' && (
                                <div className="back-arrow" onClick={handleBack}>
                                    <TfiArrowCircleLeft size={35} />
                                </div>)}
                            {renderSkillComponent()}
                        </div>
                    </div>
                </div>
            </div>
            <img className="background-image-left" src={colorSharp} alt="Image" />
        </section>)
}

export default AllSkills
