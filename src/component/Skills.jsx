import React, { useState } from "react";
import { SKILLS } from "../../public/data/Skilldata";
import { ICONS } from "../../public/data/icons";

// Convert percentage strings to integers
const processedSkills = SKILLS.map(category => ({
  ...category,
  Skills: category.Skills.map(skill => ({
    ...skill,
    percentage: parseInt(skill.percentage.replace('%', ''), 10)
  }))
}));

function Skills() {
  const [selectedCategory, setSelectedCategory] = useState(0);

  const handleCategoryClick = (index) => {
    setSelectedCategory(selectedCategory === index ? null : index);
  };

  return (
    <>
      <h1 className='h1'>Technical Skills</h1>
      <div className="skillContainer" id="skills">
        
        <div className="skillbox" data-aos="zoom-in-up" data-aos-duration="1500">
          {processedSkills.map((category, index) => (
            <div key={index} onClick={() => handleCategoryClick(index)} className="skillboxes">
              {React.createElement(ICONS[category.icon], { className: 'skillicons' })}
              <h2 style={{ cursor: 'pointer', lineHeight: '' }}>
                {category.title}
              </h2>
            </div>
          ))}
        </div>

        {/* Loop to display skills of the selected category */}
        {processedSkills.map((category, index) => (
          selectedCategory === index && (
            <div key={index} className="skillbox1" data-aos="zoom-in" data-aos-duration="1500">
              <h2 style={{ margin: 'px' }}>{category.title}</h2>
              {React.createElement(ICONS[category.icon], { className: 'skillicons' })}
              <hr style={{ border: '#4237a8 1px solid' }} />
              <ul>
                {category.Skills.map((skill, idx) => (
                  <li key={idx} style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                    <span style={{ flexGrow: 1 }}>{skill.skill}: {skill.percentage}%</span>
                    <input
                      type="range"
                      min="0"
                      max="100"
                      value={skill.percentage}
                      disabled
                      style={{ marginLeft: '10px', width: '60%' }}
                    />
                  </li>
                ))}
              </ul>
            </div>
          )
        ))}
      </div>
    </>
  );
}

export default Skills;
